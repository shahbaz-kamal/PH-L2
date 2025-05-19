
SHOW timezone;
SELECT now();

CREATE Table timeZ (ts TIMESTAMP without time zone,tsz timestamp with time zone)

INSERT INTO timez VALUES('2024-01-12 10:45:00','2024-01-12 10:45:00')

select * from timez;

SELECT CURRENT_DATE;


SELECT now()::date; --casting
SELECT now()::TIME;

select to_char(now(),'dd-mm-yyyy')

select current_DATE - INTERVAL '1 year 5 month';

select age(CURRENT_DATE,'1997-07-04')

SELECT * , age(CURRENT_DATE,dob) from student

select extract(year from '2025-05-19'::date)

select 'n'::BOOLEAN