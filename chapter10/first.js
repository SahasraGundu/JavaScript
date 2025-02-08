console.log("one");
console.log("two");
console.log("three");
//for each line we r giving seperate instructions is sychronous

//not waiting for any process we aage jana hai
//setTimeout executes a fuction  and we tell when to run

function hello(){
    console.log("hello");
}
setTimeout(hello,2000);        //1000miliseconds = 1 seconds
//after 2 secs it executes    //hello is also a callback

// setTimeout(()=>{
//     console.log("hello");
// },4000);  //after 4secs


console.log("one");
console.log("two");
//these doesnot wait for hello it goes ahead and 
// after 2secs the hello gets printed



//callbacks

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum); //sum() should not pass with brackets it doesnot work


function getData(dataID){
    //2s
    setTimeout(()=>{
        console.log("data",dataID);
    },2000);
}
getData(1);
getData(3);
getData(2);
//this gives at a time after 2s

//if we want 2s delay btwn three data(individual delay) so we can use callbacks

function getData(dataID,getNextData){
    //2s
    setTimeout(()=>{
        console.log("data",dataID);
        if(getNextData){
            getNextData();
        }
    },2000);
}

getData(1,()=>{
    getData(2)    //after 1 2s delay and 2 
});             


// getData(1,()=>{
//     getData(2,()=>{
//          getData(3);    //after 2s each gets printed
//     })  ;  
// }); 

//this is called callback hell:difficult to understand

// promises:to solves callback hell


let promise=new promise((resolve,reject)=>{
    console.log("i am a promise");
    resolve("success");    //promise gets fulfilled
});


// let promise=new promise((resolve,reject)=>{
//     console.log("i am a promise");
//     reject("error occured ");    //gets rejected promise gets error
// });

// (pending,resolve,reject)


// function getData(dataID,getNextData){
//     //2s
//     return new promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataID);
//              resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },2000);      //it promises we give the data and after secs it gets printed 
//     });                 // after it gets printed when we agin call promise it comes as success
// }

//getData() returns a promise.
// (when api gets called it returns promises)


const getPromise =() =>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        resolve("success");
        //reject("error");  if rejected use catch
    });
};

let promisee=getPromise();
promisee.then((res)=>{
    console.log("promise fulfilled",res);
});   //after fulfilling we have to do some work so using .then

promise.catch((err)=>{
    console.log("rejected",err);
});   //after error if we want to do any thing we use catch



//=========


function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

console.log("fetching data1....");
asyncFunc1().then((res) => {
    console.log("fetching data2....");
asyncFunc2().then((res) => {});
});



//we have done using callback hell but below is uding promises

function getData(dataId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
      }, 3000);
    });
  }
  
  getData(1).then((res) => {
    console.log(res);
    return getData(2).then(() => {
      console.log(res);
    });
  });

//promise chaining:

// getData(1).then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     console.log(res);
// });
  




