const Category = require("../models/category");
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

  router.delete("/:id", async (req, res) => {
    const category = await Category.findByIdAndDelete({category:req.params.category})
    res.json({
        status: 200,
        msg: "data deleted",
        data: category
    });
  });

  router.put("/:category/updateLists/:listId", async (req, res) => {
    // console.log('req.body',req.body)
    const list = await List.findByIdAndUpdate(
      req.params.listId,
      req.body,
      { new: true }
    );
    console.log("lemme see dat list", list);
    const category = await Category.findByIdAndUpdate({
      category: req.params.category,
      data: list,
      new: true,
    });
    res.json({ status: 200, msg: "list via category updated", data: category });
  });
  
  module.exports = router;