
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

SELECT * FROM student ORDER BY dob DESC