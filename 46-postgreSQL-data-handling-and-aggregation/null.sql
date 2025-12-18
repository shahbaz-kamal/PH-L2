select 1=1

select * from heart where maxhr is null

select * from heart where country is NULL

alter  table heart alter column country replace 'USA' with null

update heart set country=null where country ='USA'

select id,country from heart where country is  null

select COALESCE(country,'Not Provideds'),id,country from heart

select * from heart