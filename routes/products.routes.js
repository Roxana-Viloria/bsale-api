var express = require('express');
var router = express.Router();
const product = require("../controllers/product.controller.js");
    
router.get("/", product.findAll);
    
router.get("/:id", product.findOne);

module.exports = router