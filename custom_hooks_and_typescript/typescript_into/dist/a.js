"use strict";
// function greet(firstName:string){
//     console.log("Hi Good morning : ",firstName);
// }
// greet("Nitin");
//type inference
// function sumOfNumber(a:number,b:number):number{
//     return 2;
// }
// console.log(sumOfNumber(2,3));
// function isAdult(age:number):boolean{
//     return (age>18)?true:false;
// }
// console.log(isAdult(20));
// function fnInsideFn(fnTOcall:()=>void):void{
//     setTimeout(fnTOcall,1000)
// }
// fnInsideFn(()=>{console.log("Hi there")})
// type User={
//     firstName:string;
//     lastName:string;
//     age:number;
//     // email?:string
//     // constructor(name:string,lName:String,age:number){
//     //     this.firstName=name;
//     // }
// }
// function isLegal(user:User){
//     return (user["age"]>=18) ? true : false;
// }
// const obj:User={
//     firstName:"Nitin",
//     lastName:"Bhalla",
//     age:17
// }
// console.log(isLegal(obj));
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
function doSomething(usesInput) {
    console.log("Key pressed : ", usesInput);
}
doSomething(Direction.UP);
