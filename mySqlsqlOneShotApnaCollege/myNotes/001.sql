/**
    * * Highlight: SQL Notes are HERE
    * ! Important: 
    * ? Question: 
    * TODO todo: 
**/



/**
    * * Highlight: creating database
**/

-- create database temp1;
-- CREATE DATABASE temp2;
-- CREATE DATABASE College;

-- create  database temp3

/**
    * * Highlight: Drop database
**/

-- drop database temp3

/**
    * * Highlight: useing database USE keyword
**/

-- USE College ;

-- CREATE TABLE student (
--      id INT PRIMARY KEY,
--      name VARCHAR (50),
--      age INT NOT NULL
-- )

-- primary key means the the id cannot be same for  the students & it should be not null

-- INSERT INTO student VALUES (1,"harry",12);
-- INSERT INTO student VALUES (2,"harrish",12)

--  to print all the data form the sql database

-- SELECT * FROM student;




/**
    * * Highlight: Types of sql command
    * DDL (data defination language) create alter rename truncate & drop
    * DQL (data query language )select
    * DML (data manipulation language) insert update & delete
    * DCL (data control language )grant & revoke permission of users
    * TCL (transaction control language) start transaction commit rollback
    * ! Important: 
    * ? Question: 
    * TODO todo: 
**/

-- CREATE DATABASE IF NOT EXISTS College;
-- SHOW DATABASES



-- to use a database and show all the list of tables and droping the table database

-- -- USE College;
-- -- SHOW TABLES;
-- -- DROP TABLE student;


-- USE College;

-- CREATE TABLE  student(
--     rollno INT PRIMARY KEY,
--     name VARCHAR (255)
-- );

-- SELECT * FROM student




-- USE College;

-- INSERT INTO student (rollno,name)VALUES (1,"rajendra") , (2,"harendra");
-- SELECT * FROM student



/**
    * * Highlight: KEYS Types 
    * there are 2 type of keys
    * ! Important: primary key and secondary key
    * primary key it is a column or ser of columns in a table that uniquely identifies each row a unique id there is only 1 pk and it should be not null
    * foreign key is a columen or a set of columns is a table that refers to the primary key of another table ther can be multiple foreign key and they can repeat foreign key can have duplicate & null values
    * ? Question: 
    * TODO todo: 
**/



/**
    * * Highlight: constraints
    * ! Important:  NOT NULL UNIQUE PRIMARY KEY
    * ? Question: 
    * TODO todo: 
**/

-- USE College;
-- CREATE TABLE temp1(
-- id INT,
-- name VARCHAR (20),
-- age INT,
-- city VARCHAR(20),
-- PRIMARY KEY (id,name)
-- );
-- SHOW TABLE temp1

-- /**
--     * ? Question: what does this mean PRIMARY KEY (id,name)
--     * it means when that 2 or multiple stuendts can have same id or same name but commbination of the name and id should be different
--     * exampele : 11 ->harish;     11->harendra;  OR 11->harish ; 31->harish
-- **/






-- USE College;
-- CREATE TABLE temp1(
-- cust_id INT;
-- FOREIGN KEY (cust_id) references temp2(id)
-- salary INT DEFAULT 25000
-- );
-- SHOW TABLE temp1

-- /**
--     * ? Question: what does this mean FOREIGN KEY (cust_id) references customer(id)
--     * mens the cust_id which is present in this table make it a foreign key and its values should be imported fro the customer table and column name id
--     * ? Question: we can set a default value with INT DEFAULT function
-- **/




USE College;
CREATE TABLE temp1(
id INT PRIMARY KEY,
city VARCHAR (40),
age INT CHECK (age>=13),
CONSTRAINTS age_check CHECK (age>=18 AND city="Delhi")
);
SHOW TABLE temp1


SELECT tableName1, tableName2 FROM temp1
SELECT * FROM temp1
SELECT DISTINCT city FROM student
SELECT * FROM student WHERE marks > 80;
SELECT * FROM student WHERE marks > 60 AND city = "mumbai"


-- arithmetic operator + - * / % 
-- comparision operator   = != >= <= == < >
-- logical operator AND OR NOT IN BETWEEN ALL LIKE ANY
-- bitwise operator   & bitwise and |bit wise or


SELECT * FROM student WHERE marks BETWEEN 80 AND 90
SELECT * FROM student WHERE city IN ("Delhi","Mumbai")
SELECT * FROM student WHERE city NOT IN ("Delhi", "Mumbai")
SELECT * FROM student LIMIT 3;

SELECT * FROM student ORDER BY city ASC;
SELECT * FROM student ORDER BY marks DESC;



-- aggregrate functions
-- aggregrate functions performs a calculation on a set of values and return a single value

COUNT()
MAX()
MIN()
SUM()
AVG()

SELECT MAX(marks) FROM student;
SELECT AVG (marks) FROM student;


group by clause 
groups rowa that have the same values into summary rows
it collects data from multiple records and groups the result by one or more column
generally we use  it with some aggregration function

SELECT city, count (name) FROM student GROUP BY city;
SELECT city, avg(marks) FROM student GROUP BY city;


