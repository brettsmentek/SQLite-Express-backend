var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data/test.db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/form1', function(req, res) {
  res.redirect('http://phlprjindex01:9001/index.html');
  var body = req.body;
  console.log(body);
  db.serialize(function() {
    var headers = [];
    var row = [];
    for (var i in body) {
      headers.push(i);
      row.push(body[i]);
    }
    db.get("SELECT * FROM sqlite_master WHERE type='table' AND name='form1';", function(err, res) {
      console.log(res);
      if (res === undefined) {
        console.log("creating table")
        createStr = 'CREATE TABLE form1 (' + headers.join() + ')';
        db.run(createStr);
      }
    });

    var marks = [];
    for (var i = 0; i < headers.length; i++) {
      // var updateCols = 'ALTER TABLE form1 ADD COLUMN ' + headers[i];
      marks.push('?');
      // var update = db.prepare(updateCols);
      // update.run();
    }

    var queryStr = 'INSERT INTO form1 (' + headers + ') VALUES ('+ marks.join() +')';
    var stmt = db.prepare(queryStr);
    console.log(headers.join());
    console.log(row.join());
    stmt.run(row);
    stmt.finalize();
  });

});

app.post('/form3', function(req, res) {
  res.redirect('http://phlprjindex01:9001/form3.html');
  var body = req.body;
  console.log(body);
  db.serialize(function() {
    var headers = [];
    var row = [];
    for (var i in body) {
      headers.push(i);
      row.push(body[i]);
    }
    db.get("SELECT * FROM sqlite_master WHERE type='table' AND name='form3';", function(err, res) {
      console.log(res);
      if (res === undefined) {
        console.log("creating table")
        createStr = 'CREATE TABLE form3 (' + headers.join() + ')';
        db.run(createStr);
      }
    });

    var marks = [];
    for (var i = 0; i < headers.length; i++) {
      // var updateCols = 'ALTER TABLE form1 ADD COLUMN ' + headers[i];
      marks.push('?');
      // var update = db.prepare(updateCols);
      // update.run();
    }

    var queryStr = 'INSERT INTO form3 (' + headers + ') VALUES ('+ marks.join() +')';
    var stmt = db.prepare(queryStr);
    console.log(headers.join());
    console.log(row.join());
    stmt.run(row);
    stmt.finalize();
  });

});

app.listen(9090, function() {
  console.log('Server running at http://127.0.0.1:9090/');
});