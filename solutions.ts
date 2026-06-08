
// Solution 1: Filter even numbers

function filterEvenNumbers(numbers: number[]): number[]{
    return numbers.filter((num) => num % 2 === 0)
}


// Solution 2: return the reversed string

function reverseString(name: string): string{
    return name.split('').reverse().join('')

}


// Solution 3: Check type

type StringOrNumber  =  string | number;

function checkType(value: StringOrNumber): string{
    if (typeof value === "number"){
        return "Number"
    } else{
       return "String"
    }
    
}

// Solution 4

function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key]
}


// solution 5:

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


// Solution 6:

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

// problem 7

function getIntersection(arr1: number[], arr2: number[]): number[]{
    const set =  new Set(arr2);
    return arr1.filter((n) => set.has(n))
}


