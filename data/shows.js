const axios = require("axios");

async function showSearch(term) {
  try {
    if (!term) {
      throw "A search term is required";
    }
    if (typeof term != "string") {
      throw "Term must be of type string";
    }
    if (term === "" || term.trim() === "") {
      throw "Search term must not be empty";
    }
    const { data } = await axios.get(
      `http://api.tvmaze.com/search/shows?q=${term.trim()}`
    );
    const shows = [];
    for (let i = 0; i < Math.min(data.length, 5); i++) {
      shows.push(data[i].show);
    }
    return shows;
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

async function getShow(id) {
  try {
    if (!id) {
      throw "id is a required argument";
    }
    if (typeof id != "number") {
      throw "id must be of type number";
    }
    if (isNaN(id)) {
      throw "id is NaN";
    }
    if (id < 0) {
      throw "id must be a positive integer";
    }
    const { data } = await axios.get(`http://api.tvmaze.com/shows/${id}`);
    return data;
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

module.exports = { showSearch, getShow };
