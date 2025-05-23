select * from employee

CREATE VIEW dept_avg_salary as 
SELECT department_name,avg(salary) from employee GROUP BY department_name

SELECT * from dept_avg_salary