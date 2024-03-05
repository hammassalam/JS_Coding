




// To print use console.log... for an integer you dont need single quotes in brackets but for spring you must 
console.log('Hello World');
console.log(1)

// commonly used variables in javascript are let and const
// anything in the single quotes is a spring datatype 
let firstName= ('Hammas');
console.log(firstName)

firstName= ('Waseem')
console.log(firstName)

// const variable type stays constant throughout the program, meaning it remains the same and cannot be changed 
const lastName= ('Salam');
console.log(lastName)

// when trying to use a signle quote within the text, use double quote for the full spring to accept datatype
let hammasPhone = "Hammas's phone number is 215272"
console.log(hammasPhone)

// when the datatype is an integer 
let myAge =26
console.log("Hammas's age is" , myAge)

// when using arthamatic operators such as + - * / 
// you cannot use let for the same variable name 
let sales = 100 + 50;
console.log(sales)

sales= sales + 50;
console.log(sales)

//subtract by
sales= sales - 100;
console.log (sales)

//multiplied by
let newSale= 200;
newSale= newSale * 2;
console.log(newSale)

//divided by
newSale= newSale / 4
console.log(newSale)

//to find the remainder 
let remainder = 5%2
console.log(remainder)

remainder= 6%2
console.log(remainder)

// variable with a string and integer
// Concatenation
let stringint = 'My lucky number is '
stringint= stringint + 33;
console.log(stringint)

let sumOFtwo = 9 + 1;
console.log(stringint + " " + sumOFtwo)

let country = 'United Kingdom '
let city = 'London'
console.log (country + city)

// multiple concatenation

let fName = 'Hammas'
let lName = 'Salam'
let age = 26
let countryOfbirth = 'USA'

console.log (fName + lName + ' is ' + age + ' years old' + ', born in the ' + countryOfbirth)

// static.. stays the same, dynamic.. keeps changing

let sumOffour = '3' + 5 + '7' + 6;
console.log (sumOffour)

let sumOfthree = 5 + 4 + '6' + 9 + 10
console.log(sumOfthree)
console.log(sumOfthree)
