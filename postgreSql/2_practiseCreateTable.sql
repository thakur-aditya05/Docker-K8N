




CREATE DATABASE instagram;

USE instagram;

CREATE TABLE employes(
    email_id serial primary key,
    fname varchar(50) not null,
    lname varchar(50) not null,
    email varchar(100) not null Unique,
    dept varchar(50) not null,
    salary decimal(5,2) default 30000.00,
    hire_date data not null default CURRENT_DATE,
);


INSERT 


























