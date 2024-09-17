//bssic type
let id: number = 5; 
let company: string = 'Hedreez Media'
let isPublished: boolean = true
let x: any = 'hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'hello']

//Tuple
let person: [number, string, boolean] = [1, "Faruq", true]
let employee: [number, string][]

employee = [
    [1, 'Waliy'],
    [2, 'Jack'],
    [3, 'Esther']
]

//Union
let pid: string |number
pid ='22'

//enum
enum Direction1{
    up = 1,
    down,
    left,
    right
}

//Object
type User = {
    id: number
    name: string
}

const user: User ={
    id : 1,
    name: 'Waliy'
}


//type Assertion
let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number

//function
function addNum(x: number,y:number) {
    return x + y
}

//void
function log(message: string | number): void{
    console.log(message)
}

// interface
interface UserInterface {
    readonly id: number
    name: string
    age?: number //the question mark makes it optional
}

const user1: UserInterface ={
    id : 1,
    name: 'Waliy'
}


interface MathFunc{
    (x: number, y: number): Number
}

const add: MathFunc =  (x: number, y: number):number => x + y
const subtract: MathFunc =  (x: number, y: number):number => x - y
const multiply: MathFunc =  (x: number, y: number):number => x * y
const divide: MathFunc =  (x: number, y: number):number => x / y



interface PersonInterface {
     id: number
     name: string
    register(): string
}




//Classes
class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

    register(){
        return `${this.name} is now registered`
    }
}


const stud = new Person(1, 'Waliy Bello')
const study = new Person(1, 'Jack Bello')

//console.log(stud, stud.register())

//inheritance

//subclasses
class Employee extends Person{
    _position: string
    constructor(id: number, name: string, position: string){
        super(id, name)
        this._position = position
    }
}

const emp = new Employee(3, 'Arike', 'Nurse')

console.log(emp.register())

//Generics

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Arike', 'Toyin', 'Sodehinde'])

