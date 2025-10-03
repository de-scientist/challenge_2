//Challenge 1: Sum of Positives where a function takes an array of numbers and returns the sum of all the positive numbers in the array.
function sumOfPositives(arr) {
    return arr.filter(num => num > 0).reduce ((sum, num) => sum + num, 0); 
} 
console.log(sumOfPositives([1, -3, 5, -2, 9, -8])); // Output: 15

//Challenge 2: Find Maximum value in an array where a function takes an array of numbers and returns the maximum value in the array without using built-in Math.max() function.
function findMax(arr) {

    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    } 
    return max;
} 
console.log(findMax([3, 7, 2, 9, 5])); // Output: 9
