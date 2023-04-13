CREATE TABLE IF  NOT EXISTS teacher(
	id int PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30) DEFAULT NULL,
	email VARCHAR(30) DEFAULT NULL
	
	);
	
	
INSERT INTO teacher VALUES(null, 'charles','1@gmail.com');


CREATE TABLE IF  NOT EXISTS klass(
	id int PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30) DEFAULT NULL,
	tid int DEFAULT NULL,
	KEY ftid (tid),
	CONSTRAINT fid FOREIGN KEY (tid) REFERENCES teacher(id)
	
	);
	
	
INSERT INTO klass VALUES(null, 'Math', 1);
INSERT INTO klass VALUES(null, 'English', 1);