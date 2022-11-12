const axios = require("axios");

async function getFoods() {
  const { data } = await axios.get(`https://www.fsis.usda.gov/shared/data/EN/foodkeeper.json`);
  return data["sheets"][2]["data"];
}

module.exports = { getFoods };
