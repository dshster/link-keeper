const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

mongoose.Promise = global.Promise;

const Link = require('./models/link');

router.route('/links')
  .get((request, response) => {
    const { limit = 5, skip = 0 } = request.query;

    Link.find({})
      .sort({ datetime: 'descending' })
      .skip(skip)
      .limit(limit)
      .exec((error, links) => {
        response.json({ links, count: links.length })
      });
  })
  .post((request, response) => {
    if (Object.keys(request.body).length) {
      const { caption, href, description } = request.body;
      const link = new Link({ card: { caption, href, description } });
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
        response.json({ links, count: links.length })
      });
  });

router.use((request, response, next) => {
  const { method, url, params } = request;

  console.log(method, url, params);
  next();
});

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

app.listen(app.get('port'), () => {
  mongoose.connect('mongodb://localhost:27017/links');
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

module.exports = app;
