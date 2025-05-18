
select * from student

create table student(
student_id SERIAL PRIMARY KEY,
first_Name VARCHAR(50) NOT NULL,
last_name varchar(50) NOT NULL,
age INT,
grade CHAR(2),
course VARCHAR(50),
email VARCHAR(100),
dob DATE,
blood_group VARCHAR(5),
country VARCHAR(50)
)

INSERT INTO student (first_Name, last_name, age, grade, course, email, dob, blood_group, country)
VALUES 
('Alice', 'Johnson', 20, 'A', 'Computer Science', 'alice.johnson@example.com', '2004-03-15', 'O+', 'USA'),

('Bob', 'Smith', 22, 'B', 'Mathematics', 'bob.smith@example.com', '2002-06-10', 'A-', 'Canada'),

('Charlie', 'Lee', 19, 'A', 'Physics', 'charlie.lee@example.com', '2005-09-25', 'B+', 'UK'),

('Diana', 'Garcia', 21, 'C', 'Biology', 'diana.garcia@example.com', '2003-01-05', 'AB-', 'Mexico'),

('Ethan', 'Kim', 23, 'B', 'Chemistry', 'ethan.kim@example.com', '2001-11-30', 'O-', 'South Korea'),

('Fiona', 'Brown', 20, 'A', 'Economics', 'fiona.brown@example.com', '2004-07-18', 'A+', 'Australia'),

('George', 'Miller', 18, 'D', 'History', 'george.miller@example.com', '2006-12-02', 'B-', 'Germany'),

('Hannah', 'Wilson', 22, 'B', 'Philosophy', 'hannah.wilson@example.com', '2002-08-08', 'AB+', 'France'),

('Ian', 'Martinez', 19, 'A', 'Engineering', 'ian.martinez@example.com', '2005-05-12', 'O+', 'Brazil'),

('Julia', 'Anderson', 21, 'C', 'Art', 'julia.anderson@example.com', '2003-10-22', 'A-', 'Italy');

select email as "student Email", age as "student age" from student

SELECT * FROM student 

select country from student ORDER BY country ASC


select DISTINCT blood_group FROM student

SELECT * from student
    where country='USA'

INSERT INTO student (first_Name, last_name, age, grade, course, email, dob, blood_group, country)
VALUES

('Alice', 'White', 21, 'A', 'Computer Science', 'alice.white1@example.com', '2003-02-10', 'O+', 'USA'),
('Bob', 'Green', 20, 'A', 'Computer Science', 'bob.green2@example.com', '2004-05-12', 'O+', 'USA'),
('Carol', 'Black', 22, 'B', 'Computer Science', 'carol.black3@example.com', '2002-11-09', 'O+', 'USA'),
('Dave', 'Brown', 23, 'A', 'Computer Science', 'dave.brown4@example.com', '2001-07-25', 'O+', 'USA'),
('Eva', 'Blue', 19, 'B', 'Computer Science', 'eva.blue5@example.com', '2005-09-17', 'O+', 'USA'),

('Frank', 'Stone', 20, 'C', 'Biology', 'frank.stone6@example.com', '2004-03-03', 'A+', 'UK'),
('Grace', 'Hill', 22, 'B', 'Biology', 'grace.hill7@example.com', '2002-06-14', 'A+', 'UK'),
('Henry', 'Ford', 21, 'A', 'Biology', 'henry.ford8@example.com', '2003-01-19', 'A+', 'UK'),
('Ivy', 'Dale', 20, 'B', 'Biology', 'ivy.dale9@example.com', '2004-08-21', 'A+', 'UK'),
('Jack', 'Miles', 19, 'C', 'Biology', 'jack.miles10@example.com', '2005-10-02', 'A+', 'UK'),

