select * from employee


CREATE Function emp_count()
RETURNS INT
LANGUAGE SQL
AS
$$
SELECT count(*) from employee
$$

create FUNCTION delete_emp()
RETURNS void
LANGUAGE SQL
AS
$$
DELETE from employee WHERE employee_id=30
$$

CREATE Function delete_by_params(p_emp_id int)
RETURNS void
LANGUAGE SQL
AS
$$
DELETE from employee where employee_id=p_emp_id
$$


select emp_count()

SELECT delete_emp()

select delete_by_params(29)

CREATE Procedure remove_emp()
LANGUAGE plpgsql
AS
$$
    BEGIN
     DELETE from employee WHERE employee_id=28;
    END
$$

CALL remove_emp()