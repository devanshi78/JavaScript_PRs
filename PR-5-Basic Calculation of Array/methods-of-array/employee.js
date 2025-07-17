// employe managment system with basic array methods

let employee = [
    {
        id : 1,
        name : "Devanshi",
        email : "devanshi@gmail.com",
        post : "Full stack devloper",
    },
    {
        id : 2,
        name : "Diya",
        email : "diya@gmail.com",
        post : "Graphic designer",
    },
    {
        id : 3,
        name : "Drashti",
        email : "drashti@gmail.com",
        post : "Fronted devloper",
    },
    {
        id : 4,
        name : "Maitry",
        email : "maitry@gmail.com",
        post : "UI/UX designer",
    },
    {
        id : 5,
        name : "Pooja",
        email : "pooja@gmail.com",
        post : "Fronted devloper",
    },
];

// push()

employee.push({
    id : 6,
    name : "Riya",
    email : "riya@gmail.com",
    post : "backend devloper",
})

console.log(employee);

// pop()

employee.pop();

console.log(employee);

// map()

let allNames = employee.map(emp => emp.name);
console.log("All Names:", allNames);

// reverse

let sortdata = employee.sort((a,b) => a-b);
let reversedata = employee.reverse();

// find()

let findemail = employee.find((emp) => emp.email === "devanshi@gmail.com");
console.log("User by email : ",findemail);

// filter()

let filteruser = employee.filter((employee) => {
    return employee.name === "Diya";
});

console.log("----------------------------------------------")
console.log("Data Found : ")
console.log(filteruser);