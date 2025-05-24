-- Active: 1747504319902@@localhost@5432@go_to_queries
CREATE TABLE publishers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
)

CREATE Table books (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    author_name TEXT,
    published_year INT,
    price NUMERIC(6,2),
    in_stock BOOLEAN,
    publisher_id INT,
    Foreign Key (publisher_id) REFERENCES publishers(id)
)

drop table books