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

let filteruser = employee.filter((employee) => {
    return employee.name === "Diya";
});

console.log(employee);

console.log("----------------------------------------------")
console.log("Data Found : ")
console.log(filteruser);