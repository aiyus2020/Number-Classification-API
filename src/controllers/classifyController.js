const axios = require("axios");
const {
  checkPrime,
  checkPerfect,
  checkArmstrong,
  sumOfDigits,
} = require("../utils/classifyUtils");

exports.classifyNumber = async (req, res) => {
  const { number } = req.query;

  // Validate input
  if (!number || isNaN(number)) {
    return res
      .status(400)
      .json({
        number,
        error: true,
        message: "Invalid input, must be a number",
      });
  }

  const num = parseFloat(number); // Parse as a float to handle both integers and floating-point numbers
  const numAbs = Math.abs(num); // Take the absolute value of the number for calculations
  const properties = [];

  // Check mathematical properties
  if (checkPrime(numAbs)) properties.push("prime");
  if (checkPerfect(numAbs)) properties.push("perfect");
  if (checkArmstrong(numAbs)) properties.push("armstrong");

  properties.push(numAbs % 2 === 0 ? "even" : "odd");

  // Get fun fact from Numbers API
  let funFact = "No fun fact found";
  try {
    const response = await axios.get(
      `http://numbersapi.com/${numAbs}/math?json`
    );
    funFact = response.data.text;
  } catch (error) {
    console.error("Error fetching fun fact:", error.message);
  }

  // Calculate the sum of digits, ensuring it’s positive
  const digitSum = sumOfDigits(numAbs); // Use absolute value for sum calculation

  return res.status(200).json({
    number: num,
    is_prime: checkPrime(numAbs),
    is_perfect: checkPerfect(numAbs),
    properties,
    digit_sum: digitSum, // Return the digit sum here
    fun_fact: funFact,
  });
};
