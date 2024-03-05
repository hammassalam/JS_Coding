
//Arrays are a simple and effecient way to store list of data in a single variable
//Arrayys are a object datatype as comapred to a primitive such as boolean, string, number, null, undifined 


let names = ['Usman', 'Antor', 'Hammas', 'Aaniq']
console.log(names.length)
console.log(names)
console.log('Datatype of arrays is: ' + typeof names) //OUTPUT: object 
// index always start with 0
console.log(names[1] + names[0] )
console.log(names[0])
console.log(names[2])
console.log(names[3])

let numbers = [16, 17, 19, 23, 45, 56]
console.log(numbers.length)
console.log(numbers[3])

for (let i = 0; i < 6; i++) {
    console.log(numbers[i])
}


let age  = [16, 17, 19, 23, 34, 45, 46, 67]  
console.log(age.length)       //OUTPUT: 8 EVEN THOUGH SHOULD BE 7 SINCE 0 IS STARTING INDEX********
console.log(age[3])           //INDEX WILL START FROM 0, WHEREAS LENGTH WILL COUNT FROM 1 UP

for (let i = 0; i < 8; i++) {       //OUTPUT: LIST OF NUMBERS FROM 16 TO 67
    console.log(age[i])
}

for (let i=0; i<age.length; i++){     //OUTPUT: LIST OF NUMBERS FROM 16 TO 67.... EASIER SINCE NO NEED TO COUNT HOW MANY IN THE LIST INTEAD USE age.legnth to get total
    console.log(age[i])
}

//keys and value pair 

let input= 'tutor'

let person ={

    name: 'Hammas',          //Commas are important after giving value 
    age: 26,
    language: 'English',
    tutor: 'Usman',
}
console.log (typeof person)   //object
console.log(person)   //{ name: 'Hammas', age: 26, language: 'English', tutor: 'Usman' }
console.log(person.age)  //26

console.log(person[input])   //grabbing input from a seperate variable tutor is the same as tutor so will print the value Usman


//multiple (nested) keys and value

let driver={
    namee: 'Hammas',
    age: 26,
    background: 'pakistani',
    height: '6ft',
    car:{
        typeofcar: 'Caddy',
        colour: 'Black',
        year: 2023

    }
}
console.log(driver)
//console.log(car)
console.log (driver.car)
console.log (driver.car.colour.length)
// console.log (driver.namee + car.year + car.typeofcar + car.colour)
console.log(driver.namee + ' drives a ' + driver.car.typeofcar)  //Hammas drives a Caddy

//Splitting a string 

const stringg= 'Hammas, is, a, JS, Master'
const prntStringg = stringg.split(',')
console.log(prntStringg)   //OUTPUT: [ 'Hammas', ' is a JS', ' Master' ]
console.log(stringg)      //OUTPUT: Hammas, is a JS, Master
console.log (stringg[3])    //OUTPUT: m
console.log(prntStringg[3])  //OUTPUT: JS but without commas in stringg const output is undifined*****


