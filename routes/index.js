const path = require("path");
const { getData, getRecipes } = require("../data/foods")

const constructorMethod = (app) => {
  app.get("/", async(req, res) => {
    res.render("foods/expdates", {categories: await getData(), title: "Food Expiration Dates"});
  }); 
  app.get("/recipes/:ingredients", async(req, res) => {
    console.log(req.params.ingredients);
    res.render("foods/recipes", {recipes: await getRecipes( req.params.ingredients ), title: "Recipes"});
  });
  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
