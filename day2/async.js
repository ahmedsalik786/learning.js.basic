
//async is a keyword to make a function asynchronous
// asynchronous functions always return a promise

const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved value")
    },5000)
   
})
const prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(["salik","sam"])
    },1000)
   
})
async function getData(){
    p.then(res=> console.log(res))
    return p;
}
const dataPromise=getData();
dataPromise.then((res)=> console.log(res))


// async  and await are used to handle promises
async function handlePromise(){
    const val=await prom;
    console.log(val)
}
handlePromise()