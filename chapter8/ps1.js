
// Create a toggle button that changes the screen to 
// dark-mode when clicked & light-mode when clicked again.



let modebtn=document.querySelector("#mode");
let currmode="light";

modebtn.addEventListener("click",()=>{
    if(currmode ==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
});

console.log(currmode);

