



drop Type disease_status

create table heart (
    id serial primary key,
    Age int ,
    ChestPainType varchar(10),
    RestingBp int ,
    Cholesterol	int,
    FastingBS int,
    RestingECG varchar(15),
    MaxHR int,
    ExerciseAngina varchar(10),
    Oldpeak FLOAT,
    ST_Slope varchar(50),
    HeartDisease int

)

select * from heart

-- order by
select * from heart 
ORDER BY age asc

select * from heart ORDER BY id asc



alter table heart add column dob Date default null

UPDATE heart
SET dob = MAKE_DATE(EXTRACT(YEAR FROM CURRENT_DATE)::INT - age, 1, 1);

alter table heart add column country varchar(50) default null

UPDATE heart
SET country = CASE
    WHEN id <= 100 THEN 'Bangladesh'
    WHEN id <= 200 THEN 'Srilanka'
    WHEN id <= 300 THEN 'Germany'
    WHEN id <= 400 THEN 'Irak'
    WHEN id <=600 THEN 'Russia'
    WHEN id <=700 THEN 'UK'
    ELSE 'USA'
END;


select * from heart

-- distict
select distinct chestpaintype from heart

-- select student from USA

select * from heart where country='Bangladesh' and age>40

select * from heart where country='Bangladesh' or country='USA'


select id,age,chestpaintype,country from heart
 where (chestpaintype='ATA' or  chestpaintype='NAP' ) and (country='Bangladesh' or country='USA')

select  distinct age from heart order by age desc 


select id,age from heart where age between 40 and 50

select * from heart 
where country ='Bangladesh'
or country ='India'
or country ='USA'

select * from heart where country in ('Bangladesh','USA','India')