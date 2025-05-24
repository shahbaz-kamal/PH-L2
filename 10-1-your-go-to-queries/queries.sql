ALTER Table books ADD COLUMN genre TEXT

ALTER TABLE books DROP COLUMN genre

ALTER Table books RENAME COLUMN author_name to author

SELECT * from books

SELECT * from books where author='George Orwell'

SELECT title, LENGTH(title) from ;

SELECT avg(price) from books

SELECT MAX(Price),min(price) from books

-- //BETWEEN , LIKE, IN, ILIKE

select * from books

select * from books WHERE price BETWEEN 10 AND 12

SELECT * FROM books WHERE author LIKE '%Orwell'

SELECT * FROM books WHERE title ILIKE 'the%'

SELECT * FROM books WHERE author IN ('Colleen Hoover','George Orwell ')