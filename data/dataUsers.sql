-- show database
SHOW DATABASES;

-- select database
USE funlearn;

#create table usuarios
CREATE TABLE users(
	id INT,
    user_name VARCHAR(50),
    user_email VARCHAR(50),
    user_password VARCHAR(50),
    PRIMARY KEY (id)
);

ALTER TABLE users MODIFY COLUMN id INT auto_increment;

INSERT INTO users (user_name,user_email,user_password) VALUE ('admin','admin@gmail.com','admin');

SHOW CREATE TABLE users;

CREATE TABLE `users` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `user_name` varchar(50) DEFAULT NULL,
   `user_email` varchar(50) DEFAULT NULL,
   `user_password` varchar(50) DEFAULT NULL,
   PRIMARY KEY (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
 
 SELECT * FROM users;