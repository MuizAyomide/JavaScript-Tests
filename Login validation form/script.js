// const   lastName = document.getElementById("lastName").placeholder;
const   username = document.getElementById("username").value;
const   password = document.getElementById("password").value;
const   login = document.getElementById('login');


login.addEventListener('click', 
() => { 
    const   username = document.getElementById("username").value;
const   password = document.getElementById("password").value;
    if(username === "Akinrinola" && password === "122334"){
    alert('hello');
    console.log('helli');
}
else {
    html.src = 'Home.html';
}
}  

);








// var attempt = 3; //Variable to count number of attempts
// attempt --; //Decrementing by one
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;


// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "Formget" && password == "formget#123"){
// alert ("Login successfully");
// window.location = "success.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }