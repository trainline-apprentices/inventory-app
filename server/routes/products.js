const express = require("express");
const router = express.Router();
const products = require("../models/Product");
const { Product } = require("../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const products = await Product.findByPk(req.params.id);
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get("/categories", async (req, res, next) => {
  try {
    const uniqueCategories = await Product.findAll({
      attributes: ["category"],
      group: ["category"],
    });

    const categories = uniqueCategories.map((item) => item.category);
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get("/category/:category", async (req, res, next) => {
  try {
    const category = req.params.category;
    const productsByCategory = await Product.findAll({
      where: { category: category },
    });
    res.json(productsByCategory);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const products = await Product.findAll({
      limit: limit,
    });
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  const newProduct = await Product.create(req.body);
  //   const products = await Product.findAll({})
  res.json(newProduct);
});

router.put("/:id", async (req, res) => {
  const updated = await Product.update(req.body, {
    where: { id: req.params.id },
  });
  const Product = await Product.findByPk(req.params.id);
  res.json(Product);
});

router.patch("/:id", async (req, res) => {
  const updated = await Product.update(req.body, {
    where: { id: req.params.id },
  });
  const Product = await Product.findByPk(req.params.id);
  res.json(Product);
});

router.delete("/:id", async (req, res) => {
  const deleted = await Product.destroy({ where: { id: req.params.id } });
  // const result = Product.findAll({});
  res.json(deleted); // may need to be changed to result.
});

module.exports = router;
