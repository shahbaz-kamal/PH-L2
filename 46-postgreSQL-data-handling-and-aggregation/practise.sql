CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  age INT,
  country VARCHAR(50),
  email VARCHAR(100)
);

INSERT INTO users (first_name, last_name, age, country, email) VALUES
('Arif',    'Hossain',   25, 'Bangladesh', 'arif@example.com'),
('Sara',    'Khan',      30, 'India',      'sara@example.com'),
('Rafi',    'Ahmed',     22, 'Pakistan',   'rafi@example.com'),
('Nusrat',  'Akter',     28, 'Nepal',      'nusrat@example.com'),
('Tanvir',  'Rahman',    35, 'Sri Lanka',  'tanvir@example.com'),
('Mina',    'Begum',     20, 'Maldives',   'mina@example.com'),
('Fahim',   'Chowdhury', 40, 'Bhutan',     'fahim@example.com'),
('Rumana',  'Sultana',   27, 'Afghanistan','rumana@example.com'),
('Jahid',   'Islam',     24, 'Bangladesh', 'jahid@example.com'),
('Tania',   'Sultana',   29, 'Nepal',      'tania@example.com');

-- Select all users
select * from users
-- Show only first name and email

select first_name,email from users
-- Find users older than 25

select * from users where age>25
-- Count how many users are from each country

select country,count(*) from users group by country

-- Find the youngest user’s age

select min(age) from users

-- Find the oldest user’s age

select max(age) from users

-- Find the average age of all users

select age,avg(age) from users group by age

-- List users ordered by age (youngest first)

select age,count(*) from users group by age ORDER BY age asc


-- Add Some NULL Data for COALESCE Practice

INSERT INTO users (first_name, last_name, age, country, email) VALUES
('Imran', 'Haque', 26, NULL, NULL),
('Lina',  'Begum', 23, NULL, Null);

-- Show email, but if NULL → display "Not Provided"

select email,COALESCE(email,'Not Provided') from users

-- Count users by country, replacing NULL country with "Unknown"
SELECT 
    COALESCE(country, 'Unknown') AS country_name,
    COUNT(*) AS user_count
FROM users
GROUP BY COALESCE(country, 'Unknown')
ORDER BY user_count DESC;


select * from users
