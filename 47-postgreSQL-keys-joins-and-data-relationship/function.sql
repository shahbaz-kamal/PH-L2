

create function emp_count() 
RETURNS INT 
LANGUAGE SQL
AS
$$
select count(*) from employees
$$

select emp_count()



create function delete_emp_by_Id(emp_id int)
 returns void LANGUAGE SQL as
 $$
 delete from employees where id=emp_id
 $$ 

 select * from employees
 
 select  delete_emp_by_id(2)


create or replace procedure inc_low_salary_by_dept(dept varchar(50)) 
LANGUAGE plpgsql
as 
$$
declare 
avg_salary int ;
begin
select avg(salary) into avg_salary from employees where department=dept;
update employees set salary = salary * 1.1 where salary < avg_salary and department=dept;
end
$$

call  inc_low_salary_by_dept('HR')

select avg(salary) into avg_salary from employees where department='HR'

select * from employees
