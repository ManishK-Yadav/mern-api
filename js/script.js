//print in console
console.log("hello")
console.error("this is an error")
console.info("this is info")
console.warn("this is warning")

//variable-> memory element(it takes certain memory(RAM) and store data temporarily)
// types const,var and let
// syntax->let,const,var <var_name>=<value>

// var is used to redeclare variable_name and value
var age=20
console.log(age)
var age =30
// here both age are different
console.log(age)

// we cannot redeclare variable_name but we can redclare the value
let marks=20
 marks =30
 marks=40
console.log(marks)

// const we cannot change variable value once it declare
const address="janakpur"
// address="Kathmandu" not use
console.log(address)

// Data Types->string,number,boolean,object and array
// Operators(Arithmetic,logical,relational)
// Conditional Statement(if,else,switch and ternary)
// Loop(for,do while)-> Real world use of loop is fetch or read list item from multiple items
// function->block of code that performs specific task(E.g:every button of remote performs specific task)
// ECMA

// Array method-> map:it takes function and function takes 2 parameter where 1 parameter is each item(like(item[i]) and 2 parameter is index(like i=0)). it return value
const list=[1,2,3];
const listvalue=list.map(
    function(item,index){ 
        const value=item*2;
        return value;
    }
)
const listmapvalue=list.map((value,index)=>value*2)

console.log("======Map Value======")
console.log(listvalue)

// Array method-> filter:it takes function and function takes 2 parameter where 1 parameter is each item(like(item[i]) and 2 parameter is index(like i=0)). it return boolean. if value is true it store in variable otherwise not.
const filteredList=list.filter((value,index)=>value%2==0)
console.log("====Filtered Value======")
console.log(filteredList)

// Array method
//3. find:array.find(value)=> return boolean => it gives first value which find but filter gives list of value
//4. includes(check exact matching):array.includes(value)=> return boolean
//5. some:array.some(value)=> return boolean =>if at least one value is true then it returns true otherwise false. same as OR condition
//6. every:array.every(value)=> return boolean =>if at every value is true then it returns true otherwise false. same as AND condition
//7.Sort:array.sort(a,b): if a-b then sort in ascending order, if b-a then sort in descending order

const includesResult=list.includes(2);
const someResult=list.some((value)=>value>2);
const everyResult=list.every((value)=>value>2);
console.log("includes",includesResult)
console.log("Some",someResult)
console.log("Every",everyResult)
list.sort((a,b)=>b-a);
console.log("Sorted list:",list)