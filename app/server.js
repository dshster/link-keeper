const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const shortID = require('mongodb-short-id');

const app = express();
const router = express.Router();

mongoose.Promise = global.Promise;

const Link = require('./models/link');

router.route('/links')
  .get((request, response) => {
    const { limit = 5, skip = 0 } = request.query;

    Link.find({})
      .sort({ datetime: 'descending' })
      .skip(Number(skip))
      .limit(Number(limit))
      .exec((error, links) => {
        response.json({ links, count: links.length })
      });
  })
  .post((request, response) => {
    if (Object.keys(request.body).length) {
      const { caption, href, tags, description } = request.body;
      const link = new Link({ card: { caption, href, description }, tags });

      link.shortId = shortID.objectIDtoShort(link._id);

      const validate = link.validateSync();

      if (validate) {
        response.json({ error: true, message: validate.errors });
      } else {
        link.save(error => {
          if (error) throw error;
          response.json({ link });
        });
      }
    } else {
      response.json({ error: true });
    }
  });

router.route('/links/:shortId')
  .get((request, response) => {
    const { shortId } = request.params;

    try {
      const id = shortID.shortToObjectID(shortId);

      Link.findById(id, (error, note) => {
        response.json({ note });
      });
    } catch (error) {
      response.json({ error: true });
    }
  });

router.route('/tags')
  .get((request, response) => {
    Link.find().distinct('tags')
      .exec((error, tags) => {
        const filteredTags = tags.filter(tag => tag);

        response.json({ tags: filteredTags, count: filteredTags.length });
      });
  });

router.route('/tags/:tag')
  .get((request, response) => {
    const { tag } = request.params;

    Link.find({ tags: tag })
      .sort({ datetime: 'descending' })
      .exec((error, links) => {
        response.json({ links, count: links.length });
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
