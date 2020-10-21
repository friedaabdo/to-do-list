const Category = require("../models/category");
const List = require('../models/list')
const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
    res.json(await Category.find({}));
  });

  router.get("/:category", async (req, res) => {
    const category = await List.findOne({category: req.params.category});
    res.json({
      status: 200,
      data: category,
    });
  });

  router.post("/", async (req, res) => {
    const category = await Category.create(req.body)
    res.json(
       { status: 200,
        msg: "data received",
        data: category}
    );
  });

  router.put("/:category", async (req, res) => {
    const category = await Category.findOneAndUpdate({category:req.params.category}, req.body, { new: true })
    res.json({
        status: 200,
        msg: "data updated",
        data: category
    });
  });

  router.delete("/:category", async (req, res) => {
    const category = await Category.findOneAndDelete({category:req.params.category})
    res.json({
        status: 200,
        msg: "data deleted",
        data: category
    });
  });

  router.put('/:category/addList/:listId', async (req,res) => {
    // console.log('owner -- put',req.params)

    const list = await List.findById(req.params.listId)
    const category = await Category.findOneAndUpdate(
        {category:req.params.category},
        {$push: {list: list.id}, new: true}
    )
    res.json({status:200, data: category})
})

  router.put("/:category/updateList/:listId", async (req, res) => {
    // console.log('req.body',req.body)
    const list = await List.findByIdAndUpdate(
      req.params.listId,
      req.body,
      { new: true }
    );
    console.log("lemme see dat list", list);
    const category = await Category.findOneAndUpdate({
      category: req.params.category},
      {list: list,
      new: true,
    });
    res.json({ status: 200, msg: "list via category updated", data: category });
  });
  
  module.exports = router;