// // document  object model (DOM)

// // 1st method

// console.log (document.querySelector('#heading'));

// // 2rd method

// console.log(document.getElementById('heading'));


// Change content/html
// document.querySelector('h1').innerHTML='PAMOSIA FRONTEND' 

// // Change CSS
// document.querySelector('h1').style.color = "green";

// function changeButtonToGreen(){
//     document.querySelector('Button').style.backgroundColor = "green";
// }

// // To change class name


function toggleSidebar(){
   document.querySelector('body').classList.toggle("open")
}
