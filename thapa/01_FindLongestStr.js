let str = "hello my name is viral jain, username viraljain7 and you are great";

const findLongestWord = (str) => {
    // Check if the string is empty or contains only whitespace
    if (str.trim().length === 0) return false;

    // Split the string into an array of words using a space as a delimiter
    let words = str.split(" ");

    // Sort the array of words based on the length of each word, in descending order
    words = words.sort((a, b) => b.length - a.length);

    // Return the first word in the sorted array, which is the longest word
    return words[0];
}

console.log(findLongestWord(str)); // Output: "viraljain7"
