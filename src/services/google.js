const axios = require("axios");

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const GOOGLE_PLACES_BASE_URL = "https://maps.googleapis.com/maps/api/place";

/**
 * @name findAddress
 * @summary Find address suggestions based on a search term
 * @param {String} searchString  is the address term to ask for
 * @returns {Promise<Array>}
 */
const findAddress = async function(searchString) {
  if (!searchString) throw new Error("Search term is required");

  const BEGIN = Date.now();

  const search = {
    input: searchString,
    location: "-64.349123,-33.123778",
    radius: 50000,
    rankby: "distance",
    key: GOOGLE_PLACES_API_KEY
  };

  // TODO: Implement the good stuff here

  console.log(
    `Search "${searchString}" completed in ${Date.now() - BEGIN} ms.`
  );

  return [];
};

module.exports = {
  findAddress
};
