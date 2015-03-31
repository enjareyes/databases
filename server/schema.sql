CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  message VARCHAR(140), messageId int NOT NULL, userId VARCHAR(30), roomname VARCHAR(30),
  PRIMARY KEY(messageId) 
);

CREATE TABLE users (
  userId int NOT NULL, userName VARCHAR(30) NOT NULL UNIQUE,
  PRIMARY KEY(userId)
);


-- 'show tables' will display list of tables in mysql console

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

