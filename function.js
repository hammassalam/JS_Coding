//A function is used to solve any line of code and to avoid repeated lines of code

//begin by defying a function and then calling it 


function printme()   //define function
{
    console.log('Hello World')   //pass action
}
printme()      //call the function 


//return function

function getName(){

    let a = 'Was'
    let b = 'eem'
    const middleName = a + b
    return middleName
    console.log(middleName)
}
console.log(getName());

//return funtion for boolean

function getTrueorFalse(){

    let phoneNo = 5328
    if (phoneNo<5000){
        console.log('True statement')
    }else {
        console.log('False statement')
    } //return phoneNo
}
getTrueorFalse()

//return function

function getAmount (){

    let sale=1000
    let discount =50
    let tax= 10
    let total= sale-discount+tax
    return total
}
console.log(getAmount())

function brandNames(){
    let brand1= 'nike, '
    let brand2= 'addidas, '
    let brand3= 'northface, '
    let allBrands = brand1 + brand2 + brand3
    return allBrands
}
console.log('I like to shop at ' + brandNames())

// return function with arguments or parameter       **************
function getAnimal (cat, dog, cow) {
    let cat1= cat;
    let dog1 = dog;
    let cow1 = cow;
    let animals = cat1 + dog1 + cow1;
    return animals;
}

let animalss = getAnimal('mewo ', 'woof ', 'mooh ')
console.log(" Animals sounds I heard in a farm: " + animalss)

//this keyword refers to the current object in a method or constructor
// The most common use of the this keyword is to eliminate he confusion between class attributes and parameters with the same name 
// (because a class attribute is shadowed by a method or constructor parameter)

// let car = {
//     brand: 'Caddy',
//     model: 'escalade',
//     capacity: '6 people',
//     fuel: 'premium'


// }