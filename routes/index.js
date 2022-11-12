const path = require("path");
const { getData } = require("../data/foods")

const constructorMethod = (app) => {
  app.get("/", async(req, res) => {
    res.render("foods/expdate", {expdates: await getData(), title: "Food Storage"});
  });
  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
