let marks=[96,75,84,99,36];
console.log(marks);
console.log(marks.length); //property

marks[2]=66; // it gets changed 

let heroes = ["ironman","hulk","spiderman","thor"];
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}

for(let item of heroes){
    console.log(item);
}


// Qs. For a given array with marks of students 
// -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

let markss=[85,97,44,37,76,60];
let n=markss.length;
sum=0;
for(let i=0;i<n;i++){
    sum=sum+i;
}
console.log("avg =",sum/n);

// for(let val of markss){
//     sum+=val;
// }


// Qs. For a given array with prices of 5 items 
// -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. 
// Change the array to store final price after applying offer.


let prices=[250,645,300,900,50];
let i=0;
for(let val of prices){
    let offer=val/10;
    prices[i]=prices[i]-offer;
    console.log('value after offer=${prices[i]}')
    i++;
}


let foodItems=["potato","apple","tomato","mango"];
foodItems.push("chips","burger","paneer"); // adds at end
console.log(foodItems);

let deletedItem=foodItems.pop();
console.log(foodItems);
console.log(deletedItem);

console.log(foodItems.toString());


let marvel=["thor","spiderman","ironman"];
let dc=["superman","batman"];

let hero=marvel.concat(dc);

marvel.unshift("antman");
let del=marvel.shift();
console.log(del);


console.log(marvel.slice(1,3)); //1 include , 3 exclude
console.log(marvel.slice(1));  // from 1 to last 


let arr=[1,2,3,4,5,6,7];

arr.splice(2,2,101,102); // at 2 index delete 2 elements and add 101,102
arr.splice(2,0,101)  // at 2 index delete 0 elements and add 101



// Qs. Create an array to store companies -> 
// “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies=["bloomberg","microsoft","uber","google","ibm","netflx"];

console.log(companies.shift());

console.log(companies.splice(2,1,"ola"));

console.log(companies.push("Amazon"));














