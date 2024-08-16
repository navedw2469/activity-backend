const axios = require("axios");
const cheerio = require("cheerio");

const getFormatedGfgData = (html) => {
  const $ = cheerio.load(html);

  const data = $("#__NEXT_DATA__").text();

  return JSON.parse(data);
};

const getGfgData = async () => {
  try {
    const response = await axios.get(
      "https://www.geeksforgeeks.org/user/navedw2469/"
    );
    return getFormatedGfgData(response.data);
  } catch (error) {
    return {
      error: "An error occurred while fetching gfg data",
      details: error.message,
    };
  }
};

module.exports = {
  getGfgData,
};
