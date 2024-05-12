#! /usr/bin/env node
import inquirer from "inquirer";
async function main() {
    const userInput = await inquirer.prompt([
        {
            name: "message",
            message: "Enter your message: ",
            type: "input"
        },
        {
            name: "codingDecoding",
            message: "Choose Coding or Decoding",
            type: "list",
            choices: ["Coding", "Decoding"]
        }
    ]);
    let myInput = userInput.message;
    let finalString = [];
    // Split input into words
    let words = myInput.split(" ");
    // Process each word
    if (userInput.codingDecoding == "Coding") {
        for (let word of words) {
            if (word.length >= 3) {
                // Generate random characters r1 and r2
                let r1 = "krd";
                let r2 = "pcd";
                // Reconstruct the word with r1, r2, and the first letter at the end
                let newWord = r1 + word.slice(1) + word[0] + r2;
                finalString.push(newWord);
            }
            else {
                // Reverse the word
                let reversedWord = word.split("").reverse().join("");
                finalString.push(reversedWord);
            }
        }
        console.log(finalString.join(" "));
    }
    else {
        for (let word of words) {
            if (word.length >= 3) {
                // Extract the original word by removing the added characters
                let originalWord = word.slice(3, -3);
                // Swap the first and last characters
                let decodedWord = originalWord.slice(-1) + originalWord.slice(0, -1);
                finalString.push(decodedWord);
            }
            else {
                // Reverse the word
                let reversedWord = word.split("").reverse().join("");
                finalString.push(reversedWord);
            }
        }
        console.log(finalString.join(" "));
    }
}
main();
