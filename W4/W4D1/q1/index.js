const express = require('express');
const cookieparser = require('cookie-parser');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/css', express.static(path.join(__dirname, "css")));

app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());


app.get('/', (req, res) => {
    res.locals = {
        cookies : req.cookies,
    }
    res.render("addCookie", {
        cookies: res.locals.cookies,
    });
});



app.post('/', (req, res) => {
    res.cookie(req.body.key, req.body.value);
    res.redirect(303, "/");
});

app.listen(3000);
