"use strict";
const { _product } = require("../models/product.model");

var that = (module.exports = {
  //! CREATE
  addProduct: async (product) => {
    return await _product.create(product);
  },
});
