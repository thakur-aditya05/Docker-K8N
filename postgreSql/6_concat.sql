
-- reverse 
SELECT CONCAT(fname, ' ', lname) AS full_name FROM employees;




-- Full name using CONCAT
SELECT CONCAT(fname, ' ', lname) AS full_name FROM employees;



-- Full name with separator using CONCAT_WS
SELECT emp_id, CONCAT_WS('-', fname, lname) AS hyphen_name dept FROM employees;





-- First 3 letters of department
SELECT SUBSTR(dept, 1, 3) FROM employees;      -- we need just this much of starting three digit



-- Length of email address
SELECT LENGTH(email) FROM employees;     -- 



SELECT UPPER(fname) AS upper_firstname, LOWER(dept) AS lower_department FROM employees;



-- Replace domain in email
SELECT REPLACE(email, 'gmail.com', 'company.com') FROM employees;


-- Find position of '@' in email
SELECT POSITION('@' IN email) FROM employees;



-- Replace domain in email
SELECT REPLACE(email, 'gmail.com', 'company.com') FROM employees;



-- Find position of '@' in email
SELECT POSITION('@' IN email) FROM employees;







CREATE TABLE employees (
    email_id SERIAL PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    dept VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) DEFAULT 30000.00,
    hire_date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO employees (fname, lname, email, dept)
VALUES 
('John', 'Doe', 'john.doe@gmail.com', 'Engineering'),
('Alice', 'Smith', 'alice.smith@yahoo.com', 'Marketing'),
('Bob', 'Ray', 'bob.ray@gmail.com', 'Sales');



-- Full name using CONCAT
SELECT CONCAT(fname, ' ', lname) AS full_name FROM employees;
-- Output:
-- 'John Doe'
-- 'Alice Smith'
-- 'Bob Ray'

-- Full name with hyphen using CONCAT_WS
SELECT CONCAT_WS('-', fname, lname) AS hyphen_name FROM employees;
-- Output:
-- 'John-Doe'
-- 'Alice-Smith'
-- 'Bob-Ray'


-- First 3 letters of department
SELECT SUBSTR(dept, 1, 3) FROM employees;
-- Output:
-- 'Eng'
-- 'Mar'
-- 'Sal'

-- Length of email address
SELECT LENGTH(email) FROM employees;
-- Output:
-- 20  -- 'john.doe@gmail.com'
-- 23  -- 'alice.smith@yahoo.com'
-- 18  -- 'bob.ray@gmail.com'



SELECT UPPER(fname) AS upper_firstname, LOWER(dept) AS lower_department FROM employees;
-- Output:
-- 'JOHN',     'engineering'
-- 'ALICE',    'marketing'
-- 'BOB',      'sales'



-- Replace domain in email
SELECT REPLACE(email, 'gmail.com', 'company.com') FROM employees;
-- Output:
-- 'john.doe@company.com'
-- 'alice.smith@yahoo.com'  -- no change, not Gmail
-- 'bob.ray@company.com'



-- Find position of '@' in email
SELECT POSITION('@' IN email) FROM employees;
-- Output:
-- 10   -- 'john.doe@gmail.com'
-- 13   -- 'alice.smith@yahoo.com'
-- 8    -- 'bob.ray@gmail.com'



select * from employee where Length(fname)>5;

-- ---------------------------------------------------------------------------









select length (trim('   Alright  '));






select position('om' in 'Thomas' ); -- find length 



-- 


select concat(left(dept,1),emp_id), fname from employee;



-- --

