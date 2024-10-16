// id = '5'; // Error
// console.log(id);
// console.log('Hello World');

// baisc types
let id: number = 5;
let company: string = 'Traversy Media';
let isPuvlished: boolean = true;
let x: any = 'Hello';
let ids: number[] = [1, 2, 3, 4, 5];

// ids.push('hello') // Error

let arr: any[ ] = [1, true, 'hello'];

// Tuple 
let person: [number, string, boolean] = [1, 'Brad', true];

// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
]


// Union

let pid: string | number 

pid = '22'

// Enum

enum Direction1 {
  Up,
  Down,
  Left,
  Right
}


enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}


// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}


// Type Assertion
let cid: any = 1;
// let customerId = <number>cid

let customerId = cid as number
customerId = 5

// Functions

function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(1, 2))

// void
function log(message: string | number): void {
    console.log(message)
}

log('Hello')

// Interfaces

interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

// user1.id = 5 // Error

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y


// Classes

class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad')
const mike = new Person(2, 'Mike')

console.log(brad, mike)
console.log(brad.register())
