create Table "user" (
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
age int not NULL
)

create Table post (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    posted_date DATE NOT NULL,
    user_id Int REFERENCES "user"(id) on Delete set null
)

INSERT INTO "user" (name,age) VALUES
('Alice', 25),
('Bob', 30),
('Charlie', 28),
('Diana', 22),
('Ethan', 35);

INSERT INTO post (title,posted_date,user_id) VALUES
    ('Alice shares her journey in learning SQL', '2025-05-01', 1),
('Alice discusses best practices for SQL joins', '2025-05-02', 1),

('Bob explains JavaScript basics for beginners', '2025-05-03', 2),
('Bob explores advanced React patterns', '2025-05-04', 2),

('Charlie writes about designing REST APIs', '2025-05-05', 3),

('Diana compares CSS Grid and Flexbox', '2025-05-06', 4),

('Ethan introduces Docker for beginners', '2025-05-07', 5),
('Ethan talks about database normalization', '2025-05-08', 5);


drop table "user"

DROP table post

SELECT * FROM post p
    JOIN "user" u on p.user_id=u.id

INSERT INTO post (title,posted_date,user_id) VALUES 
   (
    'hello','2025-5-8',NULL
   )
   
   SELECT * FROM post     
   left JOIN "user" on post.user_id="user".id

SELECT * from post   
   right JOIN "user" on post.user_id="user".id

SELECT * from post