CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  message VARCHAR(140), id int NOT NULL, userId VARCHAR(30), roomname VARCHAR(30) NOTNULL UNIQUE,
  PRIMARY KEY(id) 
);

CREATE TABLE users (
  id int NOT NULL, userName VARCHAR(30) NOT NULL UNIQUE,
  PRIMARY KEY(id)
);


-- 'show tables' will display list of tables in mysql console

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

