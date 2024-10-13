function calculateAge(user1, user2) {
    return user1.age + user2.age;
}
var calculatedAge = calculateAge({ age: 12, name: "nitin" }, { age: 12, name: "sneha" });
console.log(calculatedAge);
