// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const allEmployees = []
  let decision = true
  while(decision){
    const firstNameBox = prompt("Enter Employee First Name");
    const lastNameBox = prompt("Enter Employee Last Name");
    const salaryBox = prompt("Enter Employee's Salary");
    if(isNaN(salaryBox) || (salaryBox === null)){
      salary = 0
    }
    let employee = {
      firstName: firstNameBox,
      lastName: lastNameBox,
      salary: parseInt(salaryBox)
    }
    decision = confirm("Do you want to add another employee to the list?")
    allEmployees.push(employee);
  } return allEmployees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  totalSalary = 0;

  for (i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    totalSalary += parseInt(currentEmployee.salary);
  }
  let averageSalary = totalSalary / employeesArray.length;
  console.log(`${averageSalary} is the average salary of all employees!`)
  return averageSalary;
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let randomEmployee = Math.floor(Math.random() * employeesArray.length);
console.log();
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
