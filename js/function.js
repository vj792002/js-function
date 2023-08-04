//1.display a Text

let a=prompt("Enter any string");
text();
function text(){
	console.log("given string is:")
	console.log(a);
}

//2.function using parameters

param(10,5)
function param(a,b){
	console.log("The parameter are:")
	console.log(a,b)
}



//3.Add two numbers

let b=parseInt(prompt("Enter 1st number:"));
let c=parseInt(prompt("Enter 2nd number:"));
let s=b+c;
 add();
 function add(){
 console.log("sum of two number is:")
 console.log(s);
 }
 
//4.sum of two numbers

let x=parseInt(prompt("Enter X value:"));
let y=parseInt(prompt("Enter Y value:"));
addition();
sub();
multi();
div();
function addition(){
	console.log("addition of two number is:")
	console.log(x+y);
}
function sub(){
	console.log("subrtaction of two number is:")
	console.log(x-y);
}
function multi(){
	console.log("multiplication of two number is:")
	console.log(x*y);
}
function div(){
	console.log("division of two number is:")
	console.log(x/y);
}