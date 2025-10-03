//Challenge 1: Sum of Positives where a function takes an array of numbers and returns the sum of all the positive numbers in the array.
function sumOfPositives(arr) {
    return arr.filter(num => num > 0).reduce ((sum, num) => sum + num, 0); 
} 
console.log(sumOfPositives([1, -3, 5, -2, 9, -8])); // Output: 15
