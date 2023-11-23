const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const Product = require("./Product");

module.exports = {
  db: sequelize,
  Product,
};
