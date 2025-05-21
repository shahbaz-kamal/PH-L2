select * from student

select country,count(*), avg(age) from student
group by country 

SELECT country,count(*),avg(age) from student
GROUP BY country
HAVING avg(age)>20.5;

SELECT extract(year from dob) as birth_year,count(*) FROM student
    GROUP BY birth_year;