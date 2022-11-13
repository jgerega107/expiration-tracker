const axios = require("axios");
const url = `https://www.fsis.usda.gov/shared/data/EN/foodkeeper.json`;
const recipe_url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=`;
const apiKey = `b11f60f6cb344d709d4fe0d11ab93764`;

async function getCategories() {
  const { data } = await axios.get(url);
  return data["sheets"][1]["data"];
}

async function getProducts() {
  const { data } = await axios.get(url);
  return data["sheets"][2]["data"];
}

async function getData() {
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

async function getRecipes( ingredients ) {
  const { data } = await axios.get(`${recipe_url}${ingredients}&apiKey=${apiKey}`);
  return data;
}

module.exports = { getData, getRecipes };
