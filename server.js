const express = require('express');
const bodyParser = require('body-parser');
const sqlite = require('sql.js');
const fs = require('fs');

const dbFileName = './db/links-db.db';
const filebuffer = fs.readFileSync(dbFileName);
const db = new sqlite.Database(filebuffer);

const app = express();
const jsonParser = bodyParser.json();

app.set('port', (process.env.PORT || 3001));

app.get('/api/links', (request, response) => {
  const result = db.exec('SELECT * FROM `links` ORDER BY `id` ASC;');

  if (result[0]) {
    response.json(result[0].values.map(value => {
      const row = {};

      result[0].columns.forEach((column, index) => {
        row[column] = value[index];
      });

      return row;
    }));
  }
});

app.put('/api/link', jsonParser, (request, response) => {
  if (request.body) {
    const values = {
      ':id': null,
      ':caption': request.body.caption,
      ':url': request.body.url,
      ':description': request.body.description,
    };

    db.run('INSERT INTO links VALUES (:id, :caption, :url, :description);', values);

    const buffer = new Buffer(db.export());

    const fd = fs.openSync(dbFileName, 'w');

    fs.write(fd, buffer, 0, buffer.length, 0, (error, written) => {
      response.send(JSON.stringify({ error, written }));
    });
  } else {
    response.send(JSON.stringify({ error: true }));
  }
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
