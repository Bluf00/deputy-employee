DROP DATABASE if exists employee_db2;
CREATE DATABASE employee_db2;
\c employee_db2;

CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id) on delete cascade 
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT, 
  FOREIGN KEY (role_id) REFERENCES roles(id) on delete cascade,
  manager_id INT,
  FOREIGN KEY (manager_id) REFERENCES employees(id) on delete set NULL
);
