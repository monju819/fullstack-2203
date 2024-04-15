const express = require("express");
const createCategoryController = require("../../controllers/createCategoryController");
const _ = express.Router();
_.post("/createcategory", createCategoryController);

module.exports = _;
