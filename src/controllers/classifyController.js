const { getProperties, getFunFact } = require("../utils/classifyUtils");

const classifyNumber = async (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number);
  const properties = getProperties(num);
  const classSum = num
    .toString()
    .split("")
    .reduce((a, b) => a + parseInt(b), 0);

  try {
    const funFact = await getFunFact(num);
    res.json({
      number: num,
      is_prime: properties.includes("prime"),
      is_perfect: properties.includes("perfect"),
      properties,
      class_sum: classSum,
      fun_fact: funFact,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching fun fact" });
  }
};

module.exports = { classifyNumber };
