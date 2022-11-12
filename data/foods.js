const axios = require("axios");

async function getFoods() {
  const { data } = await axios.get(`https://www.fsis.usda.gov/shared/data/EN/foodkeeper.json`);
  for (let i = 0; i < data["sheets"][2]["data"].length; i++) {
    console.log(data["sheets"][2]["data"][i][2]["Name"])
  }
  return data;
}

module.exports = { getFoods };
