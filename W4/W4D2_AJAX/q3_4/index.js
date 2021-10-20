const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const ShoppingCart = require("./model/cart");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, "css")));
app.use('/images', express.static(path.join(__dirname, "images")));
app.use('/js', express.static(path.join(__dirname, "js")));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(session({
   resave: false,
   saveUninitialized: false,
   secret: 'salt for cookie signing',
}));
app.use(function (req, res, next) {
   if (!req.session.shoppingCartList) {
     req.session.shoppingCartList = []; // put name object into session
   }
   next();
 });
 //let shoppingCartList = []; //instead of this session is used

 let products = [
    {id: 1, name: 'Dell', price: '1800', image: "images/dell.png", description: 'Dell XPS 13, 11th Generation Intel® Core™ i5-1135G7 Processor (8MB Cache, up to 4.2 GHz)'},
    {id: 2, name: 'HP', price: '1400', image: "images/hp.png", description: 'HP OMEN 15 Gaming & Entertainment Laptop (AMD Ryzen 9 5900HX 8-Core, 32GB RAM, 512GB PCIe SSD, 15.6" Full HD (1920x1080), NVIDIA RTX 3070'},
    {id: 3, name: 'MSI', price: '3100', image: "images/msi.png", description: 'MSI GE Series GE76 Raider 11UH-245 17.3" 360 Hz IPS Intel Core i7 11th Gen 11800H (2.30 GHz) NVIDIA GeForce RTX 3080 Laptop GPU 32 GB Memory 1 TB NVMe SSD'},
    {id: 4, name: 'Acer', price: '1000', image: "images/acer.png", description: 'Acer Aspire 5 17.3" FHD Laptop, 16GB RAM, 512GB SSD (Silver)'},
 ];


app.get('/', (req, res) => {
   res.render("shop",{
      css: "css/shop.css",
      list: products,
   });
});

app.get('/product/:id', (req, res) => {
   res.render("product",{
      css: "../css/product.css",
      item: products.find(p => p.id == req.params.id),
   });
});

app.get('/cart', (req, res) => {
   res.render("shoppingcart",{
      css: "css/shoppingCartList.css",
      shopList: req.session.shoppingCartList || [],
   });
});

app.post('/addToCart', (req, res) => {
   let data = JSON.parse(req.body.data); 
   let name = data.name;
    let price = data.price;
    if(req.session.shoppingCartList.length < 1){
      req.session.shoppingCartList.push(new ShoppingCart(name, price));
    }
    else if(req.session.shoppingCartList.filter(c => c._key == name).length < 1){
      req.session.shoppingCartList.push(new ShoppingCart(name, price));
    } else{
       let temp = req.session.shoppingCartList;
      temp.find(c => c._key == name)._value.quantity++;
    }
    res.write(JSON.stringify({result: "success"}));
    res.status(200);
    res.end();
});


app.listen(3000);
