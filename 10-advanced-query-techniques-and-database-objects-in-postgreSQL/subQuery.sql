
drop table employee

create table employee (
    employee_id SERIAL PRIMARY KEY,
    employee_name varchar(50) NOT NULL,
    department_name VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE
)

INSERT INTO employee (employee_name, department_name, salary, hire_date) VALUES
('Alice Johnson', 'HR', 55000.00, '2020-01-15'),
('Bob Smith', 'Engineering', 80000.00, '2019-03-10'),
('Charlie Brown', 'Engineering', 75000.00, '2021-07-25'),
('Diana Prince', 'Sales', 62000.00, '2022-11-30'),
('Ethan Hunt', 'Marketing', 67000.00, '2018-06-05'),
('Fiona Gallagher', 'Finance', 71000.00, '2023-01-20'),
('George Miller', 'Sales', 58000.00, '2020-09-17'),
('Hannah Wells', 'HR', 54000.00, '2021-05-12'),
('Ian Somerhalder', 'Marketing', 69000.00, '2022-02-22'),
('Julia Roberts', 'Finance', 73000.00, '2017-08-01'),
('Kevin Hart', 'Customer Support', 46000.00, '2021-04-10'),
('Laura Palmer', 'Customer Support', 48000.00, '2022-10-11'),
('Michael Scott', 'HR', 52000.00, '2019-12-01'),
('Nancy Wheeler', 'Engineering', 77000.00, '2020-08-23'),
('Oscar Isaac', 'Engineering', 79000.00, '2023-03-15'),
('Pam Beesly', 'Marketing', 64000.00, '2018-11-19'),
('Quentin Blake', 'Sales', 60000.00, '2021-09-27'),
('Rachel Green', 'HR', 56000.00, '2022-06-05'),
('Steve Rogers', 'Finance', 72000.00, '2020-10-30'),
('Tony Stark', 'Engineering', 95000.00, '2017-01-18'),
('Uma Thurman', 'HR', 53000.00, '2019-02-14'),
('Victor Stone', 'Engineering', 85000.00, '2021-03-22'),
('Wanda Maximoff', 'Marketing', 66000.00, '2022-12-01'),
('Xander Harris', 'Customer Support', 47000.00, '2020-05-10'),
('Yvonne Strahovski', 'Finance', 74000.00, '2021-11-11'),
('Zack Morris', 'Sales', 61000.00, '2023-04-04'),
('Angela Martin', 'HR', 51000.00, '2018-07-07'),
('Barry Allen', 'Engineering', 88000.00, '2019-06-13'),
('Clarke Griffin', 'Marketing', 67500.00, '2020-09-09'),
('Dwight Schrute', 'Sales', 59000.00, '2021-01-01');


 
--retrieve all employees whose salary is greater than the highest salary of the HR department -- Rachel green 56000
--//select * from employee where salary>56000
select max(salary) from employee where department_name='HR'

select * from employee where salary>(select max(salary) from employee where department_name='HR')

--single value(1 row,1column)
--can return multiple row
--can return a single column