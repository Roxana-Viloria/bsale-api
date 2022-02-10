module.exports = app => {
    const category = require("../controllers/category.controller.js");
    var router = require("express").Router();
    
    router.get("/", category.findAll);
    
    router.get("/:id", category.findOne);
   
    app.use('/api/category', router);
  };