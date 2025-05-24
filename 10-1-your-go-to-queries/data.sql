INSERT INTO publishers (name) VALUES
('Penguin Random House'),
('HarperCollins'),
('Simon & Schuster'),
('Macmillan Publishers'),
('Hachette Book Group');

INSERT INTO books (title, author_name, published_year, price, in_stock, publisher_id) VALUES
('The Silent Patient', 'Alex Michaelides', 2019, 15.99, TRUE, 1),
('Where the Crawdads Sing', 'Delia Owens', 2018, 14.50, TRUE, 2),
('The Testaments', 'Margaret Atwood', 2019, 18.99, FALSE, 3),
('Normal People', 'Sally Rooney', 2018, 12.75, TRUE, 4),
('Educated', 'Tara Westover', 2018, 16.00, TRUE, 5),
('Becoming', 'Michelle Obama', 2018, 20.00, TRUE, 1),
('The Midnight Library', 'Matt Haig', 2020, 17.49, TRUE, 2),
('The Alchemist', 'Paulo Coelho', 1988, 10.99, TRUE, 3),
('Atomic Habits', 'James Clear', 2018, 19.99, TRUE, 4),
('The Subtle Art of Not Giving a F*ck', 'Mark Manson', 2016, 14.00, FALSE, 5),
('Dune', 'Frank Herbert', 1965, 13.99, TRUE, 1),
('1984', 'George Orwell', 1949, 9.99, TRUE, 2),
('Brave New World', 'Aldous Huxley', 1932, 11.49, TRUE, 3),
('The Book Thief', 'Markus Zusak', 2005, 12.99, FALSE, 4),
('Sapiens', 'Yuval Noah Harari', 2011, 21.00, TRUE, 5),
('The Power of Now', 'Eckhart Tolle', 1997, 16.45, TRUE, 1),
('Think and Grow Rich', 'Napoleon Hill', 1937, 10.00, FALSE, 2),
('Rich Dad Poor Dad', 'Robert T. Kiyosaki', 1997, 12.75, TRUE, 3),
('Can’t Hurt Me', 'David Goggins', 2018, 22.00, TRUE, 4),
('Greenlights', 'Matthew McConaughey', 2020, 19.99, TRUE, 5),
('It Ends With Us', 'Colleen Hoover', 2016, 13.00, TRUE, 1),
('Verity', 'Colleen Hoover', 2018, 13.49, TRUE, 2),
('Ugly Love', 'Colleen Hoover', 2014, 12.00, TRUE, 3),
('Reminders of Him', 'Colleen Hoover', 2022, 15.00, TRUE, 4),
('Hopeless', 'Colleen Hoover', 2012, 11.99, TRUE, 5),
('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 9.50, TRUE, 1),
('To Kill a Mockingbird', 'Harper Lee', 1960, 10.99, TRUE, 2),
('The Catcher in the Rye', 'J.D. Salinger', 1951, 9.99, FALSE, 3),
('Little Fires Everywhere', 'Celeste Ng', 2017, 14.00, TRUE, 4),
('Circe', 'Madeline Miller', 2018, 13.25, TRUE, 5);


SELECT * FROM books

SELECT * from publishers