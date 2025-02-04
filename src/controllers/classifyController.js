exports.classifyNumber = async (req, res) => {
  const { number } = req.query;

  // Validate input (check if it's a valid number, including negatives and floats)
  if (!number || isNaN(number)) {
    return res
      .status(400)
      .json({
        number,
        error: true,
        message: "Invalid input, must be a number",
      });
  }

  // Parse the number as a float (allows for negative and floating-point values)
  const num = parseFloat(number);

  // Initialize an array for properties
  const properties = [];

  // Check mathematical properties only if it's a valid integer
  if (Number.isInteger(num)) {
    if (checkPrime(num)) properties.push("prime");
    if (checkPerfect(num)) properties.push("perfect");
    if (checkArmstrong(num)) properties.push("armstrong");

    properties.push(num % 2 === 0 ? "even" : "odd");

    // Get fun fact from Numbers API
    let funFact = "No fun fact found";
    try {
      const response = await axios.get(
        `http://numbersapi.com/${num}/math?json`
      );
      funFact = response.data.text;
    } catch (error) {
      console.error("Error fetching fun fact:", error.message);
    }

    return res.status(200).json({
      number: num,
      is_prime: checkPrime(num),
      is_perfect: checkPerfect(num),
      properties,
      class_sum: sumOfDigits(num),
      fun_fact: funFact,
    });
  } else {
    // If it's a valid float but not an integer, just return a basic response
    return res.status(200).json({
      number: num,
      properties: ["float"],
      message: "This is a valid floating-point number",
    });
  }
};
