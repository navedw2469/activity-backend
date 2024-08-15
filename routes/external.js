const express = require("express");
const { getCodechefData } = require("../controllers/codechefController");

const router = express.Router();

// Define the external route
router.get("/", async (_req, res) => {
  const codechefData = await getCodechefData();
  res.json({ codechef: codechefData });
});

module.exports = router;
