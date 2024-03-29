const { Product } = require("../models");
//update products-seeds value
const productData = [
  {
    product_name: "Plain T-Shirt",
    price: 13.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: "Running Sneakers",
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: "Branded Baseball Hat",
    price: 20.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: "Top 40 Music Compilation Vinyl Record",
    price: 13.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: "Cargo Shorts",
    price: 39.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
