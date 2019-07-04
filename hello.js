setTimeout(()=>console.log("Line 1"), 2000);
console.log("Line 2");

let promise=new Promise((resolve,reject)=>{setTimeout(()=>console.log("Line3.1"),3000);resolve("Line3.2");});
promise.finally(()=>console.log("Line 4.1")).then((res)=>console.log(res), ()=>console.log("Line 4.3")).catch((err)=>console.log(err));