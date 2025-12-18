

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