let heading=document.getElementById("heading");
console.dir(heading); // single element

let headings=document.getElementsByClassName("head");
console.dir(headings); // multiple elements
console.log(headings); 
// this returns html collection(like array)
//if we give wrong class or id name it gives empty 
//html collection for class and null for id

let parah=document.getElementsByTagName("p");
console.log(parah);
console.dir(parah);

//query selectors(returns node list)

let elements=document.querySelector("p");
console.dir(elements);
//returns matching 1st element

let allElements=document.querySelectorAll("p");
console.dir(allElements);
//returns all p tags


let elementss=document.querySelector(".head");
console.dir(elementss);
//for class use (.)
//for id no need (.)

elements.tagName //gives the tagname of elements 
// which is h or p or button etc

// document.querySelector("div").children;
// gives the children of div


let div=document.querySelector("div");
console.dir(div);
div.innerText; //gives the inside text of div (pure text)

div.innerHTML; //gives the tags and text of div (html info)

div.innerText="abcd"; //changes the whole div text to abcd 

div.innerHTML="<div>inner div</div>";
// changes the div and adds an inner div to that div

heading.innerHTML="<i>new parah</i>";
//benifits of innerhtml is we can include tags 































