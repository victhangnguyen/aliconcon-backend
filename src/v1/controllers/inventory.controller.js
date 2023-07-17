"use strict";

const { addInventory } = require("../services/inventory.service");

var that = (module.exports = {
  //! CREATE INVENTORY
  addInventory: async (req, res, next) => {
    try {
      const { inventory } = req.body;
      return res.json({
        elements: await addInventory(inventory),
      });
    } catch (error) {
      next(error);
    }
  },
});
