const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'it is my secret'
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use((req, res, next) => {
    if(!req.session.name){
        req.session.name = '';
    }

    next();
});

app.get('/', (req, res) => {
    if(req.session.name !== ''){
        res.render('welcome', {msg: `Welcome ${req.session.name}`})
    }
    else{
        res.redirect(303, '/login');
    }
});

app.get('/login', (req, res) => {
    if(req.session.name)
        res.redirect(303, '/');
    else{
        res.render('login');
    }
});

app.post('/login', (req, res) => {
    req.session.name = req.body.name;
    res.redirect(303, '/');
});

app.listen(3000, () => console.log("Server running at 3000."));