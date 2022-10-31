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
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
