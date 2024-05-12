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
    let words = myInput.split(" ");
    if (userInput.codingDecoding == "Coding") {
        for (let word of words) {
            if (word.length >= 3) {
                let r1 = "krd";
                let r2 = "pcd";
                let newWord = r1 + word.slice(1) + word[0] + r2;
                finalString.push(newWord);
            }
            else {
                let reversedWord = word.split("").reverse().join("");
                finalString.push(reversedWord);
            }
        }
        console.log(finalString.join(" "));
    }
    else {
        for (let word of words) {
            if (word.length >= 3) {
                let originalWord = word.slice(3, -3);
                let decodedWord = originalWord.slice(-1) + originalWord.slice(0, -1);
                finalString.push(decodedWord);
            }
            else {
                let reversedWord = word.split("").reverse().join("");
                finalString.push(reversedWord);
            }
        }
        console.log(finalString.join(" "));
    }
}
main();
