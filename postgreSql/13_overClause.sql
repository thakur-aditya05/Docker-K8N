
-- window function 


select fname , salary,  
    sum(salary) over()
    from employees;


select fname , salary,  
    sum(salary) over( order by salary)
    from employees;






select fname , salary,  
    avg(salary) over( order by salary)
    from employees;


select 
    row_number() over(),
    fname,dept,salary
    from employee;



select 
    row_number() over(fname),
    fname,dept,salary
    from employee;




select 
    row_number() over(partition by dept),
    fname,dept,salary
    from employee;


select 
    fname, salary,
    Rank() over(order by salary desc)
    from employee;



select 
    fname, salary,
    DENSE_Rank() over(order by salary desc)
    from employee;



SELECT 
    fname, 
    salary, 
    LEAD(salary) OVER (order by salary desc) 
FROM 
    employees;


SELECT 
    fname, 
    salary, 
    (salary-LEAD(salary) OVER (order by salary desc)) as salary_def 
FROM 
    employees;


-- se Cases - 1
--  We want to calculate the average salary
--  per department and then find all
--  employees whose salary is above the
--  average salary of their department.
WITH avg_sal AS (
  SELECT dept, AVG(salary) AS avg_salary
  FROM employees
  GROUP BY dept
)
SELECT 
  e.emp_id, e.fname, e.dept, e.salary, a.avg_salary
FROM 
  employees e
JOIN 
  avg_sal a ON e.dept = a.dept
WHERE 
  e.salary > a.avg_salary;



-- se Cases - 2
--  We want to find the highest-paid
--  employee in each department.
WITH max_sal AS (
  SELECT dept, MAX(salary) AS max_salary
  FROM employees
  GROUP BY dept
)
SELECT 
  e.emp_id, e.fname, e.dept, e.salary
FROM 
  employees e
JOIN 
  max_sal m ON e.dept = m.dept
WHERE 
  e.salary = m.max_salary;






