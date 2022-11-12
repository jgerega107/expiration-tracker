const axios = require("axios");
const url = `https://www.fsis.usda.gov/shared/data/EN/foodkeeper.json`;

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
  for( let i = 0; i < categories.length; i++ ) {
    let categoryID = categories[i][0]["ID"];
    let productFromCategory = products.filter( ( p ) => { return p[1]["Category_ID"] == categoryID } );
    dict.push({"Category": categories[i][1]["Category_Name"], "Products": productFromCategory});
  }

  return dict;
}

module.exports = { getCategories, getProducts, getData };
