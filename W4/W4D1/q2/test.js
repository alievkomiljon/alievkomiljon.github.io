const express = require('express');
const parseurl = require('parseurl')
const session = require('express-session')
const app = express();

app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'salt for cookie signing',
}));

app.listen(3000, () => {
    console.log('Your server is running on 3000');
});

app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {}; // put views object into session
  }

  // get the url pathname
  var pathname = parseurl(req).pathname;

  // count the views for the given url
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

  next();
});

app.get('/foo', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times');
});

app.get('/bar', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times');
});

app.get('/', (req,res) => {
    res.send("<a href='foo'>foo</a> <a href='bar'>bar</a>");
});
