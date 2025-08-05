let employees = [];

let editindex = null;

const alertBox = document.getElementById("alertBox");

function showAlert(message,type = "success"){
    alertBox.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
    setTimeout(() => alertBox.innerHTML = "", 2000);
}

function addEmployee(){
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const salary = document.getElementById("salary").value;

    if (!id || !name || !department || !salary) {
        showAlert("All fields are required", "danger");
        return;
    }

    const newEmployee = {
        id : Number(id),
        name: name,
        department: department,
        salary: Number(salary) 
    };

    if (editindex !== null) {
        employees[editindex] = newEmployee;
        showAlert("Employee updated successfully");
        editindex = null;

         document.getElementById("saveBtn").innerText = "Save";
    } else {
        if (employees.some(emp => emp.id === newEmployee.id)) {
            showAlert("Employee ID already exists", "danger");
            return;
        }

        employees.push(newEmployee);
        showAlert("Employee added successfully");
    }
    console.log(employees);            
    displayemp(employees);

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
    document.getElementById("salary").value = "";
}

function displayemp(data = employees){

    const tableBody = document.getElementById("emptable");
    const search = document.getElementById("searchemp");
    tableBody.innerHTML = "";

    let filtered = employees.filter(emp =>
        emp.name.toLowerCase().includes(search.value.toLowerCase()) ||
        emp.department.toLowerCase().includes(search.value.toLowerCase())
    );

    filtered.forEach((emp,index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>
            <td><button class="btn btn-danger" onclick="deleteemployee(${index})">Delete</button>
                <button class="btn btn-warning" onclick="editemployee(${index})">Edit</button></td>`;
        tableBody.appendChild(row);
    });
}

function editemployee(index){
    const emp = employees[index];
    document.getElementById("id").value = emp.id;
    document.getElementById("name").value = emp.name;
    document.getElementById("department").value = emp.department;
    document.getElementById("salary").value = emp.salary;
    editindex = index;

    document.querySelector("#saveBtn").innerText = "Update";
}

function deleteemployee(index){
    employees.splice(index, 1);
    displayemp(employees);
    showAlert("Employee deleted successfully", "danger");
}

displayemp(employees);