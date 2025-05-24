create table my_users (
    user_name VARCHAR(50),
    email VARCHAR(100)
)

insert into my_users values('mezba','mezba@t.com'),('Mir','mir@kashem.com')

CREATE Table deleted_user_log  (
    deleted_user_name VARCHAR(50),
    deletedAt TIMESTAMP
)

create or REPLACE Function save_deleted_user()
RETURNS TRIGGER
LANGUAGE plpgsql
AS
$$
BEGIN
INSERT INTO deleted_user_log VALUES(OLD.user_name,now());
RAISE NOTICE 'Deleted log created' ;
RETURN OLD;
END
$$

CREATE Trigger save_deleted_user_log
BEFORE DELETE
ON my_users
FOR EACH row
EXECUTE FUNCTION save_deleted_user();


select * from my_users;

SELECT * from deleted_user_log

delete from my_users where user_name='mezba'
