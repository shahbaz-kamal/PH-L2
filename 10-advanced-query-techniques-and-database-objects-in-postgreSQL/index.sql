select * from employee

EXPLAIN ANALYSE
SELECT * from employee where department_name='engineering'

create INDEX idx_employee_dept
on employee (department_name)