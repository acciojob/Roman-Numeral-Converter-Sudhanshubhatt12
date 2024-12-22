function convertToRoman(num) {
	if (num <= 0 || num > 100000) {
    return "Invalid input"; // Handle numbers outside the range
  }
	
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

	 let romanNumeral = '';

  for (let [symbol, value] of romanSymbols) {
    while (num >= value) {
      romanNumeral += symbol; // Append the symbol
      num -= value;           // Subtract the value
    }
  }

  return romanNumeral;

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
