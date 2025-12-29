

-- 
select fname,salary,
CASE 
    when salary>0 then salary*.10 

end as bonus
    from employee;





-- 
select fname,salary,
CASE
    when salary>0 then ROUND(salary*.10); 
end as bonus
    from employee;







-- 
select 
case 
    when salary>5000 then 'HIGH'
    when salary BETWEEN 48000 AND 550000 THEN 'mid'
    else 'low'
end as sal_cat, count(emp_id)
    from employee
    group by sal_cat 