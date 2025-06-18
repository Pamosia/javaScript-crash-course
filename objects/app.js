
// // object within array
// let users = [
//     {
//     email: "example@gmail.com",
//     password: "test123",
//     name : "John Doe",
//     discord: "discordexample",
//     subscription: "VIP+",
//     lessonscompleted: [1,2,3,4]
// },
//         {
//     email: "example@gmail.com",
//     password: "test123",
//     name : "John Doe",
//     discord: "discordexample",
//     subscription: "VIP+",
//     lessonscompleted: [1,2,3]
// },

// ]

// console.log(users[0].name);


// Sign Up user challange

// create a fucntion that accept the parameters
/**
 * email
 * password
 * name
 * discord
 * subscription
 * lessoncompleted
 * 
 * Inside the Sign Up function:
 * 
 * use those parameteres to create a user object
 * push that object onto the  "users" array
 */

// object within array
let users = [
    {
    email: "example@gmail.com",
    password: "test123",
    name : "John Doe",
    discord: "discordexample",
    subscription: "VIP+",
    lessonscompleted: [1,2,3,4]
},
        {
    email: "example@gmail.com",
    password: "test123",
    name : "John Doe",
    discord: "discordexample",
    subscription: "VIP+",
    lessonscompleted: [1,2,3]
},

]

// function signUp (
//     email,
//     password,
//     name,
//     discord,
//     subscription,
//     lessonCompleted)
//     {
//         let user ={
//             email:email,
//             password:password,
//             name:name,
//             discord:discord,
//             subscription:subscription,
//             lessonCompleted:lessonCompleted
//         };
//         users.push(user);
// }
// // for better coding practice due large number of parameters we can create object
// signUp( 
//   email:  "johnsmith@gmail.com",
//   password: "test123",
//   name: "John Smith",
//   discord:  "discord",
//   discription: "VIP+",
//   lessonCompleted: [1,2] 
// 
    
// );

// console.log(users);


function signUp (user){
        users.push(user);
}
// for better coding practice due large number of parameters we can create object
signUp({ 
  email:  "johnsmith@gmail.com",
  password: "test123",
  name: "John Smith",
  discord:  "discord",
  discription: "VIP+",
  lessonCompleted: [1,2] 
}
    
);

console.log(users);