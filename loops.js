// There are different types of loops for, while and do while 


// while loop will check condition then perform action

let i= 10;
while (i<=20)
{
    console.log('Print me')     
    i++;
}
console.log(i)     //OUTPUT: will 'print me' 11 times 


// while (i>=5)
// {
//     console.log('BURGERS')    //OUTPUT: will print infinite amount of times and never stops
//     i++;
// }
// console.log(i)

while (i<=30)
{
    //console.log('animals')
    let animal= 'cat'
    let animal1= 'dog'
    let animal2= 'bird'
    i--;
}
console.log(i)

// do while loop performs action then checks condition

let x= 1
do{
    console.log('perform loop')
    x++;
} while (x<=2)

console.log('**************')

// counting from 1 to 10 for loop

for (let i=1; i<11; i++){
    console.log(i)
}
// counting down from 10 to 1
for (let i=11; i>1; i--)
{
    console.log(i)
}

//  Nested forloop

for(i=1; i<10; i++){
    console.log('i value is: ' + i)
    for (let x= 2; x<0; x++)
    console.log('x value is: ' + i)

}

//to print my name 10x (easiest way)

for (let i= 0; i<10; i++){
    console.log('Hammas')
}
//without foor loop a function can also be used to print a name 10x ***************



let a= 1
function printname(){
    if (a<10){
     console.log('Hammas')
     a++
    printname();
}}
printname()

// print name 10 times *********
let prntName= 'Hammas'
console.log(prntName * 10)

//print name 10 times ******
let varr= 10
if (varr<20){
console.log('Hammas')
varr++

}


//pushing code to git