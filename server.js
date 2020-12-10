const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");


const app = express();
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors());
var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


//connect instance take 5 arg, connectstring and option
var mongoVanilla = "mongodb://localhost:27017/react-shopping-cart-db";
mongoose.connect(mongoVanilla, {
            authSource: "admin",
            user: 'root', 
            pass: '@Dev1234',
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }, function(err) {
            if (err) throw err;
        }
    );

//mongo model take 2 args, name of collection and list of feild
const Product = mongoose.model(
    "products", 
    new mongoose.Schema({
        _id: { "type": String, "default": shortid.generate },
        title: String,
        description: String,
        image: String,
        price: Number,
        availableSizes: [String]
    })
);
// app.get("/api/products", cors(corsOptions), async (req, res) => {
app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products);
    } catch (error) {
        console.log(error)
    }
    
});

app.post("/api/products", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.send(savedProduct);
    } catch (error) {
        console.log(error)
    }
});

app.delete("/api/products/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.send(deletedProduct);
    } catch (error) {
        console.log(error)
    }
    
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));
