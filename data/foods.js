const axios = require("axios");
const spoonacular_apikey = require("../config.json").spoonacular_api
const usda_url = `https://www.fsis.usda.gov/shared/data/EN/foodkeeper.json`;
const spoonacular_url = `https://api.spoonacular.com/recipes/findByIngredients?number=9&ingredients=`;

async function getCategories() {
  const { data } = await axios.get(usda_url);
  return data["sheets"][1]["data"];
}

async function getProducts() {
  const { data } = await axios.get(usda_url);
  return data["sheets"][2]["data"];
}

async function getRecipes( ingredients ) {
  const { data } = await axios.get(`${spoonacular_url}${ingredients}&apiKey=${spoonacular_apikey}`);
  return data;
}

async function getCategoryInfo() {
  let dict = []
  let categories = await getCategories();
  let products = await getProducts();
  for (let i = 0; i < categories.length; i++) {
    let categoryID = categories[i][0]["ID"];
    let productFromCategory = products.filter((p) => { return p[1]["Category_ID"] == categoryID });
    let categoryName = categories[i][1]["Category_Name"]
    if (categories[i][2]["Subcategory_Name"] != null) {
      categoryName = categories[i][2]["Subcategory_Name"]
    }
    dict.push({ "Category": categoryName, "Products": productFromCategory });
  }

  return dict;
}

module.exports = { getCategoryInfo, getRecipes };
