// block Scope
// let and const are block scope
// var is global scope
{
    let x=2;
}
// x cannot use here
// console.log(x) give ReferenceError


//function scope|| local scope
// var decleared within a js function is called local scope

function myFunction(){
    let myName="Salik"
    // can use myName here
}
//cannot use myname here


// Global Scope
// var decleared globallly (outside a js function) have global scope
var name="sam"