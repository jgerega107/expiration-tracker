const path = require("path");
const { getFoods } = require("../data/foods")

const constructorMethod = (app) => {
  app.use("/expdates/lmeats", async (req, res) => {
    await getFoods()
    res.render("foods/expdate", {title: "Lunch Meats", expdates: ["opened package: 3-5 days in refridgerator, 1-2 months in freezer", "unopened package: 2 weeks in refridgerator, 1-2 months in freezer"]})
  })
  app.get("/", (req, res) => {
    res.sendFile(path.resolve("static/index.html"));
  });
  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
