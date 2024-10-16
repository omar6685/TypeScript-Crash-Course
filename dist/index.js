"use strict";
// id = '5'; // Error
// console.log(id);
// console.log('Hello World');
// baisc types
let id = 5;
let company = 'Traversy Media';
let isPuvlished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
// ids.push('hello') // Error
let arr = [1, true, 'hello'];
// Tuple 
let person = [1, 'Brad', true];
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union
let pid;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
customerId = 5;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// void
function log(message) {
    console.log(message);
}
log('Hello');
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
console.log(brad, mike);
console.log(brad.register());
