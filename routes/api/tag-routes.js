const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const tags = await Tag.findAll()
  // be sure to include its associated Product data
  // send response
  res.status(200).json(tags);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const tag = await Tag.findAll({
    where: {
      id: req.params.id
    }
  })
  // be sure to include its associated Product data
  // send response
  res.status(200).json(tag)
});

router.post('/', (req, res) => {
  // create a new tag
  const newTag = req.body.tag_name;
  Tag.create({tag_name: newTag})
  //send resposen
  res.send("Successfully recieved new tag request");
});

router.put('/:id', (req, res) => {
  const newName = req.body.tag_name;
  // update a tag's name by its `id` value
  Tag.update({tag_name: newName}, {
    where: {
      id: req.params.id
    }
  })
  //send response
  res.send("update request recieved");
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  //send response
  res.send("delete request recieved");
});

module.exports = router;
