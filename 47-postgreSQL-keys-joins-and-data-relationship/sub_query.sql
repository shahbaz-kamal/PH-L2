-- Active: 1766057791256@@127.0.0.1@5432@advanced_sql@public

create table employees (
    id serial PRIMARY KEY,
    name VARCHAR(50),
    department varchar(50),
    salary int
)

drop table employees

insert into employees (name,department,salary) values 
('Dolar','HR',30000),
('Pond','Marketing',30000),
('RIver','Engineering',42000),
('Kangal','IT',50000)

select * from employees

-- find the highest salary
select max(salary) from employees

-- find which employees gets the highest salary

select * from employees where salary=(select max(salary) from employees)

-- find employees who earn more than the avg salary

select * from employees where salary > (select avg(salary) from employees)

-- name of the employees who gets highest salary in marketing dept.

select * from employees where salary=(select max(salary) from employees) and department='Marketing'