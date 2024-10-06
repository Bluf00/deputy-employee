// Import necessary libraries and models
const inquirer = require('inquirer');
const sequelize = require('../config/connection');
const Department = require('../models/department');
const Role = require('../models/role');
const Employee = require('../models/employee');

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
        case 'Add a Department':
          addDepartment();
          break;
        case 'Exit':
          sequelize.close();
          break;
        // Add cases for other operations
      }
    });
};

// Function to view all departments
const viewDepartments = async () => {
  const departments = await Department.findAll();
  console.table(departments.map(dep => dep.get({ plain: true })));
  mainMenu();
};

// Function to add a new department
const addDepartment = () => {
  inquirer
    .prompt({
      type: 'input',
      name: 'name',
      message: 'Enter department name:',
    })
    .then(async (answer) => {
      await Department.create({ name: answer.name });
      console.log('Department added successfully!');
      mainMenu();
    });
};
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
  mainMenu();
});

mainMenu();
