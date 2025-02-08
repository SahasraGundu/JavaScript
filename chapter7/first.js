let div=document.querySelector("div");
console.log(div);

//to get style
console.log(div.style);
div.style.backgroundColor="green";
div.style.backgroundColor="purple";
div.style.fontSize="26px";
div.innerText="hello";
div.style.visibility="hidden";


let id=div.getAttribute("id");
console.log(id); // gives attribute's name

let namee=div.getAttribute("name");
console.log(name);

let para=document.querySelector("p");
console.log(para.getAttribute("class"));

// to change attr value we use 
console.log(para.setAttribute("class","newword"));


//insert elements
// first create then add

let newbtn=document.createElement("button");
newbtn.innerText="click me"; //creating 
console.log(newbtn);

let div=document.querySelector("div");
div.append(newbtn); //for displaying at end of div

// div.prepend(newbtn); 
//at starting it comes

// div.before(newbtn); 
// before div it comes 


// div.after(newbtn);
// after div it comes


let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi,I am new!</i>";
document.querySelector("body").prepend(newHeading);


newHeading.remove(); // to delte 

//append child
//remove child