HAVING clause
having claause is similar to where ie applies some condition on rows ued when used when we want to apply anycondition after grouping 
count numbeerof stents in each citty where max marks cross 90

SELECT COUNT(name), city FROM student GROUP BY city HAVING max(marks)>90





GENERAL order of writing clauses

select column(s)
from taneName
where condition
group by column(s)
having condition
order by column(s) asc





update operatio in tabl

UPDATE tableName SET col1=val1, col2=val2 WHERE condition
UPDATE student SET col1="A" WHERE marks>18



DELETE FROM student WHERE mark<35



revisiting foreign keys


USE College;
CREATE TABLE dept(
id INT PRIMARY KEY,
name VARCHAR (50));
CREATE TABLE teacher(
id INT PRIMARY KEY,
name VARCHAR (50),
deptId INT,
FOREIGN KEY (deptId) REFERENCES dept(id)
)
 

-- the table where we have the original id key is said as parent table and the table where we are importing and using the key is said to be child table




/**
    * * Highlight: cascading in foreign keys
    * ! Important: 2 types on delete cascade and on update cascade
    * * Highlight: on delete cascade
    * when we create an foreign key using this option it deletes the referencting rows in the child table when the referencdd row is deleted in th parent table which has a primary key
    * * Highlight: on update cascade
    * when we create a foreign key using updatecascade the referencing rows are updated in the child table the referenced row is updated in the parent table which has a primary key
    * ? Question: 
    * TODO todo: 
**/

CREATE TABLE student (
    id INT PRIMARY KEY,
    coursID INT ,
    FOREIGN KEY (courseID) REFERENCES course (id) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
)




/**
    * * Highlight: Alter Statement
    * ! Important: alter to change the schema add drop change name for table and column
    * TO ADD column
    * ALTER TABLE tableName
    * ADD COLUMN columnName datatype constraints
    * TO Drop column
    * ALTER TABLE tableName
    * DROP COLUMN columnName
    * TO rename column
    * ALTER TABLE tableName
    * RENAME TO newTableName
    * TO change column
    * ALTER TABLE tableName
    * CHANGE COLUMN oldName newName newDatatype newConstraint
    * TO modify column
    * ALTER TABLE tableName
    * MODIFY colName newDatatype newConstraint
    * ? Question: 
    * TODO todo: 
**/



USE College;
ALTER TABLE teacher
ADD COLUMN age INT NOT NULL DEFAULT 19;

USE College;
ALTER TABLE teacher
MODIFY age VARCHAR (2);


USE College;
ALTER TABLE teacher
CHANGE age stuAge INT;


USE College;
ALTER TABLE teacher
DROP COLUMN stuAge ;


USE College;
ALTER TABLE teacher
RENAME TO  teach ;







/**
    * * Highlight: TRUNCATE TABLE
    * this deletes the data from the table
    * TRUNCATE TABLE teacher
    * ! Important: 
    * ? Question: 
    * TODO todo: 
**/




/**
    * * Highlight: JOINS in SQL
    * join is used to combine rows from two or more tables based on a related column between them
    * Inner join a intersection b
    * Outer join this consiste 3 types
    *     left join a intersection b + a
    *     right join a intersection b + b
    *     full join a + b
    * ! Important: 
    * ? Question: 
    * TODO todo: 
**/

SELECT columns FROM tableA INNER JOIN tableB ON tableA.colName=tableB.colName
SELECT columns FROM tableA LEFT JOIN tableB ON tableA.colName=tableB.colName
SELECT columns FROM tableA RIGHT JOIN tableB ON tableA.colName=tableB.colName
SELECT  * FROM student as a LEFT JOIN course as b ON a.id=b.id UNION SELECT  * FROM student as a RIGHT JOIN course as b ON a.id=b.id

left exclusive and right exclusive
SELECT  * FROM student as a LEFT JOIN course as b ON a.id=b.id WHERE b.id IS NULL
SELECT  * FROM student as a RIGHT JOIN course as b ON a.id=b.id WHERE a .id IS NULL

self join
SELECT  * FROM student as a JOIN course as b ON a.id=b.id 


-- UNION it is used to combine the result set of two or more select statements gives unique record
SELECT column FROM tableA UNION SELECT column FROM tableB


aliases 
alias means alternate names
SELECT columns FROM tableA as tA INNER JOIN tableB as tB ON tA.colName=tB.colName





-- subqueries
-- we can write subquery in 3 formats
-- with select from where ---> the where is used the most

SELECT column FROM tableName WHERE colName operator (subquery)

SELECT name,marks FROM  student WHERE marks > (SELECT AVG(marks) FROM student)

SELECT MAX(marks) FROM  (SELECT * FROM student WHERE city="delhi")
SELECT ( select MAX(marks) from student , names ) from student


mysql views a view is a virtual table based on the result set of an sql statement
a view always shows up to date data the database engine recreatees the view everytime a user quaries it

CREATE VIEW view1 AS SELECT rollno, name FROM student;
SELECT * FROM view1;
SELECT * FROM view1 WHERE marks>90;
DROP VIEW view1;
