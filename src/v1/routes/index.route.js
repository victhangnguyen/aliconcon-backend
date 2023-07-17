const express = require("express");
const router = express.Router();

//! Controllers
const { verifyOtp } = require("../controllers/user.controller");

//! Controller Ecommerce
const { addProduct } = require("../controllers/product.controller");
const { addInventory } = require("../controllers/inventory.controller");

//! Route Ecommerce
router.post("/v1/ecommerce/products", addProduct);
router.post("/v1/ecommerce/inventories", addInventory);
