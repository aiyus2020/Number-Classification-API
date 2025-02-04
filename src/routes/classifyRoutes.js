const express = require("express");
const { classifyNumber } = require("../controllers/classifyController");

const router = express.Router();

// Define route
router.get("/classify-number", classifyNumber);

module.exports = router;
