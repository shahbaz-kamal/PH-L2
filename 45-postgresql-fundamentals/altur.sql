-- Active: 1766057791256@@127.0.0.1@5432@school
create table employe
  (id serial primary key,
  name varchar(100),
  age int
  )

SELECT current_database();

create database tests 

alter table employe rename to employee

alter table employee add column sex varchar(10)

alter table employee drop column sex

select * from employee

insert into employee (name,age) values 
  (
  'karim','24'
)

alter table employee add column sex varchar(10)

  alter table employee rename column user_name to name

  alter table employee alter column name type varchar(50) 

  select * from employee

alter table employee alter column name set not null


select * from employee

alter table employee alter column sex set default 'M'

alter table employee add column email varchar(50)   
  
  alter table employee drop column email

  insert into employee (name,age) values
  ('Saleh',34)


  select * from employee

  alter table employee add constraint unique_employee_email UNIQUE(email)

  
  insert into employee (name,age,email) values
  ('Saleh',34,'saleh@gmail.com')

  alter table employee drop constraint unique_employee_email 