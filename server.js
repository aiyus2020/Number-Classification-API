const express = require("express");
const cors = require("cors");
require("dotenv").config();
const classifyRoutes = require("./src/routes/classifyRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Use routes
app.use("/api", classifyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
