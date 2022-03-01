const category = require("../controllers/category.controller.js");
const router = require("express").Router();

router.get("/", category.findAll);
    
router.get("/:id", category.findOne);

module.exports = router
