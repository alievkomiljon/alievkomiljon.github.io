const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

const urlencodedParser = bodyParser.urlencoded({ extended: false});

const date = new Date();
 let hour = date.getHours;
//To test hours
//hour =7;
//hour =20;
 let css = (hour < 6 || hour > 18) ? "css/night.css" : "css/day.css"



app.get('/', (req, res) => {
   res.render("form",{
      css: css,
   });
 
});

app.post('/result', urlencodedParser, (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
 if (!name) {
 name = "person";
 }
 if (!age) {
    age = 24;
    }
    res.render("response",{
       name:name,
       age: age,
       css: css,
    })
//  res.send(`Welcome ${name}, a ${age} years old person`);
});
app.listen(3000);
