const path = require("path");
const { getCategoryInfo, getRecipes } = require("../data/foods")

const constructorMethod = (app) => {
  app.get("/about", async(req, res) => {
    res.render("foods/about", {title: "About Us"});
  }); 
  app.get("/recipes/:ingredients", async(req, res) => {
    res.render("foods/recipes", {recipes: await getRecipes( req.params.ingredients ), title: "Recipes"});
  });
  app.get("/", async(req, res) => {
    res.render("foods/expdates", {categories: await getCategoryInfo(), title: "Food Waste Manager"});
  }); 
  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
