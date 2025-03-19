// Core type of typescript
// String, Number, boolean

//  variable of typescript
// let
// const
// var

// operators of typescript
// Arithmatic operators
// +, -, *, /
// let x = 2
// console.log(x + 4);
// console.log(x - 4);
// console.log(x * 4);
// console.log(x / 4);

// Assignment operator
// =, +=, -=, /=
// let x = 5
// console.log(x = 4)
// console.log(x += 4)
// console.log(x -= 4)
// console.log(x *= 4)
// console.log(x /= 4)

// Comparision operator
// <, >, <=, >=, ==, ===
// let x = 6
// console.log(x < 3)
// console.log(x < 3)
// console.log(x <= 3)
// console.log(x >= 3)
// console.log(x == 3)
// console.log(x === 3)

// Logical operator
// ||=OR, &&=And, !=Not

// conditional operator
// ?, :


//      Conditional statment

// if(){}
// else{}

// if (true) {
//     console.log("Hello")
// }
// else{
//     console.log("bye ")
// }
// if (false) {
//     console.log("Hello")
// }
// else{
//     console.log("bye ")
// }

// let Name = "Hamza"
// if (Name == "Hamza") {
//     console.log("Well come Hamza")
// }
// else{
//     console.log("bye Hamza")
// }

// let Name = "Hamza"
// let Password = 123
// if (Name == "Hamza" && Password == 123) {
//     console.log("Well come Hamza" +' '+ "userName")
// }
// else{
//     console.log("bye Hamza")
// }

// let Name = "Hamza"
// let Password = 123
// if (Name == "Hamza" && Password == 1234) {
//     console.log("Well come Hamza" +' '+ "userName")
// }
// else{
//     console.log("bye Hamza")
// }


//      Nested if else

// let Name = "Hamza"
// let Password = 123
// let Code = 456

// if (Name == "Hamza" && Password == 123) {
//     console.log("Kindly provide code")

//     if (Code == 456) {
//         console.log("Well come Hamza" +' '+ "userName")
//     }
//     else{
//         console.log("invalid code")
//     }
    
// }

// else if (Name == "osama" && Password == 1231) {
//     console.log("Kindly provide code")

//     if (Code == 456) {
//         console.log("Well come Hamza" +' '+ "userName")
//     }
//     else{
//         console.log("invalid code")
//     }
// }
// else{
//     console.log("bye Hamza")
// }


//       switch case in typescript

// let grade:string = "c"
// switch(grade){
//     case "A":
//         console.log("Your perfomance is excellent")
//         break;
//     case "B":
//         console.log("Your perfomance is good")
//         break;
//     case "c":
//         console.log("you need to work hard on your studies")
//         break;
//     default:
//         console.log("your grade is incorrect")
// }


//      functions in typescript


//      Name function

// function funcName(){
//     console.log("this is my first function")
// }
// funcName()

// function funcName(){
//     console.log("this is my first function")
//     console.log("an other value")
// }
// funcName()

// function name1(){
//     return "Hamza"
// }
// let Name = name1()
// console.log(Name)

// function myFunc() {
//     console.log("my first function")
// }
// myFunc()

// function myFunc() {
//     let totle = 2 +3
//     console.log(totle)
// }
// myFunc()
// myFunc()
// myFunc()

// function myFunc(){
//     let totle = 2 + 2
//     return totle
// }
// let data = myFunc()
// console.log(data)



//   Arrow function

// let arrowFunction = () => {
//     console.log("hamza")
// }
// arrowFunction()

// let arrowFunction = () => {
//     let total = 2+3
//     console.log(total)
// }
// arrowFunction()


//      nested function

// let newFunc = ()=>{
//     console.log("hamza")
// }
// let anotherFun = ()=>{
//     newFunc()
// }
// anotherFun()


//        parameter and arguments

// let sum = (val1:number, val2:number)=>{
//     console.log(val1)
//     console.log(val2)
// }

// sum(3, 7)

// let sum = (val1:number, val2:number)=>{
//     console.log(val1+val2)
    
// }

// sum(3, 7)


//       veriables

// var userName:string = "hamza"
// userName = "osama"
// console.log(userName)

// let userName:string = "hamza"
// userName = "osama"
// console.log(userName)


//      union type
// let mobile:string | number = "mobile"
// mobile = 3038239
// console.log(mobile)


//       module
// import { func } from "./service";
// func()

// import { funcName } from "./service";
// funcName()

// import { funcName } from "./service";
// funcName()


//      Array

// Array ki agr length check karni hay to length wo pori batai ga
// matlab ka 1 sa start kary ga or agr index nikalni hay to array 0 sa start hoga

// let arr = ["hamza", "bilal", "osama", "ahmed"]
// console.log(arr)

// let arr = ["hamza", "bilal", "osama", "ahmed"]
// console.log(arr.length)

// let arr = ["hamza", "bilal", "osama", "ahmed"]
// console.log(arr[2])                     // is answer osama aei ga

// hum array ko 3 different method sa define kar sakty hai
//   1:  by normal method
//   2:  by constructor
//   3:  by array method


// By Normal Method

// let arr1 = ["hamza", "osama", "bilal"]
// console.log("Array: 1", arr1)

//   By constructor Method
//   Yani array ko class ka zarieye
//   constructor ko likny ka method yaad rahy ka constructor ko likny ka liay hum equal ka bad new array liktay hai

