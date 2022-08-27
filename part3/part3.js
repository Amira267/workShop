document.write("Please read the console also <br><br>");

////////////////////////////////////////////////////////
//Use 10 of Arrays predefined methods and explain them.""

let arr1 = ["Banana", "Orange", "Apple", "Mango"];
let arr2 = [];
//1. push : adds a new element to array at the end index
arr2.push(1, "red", "blue", 2, [3, 4]);  
console.log(arr2[3]);
//2. splice :method can be used to add new items to an array //0 -> not element removed
arr1.splice(2, 0, "Lemon", "Kiwi");
console.log(arr1)
//3. unshift: add new element to array at the beginning index
arr1.unshift("Lemon");
console.log(arr1)
//4. concat :does not change the arrays. It returns a new array.
const arr3 = ["javascript", "php"];
const all = arr1.concat(arr2, arr3);
console.log(all)
//5.slice :method slices out the rest of the array.
const arr4 = arr1.slice(2); 
console.log(arr4)
//6. sort :sorts an array alphabetically
arr1.sort();
console.log(arr1)
//7. reverse :print reverse the element
arr1.reverse();
console.log(arr1)


//8.filer : filter array on special condition
let ages = [32, 33, 16, 40, 5, 17,20];
function checkAdult(ages) {
  return ages >= 18;
}
console.log(ages.filter(checkAdult));




//9.find :return only the first element with condition
console.log(ages.find(checkAdult));

//10. findIndex : returns the index of the first element that passes a test.
console.log(ages.findIndex(checkAdult));




/////-------------------------------------///////////////\\\\\\\\\\\\----------------------------------------------------\\\\\\\\\


////////////////////
//Use 10 of Objects predefined methods and explain them.

let person = {firstName:"John", 
              lastName:"Doe",
               age:50, 
               eyeColor:"blue",
               childrens: {
                    child1:"Harry",
                    child2:"Joy",
                    child3:"Reta"
               }


}
//1 .Adding a new method to an object 
person.fullName = function() {
                ////////////////////////////////////////////////////////////////
                //2. toupperCase the String value to convert a text to uppercase
                return (this.firstName + " " + this.lastName).toUpperCase();
              };
 //3. dot notation Outputs: JOHN DOE     ==> method stored as a property value.       
document.write(person.fullName());

//4.If you access it without (), it will return the function definition: 
console.log("<br>"+person.fullName)

     // 5. Bracket notation
document.write("<br>"+person["age"]); 


// 6. Updating existing property
person.age = 30;
// console.log(person);
document.write("<br>update age "+person.age); // Prints: 30

    
//7.  Assign person variable to a new variable ==> Any modification in the user will happen in Person
var user = person;
user.eyeColor ="green";
document.write("<br> "+person.eyeColor);
//8. can access nested object ==> childerns is object in person(another object)
document.write("<br>" + person.childrens.child2)

//9.  new keyn and value in person
// // Setting a new property
person.id = "#12";
console.log(person)
console.log(user)
//10 .modify in value of user ,done on person also
user.lastName = "Adam"
console.log(person)



//const myData = Object.values(person);
//document.write(Object.values(person))
// const keys = Object.keys({});   console.log(keys)

//11. assign :create new object copy of object user ==> Any modification in the user2 NOT happen in USER
let user2 = Object.assign({city: 'Alex'}, user);
console.log(user)
console.log(user2)
console.log(user.city)
console.log(user2.city)

/////////////////--------------------------//////////////////////  \\\\\\\\\\\\\\\\\\\\----------------------------------------\\\\\\\\\\\\\

//Write A Nested Function And Explain The Closure->lexical environment.


//JavaScript Nested Functions:

//Nested functions have access to the scope of parent function
// the inner function *plus()* has access to the counter variable in the parent function:
//call to inner function from inside the parent function

function addN() {
    let counter = 0;
    function plus() {counter += 1;}
    plus(); //print :1
    plus(); //print :2
    plus(); //print :3
    plus(); //print :4
    plus(); //print :5
    return counter;
  }
  document.write("<br> Nested FUN "+addN()); //print: 5

//////////////////////////////////////////////////////////////////////// 


//JavaScript Closures:

//self-invoking function.The self-invoking function only runs once (inner FUN)
//that it can access the counter in the parent scope.This is called a JavaScript closure.
//The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
//A closure is a function having access to the parent scope, even after the parent function has closed. <==

let addC = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  addC();//print:1
  addC();//print :2
 document.write( "<br>Closures "+addC());//print :3 <==






