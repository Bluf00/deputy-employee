// app.js
const inquirer = require('inquirer');
const db = require('./db');

// Main menu function
const mainMenu = () => {
  inquirer
    .prompt({
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add a Role',
        'Add an Employee',
        'Update Employee Role',
        'Exit'
      ]
    })
    .then((answer) => {
      switch (answer.choice) {
        case 'View All Departments':
          viewDepartments();
          break;
        case 'View All Roles':
          viewRoles();
          break;
        case 'View All Employees':
          viewEmployees();
          break;
        case 'Add a Department':
          addDepartment();
          break;
        case 'Add a Role':
          addRole();
          break;
        case 'Add an Employee':
          addEmployee();
          break;
        case 'Update Employee Role':
          updateEmployeeRole();
          break;
        case 'Exit':
          sequelize.close();
          break;
      }
    });
};

// View and add functions
const viewDepartments = async () => { 
  db.query ('select * from departments', ( err, rows)=>{
    if (err){
      return console.log(err)
    }
    console.log(rows.rows)
    console.table(rows.rows)
    mainMenu()
  })
 };
const viewRoles = async () => {   db.query ('select * from roles', ( err, rows)=>{
  if (err){
    return console.log(err)
  }
  console.log(rows.rows)
  console.table(rows.rows)
  mainMenu()
})};
const viewEmployees = async () => {   db.query ('select * from employees', ( err, rows)=>{
  if (err){
    return console.log(err)
  }
  console.log(rows.rows)
  console.table(rows.rows)
  mainMenu()
})};
const addDepartment = () => { /*...*/ };
const addRole = async () => { /*...*/ };
const addEmployee = async () => { /*...*/ };
const updateEmployeeRole = async () => { /*...*/ };


mainMenu()