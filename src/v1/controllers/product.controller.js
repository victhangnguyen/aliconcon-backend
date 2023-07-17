"use strict";

const { addProduct } = require("../services/product.service");

var that = (module.exports = {
  //! CREATE PRODUCT
  addProduct: async (req, res, next) => {
    try {
      const { product } = req.body;
      return res.json({
        elements: await addProduct(product),
      });
    } catch (error) {
      next(error);
    }
  },
});
