

create table emp_logs (
    id serial primary key,
    emp_name varchar(50),
    action varchar(25),
    action_time TIMESTAMP DEFAULT now()
)

drop table emp_logs




create function log_employee_deletion()
returns TRIGGER
language plpgsql
as
$$
BEGIN
insert into emp_logs (emp_name,action) values (old.name,'delete');
return old;
END;
$$



select * from employees


delete from employees where id=5

select * from employees

select * from emp_logs

create trigger save_emp_deleted_log 
after delete on employees for each row EXECUTE function log_employee_deletion()
