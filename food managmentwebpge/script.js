const form = document.getElementById("foodForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let foodType =
document.getElementById("foodType").value;

let quantity =
document.getElementById("quantity").value;

localStorage.setItem("foodType", foodType);
localStorage.setItem("quantity", quantity);

alert("Donation Submitted Successfully!");

window.location.href="analysis.html";

});
}

if(document.getElementById("category")){

let foodType =
localStorage.getItem("foodType");

let quantity =
parseInt(localStorage.getItem("quantity"));

document.getElementById("category").innerText =
foodType;

document.getElementById("freshness").innerText =
"12-24 Hours";

if(quantity > 100)
{
document.getElementById("priority").innerText =
"High";
}
else if(quantity > 50)
{
document.getElementById("priority").innerText =
"Medium";
}
else
{
document.getElementById("priority").innerText =
"Low";
}

document.getElementById("ngo").innerText =
"Food Bank Foundation";
}

if(document.getElementById("meals")){

let meals =
localStorage.getItem("quantity") || 0;

document.getElementById("meals").innerText =
meals;

document.getElementById("waste").innerText =
meals;

document.getElementById("ngos").innerText =
1;

document.getElementById("people").innerText =
meals;
}