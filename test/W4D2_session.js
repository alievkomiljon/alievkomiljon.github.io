const path = require('path');
const express = require('express');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/css', express.static(path.join(__dirname, "css")));
app.use('/images', express.static(path.join(__dirname, "images")));

app.use(express.urlencoded({extended: false}));
app.use(session({
    resave: false, 
    saveUninitialized: false,
    secret: 'salt for cookie signing', 
}));
app.use((req, res, next) => {
    if (!req.session.list) {
        req.session.list = [];
    }
    next();
});

app.get('/', (req, res) => {
  res.locals.list = req.session.list;
  res.render('list');
});

app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'form.html'));
});

app.post('/add', (req, res) => {
  req.session.list.push(req.body.item);
  res.redirect(303, '/');
});

app.listen(3000);