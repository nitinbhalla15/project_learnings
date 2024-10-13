interface User{
    name:string,
    age:number
}

function calculateAge(user1:User,user2:User):number{
    return user1.age + user2.age;
}


const calculatedAge :number= calculateAge({age:12,name:"nitin"},{age:12,name:"sneha"});
console.log(calculatedAge);