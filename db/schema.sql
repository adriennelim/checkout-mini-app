DROP DATABASE IF EXISTS purchases;

CREATE DATABASE IF NOT EXISTS purchases;

USE purchases;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE shipping_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    address_line_one VARCHAR(255) NOT NULL,
    address_line_two VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    zipcode INT(5) NOT NULL,
    phone INT(10) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE credit_cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    card_name VARCHAR(100) NOT NULL,
    card_number VARCHAR(100) NOT NULL,
    cvv INT (5) NOT NULL,
    zipcode INT (5) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

INSERT INTO users (name, password, email) VALUES ('Merlin', 'aval0n4eva', 'meowlin@meow.com');
INSERT INTO users (name, password, email) VALUES ('Tilly', 'r0astCh1ck3n', 'matilda@britshorthair.com');

INSERT INTO shipping_info (address_line_one, address_line_two, city, zipcode, phone, user_id) 
    VALUES ('2000 1st Ave', 'APT 7', 'Seattle', 98121, 206123456, 1);

INSERT INTO shipping_info (address_line_one, address_line_two, city, zipcode, phone, user_id) 
    VALUES ('2100 1st Ave', 'APT 3', 'Seattle', 98121, 41512322, 2);

INSERT INTO credit_cards (card_name, card_number, cvv, zipcode, user_id) 
    VALUES ('Merlin Cat', '12345678910', 123, 98121, 1);

INSERT INTO credit_cards (card_name, card_number, cvv, zipcode, user_id) 
    VALUES ('Matilda Goedecke', '77777777777', 234, 98121, 2);


