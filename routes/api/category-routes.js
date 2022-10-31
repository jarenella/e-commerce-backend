const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const allCategories = await Category.findAll();
  // include its associated Products
  const associatedProducts = await Product.findAll();
  // send response
  res.status(200).json(allCategories);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const category = await Category.findAll({
    where: {
      category_id: req.params.id
    }
  });
  // include its associated Products
  const associatedProducts = await Product.findAll({
    where: {
      category_id: req.params.id
    }
  })
  //send response
  res.status(200).json(category);
});

router.post('/', (req, res) => {
  // create a new category
  const newCategory = req.body.category_name;
  // add category to the database
  Category.create({ category_name: newCategory })
  //send response to close connection
  res.send("Category successfully sent");
});

router.put('/:id', (req, res) => {
  // saving user's selected new category name to a variable
  const newName = req.body.category_name;
  // update a category by its `id` value
  Category.update({category_name: newName}, {
    where: {
      category_id: req.params.id
    }
  })
  //send response to close connection
  res.send("Request successfully recieved");
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      category_id: req.params.id
    }
  })
  //send response to close connection
  res.send("Request successfully recieved");
});

module.exports = router;
