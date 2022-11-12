const express = require("express");
const searchShowRouter = express.Router();
const { showSearch } = require("../data/shows");

searchShowRouter.post("/", async (req, res) => {
  try {
    const searchTerm = req.body.showSearchTerm;
    if (!searchTerm) {
      throw "A search term is required";
    }
    if (searchTerm === "" || searchTerm.trim() === "") {
      throw "Search term must not be empty";
    }
    const shows = await showSearch(searchTerm.trim());
    res.render("shows/index", { title: "Shows Found", shows: shows, term: searchTerm.trim() });
  } catch (e) {
    res.status(400).render("shows/error", { title: "Error", error: e });
  }
});

module.exports = searchShowRouter;
