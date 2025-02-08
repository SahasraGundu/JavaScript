const URL="https://cat-fact.herokuapp.com/facts";

// let promise=fetch(URL);
// console.log(promise);  //prints promise

const getFacts=async()=>{
    console.log("getting data......");
     let response= await fetch(URL);
     console.log(response);  //JSON format
     let data=await response.json();
     console.log(data);
     console.log(data[0].text); //and type getFacts()
}

//response is updating on runtime itself
//response is object and have diff values
//status:200=successfully executed
//it is getrequest :api, we r requesting something to get














