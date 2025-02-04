// Function to check if a number is prime
const checkPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Function to check if a number is perfect
const checkPerfect = (num) => {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num && num !== 1;
};

// Function to check if a number is an Armstrong number
const checkArmstrong = (num) => {
  const digits = num.toString().split("");
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(parseInt(d), power), 0);
  return sum === num;
};

// Function to calculate the sum of digits
const sumOfDigits = (num) => {
  return num
    .toString()
    .split("")
    .reduce((acc, d) => acc + parseInt(d), 0);
};

module.exports = { checkPrime, checkPerfect, checkArmstrong, sumOfDigits };
