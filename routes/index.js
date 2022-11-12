const path = require("path");
const { getFoods } = require("../data/foods")

const constructorMethod = (app) => {
  app.get("/", async(req, res) => {
    res.render("foods/expdate", {expdates: await getFoods(), title: "test string"});
  });
  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