('Kathy', 'Lowe', 23, 'A', 'Physics', 'kathy.lowe11@example.com', '2001-12-11', 'B-', 'India'),
('Leo', 'Woods', 20, 'B', 'Physics', 'leo.woods12@example.com', '2004-07-15', 'B-', 'India'),
('Maya', 'Knight', 22, 'C', 'Physics', 'maya.knight13@example.com', '2002-04-04', 'B-', 'India'),
('Nate', 'Sharp', 21, 'A', 'Physics', 'nate.sharp14@example.com', '2003-09-06', 'B-', 'India'),
('Olga', 'Stone', 19, 'B', 'Physics', 'olga.stone15@example.com', '2005-06-23', 'B-', 'India'),


('Paul', 'King', 20, 'A', 'Design', 'paul.king16@example.com', '2004-01-30', 'AB+', 'France'),
('Quinn', 'Pope', 21, 'B', 'Design', 'quinn.pope17@example.com', '2003-10-10', 'AB+', 'France'),
('Rita', 'Nash', 23, 'C', 'Design', 'rita.nash18@example.com', '2001-05-28', 'AB+', 'France'),
('Steve', 'Bell', 22, 'A', 'Design', 'steve.bell19@example.com', '2002-02-13', 'AB+', 'France'),
('Tina', 'West', 19, 'B', 'Design', 'tina.west20@example.com', '2005-12-20', 'AB+', 'France'),


('Uma', 'Clark', 20, 'C', 'Finance', 'uma.clark21@example.com', '2004-09-01', 'A-', 'Canada'),
('Victor', 'Bates', 22, 'B', 'Finance', 'victor.bates22@example.com', '2002-11-30', 'A-', 'Canada'),
('Wendy', 'Banks', 21, 'A', 'Finance', 'wendy.banks23@example.com', '2003-06-09', 'A-', 'Canada'),
('Xander', 'Holt', 23, 'B', 'Finance', 'xander.holt24@example.com', '2001-03-16', 'A-', 'Canada'),
('Yara', 'Moon', 19, 'A', 'Finance', 'yara.moon25@example.com', '2005-04-22', 'A-', 'Canada'),


('Zack', 'Lars', 22, 'C', 'History', 'zack.lars26@example.com', '2002-07-08', 'O+', 'USA'),
('Ava', 'Bennett', 20, 'B', 'History', 'ava.bennett27@example.com', '2004-02-11', 'B+', 'UK'),
('Ben', 'Frost', 21, 'A', 'History', 'ben.frost28@example.com', '2003-08-03', 'O-', 'India'),
('Chloe', 'Grant', 23, 'B', 'History', 'chloe.grant29@example.com', '2001-01-14', 'A+', 'France'),
('Drew', 'Marsh', 19, 'A', 'History', 'drew.marsh30@example.com', '2005-03-18', 'B-', 'Canada');

select * from student
WHERE blood_group='A+'

SELECT * from student 
where (country='USA' OR country='Australia') AND age=20

select * FROM student 
    where age>=20 AND course='Biology'


SELECT upper(first_name), * from student;
select concat(first_name,' ',last_name) as "Full Name" from student

SELECT length(first_name) from student

SELECT max(age) from student

SELECT max(length(first_name)) from student

SELECT * from student
    where NOT country='USA'

SELECT * from student 
    where email IS NULL

select COALESCE(email, 'Email Not PRovided') from student


select * from student
    WHERE country IN('USA','UK','Canada') 

select * from student
    WHERE country NOT IN('USA','UK','Canada') 

select * from student
    where age BETWEEN 20 and 22

select * from student
    WHERE dob BETWEEN '2003-01-01' and '2005-01-01'

select * from student
    where first_name LIKE '__a%'

select * from student ORDER BY student_id asc limit 5 OFFSET  5*0

select * from student ORDER BY student_id asc limit 5 OFFSET  5*1

select * from student ORDER BY student_id asc limit 5 OFFSET  5*2

DELETE from student
where grade='C' AND country='USA' ;
SELECT * from  student

UPDATE student
    SET email='a@b.com'
    where student_id=8