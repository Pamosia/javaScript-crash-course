// let keyword

let string = "Pamosia"

console.log(string[string.length - 1])

let userEmail = "emwapipopo930@gmail.com";
// let age = 27;
// let name = "pamosia";

// age = age + 1;

// console.log(age)

// const keyword

const points = 100;

console.log(points)

// currency converter

let USD = 1200;

let AUD = USD * 1.5;

console.log(AUD)

USD = AUD / 1.5;

console.log(USD)

// conditional

let hasmembership = false;
let signedIn = true;

if(hasmembership===true){

    console.log("show user the video")

}
else if(signedIn==true){
    console.log("tell user to upgrade the account")
}
 else{
    console.log("tell user to log in")
 } 

// anotheer conditional

// let age = 19


// if (age > 18){
//     console.log(`  You're ${age} years old, you may enter the club! `);
// }
// else if(age===18){
//     console.log("you just turned 18, welcome!");
// }
// else{
//     console .log("you're too young, get out here");
// }


// logical operator


let age =18
let hasId = false;


if (age >=18 && hasId == true ){
    console.log("Great, you may enter the club !")
}

else{
    console.log ('Youre too young get out here')
}

// tenary operator

let isRaining = true ;

isRaining ? console.log('It is raining') : console.log ('It is not raining');



// while loops

let counter = 1;

while(counter < 7){
    console.log(counter)
    counter = counter + 1;
}
console.log("while loop is finishing running")


// for loop

for(i=1; i < 6; i++){
    console.log(i)
}
console.log('for loop is finishing running')


// exercise
// print number from 1 to 15 
// if the number is odd, print "pamosia"
// if the number is even, print "Frontend"
// if the number is divisible by 5, print "pamosia Frontend"

for(let i = 1; i <=15; i++){

    if(i % 5 ===0){
        console.log(`${i } - Pamosia Frontend`)
    }
    else if (i % 2===0){
         console.log( `${i } - Pamosia`);
         
    }
    
   else{
    console.log(`${i } - Frontend`);
   }
}
console.log("finished")



// print out all the characters form the string "PAMOSIA FRONTEND"

let str = "PAMOSIA FRONTEND"

for(i = 0; i < str.length; ++i){
    console.log(str[i])
}

// function declaration
function greetUser(time,name) {
    console.log(`Good ${time}, ${name}`)
}


greetUser('morning','John')

//sum function

function sum(num1, num2) {
    // return arguement
    return num1 + num2;
}


console.log ("the sum is ",sum(5,4));


// converter usd to aud
// REGULAR FUNCTION

// function convertUsdToAud(dollars){

//    let AUD = dollars * 1.5;

//    return AUD;

// }

// console.log (convertUsdToAud(1000));


// Arrow function
const convertUsdToAud = (dollars) =>{

    return dollars * 1.5;
}
console.log (convertUsdToAud(500));
