SELECT 
    p_name,                      -- Product name
    SUM(total_price)            -- Total revenue generated for each product
FROM 
    billing_info
GROUP BY 
    p_name;                     -- Grouping results by product name
Having 












SELECT 
    p_name,                      -- Product name
    SUM(total_price)            -- Total revenue generated for each product
FROM 
    billing_info
GROUP BY ROLLUP(p_name);                     -- Grouping results by product name













