module.exports = app => {
    const product = require("../controllers/product.controller.js");
    var router = require("express").Router();
    
    router.get("/", product.findAll);
    
    router.get("/:id", product.findOne);
   
    app.use('/api/product', router);
  };