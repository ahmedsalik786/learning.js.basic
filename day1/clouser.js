// Closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


function printDetails(){
    let myName="Salik Ahmed";
    let age=24;

    function print(){
        console.log(myName)
    }
    print();
}
printDetails();