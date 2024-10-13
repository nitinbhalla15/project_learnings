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


// enum Direction{
//     UP,
//     DOWN,
//     LEFT,
//     RIGHT
// }

// function doSomething(usesInput:<T>){
//     console.log("Key pressed : ",usesInput );
// }

// doSomething(Direction.UP);
// type Input = number | string;

// function firstEle(arr : Input[]){
//     return arr[0];
// }

// const value = firstEle(["nuitin","sneha"]);
// console.log(value.toUpperCase());

function identity<S>(args:S[]):S{
    return args[0];
}

const value = identity(["Nitin","Sneha"]);
console.log(value.toUpperCase());

const value1 = identity([1,2,3,4,5,"nitin"]);
// console.log(value1.toU)
// console.log(value1.toUpperCase())




