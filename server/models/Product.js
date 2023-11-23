const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  // id, title, price, description, category, image, and rating.
  id: Sequelize.STRING,
  title: Sequelize.STRING,
  price: Sequelize.INTEGER,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  image: Sequelize.TEXT,
  rating: Sequelize.INTEGER,
});

module.exports = Product;
