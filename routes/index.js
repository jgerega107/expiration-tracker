const path = require("path");

const constructorMethod = (app) => {
  app.use("/expdates/lmeats", (req, res) => {
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
