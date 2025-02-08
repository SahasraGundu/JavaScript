// Let‘s Practice

// Qs. Create a new button element. Give it a text 
// “click me”, background color of red 
// & text color of white.
// Insert the button as 
// the first element inside the body tag.

let newbtn=document.createElement("button");
newbtn.innerText="click me!";

newbtn.style.backgroundColor="red";
newbtn.style.color="white";

document.querySelector("body").prepend(newbtn);


// Qs. Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append 
// this class to the <p> element.
// Solve this problem using classList.
// Did you notice, how you overwrite the class 
// name when you add a new one?

let para=document.querySelector("p");

// para.setAttribute("class","newclass");
// if we use this,its gets over ride and our first 
// class will be removed 
// so we use classlist

para.classList.add("newClass"); // new class is added and our old class will remain same












