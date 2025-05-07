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




//problem 6
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  return products.reduce((max, item) => item.price > max.price ? item : max);
}


const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];
// console.log(getMostExpensiveProduct(products));  


//problem 7 

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}


// console.log(getDayType(Day.Monday));   
// console.log(getDayType(Day.Sunday));   


//problem 8 

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      n >= 0 ? resolve(n * n) : reject(new Error("Negative number not allowed"));
    }, 1000);
  });
}


// squareAsync(4).then(console.log);     
// squareAsync(-3).catch(console.error);    

