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