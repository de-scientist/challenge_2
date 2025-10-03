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


//challenge 7: Sum of Even Numbers where a function takes an array of numbers and returns the sum of all even numbers in the array.
function sumEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0)
} 
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12 


//challenge 8: Difference Between Sum of Even and Odd Numbers where a function takes an array of numbers and returns the difference between the sum of even numbers and the sum of odd numbers.
function differenceEvenOdd(arr) {
    const sumEven = arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    const sumOdd = arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
    return sumEven - sumOdd;
}
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6])); // Outputs: 3 (12-9)


//challenge 9: Count Truthy Values where a function takes an object and returns the number of properties that have truthy values.
function countTruthy(obj) {
    return Object.values(obj).filter(value => Boolean(value)).length;
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null })); // Outputs: 2  // "hello" and 42 are truthy



//challenge 10: Average of Numbers where a function takes an array of numbers and returns their average. Return 0 if the array is empty.
function average(arr) {
    if (arr.length === 0) return 0;

    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}
console.log(average([2, 4, 6, 8])); // Outputs: 5



//challenge 11: Linear Search where a function takes an array and a value. It should return the index of the first occurrence of the value in the array. If the value is not found, return -1.
function linearSearch(arr, value) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        } 
    } 
    return -1;
}
console.log(linearSearch([5, 3, 7, 1, 4], 7)); // Outputs: 2
console.log(linearSearch([5, 3, 7, 1, 4], 10)); //Outputs: -1



//challenge 12: Reverse Linear Search where a function  takes an array and a value. It should return the index of the last occurrence of the value in the array. If the value is not found, return -1.
function reverseLinearSearch(arr, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7)); // Outputs: 5
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10)); // Outputs: -1



//challenge 13: Linear Search All Indices where a function takes an array and a value. It should return an array of all the indices where the value appears. If the value isn’t found, return an empty array.
function linearSearchAll(arr, value) {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            indices.push(i);
        }
    }
    return indices;
}
console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7)); // Outputs: [2, 5]
console.log(linearSearchAll([5, 3, 7, 1, 4], 10)); // Outputs: []


//challenge 14: Count Occurrences where a function takes an array of strings and returns an object where each key is a string from the array and the corresponding value is the number of times it appears.
function countOccurrences(arr) {
    const counts = {};
    for (const str of arr) {
        counts[str] = (counts[str] || 0) + 1;
    }
    return counts;
}
console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])); // Outputs: { apple: 3, banana: 2, orange: 1 }
