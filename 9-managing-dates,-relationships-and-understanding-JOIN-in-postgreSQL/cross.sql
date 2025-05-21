
CREATE Table employees (
    emp_id SERIAL PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT
)

create  Table department(
    dept_id int,
    dept_name VARCHAR(50)
)

INSERT INTO employees VALUES (1,'John Doe',101),(2,'Jane Smith',102)

INSERT INTO department VALUES (101,'Human Resources'),(102,'Marketing')

SELECT * from department

--cross join
select * from department
    CROSS JOIN employees

--natural join (must contain a common column)
SELECT * from employees
     NATURAL JOIN department