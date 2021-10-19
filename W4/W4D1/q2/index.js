const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false});

const date = new Date();
let hour = date.getHours();

//For testing hours
hour =7;
//hour =20;
let css = (hour < 6 || hour > 18) ? "css/night.css" : "css/day.css"


app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'salt for cookie signing',
}));

app.use(function (req, res, next) {
    if (!req.session.name) {
      req.session.name = {}; // put name object into session
    }
    if (!req.session.age) {
        req.session.age = {}; // put age object into session
    }
  
    next();
  });

app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('/', (req, res) => {
 res.send(`
<!DOCTYPE html>
<html lang='en'>
<head>
<title>Express JS</title>
<meta charset='utf-8' />
<link rel="stylesheet" href=${css}>
</head>
    <body>
        <form action='/result' method="post">
            <label for'name'>Name</label>
            <input name='name'/>
            <label for'age'>Age</label>
            <input name='age'/>
            <input type='submit' value='Submit Query'>
        </form>
    </body>
</html
 `);
});

app.post('/result', urlencodedParser, (req, res) => {
    req.session.name = req.body.name;
    req.session.age = req.body.age;
    res.redirect(303, `/output`)
});

app.get('/output', (req, res) => {
    
    let name = req.session.name;
    let age = req.session.age;
 if (!name) {
 name = "person";
 }
 if (!age) {
    age = 24;
    }
 res.send(`Welcome ${name}, a ${age} years old person`);
req.send(r);
});
app.listen(3000);
