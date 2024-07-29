const employees= [
    {id:1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 , specialization: 'Node.js'},
    {id:2, name:'Alice Smith',age:'28', department:'HR',salary:45000, specialization: 'Node.js' },
    {id:3, name:'Bob Johnson', age:'35', department:'Finance', salary:60000, specialization: 'React'}
];

function displayEmployees(){
const totalEmployees=employees.map((employee,index)=>`<p>${employee.id}: ${employee.name}: ${employee.name}-${employee.department}-$${employee.salary}</p>`).join('');
//THIS WHOLE WILL BE CONSIDERED AS A FUNCTION IN THE PLACEC INSIDE THE MAP FUNCTION (the arrow method is a short method provided by ECMA SCRIPT of describing a function 
//(employee,index)=>`<p>${employee.id}: ${employee.name}: ${employee.name}-${employee.department}-$${employee.salary}</p>`
document.getElementById('employeesDetails').innerHTML=totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries= employees.reduce((acc, employee)=>acc + employee.salary,0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees(){
    const hrEmployees= employees.filter(employee => employee.department==='HR');//a dynamic array contianing filtered elements of employees array that match the given condition
    const hrEmployeesDisplay=hrEmployees.map((employee,index)=>`<p>${employee.id}: ${employee.name}: ${employee.name}-${employee.department}-$${employee.salary}</p>`);
    document.getElementById('employeesDetails').innerHTML=hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee= employees.find(employee=>employee.id===employeeId);
if(foundEmployee)
{
    document.getElementById('employeesDetails').innerHTML=`<p>${employee.id}: ${employee.name}: ${employee.name}-${employee.department}-$${employee.salary}</p>`;
}
else{ 
document.getElementById('employeesDetails')="No employee with given id is found!";
}
}

function filterBySpecialization(){
    const filteredEmployee= employees.filter(employee=>employee.specialization==='Node.js');
    const employeeBySpecialization= filteredEmployee.map((employee,index)=>`<p> ${employee.id}: ${employee.name}: ${employee.name}-${employee.department}-$${employee.salary} -  ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML= employeeBySpecialization;
}