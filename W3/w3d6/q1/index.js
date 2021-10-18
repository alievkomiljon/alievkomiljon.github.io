const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
 const date = new Date();

 let hour = date.getHours;

//To test hours
//hour =7;
//hour =20;

 let css = (hour < 6 || hour > 18) ? "css/night.css" : "css/day.css"

 res.render("index", {
 time: date.toTimeString(),
 css: css 
 });
});
app.listen(3000);
