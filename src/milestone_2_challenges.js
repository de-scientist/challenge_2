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


//challenge 3: Election Winner where a function takes an array of objects and each object has two properties: name(string) and votes(number). The function should return the name of the candidate with the highest number of votes. Assume there is always a clear winner (no ties).
function findWinner(candidates) {
    let winner = candidates[0];
    for (let i = 1; i < candidates.length; i++) {
        if (candidates[i].votes > winner.votes) {
            winner = candidates[i]; 
        } 
    }
    return `{ name: "${winner.name}", votes: ${winner.votes} }`;
}
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 }
];

console.log(findWinner(candidates)); // returns: { name: "Bob", votes: 75 }
