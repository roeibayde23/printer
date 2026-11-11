/* Shared sample database for the SQL track (SQLite / sql.js).
   Table and column names follow the MySQL-course style (English identifiers). */
(function (root) {
  const SCHEMA_SQL = `
PRAGMA foreign_keys = OFF;

DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Products;
DROP TABLE IF EXISTS Customers;

CREATE TABLE Customers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT,
  email TEXT,
  age INTEGER
);

INSERT INTO Customers (id, name, city, email, age) VALUES
  (1, 'Dana Levi',    'Tel Aviv',  'dana@example.com', 28),
  (2, 'Yossi Cohen',  'Haifa',     'yossi@example.com', 35),
  (3, 'Noa Mizrahi',  'Tel Aviv',  NULL, 22),
  (4, 'Avi Peretz',   'Jerusalem', 'avi@example.com', NULL),
  (5, 'Maya Katz',    'Haifa',     'maya@example.com', 41),
  (6, 'Roei Bar',     'Tel Aviv',  'roei@example.com', 29);

CREATE TABLE Products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT,
  price REAL NOT NULL,
  stock INTEGER
);

INSERT INTO Products (id, name, category, price, stock) VALUES
  (1,  'Laptop',    'Electronics', 3200.00, 8),
  (2,  'Mouse',     'Electronics', 79.90,  40),
  (3,  'Desk',      'Furniture',   450.00, 12),
  (4,  'Chair',     'Furniture',   299.00, 0),
  (5,  'Notebook',  'Stationery',  12.50,  200),
  (6,  'Pen',       'Stationery',  4.90,   NULL),
  (7,  'Monitor',   'Electronics', 899.00, 15),
  (8,  'Lamp',      'Furniture',   129.00, 6),
  (9,  'Avocado',   'Food',        9.90,   30),
  (10, 'Orange',    'Food',        4.50,   50),
  (11, 'Bread',     'Food',        8.00,   20),
  (12, 'Pizza',     'Food',        39.90,  7),
  (13, 'Cola',      'Drinks',      6.00,   80),
  (14, 'Apple',     'Food',        3.20,   100);

CREATE TABLE Orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER,
  product_id INTEGER,
  quantity INTEGER,
  order_date TEXT,
  discount REAL
);

INSERT INTO Orders (id, customer_id, product_id, quantity, order_date, discount) VALUES
  (1,  1, 1,  1,  '2026-01-15', 0.10),
  (2,  1, 2,  2,  '2026-01-15', NULL),
  (3,  2, 3,  1,  '2026-02-03', 0.00),
  (4,  3, 5,  5,  '2026-02-20', 0.15),
  (5,  5, 7,  1,  '2026-03-01', NULL),
  (6,  6, 4,  2,  '2026-03-10', 0.05),
  (7,  2, 2,  3,  '2026-03-18', 0.00),
  (8,  4, 8,  1,  '2026-04-02', NULL),
  (9,  6, 1,  1,  '2026-04-11', 0.20),
  (10, 1, 5, 10,  '2026-05-01', 0.00);
`.trim();

  const TABLE_INFO = [
    {
      name: "Customers",
      title: "לקוחות",
      columns: ["id", "name", "city", "email", "age"],
    },
    {
      name: "Products",
      title: "מוצרים",
      columns: ["id", "name", "category", "price", "stock"],
    },
    {
      name: "Orders",
      title: "הזמנות",
      columns: ["id", "customer_id", "product_id", "quantity", "order_date", "discount"],
    },
  ];

  root.SQL_SCHEMA = { SCHEMA_SQL, TABLE_INFO };
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { SCHEMA_SQL, TABLE_INFO };
  }
})(typeof window !== "undefined" ? window : globalThis);
