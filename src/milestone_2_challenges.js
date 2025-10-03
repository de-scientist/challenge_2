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


//challenge 4: Longest Word where a function takes an array of strings and returns the longest string in the array. If there are multiple words with the same maximum length, it returns the first one that appears.
function findLongestWord(words) {
    if (words.length === 0) return null;
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"])); // Output: "grapefruit"


//challenge 5: Count properties where a function takes an object and returns the number of properties (key-value pairs) in the object.
function countProperties(obj) {
    return Object.keys(obj).length;
}
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" })); // Output: 3

//challenge 6: Filter by length where a function takes an array of strings and a number minLength. Return a new array containing only the strings that are equal to or longer than minLength.
function filterByLength(words, minLength) {
    return words.filter(word => word.length >= minLength);
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)); // Outputs: [ 'giraffe', 'hippo', 'elephant' ]


