"use strict";
//bssic type
let id = 5;
let company = 'Hedreez Media';
let isPublished = true;
let x = 'hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
//Tuple
let person = [1, "Faruq", true];
let employee;
employee = [
    [1, 'Waliy'],
    [2, 'Jack'],
    [3, 'Esther']
];
//Union
let pid;
pid = '22';
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'Waliy'
};
//type Assertion
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
//function
function addNum(x, y) {
    return x + y;
}
//void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Waliy'
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const stud = new Person(1, 'Waliy Bello');
const study = new Person(1, 'Jack Bello');
//console.log(stud, stud.register())
//inheritance
//subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this._position = position;
    }
}
const emp = new Employee(3, 'Arike', 'Nurse');
console.log(emp.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Arike', 'Toyin', 'Sodehinde']);
