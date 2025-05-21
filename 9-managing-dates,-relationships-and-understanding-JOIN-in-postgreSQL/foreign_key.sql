
-- creating user table
create Table "user" (
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
age int not NULL
)

create Table post (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    posted_date DATE NOT NULL,
    user_id Int REFERENCES "user"(id)
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

SELECT * from "user"

SELECT *  from post
    
-- deleting constraint
-- RESTRICT DELETION -> ON DELETE RESTRICT / ON DELETE NO ACTION (default)
DELETE FROM "user"  
    WHERE id=4

-- Cascading -> ON DELETE CASCADE
create Table post (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    posted_date DATE NOT NULL,
    user_id Int REFERENCES "user"(id) ON DELETE CASCADE
)

DELETE FROM "user"
    WHERE id=4
-- setting null -> ON DELETE SET NULL

create Table post (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    posted_date DATE NOT NULL,
    user_id Int REFERENCES "user"(id) ON DELETE SET NULL
)

select * from post

DELETE from "user"
    where id=1

--Set Default Value -> ON DELETE SET DEFAULT

create Table post (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    posted_date DATE NOT NULL,
    user_id Int REFERENCES "user"(id) ON DELETE SET DEFAULT DEFAULT 2
)

select * from post

SELECT * from "user"

DELETE from "user"
    where id=1