CREATE DATABASE shopshop;
USE shopshop;

CREATE TABLE Categories (
    id INT PRIMARY KEY,
    category VARCHAR(15) NOT NULL DEFAULT 'Clothes',
    category_for VARCHAR(5) NOT NULL DEFAULT 'Women'
);

CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    image1 VARCHAR(255),
    image2 VARCHAR(255),
    image3 VARCHAR(255),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);

CREATE TABLE Customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    postcode CHAR(8)
);

CREATE TABLE Orders (
    id VARCHAR(255) PRIMARY KEY,
    order_date TIMESTAMP DEFAULT now(),
    amount DECIMAL(8,2),
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customers(id) ON DELETE CASCADE
);

CREATE TABLE Order_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(255),
    quantity INT NOT NULL,
    product_id INT,
    FOREIGN KEY (order_id) REFERENCES Orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE
);

-- mysql signin code :  /usr/local/mysql/bin/mysql -uroot -p

