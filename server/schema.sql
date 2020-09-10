CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(175),
  user_id INT NOT NULL,
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR (25),
  PRIMARY KEY(id)
)



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

