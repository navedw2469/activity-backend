const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Import the external routes
const externalRoutes = require("./routes/external");

app.use(express.json());

// Use the external routes
app.use("/api/external", externalRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
