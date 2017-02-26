const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const shortID = require('mongodb-short-id');

const app = express();
const router = express.Router();

mongoose.Promise = global.Promise;

const Note = require('./models/note');

router.route('/notes')
  .get((request, response) => {
    const { limit = 5, skip = 0 } = request.query;

    Note.find({})
      .sort({ datetime: 'descending' })
      .skip(Number(skip))
      .limit(Number(limit))
      .exec((error, notes) => {
        response.json({ notes, count: notes.length })
      });
  })
  .post((request, response) => {
    if (Object.keys(request.body).length) {
      const { caption, href, tags, description } = request.body;
      const note = new Note({ card: { caption, href, description }, tags });

      note.shortId = shortID.objectIDtoShort(note._id);

      const validate = note.validateSync();

      if (validate) {
        response.json({ error: true, message: validate.errors });
      } else {
        note.save(error => {
          if (error) throw error;
          response.json({ note });
        });
      }
    } else {
      response.json({ error: true });
    }
  });

router.route('/notes/:shortId')
  .get((request, response) => {
    const { shortId } = request.params;

    try {
      const id = shortID.shortToObjectID(shortId);

      Note.findById(id, (error, note) => {
        response.json({ note });
      });
    } catch (error) {
      response.json({ error: true });
    }
  });

router.route('/tags')
  .get((request, response) => {
    Note.find().distinct('tags')
      .exec((error, tags) => {
        const filteredTags = tags.filter(tag => tag);

        response.json({ tags: filteredTags, count: filteredTags.length });
      });
  });

router.route('/tags/:tag')
  .get((request, response) => {
    const { tag } = request.params;

    Note.find({ tags: tag })
      .sort({ datetime: 'descending' })
      .exec((error, notes) => {
        response.json({ notes, count: notes.length });
      });
  });

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use('/api', router);

app.listen(app.get('port'), () => {
  mongoose.connect('mongodb://localhost:27017/link-keeper');
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

module.exports = app;
