let btn1=document.querySelector("#btn1");

btn1.onclick=()=>{
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a); //26 is printed
};

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are inside div");
};

btn1.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
};  //gives event objects

btn1.addEventListener("click",()=>{
    console.log("button1 was clicked-handle1");
});

btn1.addEventListener("click",()=>{
    console.log("button1 was clicked-handler2");
    console.log(evt.type);
    console.log(evt.target);
});

//same event multiple works
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked-handle3");
// }); should not use like this while removing

//to remove eventlisteners
const handler3=()=>{
    console.log("button1 was clicked-handle3");
};

btn1.addEventListener("click",handler3);

btn1.removeEventListener("click",handler3);








