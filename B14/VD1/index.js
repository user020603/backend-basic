const express = require("express");
const app = express();
const mongoose = require('mongoose');
const port = 4000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/products-tets', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB...');
}).catch(err => {
  console.error('Connection error:', err);
});

// Define the Product schema
const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  thumbnail: String,
  brand: String
});

// Define the Cart schema
const cartSchema = new mongoose.Schema({
  title: String,
  price: Number
});

// Define the User schema
const userSchema = new mongoose.Schema({
  id: Number,
  firstName: String, 
  lastName: String, 
  maidenName: String, 
  age: Number
});

// Create models from the schemas
const Product = mongoose.model('Product', productSchema);
const Cart = mongoose.model('Cart', cartSchema);
const User = mongoose.model(`User`, userSchema);

// Set view engine and static folder
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

// Products route
app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("./Mixins/products.pug", { products }); // Pass products to the Pug template
});

// Cart route
app.get("/cart", async (req, res) => {
  const cartItems = await Cart.find({});
  console.log(cartItems);
  // You might want to render a cart page with cartItems here
});

// User route
app.get("/user", async (req, res) => {
  const userItems = await User.find({});
  console.log(userItems);
})

// Other routes
app.get("/blog", (req, res) => {
  res.send("<h1>Trang danh sách bài viết</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Trang liên hệ</h1>");
});

app.get("/lintinh", (req, res) => {
  res.render("./Includes/about.pug");
});

app.get("/users", (req, res) => {
  res.render('user/index');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
