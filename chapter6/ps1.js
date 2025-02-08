// Qs. Create a H2 heading element with text - 
// “Hello JavaScript”. Append “from Apna College
// students”to this text using JS.

let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText + "from Apna College Students";
//concatinate 


// Qs. Create 3 divs with common class name - “box”.
//  Access them & add some unique text to each of them.

let divs=document.querySelector(".box");
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";

let i=1;
for(div of divs){
    div.innerText='new unique text ${i}';
    i++;
}









