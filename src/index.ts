//Problem 1
function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// console.log(formatString("Hello"));          
// console.log(formatString("Hello", true));    
// console.log(formatString("Hello", false));   




//Problem 2
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

// console.log(filterByRating(books));




//Problem 3 
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

// console.log(concatenateArrays(["a", "b"], ["c"]));        
// console.log(concatenateArrays([1, 2], [3, 4], [5]));       





//problem 4
class Vehicle {
  constructor(private make: string, private year: number) {}

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}


// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());  
// console.log(myCar.getModel());  


//Problem 5
function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

// console.log(processValue("hello")); 
// console.log(processValue(10));      
