### Description

Use the command line interface (CLI) of your operating system to create a number of folders, list the folders in a tree-like structure, use the ping command, and practice using the break keyboard sequence, and create and execute a JavaScript file using Node.js and Visual Studio Code (VSCode) terminal and Run and Debug.

### Code

**p1-date.js**

/*
    CIT 281 Project 1
    Name: Troy Munson
*/

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let x = days[new Date().getDay()];
console.log(x);

**p1-random.js**

/*
    CIT 281 Project 1
    Name: Troy Munson
*/
let alphabet = "abcdefghijklmnopqrstuvwxyz";
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let x = "";
for (i=0; i<getRandomInteger(5,25); i++) {
    x+= alphabet.charAt(getRandomInteger(0,26));
}

console.log(x)
