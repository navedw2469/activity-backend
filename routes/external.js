const express = require("express");
const { getCodechefData } = require("../controllers/codechefController");
const { getGfgData } = require("../controllers/gfgController");

const router = express.Router();

// Define the external route
router.get("/", async (_req, res) => {
  const [codechefData, gfgData] = await Promise.all([
    getCodechefData(),
    getGfgData(),
  ]);
  res.json({ codechef: codechefData, gfg: gfgData });
});

module.exports = router;
