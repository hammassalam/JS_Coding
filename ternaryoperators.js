//ternary operator are used 
let int= 101
let result;

result= int%2 === 0 ? true: false
console.log (result)

let weekend = 'Saturday and Sunday'
let weekdays

weekend = weekdays === 'Mon-Fri' ? "Its weekday" : "Its weekend"
console.log(weekend)






let day = 'Friday';

if (day === 'Monday') {
    console.log('7am')
} else if( day === 'Friday') {
    console.log('10am')
} else {
    console.log('No Alarm')
}

switch(day) {
    case 'Monday':
        console.log('7am');
        break;
    case 'Tuesday':
        console.log('8am');
        break;
    case 'Wednesday':
        console.log('5am');
        break;
    case 'Thursday':
        console.log('6am');  
        break;
    case 'Friday':
        console.log('9am'); 
        break;
    case 'Saturday':
        console.log('9am'); 
        break;
    case 'Sunday':
        console.log('11am');  
        break;
    default:
        console.log('No days found')       
}