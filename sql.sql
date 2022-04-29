use comments;
CREATE TABLE user_comments (
	id int NOT NULL AUTO_INCREMENT,
    email  varchar(20),
    comments varchar(20),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    parentId  int,
	PRIMARY KEY (id)
); 
DROP TABLE user_comments
select * from user_comments;
SELECT * FROM user_comments

INSERT INTO user_comments (email, comments,parentId)
VALUES ("email1@gmail.com","comment from email 1",null); 

INSERT INTO user_comments (email, comments,parentId)
VALUES ("email2@gmail.com","comment from email 2",1),
("email3@gmail.com","comment from email 3",null),
("email4@gmail.com","comment from email 4",3); 