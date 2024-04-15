let Category = require("../model/categoryModel");

let createCategoryController = async (req, res) => {
  const { name, ownerId } = req.body;
  let existingName = await Category.findOne({ name: name });
  if (existingName) {
    res.send({ error: "already Exists" });
  } else {
    const cat = new Category({
      name: name,
      ownerId: ownerId,
    });
    cat.save();
    res.send({ success: "Category created. wait for admin approval" });
  }
};

module.exports = createCategoryController;
