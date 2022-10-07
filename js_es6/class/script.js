
class gender{
    constructor(){
        const mygender = 'male'
    }
    printMyGender(){
        console.log(mygender)
    }
}



class person  extends gender{
    constructor(){
        super();
        console.log('hey this is a constructor from person class')
        this.name = 'Max'
        this.gender = 'female'
        }
printMyname(){
    console.log(this.name)
    console.log(this.gender)
}
}


obj= new person()

obj.printMyname()



// ES6/Babel

class gender1{
    
    mygender = 'male'
  
    printMyGender1(){
        console.log(this.mygender)
    }
}

class person1  extends gender1{
    myname = 'Maxxx';
    gender = 'female';
      
printMyname1 = () =>{
    console.log(this.myname);
    console.log(this.gender);
}
}


obj2= new person1();

obj2.printMyname1();


// Spread operator
const numbers = [1,2,3,4];
const newNumbers =[...numbers,5,6,7];
console.log(newNumbers);
const person = {
    name: 'max'
}

console.log(person);
const newPerson ={
    ...person,
    age: 28
}
console.log(newPerson);


// REST function
const filter = (...args) =>{
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3));


// Destructors


const numbers = [1,3,4];
[num1,num2] = numbers;

console.log(num1,num2);

const numbers = [1,2,3];
const doubleArray = numbers.map((num)=>{
    return num * 2;
});  

console.log(numbers);
console.log(doubleArray);