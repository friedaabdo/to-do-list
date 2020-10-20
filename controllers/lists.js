const List = require("../models/list");
const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  const list = await List.find({});
  res.json({
    status: 200,
    data: list,
  });
});

router.get("/:id", async (req, res) => {
  const list = await List.findById(req.params.id);
  res.json({
    status: 200,
    data: list,
  });
});

router.post("/", async (req, res) => {
    const list = await List.create(req.body);
    res.json({
      status: 200,
      msg: "data received",
      data: list
    });
  })

  router.delete("/:id", async (req, res) => {
    const list = await List.findByIdAndDelete(req.params.id);
    res.json({
      status: 200,
      msg: "item deleted",
      data: list
    });
  });

  router.put("/:id", async (req, res) => {
    const list = await List.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({
        status: 200,
        msg: "item updated",
        data: list
    });
  });

  module.exports = router;