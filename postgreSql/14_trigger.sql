
select * from employees;
Call update_emp_salary(1,-52000);



-- creating function
CREATE OR REPLACE FUNCTION check_salary()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.salary < 0 THEN
        NEW.salary = 0;  -- Prevents negative salary
    END IF;
    RETURN NEW;         -- Returns the possibly modified row
END;
$$ LANGUAGE plpgsql;


-- triggering function for all time 
CREATE TRIGGER before_update_salary
BEFORE UPDATE ON employees
FOR EACH ROW
EXECUTE FUNCTION check_salary();


Call update_emp_salary(1,-52000);
select * from employees;








