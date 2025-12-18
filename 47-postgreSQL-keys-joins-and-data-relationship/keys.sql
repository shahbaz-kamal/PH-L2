drop table users create table users (
    id serial PRIMARY KEY,
    name varchar(50)
)
insert into
    users (name)
values
    ('Akash'),
    ('Batash'),
    ('Sagor'),
    ('Nodi')

select
    *
from
    users
    

drop table post

 create table post (
        id serial PRIMARY KEY,
        title text,
        userId int REFERENCES users(id)
    )

    insert into post (title) values ('Ami vat khai n a a')

    select * from post

    select  * from post inner join users on post.userid =users.id 

    select * from post as p left join users as u on p.userid=u.id

    select * from post as p right join users as u on p.userid=u.id