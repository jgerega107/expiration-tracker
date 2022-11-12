const express = require("express");
const getShowRouter = express.Router();
const { getShow } = require("../data/shows");

getShowRouter.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (id === 0) {
      throw "id is a required argument";
    }
    if (isNaN(id)) {
      throw "id is NaN";
    }
    if (id < 0) {
      throw "id must be a positive integer";
    }
    const show = await getShow(id);
    res.render("shows/single", { title: show.name, show: show });
  } catch (e) {
    res.status(400).json({ title: "Error", error: e });
  }
});

module.exports = getShowRouter;
