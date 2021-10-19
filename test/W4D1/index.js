const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.urlencoded({ extended: false }));

let unorderedlist = [];

app.get('/', (req, res) => {
  res.locals.unorderedlist = unorderedlist;
  res.render("list");
});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'form.html'));
});

app.post('/add', (req, res) => {
    unorderedlist.push(req.body.newItem);
    res.redirect(303, "/");
});

app.listen(3000);
