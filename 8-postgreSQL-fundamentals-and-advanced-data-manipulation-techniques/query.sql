SELECT * from person2

alter table person2 
 add column email varchar(25) DEFAULT 'default@mail.com' not null;

--  inserting column

INSERT INTO person2 values(4,'test2',45,'test2@gmail.com')

ALTER Table person2 drop email

alter table person2
    RENAME column age to user_age

alter table person2 
    alter column username type varchar(51)

alter table person2
    alter COLUMN user_age set not null;
alter table person2
    alter COLUMN user_age drop not null;
ALTER Table person2
    add constraint unique_person2_user_age UNIQUE(user_age)

ALTER Table person2
    drop constraint unique_person2_user_age