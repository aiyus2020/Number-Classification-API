const axios = require("axios");

// Check if number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Check if number is perfect (sum of divisors equals number)
const isPerfect = (num) => {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num && num !== 1;
};

// Determine number properties
const getProperties = (num) => {
  let properties = [];

  if (num % 2 === 0) properties.push("even");
  else properties.push("odd");

  if (isPrime(num)) properties.push("prime");
  if (isPerfect(num)) properties.push("perfect");

  // Check Armstrong number
  const sumOfPowers = num
    .toString()
    .split("")
    .reduce(
      (acc, digit) => acc + Math.pow(parseInt(digit), num.toString().length),
      0
    );

  if (sumOfPowers === num) properties.push("armstrong");

  return properties;
};

// Fetch fun fact from Numbers API
const getFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    return response.data;
  } catch (error) {
    return "No fun fact found.";
  }
};

module.exports = { getProperties, getFunFact };