// let arr2 = new Array ("israr", "umama", "shabi")
// console.log("Array: 2", arr2)

// by array method
//   array method ko likny ka method yaad rahy ka array method ko likny ka liay hum equal ka bad Array.of liktay hai

// let arr3 = Array.of("hamzabhai797", "zahoor");
// console.log("array: 3", arr3);


//        Nested Array

// let arr = ["chaman lal", "gulzari lal", ["ratan lal", "kunj bihar"]]
// console.log(arr)

// let arr = ["chaman lal", "gulzari lal", ["ratan lal", "kunj bihar"]]
// console.log(arr[2])

// let arr = ["chaman lal", "gulzari lal", ["ratan lal", "kunj bihar"]]
// console.log(arr[2][1])      // ya nested array hai
                            // nested array ma agr mujhe nested waly array sa koi value nikalni hay to us ka method ya hai jesy oper wali line ma kia hay

        //  push method in typescript
// let arr = ["Hamza", "osama", "bilal"]
// arr.push("ahmed")
// console.log(arr)
// console.log(arr.push("aayan")) // is sa index number aajaingy

        // pop
// let arr = ["Hamza", "osama", "bilal"]
// arr.pop()
// console.log(arr)
// console.log(arr.pop()) // is ma just wo value aei ge jo delete ho ge

        // shift
// let arr = ["hamza", "osama", "bilal"]
// arr.shift()
// console.log(arr)
// console.log(arr.shift())

        // unshift
// let arr = ["hamza", "osama", "bilal"]
// arr.unshift("ahmed")
// console.log(arr)
// console.log(arr.unshift("ahmed"))

                // slice
// let arr = ["hamza", "osama", "bilal", "ahmed", "israr"]
// console.log(arr.slice(1,3))

                // splice
// let arr = ["hamza", "osama", "bilal", "ahmed", "israr"]
// let delete2 = arr.splice(1, 2, "zahoor") // 1 sa start hoga or 2 tak jaye ga or 2 ko delete kar dega us ki jaga zahoor lik dega
// console.log(arr)


                // for loop
// let i = 0
// for (i = 0; i < 10; i++){
        // console.log(i)
        // console.log(`${i} x 2 = ${i*2}`) // is ma 2 ka table print ho jai ga
// }

// for (let i = 0; i <= 10; i++){
//         console.log(i)
// }

// for (let i = 0; i <= 10; i++){
//         let n1 =2
//         console.log(n1 + " " + "x" + " " + i + " " + "=")
// }

// for (let i =0; i < 11; i++){
//         // console.log(i)
//         let n1 = 3
//         console.log(n1 + " " + "x" + " " + i + " " + "=" + " " + n1*i)
// }

// nested for loop
// let n = 5
// let a = ""
// for (let i = 1; i <= n; i++){
//      for(let j = 1; j <=i ; j++){
//         a += "*"
//      }
//         a += "\n"
// }
// console.log(a)


// object
// let user = {
//         name: "hamza",
//         lastname: "khan",
//         age: 20,
// }
// console.log(user)

// let user = {
//         name: "hamza",
//         lastname: "khan",
//         age: 20,
// }
// console.log(user.lastname)

// let user = {
//         name: "hamza",
//         lastname: "khan",
//         age: 20,
//         hobbies: ["cricket", "football", "hockey"]
// }
// console.log(user.hobbies)
// console.log(user.hobbies[0])

// let user = {
//         name: "hamza",
//         lastname: "khan",
//         age: 20,
//         hobbies: ["cricket", "football", "hockey"],
//         salary: () => (50000)

// }
// console.log(user.salary())

// let user = {
//         name: "hamza",
//         lastname: "khan",
//         age: 20,
//         hobbies: ["cricket", "football", "hockey"],
//         salary: () => (50000)
// }
// delete user.hobbies  // is sa hobbies delete ho jai gi
// console.log(user)

// let user = {
//         name: "hamza",
//         lastname: "khan",
//         age: 20,
//         hobbies: ["cricket", "football", "hockey"],
//         salary: () => (50000)
// }

// console.log("email" in user) // is sa email check ho jai ga ka user ka pass email hai ya nahi

// let user = {
//         name: "hamza",
//         lastname: "khan",
//         age: 20,
//         hobbies: ["cricket", "football", "hockey"],
//         salary: () => (50000),
//         email: "hamza"
// }

// console.log("email" in user) 


                // math object
// Math object Tecnically predefine javascript/typescript ka function hai

// let x:number = Math.round(4.7)
// console.log(x) // ans 5

// let x:number = Math.round(4.2)
// console.log(x) // anw 4

// let x:number = Math.ceil(4.2)
// console.log(x)

// let x:number = Math.round(4.9)
// console.log(x)

// let x:number = Math.floor(4.9)
// console.log(x)

// let x:number = Math.floor(4.2)
// console.log(x)

// let x: number = Math.trunc(4.9);
// console.log(x); // Output: 4

// let x:number = Math.pow(2, 3)
// console.log(x)

// let x:number = Math.sqrt(2)
// console.log(x)

// let x:number = Math.min(2, 50, 23, 46, 78)
// console.log(x)

// let x:number = Math.max(2, 50, 23, 46, 78)
// console.log(x)

                // Array destructring
let arr = ["Hamza", 21, "hamza@mail"]
let [name1, age, email] = arr
console.log(age)

// time = "4:00"