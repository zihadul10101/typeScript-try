"use strict";
//type
let age = 25;
let club = 'real madridt';
let isFamous = false;
function add(num1, num2) {
    return num1 + num2;
}
add(3, 76);
add('adam', 'sand');
//function
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('zihad', 'jasham');
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log('output', output);
let multiply2 = (x, y) => x * y;
multiply2 = (x, y) => x * y;
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
//arry and object
const numbers = [2, 3, 4, 8, 12, 91, 34];
numbers.push(22);
let megaFriends = '';
const friends = ['George', 'Jeff', 'Bill', 'Abdul'];
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaFriends.length) {
        megaFriends = friend;
    }
}
console.log('Frend with the largest name', megaFriends);
//object
let player;
player = {
    club: 'Real Madrid',
    salary: 454000,
};
