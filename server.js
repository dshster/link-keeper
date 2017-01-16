const express = require('express');
const bodyParser = require('body-parser');
const sqlite = require('sql.js');
const fs = require('fs');

const dbFileName = './db/links-db.db';
const filebuffer = fs.readFileSync(dbFileName);
const db = new sqlite.Database(filebuffer);

const app = express();

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.json());

app.get('/api/links', (req, res) => {
  const result = db.exec('SELECT * FROM `links` ORDER BY `id` ASC;');

  if (result[0]) {
    res.json(result[0].values.map(value => {
      const row = {};

      result[0].columns.forEach((column, index) => {
        row[column] = value[index];
      });

      return row;
    }))
  }
});

app.put('/api/link', (req, res) => {
  const values = {
    ':id': null,
    ':caption': req.body.caption,
    ':url': req.body.url,
    ':description': req.body.description,
  };

  db.run('INSERT INTO links VALUES (:id, :caption, :url, :description);', values);

  const buffer = new Buffer(db.export());

  const fd = fs.openSync(dbFileName, 'w');

  fs.write(fd, buffer, 0, buffer.length, 0, function(error, written) {
    res.send(JSON.stringify({ error, written }));
  });

  db.close();
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
