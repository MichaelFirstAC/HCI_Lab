/**
 * Processes an array of numbers by doubling even numbers and removing odd numbers.
 * @param {number[]} numbers - The array of numbers to process.
 * @returns {number[]} - A new array with even numbers doubled and odd numbers removed.
 */

function processNumbers(numbers) {
    return numbers
        .filter(num => num % 2 === 0) // Keep only even numbers
        .map(num => num * 2);        // Double the even numbers
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6];
const resultArray = processNumbers(inputArray);
console.log(resultArray); // Output: [4, 8, 12]
