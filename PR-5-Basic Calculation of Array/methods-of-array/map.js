// map() (creates a new array by performing a function on each array element)

let users = ["devanshi","nency","riya","maitry"];

let newData = users.map((user) => {
    return user.toUpperCase();
})

console.log(users);
console.log(newData);