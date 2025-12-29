-- 



-- 
-- cross join 
SELECT * from custmoers cross join orders;



--
-- inner join 
select * from custmoers c 
INNER join
orders o 
on c.cust_id=o.cust_id;

--  

select c.cust_name , count(o.ord_id) from custmoers c 
INNER join
orders o 
on c.cust_id=o.cust_id;
    Group by cust_name;


select c.cust_name , count(o.price) from custmoers c 
INNER join
orders o 
on c.cust_id=o.cust_id;
    Group by cust_name;






select * from custmoers c 
Left join
orders o 
on c.cust_id=o.cust_id;



select * from custmoers c 
right join
orders o 
on c.cust_id=o.cust_id;




select * from custmoers c 
right join
orders o 
on c.cust_id=o.cust_id;




Create View billing_info As
SELECT 
    o.ord_id,             -- Order ID from 'orders' table
    c.cust_name,          -- Customer name from 'customers' table
    o.ord_date,           -- Order date from 'orders' table
    p.p_name,             -- Product name from 'products' table
    p.price,              -- Product price from 'products' table
    oi.quantity,          -- Quantity of product from 'order_items' table
    (oi.quantity * p.price) AS total_price  -- Total price = quantity × price
FROM order_items oi
JOIN products p ON oi.p_id = p.p_id         -- Link products using product ID
JOIN orders o ON o.ord_id = oi.ord_id       -- Link orders using order ID
JOIN customers c ON o.cust_id = c.cust_id;  -- Link customers using customer ID


select * from billing_info  -- a temp tabel and nothing 



































































