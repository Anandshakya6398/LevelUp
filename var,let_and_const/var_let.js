// console.log("a",a); // ReferenceError: Cannot access 'a' before initialization
// let a=10;
// console.log("a",a); 


// var 
console.log("b",b); // undefined
var b = 20;
console.log("b",b); // 20


//shadowing concept 

var a=10;
console.log("a",a); // 10
{
    let a=30;
    console.log("a",a); // 30
}
console.log("a",a); // 10


let c=10;
console.log("c",c); // 10
{
    var c=30; // var does not create a new block scope, it hoists to the top of the function or global scope
    console.log("c",c); // 30
}