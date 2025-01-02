function convertToRoman(num) {
  if (num <= 0 || num > 100000) {
    return "Invalid input"; // Handle numbers outside the range
  }

  const romanSymbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let romanNumeral = '';

  for (let [symbol, value] of romanSymbols) {
    while (num >= value) {
      romanNumeral += symbol; // Append the symbol
      num -= value;           // Subtract the value
    }
  }

  return romanNumeral;
}

// Example Usage
console.log(convertToRoman(36)); // Output: "XXXVI"
console.log(convertToRoman(4999)); // Output: "MMMMCMXCIX"

// Do not edit below this line
module.exports = convertToRoman;
