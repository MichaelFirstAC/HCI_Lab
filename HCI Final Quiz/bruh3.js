// Function to capitalize the first letter of each word
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Function to remove duplicate words from a string
function removeDuplicateWords(str) {
    const words = str.split(' ');
    const uniqueWords = [...new Set(words)];
    return uniqueWords.join(' ');
}

// Example usage
const inputString = "hello hunnybunches. today today will be be such an exciting dayyy... Nah, thats a lie hunnybunches.";

const capitalizedString = capitalizeFirstLetter(inputString);
console.log(capitalizedString); 
// Output: "Hello Hunnybunches. Today Today Will Be Be Such An Exciting Dayyy... Nah, Thats A Lie Hunnybunches."

const stringWithoutDuplicates = removeDuplicateWords(inputString);
console.log(stringWithoutDuplicates); 
// Output: "Hello Hunnybunches. Today Will Be Such An Exciting Dayyy... Nah, thats a lie."