
let name={
    firstName:"Salik",
    lastName:"ahmed",
    printName:function (){
        console.log(this.firstName+" "+this.lastName)
    }

}

function printFirst(hometown,state){
    console.log(this.firstName+" "+"lives in "+hometown+"  , "+state)
}
let name2={
    firstName:"john",
    lastName:"doe"
}

// function borrowing 
name.printName();
name.printName.call(name2)
console.log(name2)

printFirst.call(name,"silchar","assam");
printFirst.call(name2,"guwahati","assam");

// apply: same as call only difference is it only accept second paramtere as an arraylist
printFirst.apply(name,["silchar","assam"]);
printFirst.apply(name2,["guwahati","assam"]);

//bind: creates a function that can be called latter
let printmyName=printFirst.bind(name,"guwahati","assam")
console.log(printmyName)
printmyName();
