const student={
    fullname:"sahasra",
    marks:94.4,
    printMarks:function(){
        console.log("marks=",this.marks); //this keywords refers to the object we r using
    },    //directly we cant acces the marks . but using this we can
};
// in js array is type of object

const employee={
    calcTax1() {
        console.log("tax rate is 10%");
    },
};


const karan={
    salary:50000,
};

karan.__proto__=employee;
//used to set a prototype of obj.and we can run calctax in karan

const karan1={
    salary:50000,
};
const karan2={
    salary:50000,
};
const karan3={
    salary:50000,
    calcTax(){
        console.log("tax rate is 20%");
    }, //if same func in object and seperate func , it gives the objects functions
};

karan1.__proto__=employee;
karan2.__proto__=employee;
karan3.__proto__=employee;

//we can run by karan1.calcTax;


class Tcar{
    constructor(){    //constructor name we should use 
        console.log("creating new objects"); //if not created it automatically creates(check in console)
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand = brand;  //this-each individual object
    }                           //first brand is objects property and second brand is variable keyword
}

//using this template we can create objects like this down
let fortuner=new Tcar();    //constructor is invoked 
fortuner.setBrand("fortuner");
let lexus=new Tcar();   // constructor is invoked 
lexus.setBrand("lexus");
//fortuner.start(); ,fortuner.stop();
//so two times constructor is invoked


// class Tcar{
//     constructor(brand,mileage){    
//         console.log("creating new objects"); 
//         this.brand=brand;
            // this.mileage=mileage;
//   //here also we can set something 
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }                          
// }

// let fortuner=new Tcar("fortuner",10);   //here it gets called
//type forthuner to get brand



class Parent{
    hello() {
        console.log("hello");
    }
}
class Child extends Parent{   //to reduce the code

}

let obj=new Child();


class person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }

}

class engineer extends person{
    work(){
        console.log("solve problems ");
    }
}

let sos=new engineer();

//sos.eat(); type in console

class doctor extends person{
    work(){
        console.log("treat patients");   //multiple classes can inherit from one class
    }
}




// class person{
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("solve problems ");
//     }

// }

// class engineer extends person{
//     work(){
//         console.log("solve problems ");
//     } 
//       
//if having same functions in both child and parent class then child class function gets invoked
// this is called method overriding
// }

// let sos=new engineer();



// class person{
//     constructor(){
//          console.log("enter parent cons");
//         this.species="homo sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class engineer extends person{
//     constructor(branch){
//      console.log("enter child cons");
//         super(); //to invoke parent class constructor
//         this.branch=branch;
//          console.log("exit child cons");
//     }
//     work(){
//              super.eat();  invokes parents method 
//         console.log("solve problems ");
//     }
// }

// let engobj=new engineer("chemical engineer");



// Qs. You are creating a website for your college. 
// Create a class User with 2 properties, name &
// email. It also has a method called viewData( ) 
// that allows user to view website data.

let DATA="secret info";

class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("data=",DATA);
    }
}

let student1=new user("sos","sos@gmail.com");
let student2=new user("aman","aman.gmail.com");

//student1.viewData();

let teacher1=new user("dean","dean@clg.com");
//teacher1.viewData();


// Create a new class called Admin 
// which inherits from User. Add a new method called
// editData to Admin that allows it to edit website data.

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        DATA="SOME NEW VALUE";
    }
}

let admin1=new admin("admin","admin@clg.com");

//admin.editdata();
//DATA  type in console


//its common to make errors in the code . so to handle those 

let a=5;
let b=3;
console.log("a=",a);
console.log("b=",b);
console.log(a+b);
console.log(a+b);
console.log(a+b);
try{
    console.log(a+c);  // here it is wrror and try catch block doesnot stop the code execution
}
catch(err){
    console.log(err);
}
console.log(a+b);









