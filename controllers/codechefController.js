const axios = require("axios");

const getFormatedCodechefData = async (html) => {
  const allRating = html.match(/var all_rating = (.*);/)?.[1];
  const userDailySubmissionsStats = html.match(
    /var userDailySubmissionsStats = (.*);/
  )?.[1];

  if (!allRating || !userDailySubmissionsStats) {
    return {
      error: "Could not extract codechef data",
    };
  }

  const data = {
    ratings: JSON.parse(allRating),
    daily_stats: JSON.parse(userDailySubmissionsStats),
  };

  return data;
};

const getCodechefData = async () => {
  try {
    const response = await axios.get(
      "https://www.codechef.com/users/naved2469"
    );
    return getFormatedCodechefData(response.data);
  } catch (error) {
    return {
      error: "An error occurred while fetching codechef data",
      details: error.message,
    };
  }
};

module.exports = {
  getCodechefData,
};
