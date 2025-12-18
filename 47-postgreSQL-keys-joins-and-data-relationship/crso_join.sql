create table employees (
    id serial PRIMARY KEY ,
   name VARCHAR(50),
    dept_id Int REFERENCES departments(id)
)

drop table employees

drop table departments

create table departments (
      id serial PRIMARY KEY ,
      dept_name varchar(50)
)

insert into departments ( dept_name) values ('Engineering'),('IT'),('HR'),('Marketing')


select * from departments

insert into employees (name,dept_id) values ('Jamal',3)

select * from employees

select * from employees cross join departments


select * from employees natural join departments

create database advanced_sql
