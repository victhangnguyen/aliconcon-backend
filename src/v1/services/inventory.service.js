"use strict";
const { _inventory } = require("../models/inventory.model");

var that = (module.exports = {
  // CREATE
  addInventory: async (inventory) => {
    return await _inventory.create(inventory);
  },
});
