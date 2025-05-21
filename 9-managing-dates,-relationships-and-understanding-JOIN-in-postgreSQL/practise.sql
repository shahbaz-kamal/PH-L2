
DROP Table department

create Table department (
    id INTEGER PRIMARY KEY,
    dept_name text 
)

CREATE Table employee (
    id  SERIAL PRIMARY KEY,
    employee_name VARCHAR(50),
    designation varchar(50),
    department_id int REFERENCES department(id),
    salary  DECIMAL(10,2),
    hire_date DATE
)

INSERT INTO department (id, dept_name) VALUES
(1, 'Human Resources'),
(2, 'Engineering'),
(3, 'Sales'),
(4, 'Marketing'),
(5, 'Finance'),
(6, 'Customer Support');



INSERT INTO employee (employee_name, designation, department_id, salary, hire_date) VALUES 
('Alice Johnson', 'HR Manager', 1, 55000.00, '2020-01-15'),
('Bob Smith', 'Software Engineer', 2, 80000.00, '2019-03-10'),
('Charlie Brown', 'DevOps Engineer', 2, 75000.00, '2021-07-25'),
('Diana Prince', 'Sales Executive', 3, 62000.00, '2022-11-30'),
('Ethan Hunt', 'Marketing Manager', 4, 67000.00, '2018-06-05'),
('Fiona Gallagher', 'Financial Analyst', 5, 71000.00, '2023-01-20'),
('George Miller', 'Sales Manager', 3, 58000.00, '2020-09-17'),
('Hannah Wells', 'HR Associate', 1, 54000.00, '2021-05-12'),
('Ian Somerhalder', 'Content Strategist', 4, 69000.00, '2022-02-22'),
('Julia Roberts', 'Finance Manager', 5, 73000.00, '2017-08-01'),
('Kevin Hart', 'Support Specialist', 6, 46000.00, '2021-04-10'),
('Laura Palmer', 'Support Lead', 6, 48000.00, '2022-10-11'),
('Michael Scott', 'HR Director', 1, 52000.00, '2019-12-01'),
('Nancy Wheeler', 'Frontend Developer', 2, 77000.00, '2020-08-23'),
('Oscar Isaac', 'Backend Developer', 2, 79000.00, '2023-03-15'),
('Pam Beesly', 'SEO Specialist', 4, 64000.00, '2018-11-19'),
('Quentin Blake', 'Sales Coordinator', 3, 60000.00, '2021-09-27'),
('Rachel Green', 'Recruiter', 1, 56000.00, '2022-06-05'),
('Steve Rogers', 'Accountant', 5, 72000.00, '2020-10-30'),
('Tony Stark', 'Tech Lead', 2, 95000.00, '2017-01-18');

SELECT * from employee e
    JOIN department d ON e.department_id=d.id

select dept_name, round(avg(salary)) as avg_salary from department d
    JOIN employee e ON d.id=e.department_id
    GROUP BY dept_name     
