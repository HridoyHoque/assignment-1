
// Problem 1: Function to filter even numbers from an array

function filterEvenNumbers(numbers: number[]): number[]{
    return numbers.filter((num) => num % 2 === 0)
}


// Problem 2: Function to reverse a given string

function reverseString(name: string): string{
    return name.split('').reverse().join('')

}


// Problem 3: Type guard to determine if input is a string or a number

type StringOrNumber  =  string | number;

function checkType(value: StringOrNumber): string{
    if (typeof value === "number"){
        return "Number"
    } else{
       return "String"
    }
    
}

// Problem 4: Generic function to safely retrieve a property value from an object

function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key]
}


// Problem 5: Function to add and set the read status of a book object

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book &{isRead: boolean}
{
    return {
        ...book,
        isRead: true
    };
}


// Problem 6: Base Person class and extended Student subclass with details method

class Person  {
  public name: string;
  public age: number;
constructor( name: string,  age: number){
    this.name = name;
    this.age = age;
}
}

class Student extends Person{
public grade : string;
    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }
      getDetails(): string{
            return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}` }
}

// Problem 7: Function to find the intersection of two numerical arrays

function getIntersection(arr1: number[], arr2: number[]): number[]{
    const set =  new Set(arr2);
    return arr1.filter((n) => set.has(n))
}


