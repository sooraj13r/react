// Normal function

function myfunc(name){
    console.log(name)
  }
  
  
  myfunc('Max');


// Arrow function
const my_func = (name) =>{
    console.log(name)
  }
  
  my_func('Max');

  const noArg = () =>{
    console.log("Function has no args")
  }
  noArg();
//    normal way arrrow function return a data
const multiply3 = number =>{
    return number * 2;
} 
console.log(multiply3(3));
//   single line command return function
const multiply = number => number * 2;
console.log(multiply(3));