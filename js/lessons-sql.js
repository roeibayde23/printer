/* Hebrew SQL lessons for learn mode. */
(function (root) {
  const SQL_LESSONS = 
{
  "crud": {
    "intro": "CRUD הוא קיצור ל-Create, Read, Update, Delete — ארבע הפעולות הבסיסיות על נתונים. ב-SQL: INSERT, SELECT, UPDATE, DELETE.",
    "items": [
      {
        "term": "SELECT",
        "title": "קריאת נתונים",
        "text": "SELECT בוחר עמודות ושורות מטבלה. כוכבית (*) משמעותה כל העמודות. WHERE מסנן שורות.",
        "code": "SELECT name, city FROM Customers WHERE city = 'Haifa';",
        "run": true
      },
      {
        "term": "INSERT",
        "title": "הוספת שורה",
        "text": "INSERT INTO מוסיף רשומה חדשה. מציינים עמודות וערכים באותו סדר. טקסט במרכאות, מספרים בלי.",
        "code": "INSERT INTO Customers (id, name, city, email, age)\nVALUES (7, 'Shira Azulay', 'Eilat', 'shira@example.com', 31);\nSELECT * FROM Customers WHERE id = 7;",
        "run": true
      },
      {
        "term": "UPDATE",
        "title": "עדכון שורות קיימות",
        "text": "UPDATE ... SET משנה ערכים. בלי WHERE כל השורות יתעדכנו — טעות מסוכנת.",
        "code": "UPDATE Products SET stock = 10 WHERE name = 'Chair';\nSELECT name, stock FROM Products WHERE name = 'Chair';",
        "run": true
      },
      {
        "term": "DELETE",
        "title": "מחיקת שורות",
        "text": "DELETE FROM מוחק שורות שעוברות את ה-WHERE. בלי תנאי תימחק כל הטבלה.",
        "code": "DELETE FROM Products WHERE stock = 0;\nSELECT name, stock FROM Products WHERE name = 'Chair';",
        "run": true
      }
    ]
  },
  "conditions": {
    "intro": "WHERE מסנן שורות לפי תנאים. אפשר להשוות, לשלב עם AND/OR/NOT, לשלול רשימות ותבניות, ולבנות ערך מחושב עם CASE WHEN.",
    "items": [
      {
        "term": "=",
        "title": "שוויון",
        "text": "ב-SQL כותבים = (לא ==). להשוואת NULL לא משתמשים ב-= אלא ב-IS NULL.",
        "code": "SELECT name FROM Customers WHERE city = 'Haifa';",
        "run": true
      },
      {
        "term": "<> / !=",
        "title": "אי-שוויון",
        "text": "<> הוא התחביר התקני. != נתמך ב-‎MySQL‏ וב-‎SQLite‏ ומשמעותו זהה.",
        "code": "SELECT name, city FROM Customers WHERE city <> 'Tel Aviv';",
        "run": true
      },
      {
        "term": "< > <= >=",
        "title": "השוואות גודל",
        "text": "עובדים על מספרים, תאריכים וטקסט. <= ו->= כוללים את הקצה.",
        "code": "SELECT name, price FROM Products WHERE price >= 899;",
        "run": true
      },
      {
        "term": "AND",
        "title": "גם וגם",
        "text": "שני התנאים חייבים להיות אמת. AND «חזק» יותר מ-OR (כמו כפל לפני חיבור).",
        "code": "SELECT name, price FROM Products\nWHERE category = 'Food' AND price < 10;",
        "run": true
      },
      {
        "term": "OR",
        "title": "או",
        "text": "מספיק שאחד התנאים יתקיים.",
        "code": "SELECT name, city FROM Customers\nWHERE city = 'Haifa' OR city = 'Jerusalem';",
        "run": true
      },
      {
        "term": "NOT",
        "title": "שלילה",
        "text": "הופך את תוצאת התנאי. NOT city = 'Tel Aviv' שקול ל-city <> 'Tel Aviv'.",
        "code": "SELECT name FROM Customers WHERE NOT city = 'Tel Aviv';",
        "run": true
      },
      {
        "term": "סוגריים",
        "title": "קדימות",
        "text": "AND מחושב לפני OR. סוגריים קובעים את הסדר במפורש ומונעים טעויות.",
        "code": "SELECT name, category, price FROM Products\nWHERE category = 'Food'\n   OR (category = 'Drinks' AND price < 5);",
        "run": true
      },
      {
        "term": "NOT IN",
        "title": "לא ברשימה",
        "text": "ההפך מ-IN. שימו לב: אם הרשימה מכילה NULL, NOT IN עלול לא להחזיר שורות.",
        "code": "SELECT name, category FROM Products\nWHERE category NOT IN ('Furniture', 'Electronics');",
        "run": true
      },
      {
        "term": "NOT BETWEEN",
        "title": "מחוץ לטווח",
        "text": "ההפך מ-BETWEEN, שעדיין כולל את הקצוות בצד ה«בין». NOT BETWEEN 10 AND 100 = קטן מ-10 או גדול מ-100.",
        "code": "SELECT name, price FROM Products\nWHERE price NOT BETWEEN 10 AND 100;",
        "run": true
      },
      {
        "term": "NOT LIKE",
        "title": "לא מתאים לתבנית",
        "text": "שולל תבנית LIKE. למשל לא מתחיל ב-A.",
        "code": "SELECT name FROM Products WHERE name NOT LIKE 'A%';",
        "run": true
      },
      {
        "term": "IS NULL + OR/AND",
        "title": "שילוב עם ערך חסר",
        "text": "בודקים NULL עם IS NULL, ואפשר לחבר ל-OR/AND כרגיל.",
        "code": "SELECT name, email, age FROM Customers\nWHERE email IS NULL OR age IS NULL;",
        "run": true
      },
      {
        "term": "CASE WHEN",
        "title": "ערך לפי תנאי",
        "text": "בונה עמודה חדשה לפי ענפים, כמו if/elif/else. הענף הראשון שמתקיים מנצח, וסוגרים ב-END.",
        "code": "SELECT name, price,\n  CASE\n    WHEN price >= 500 THEN 'high'\n    WHEN price >= 100 THEN 'mid'\n    ELSE 'low'\n  END AS band\nFROM Products\nWHERE category = 'Furniture';",
        "run": true
      }
    ]
  },
  "orderby": {
    "intro": "ORDER BY קובע את סדר שורות התוצאה. בלי ORDER BY אין הבטחה על הסדר. אפשר למיין לפי כמה עמודות.",
    "items": [
      {
        "term": "ORDER BY",
        "title": "מיון בסיסי",
        "text": "ממיינים לפי עמודה או ביטוי. אפשר למיין גם לפי עמודה שלא מופיעה ב-SELECT.",
        "code": "SELECT name, price FROM Products ORDER BY price;",
        "run": true
      },
      {
        "term": "מיון משני",
        "title": "כמה עמודות",
        "text": "אחרי פסיק באה עמודת השובר-שוויון, כשיש ערכים זהים בראשונה.",
        "code": "SELECT name, city FROM Customers\nORDER BY city ASC, name ASC;",
        "run": true
      }
    ]
  },
  "ascdesc": {
    "intro": "ASC (Ascending) עולה, DESC (Descending) יורד. ברירת המחדל היא ASC.",
    "items": [
      {
        "term": "ASC",
        "title": "סדר עולה",
        "text": "מספרים מהקטן לגדול, טקסט א-ת / A-Z. אפשר להשמיט כי זו ברירת המחדל, אבל כדאי לכתוב במפורש.",
        "code": "SELECT name, price FROM Products\nORDER BY price ASC\nLIMIT 4;",
        "run": true
      },
      {
        "term": "DESC",
        "title": "סדר יורד",
        "text": "מהגדול לקטן. שימושי ל«היקר ביותר» יחד עם LIMIT 1.",
        "code": "SELECT name, price FROM Products\nORDER BY price DESC\nLIMIT 3;",
        "run": true
      },
      {
        "term": "NULL במיון",
        "title": "איפה NULL",
        "text": "ב-‎SQLite‏ וב-‎MySQL‏, NULL נחשב קטן מכל ערך: ב-ASC הוא ראשון, ב-DESC אחרון.",
        "code": "SELECT name, age FROM Customers ORDER BY age DESC;",
        "run": true
      }
    ]
  },
  "nulls": {
    "intro": "NULL הוא ערך חסר או לא ידוע — לא 0 ולא מחרוזת ריקה. משווים אותו רק עם IS NULL / IS NOT NULL.",
    "items": [
      {
        "term": "NULL",
        "title": "מה זה",
        "text": "חסר נתון. השוואה עם = NULL לא מחזירה TRUE, ולכן לא תבחר שורות.",
        "code": "SELECT name, email FROM Customers;",
        "run": true
      },
      {
        "term": "IS NULL",
        "title": "חיפוש חסרים",
        "text": "הדרך הנכונה למצוא שורות בלי ערך.",
        "code": "SELECT name FROM Customers WHERE email IS NULL;",
        "run": true
      },
      {
        "term": "IS NOT NULL",
        "title": "רק מי שיש לו ערך",
        "text": "משאיר שורות עם ערך ידוע.",
        "code": "SELECT name, age FROM Customers WHERE age IS NOT NULL;",
        "run": true
      },
      {
        "term": "COUNT וגם NULL",
        "title": "ספירה",
        "text": "COUNT(*) סופר שורות. COUNT(email) מדלג על NULL. גם SUM/AVG/MIN/MAX מדלגים על NULL.",
        "code": "SELECT COUNT(*) AS total, COUNT(email) AS with_email\nFROM Customers;",
        "run": true
      }
    ]
  },
  "math": {
    "intro": "אפשר לחשב בעמודות עם + - * /, ולסכם קבוצות ערכים עם פונקציות קיבוץ. ROUND מעגל.",
    "items": [
      {
        "term": "+ - * /",
        "title": "חשבון שורה",
        "text": "כפל וחילוק לפני חיבור וחיסור. סוגריים משנים את הסדר.",
        "code": "SELECT 10 + 3 * 2 AS no_paren, (10 + 3) * 2 AS with_paren;",
        "run": true
      },
      {
        "term": "ROUND",
        "title": "עיגול",
        "text": "ROUND(מספר, ספרות). 0 ספרות = מספר שלם.",
        "code": "SELECT ROUND(79.90, 0) AS r0, ROUND(79.90, 1) AS r1;",
        "run": true
      },
      {
        "term": "COUNT",
        "title": "ספירה",
        "text": "COUNT(*) כל השורות, COUNT(עמודה) בלי NULL.",
        "code": "SELECT COUNT(*) FROM Customers;",
        "run": true
      },
      {
        "term": "SUM",
        "title": "סכום",
        "text": "מחבר ערכים בקבוצה, מדלג על NULL.",
        "code": "SELECT SUM(stock) AS electronics_stock\nFROM Products WHERE category = 'Electronics';",
        "run": true
      },
      {
        "term": "AVG",
        "title": "ממוצע",
        "text": "ממוצע חשבוני, בלי NULL.",
        "code": "SELECT AVG(age) AS avg_age FROM Customers;",
        "run": true
      },
      {
        "term": "MIN / MAX",
        "title": "קטן וגדול",
        "text": "הערך הקטן או הגדול ביותר.",
        "code": "SELECT MIN(price) AS cheapest, MAX(price) AS priciest\nFROM Products;",
        "run": true
      }
    ]
  },
  "limit": {
    "intro": "LIMIT חותך את מספר שורות התוצאה. כמעט תמיד משלבים אותו עם ORDER BY.",
    "items": [
      {
        "term": "LIMIT",
        "title": "הגבלת שורות",
        "text": "LIMIT n מחזיר לכל היותר n שורות.",
        "code": "SELECT name, price FROM Products\nORDER BY price DESC\nLIMIT 3;",
        "run": true
      }
    ]
  },
  "offset": {
    "intro": "OFFSET מדלג על שורות, ואז LIMIT לוקח כמה מהבאות. כך בונים דפדוף (עמוד 2, 3…).",
    "items": [
      {
        "term": "OFFSET",
        "title": "דילוג",
        "text": "LIMIT 2 OFFSET 2 מדלג על שתיים ולוקח שתיים.",
        "code": "SELECT name, price FROM Products\nORDER BY price ASC\nLIMIT 2 OFFSET 2;",
        "run": true
      },
      {
        "term": "LIMIT offset, count",
        "title": "צורה קצרה",
        "text": "ב-‎MySQL‏ וב-‎SQLite‏: LIMIT 2, 3 = היסט 2, כמות 3. עדיף לכתוב LIMIT 3 OFFSET 2 כי זה ברור יותר.",
        "code": "SELECT name FROM Products\nORDER BY price ASC\nLIMIT 2, 3;",
        "run": true
      },
      {
        "term": "דפדוף",
        "title": "נוסחת עמוד",
        "text": "OFFSET = (מספר_עמוד - 1) × גודל_עמוד. עמוד 3 בגודל 4: LIMIT 4 OFFSET 8.",
        "code": "SELECT name FROM Products\nORDER BY id\nLIMIT 4 OFFSET 4;",
        "run": true
      }
    ]
  },
  "top": {
    "intro": "SELECT TOP n הוא תחביר של SQL Server. ב-‎MySQL‏ וב-‎SQLite‏ (וגם במשחק הזה) משתמשים ב-LIMIT. TOP לא ירוץ כאן.",
    "items": [
      {
        "term": "LIMIT (MySQL/SQLite)",
        "title": "הדרך אצלנו",
        "text": "זו המקבילה ל-TOP.",
        "code": "SELECT name FROM Products ORDER BY price DESC LIMIT 3;",
        "run": true
      },
      {
        "term": "TOP",
        "title": "SQL Server",
        "text": "SELECT TOP 3 name FROM Products ORDER BY price DESC; — לא רץ ב-‎MySQL‏/SQLite.",
        "code": "-- SQL Server only:\n-- SELECT TOP 3 name FROM Products ORDER BY price DESC;",
        "run": false,
        "sample": "במנוע של printer זו שגיאת תחביר. כותבים LIMIT 3."
      },
      {
        "term": "OFFSET/FETCH",
        "title": "דפדוף ב-‎SQL Server‏",
        "text": "OFFSET 10 ROWS FETCH NEXT 5 ROWS ONLY; מקביל ל-LIMIT 5 OFFSET 10.",
        "code": "-- SQL Server:\n-- SELECT name FROM Products\n-- ORDER BY price\n-- OFFSET 2 ROWS FETCH NEXT 3 ROWS ONLY;",
        "run": false,
        "sample": "ב-‎MySQL‏/SQLite: LIMIT 3 OFFSET 2."
      },
      {
        "term": "TOP PERCENT",
        "title": "אחוז מהשורות",
        "text": "ב-‎SQL Server‏ אפשר SELECT TOP 10 PERCENT. ב-‎MySQL‏ אין — מחשבים את המספר ואז LIMIT.",
        "code": "-- SQL Server only: SELECT TOP 10 PERCENT * FROM Products;",
        "run": false,
        "sample": "לא נתמך ב-‎MySQL‏/SQLite."
      }
    ]
  },
  "like": {
    "intro": "LIKE מחפש לפי תבנית בתוך טקסט. ב-‎SQLite‏ (וברוב הגדרות MySQL) ההשוואה לאותיות אנגליות אינה תלויה ברישיות.",
    "items": [
      {
        "term": "LIKE",
        "title": "השוואת תבנית",
        "text": "WHERE name LIKE 'M%'; — שמות שמתחילים ב-M.",
        "code": "SELECT name FROM Customers WHERE name LIKE 'M%';",
        "run": true
      },
      {
        "term": "%",
        "title": "רצף כלשהו",
        "text": "כולל אפס תווים. '%or%' מוצא or בכל מקום.",
        "code": "SELECT name FROM Products WHERE name LIKE '%or%';",
        "run": true
      },
      {
        "term": "_",
        "title": "תו אחד",
        "text": "בדיוק תו אחד. '_r%' = האות השנייה היא r.",
        "code": "SELECT name FROM Products WHERE name LIKE '_r%';",
        "run": true
      }
    ]
  },
  "wildcards": {
    "intro": "שבע התבניות הקלאסיות מהשיעור. כל אחת מספרת סיפור קצת אחר על המיקום של האותיות.",
    "items": [
      {
        "term": "'a%'",
        "title": "מתחיל ב-a",
        "text": "a ואז כל רצף.",
        "code": "SELECT name FROM Products WHERE name LIKE 'A%';",
        "run": true
      },
      {
        "term": "'%a'",
        "title": "מסתיים ב-a",
        "text": "כל רצף ואז a בסוף.",
        "code": "SELECT name FROM Products WHERE name LIKE '%a';",
        "run": true
      },
      {
        "term": "'%or%'",
        "title": "מכיל or",
        "text": "or מופיע בכל מקום בשם.",
        "code": "SELECT name FROM Products WHERE name LIKE '%or%';",
        "run": true
      },
      {
        "term": "'_r%'",
        "title": "האות השנייה r",
        "text": "תו אחד, אחר כך r, אחר כך כל דבר.",
        "code": "SELECT name FROM Products WHERE name LIKE '_r%';",
        "run": true
      },
      {
        "term": "'a_%'",
        "title": "a ואז לפחות תו אחד",
        "text": "אורך מינימלי 2, מתחיל ב-a.",
        "code": "SELECT name FROM Products WHERE name LIKE 'a_%';",
        "run": true
      },
      {
        "term": "'a__%'",
        "title": "a ואז לפחות שני תווים",
        "text": "אורך מינימלי 3.",
        "code": "SELECT name FROM Products WHERE name LIKE 'a__%';",
        "run": true
      },
      {
        "term": "'a%o'",
        "title": "מתחיל ב-a ומסתיים ב-o",
        "text": "Avocado מתאים, Apple לא.",
        "code": "SELECT name FROM Products WHERE name LIKE 'a%o';",
        "run": true
      }
    ]
  },
  "inbetween": {
    "intro": "IN בודק שייכות לרשימה. BETWEEN בודק טווח כולל את שני הקצוות.",
    "items": [
      {
        "term": "IN",
        "title": "רשימת ערכים",
        "text": "תחליף קריא לכמה תנאי OR.",
        "code": "SELECT name, city FROM Customers\nWHERE city IN ('Haifa', 'Jerusalem');",
        "run": true
      },
      {
        "term": "BETWEEN",
        "title": "טווח כולל",
        "text": "price BETWEEN 100 AND 500 שקול ל-price >= 100 AND price <= 500.",
        "code": "SELECT name, price FROM Products\nWHERE price BETWEEN 100 AND 500;",
        "run": true
      }
    ]
  },
  "alias": {
    "intro": "AS נותן כינוי זמני לעמודה או לטבלה בתוצאה, בלי לשנות את המסד.",
    "items": [
      {
        "term": "AS לעמודה",
        "title": "כותרת ברורה",
        "text": "שימושי במיוחד לחישובים ולפונקציות קיבוץ. המילה AS רשות, אבל מומלצת.",
        "code": "SELECT name AS product, price * 0.9 AS sale\nFROM Products WHERE name = 'Lamp';",
        "run": true
      },
      {
        "term": "AS לטבלה",
        "title": "קיצור",
        "text": "FROM Customers AS c ואז c.name. חשוב מאוד ב-JOIN.",
        "code": "SELECT c.name, c.city\nFROM Customers AS c\nWHERE c.city = 'Haifa';",
        "run": true
      }
    ]
  },
  "distinct": {
    "intro": "DISTINCT מסיר שורות כפולות מהתוצאה בלבד, לא מהטבלה.",
    "items": [
      {
        "term": "DISTINCT",
        "title": "ערכים ייחודיים",
        "text": "כל ערך פעם אחת.",
        "code": "SELECT DISTINCT city FROM Customers;",
        "run": true
      },
      {
        "term": "COUNT(DISTINCT …)",
        "title": "ספירת ייחודיים",
        "text": "כמה ערכים שונים יש.",
        "code": "SELECT COUNT(DISTINCT category) AS n FROM Products;",
        "run": true
      }
    ]
  },
  "types-numeric": {
    "intro": "טיפוסים מספריים לפי MySQL, כמו בקורס. במנוע של המשחק (SQLite) הטיפוסים גמישים יותר, אבל החידון והדוגמאות כאן לפי MySQL.",
    "items": [
      {
        "term": "BIT",
        "title": "שדה ביטים",
        "text": "הטיפוס BIT עם אורך n שומר n סיביות. מתאים לדגלים קומפקטיים, לא למחיר.",
        "code": "CREATE TABLE flags (\n  id INT PRIMARY KEY,\n  active BIT(1)\n);\nINSERT INTO flags VALUES (1, b'1');",
        "run": false,
        "sample": "ערך לדוגמה: 1. הטווח הוא n ביטים, עד 64 ב-‎MySQL‏."
      },
      {
        "term": "TINYINT",
        "title": "שלם קטן, בית אחד",
        "text": "עם סימן: ממינוס 128 עד 127. בלי סימן: מ-0 עד 255.",
        "code": "CREATE TABLE ratings (\n  id INT PRIMARY KEY,\n  stars TINYINT\n);\nINSERT INTO ratings VALUES (1, 5);",
        "run": false,
        "sample": "ערך לדוגמה: 5. הגודל הוא בית אחד."
      },
      {
        "term": "BOOLEAN / BOOL",
        "title": "בוליאני ב-‎MySQL‏",
        "text": "כינוי ל-TINYINT(1). בדרך כלל 0 הוא false ו-1 הוא true — לא טיפוס נפרד כמו בפייתון.",
        "code": "CREATE TABLE users (\n  id INT PRIMARY KEY,\n  is_admin BOOLEAN\n);\nINSERT INTO users VALUES (1, TRUE);",
        "run": false,
        "sample": "ערך לדוגמה: 1 או TRUE. מאחורי הקלעים זה TINYINT(1)."
      },
      {
        "term": "INT / INTEGER",
        "title": "שלם סטנדרטי",
        "text": "INTEGER הוא כינוי ל-INT ב-‎MySQL‏. ארבעה בתים. עם סימן: בערך ממינוס 2.1 מיליארד עד 2.1 מיליארד.",
        "code": "CREATE TABLE Customers (\n  id INT PRIMARY KEY,\n  age INT\n);\nINSERT INTO Customers VALUES (1, 28);",
        "run": false,
        "sample": "ערך לדוגמה: 28. הגודל הוא 4 בתים."
      },
      {
        "term": "BIGINT",
        "title": "שלם גדול",
        "text": "שמונה בתים. למונים עצומים או למזהים שלא יספיק להם INT.",
        "code": "CREATE TABLE events (\n  id BIGINT PRIMARY KEY,\n  hits BIGINT\n);\nINSERT INTO events VALUES (1, 9000000000);",
        "run": false,
        "sample": "ערך לדוגמה: 9,000,000,000. הגודל הוא 8 בתים."
      },
      {
        "term": "FLOAT(size, d)",
        "title": "תחביר ישן לנקודה צפה",
        "text": "size הוא מספר הספרות, וגם d כמה מהן אחרי הנקודה. זה קירוב, לא מדויק לכסף. למחירים עדיף DECIMAL.",
        "code": "CREATE TABLE measures (\n  id INT PRIMARY KEY,\n  reading FLOAT(7, 4)\n);\nINSERT INTO measures VALUES (1, 12.3456);",
        "run": false,
        "sample": "ערך לדוגמה: 12.3456 (משוער). זה תחביר ישן, למדידות ולא לכסף."
      },
      {
        "term": "FLOAT(p)",
        "title": "דיוק ביטים",
        "text": "p הוא מספר ביטי הדיוק. אם p בין 0 ל-24 הערך נשמר כ-FLOAT (4 בתים); מ-25 עד 53 הוא נשמר כ-DOUBLE (8 בתים).",
        "code": "CREATE TABLE measures (\n  id INT PRIMARY KEY,\n  reading FLOAT(12)\n);\nINSERT INTO measures VALUES (1, 3.14159);",
        "run": false,
        "sample": "FLOAT(12) נשמר כ-FLOAT ב-4 בתים. FLOAT(30) נשמר כ-DOUBLE."
      },
      {
        "term": "DOUBLE",
        "title": "נקודה צפה 8 בתים",
        "text": "קירוב מדויק יותר מ-FLOAT, ועדיין לא מדויק כמו DECIMAL.",
        "code": "CREATE TABLE science (\n  id INT PRIMARY KEY,\n  ratio DOUBLE\n);\nINSERT INTO science VALUES (1, 0.333333333);",
        "run": false,
        "sample": "ערך לדוגמה: 0.333333333 (קירוב). הגודל הוא 8 בתים."
      },
      {
        "term": "DOUBLE PRECISION",
        "title": "שם נרדף ל-DOUBLE",
        "text": "ב-‎MySQL‏ הטיפוס DOUBLE PRECISION זהה ל-DOUBLE.",
        "code": "CREATE TABLE science (\n  id INT PRIMARY KEY,\n  ratio DOUBLE PRECISION\n);\nINSERT INTO science VALUES (1, 1.6180339887);",
        "run": false,
        "sample": "אותו טיפוס כמו DOUBLE, בגודל 8 בתים."
      },
      {
        "term": "DECIMAL",
        "title": "עשרוני מדויק — כסף",
        "text": "DECIMAL(10,2) שומר עד 10 ספרות, מהן 2 אחרי הנקודה, בלי שגיאות העיגול של FLOAT.",
        "code": "CREATE TABLE Products (\n  id INT PRIMARY KEY,\n  price DECIMAL(8, 2) NOT NULL\n);\nINSERT INTO Products VALUES (1, 19.90);",
        "run": false,
        "sample": "ערך לדוגמה: 19.90 בדיוק. זה הטיפוס המומלץ למחיר."
      }
    ]
  },
  "types-string": {
    "intro": "טיפוסי טקסט ובינארי לפי MySQL, כולל ENUM וגם SET. ב-‎SQLite‏ אין ENUM או SET מובנים, והטיפוסים גמישים יותר.",
    "items": [
      {
        "term": "CHAR",
        "title": "אורך קבוע",
        "text": "CHAR(n) תופס תמיד n תווים, עם ריפוד רווחים במידת הצורך. מתאים לקודים קצרים.",
        "code": "CREATE TABLE countries (\n  code CHAR(2) PRIMARY KEY,\n  name VARCHAR(80)\n);\nINSERT INTO countries VALUES ('IL', 'Israel');",
        "run": false,
        "sample": "ערך לדוגמה: IL. האורך קבוע: 2 תווים."
      },
      {
        "term": "VARCHAR",
        "title": "אורך משתנה",
        "text": "VARCHAR(n) שומר עד n תווים, ותופס מקום לפי האורך האמיתי. זה השדה הנפוץ לשמות ולתיאורים קצרים.",
        "code": "CREATE TABLE Customers (\n  id INT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL\n);\nINSERT INTO Customers VALUES (1, 'Dana Levi');",
        "run": false,
        "sample": "ערך לדוגמה: Dana Levi (10 תווים מתוך עד 100)."
      },
      {
        "term": "BINARY",
        "title": "בתים באורך קבוע",
        "text": "כמו CHAR אבל בינארי: ההשוואה לפי בתים, בלי כללי שפה.",
        "code": "CREATE TABLE tokens (\n  id INT PRIMARY KEY,\n  stamp BINARY(16)\n);",
        "run": false,
        "sample": "למשל מזהה באורך 16 בתים. זה לא טקסט לקריאה."
      },
      {
        "term": "VARBINARY",
        "title": "בתים באורך משתנה",
        "text": "כמו VARCHAR, אבל לבתים גולמיים.",
        "code": "CREATE TABLE tokens (\n  id INT PRIMARY KEY,\n  stamp VARBINARY(64)\n);",
        "run": false,
        "sample": "מתאים להאש או למפתח קצר."
      },
      {
        "term": "TINYTEXT",
        "title": "טקסט קצר מאוד",
        "text": "עד 255 בתים.",
        "code": "CREATE TABLE notes (\n  id INT PRIMARY KEY,\n  blurb TINYTEXT\n);\nINSERT INTO notes VALUES (1, 'Short note');",
        "run": false,
        "sample": "עד 255 בתים. לשדה קצר עדיף לעיתים VARCHAR."
      },
      {
        "term": "TEXT",
        "title": "טקסט רגיל",
        "text": "עד 65,535 בתים (כ-64KB). מתאים לתיאור, להערה או לפסקה.",
        "code": "CREATE TABLE Products (\n  id INT PRIMARY KEY,\n  description TEXT\n);\nINSERT INTO Products VALUES (1, 'A comfortable wooden desk.');",
        "run": false,
        "sample": "ערך לדוגמה: משפט תיאור. עד כ-64KB."
      },
      {
        "term": "MEDIUMTEXT",
        "title": "טקסט בינוני-ארוך",
        "text": "עד כ-16MB.",
        "code": "CREATE TABLE articles (\n  id INT PRIMARY KEY,\n  body MEDIUMTEXT\n);",
        "run": false,
        "sample": "מתאים למאמרים ארוכים."
      },
      {
        "term": "LONGTEXT",
        "title": "טקסט ארוך מאוד",
        "text": "עד כ-4GB.",
        "code": "CREATE TABLE archives (\n  id INT PRIMARY KEY,\n  body LONGTEXT\n);",
        "run": false,
        "sample": "למסמכים ענקיים. לא ברירת מחדל לשדה רגיל."
      },
      {
        "term": "TINYBLOB",
        "title": "בינארי קטן",
        "text": "עד 255 בתים. למשל אייקון זעיר.",
        "code": "CREATE TABLE files (\n  id INT PRIMARY KEY,\n  thumb TINYBLOB\n);",
        "run": false,
        "sample": "עד 255 בתים גולמיים."
      },
      {
        "term": "BLOB",
        "title": "Binary Large Object",
        "text": "עד כ-64KB. לתמונות קטנות או לקבצים קצרים.",
        "code": "CREATE TABLE files (\n  id INT PRIMARY KEY,\n  data BLOB\n);",
        "run": false,
        "sample": "בתים גולמיים, לא טקסט עם קידוד."
      },
      {
        "term": "MEDIUMBLOB",
        "title": "בינארי בינוני",
        "text": "עד כ-16MB. מתאים לתמונת מוצר טיפוסית.",
        "code": "CREATE TABLE files (\n  id INT PRIMARY KEY,\n  photo MEDIUMBLOB\n);",
        "run": false,
        "sample": "מתאים לתמונה."
      },
      {
        "term": "LONGBLOB",
        "title": "בינארי גדול",
        "text": "עד כ-4GB. מתאים לווידאו או לגיבויים.",
        "code": "CREATE TABLE files (\n  id INT PRIMARY KEY,\n  movie LONGBLOB\n);",
        "run": false,
        "sample": "לקבצים גדולים מאוד."
      },
      {
        "term": "ENUM",
        "title": "בחירה אחת מרשימה",
        "text": "ENUM('small','medium','large') שומר ערך אחד מתוך הרשימה. ב-‎SQLite‏ אין ENUM מובנה.",
        "code": "CREATE TABLE shirts (\n  id INT PRIMARY KEY,\n  size ENUM('small', 'medium', 'large')\n);\nINSERT INTO shirts VALUES (1, 'medium');",
        "run": false,
        "sample": "ערך לדוגמה: medium. ערך מחוץ לרשימה יידחה במצב קפדני."
      },
      {
        "term": "SET",
        "title": "כמה ערכים מהרשימה",
        "text": "SET('milk','sugar','ice') יכול לשמור צירוף, למשל milk,ice. גם הוא לא מובנה ב-‎SQLite‏.",
        "code": "CREATE TABLE drinks (\n  id INT PRIMARY KEY,\n  extras SET('milk', 'sugar', 'ice')\n);\nINSERT INTO drinks VALUES (1, 'milk,ice');",
        "run": false,
        "sample": "ערך לדוגמה: milk,ice — שתי אפשרויות בבת אחת."
      }
    ]
  },
  "groupby": {
    "intro": "GROUP BY מקבץ שורות לפי ערך משותף ומחשב לכל קבוצה קיבוץ. HAVING מסנן קבוצות אחרי החישוב; WHERE מסנן שורות לפני.",
    "items": [
      {
        "term": "GROUP BY",
        "title": "קיבוץ",
        "text": "כל ערך ייחודי הופך לשורת סיכום. העמודות ב-SELECT חייבות להיות מקובצות או בפונקציית קיבוץ.",
        "code": "SELECT category, COUNT(*) AS n\nFROM Products\nGROUP BY category;",
        "run": true
      },
      {
        "term": "HAVING",
        "title": "סינון אחרי קיבוץ",
        "text": "HAVING COUNT(*) >= 3 משאיר רק קבוצות עם לפחות שלושה מוצרים. WHERE לא יכול לראות את COUNT.",
        "code": "SELECT category, COUNT(*) AS n\nFROM Products\nGROUP BY category\nHAVING COUNT(*) >= 3;",
        "run": true
      },
      {
        "term": "WHERE מול HAVING",
        "title": "הסדר הלוגי",
        "text": "FROM → WHERE (שורות) → GROUP BY → HAVING (קבוצות) → SELECT → ORDER BY.",
        "code": "SELECT category, AVG(price) AS avg_price\nFROM Products\nWHERE stock IS NOT NULL\nGROUP BY category\nHAVING AVG(price) > 20\nORDER BY avg_price DESC;",
        "run": true
      },
      {
        "term": "קיבוץ + LIMIT",
        "title": "הקבוצה הגדולה ביותר",
        "text": "ממיינים לפי הספירה וחותכים ל-1.",
        "code": "SELECT category, COUNT(*) AS n\nFROM Products\nGROUP BY category\nORDER BY n DESC\nLIMIT 1;",
        "run": true
      }
    ]
  },
  "join": {
    "intro": "JOIN מחבר טבלאות לפי תנאי ON. INNER רק התאמות, LEFT שומר את כל השמאל, RIGHT את כל הימין. אפשר לחבר שלוש טבלאות, ולחבר טבלה לעצמה עם כינויים.",
    "items": [
      {
        "term": "INNER JOIN",
        "title": "רק התאמות",
        "text": "JOIN בלי מילה נוספת הוא INNER JOIN. שורה בלי התאמה נזרקת.",
        "code": "SELECT c.name, o.id, o.quantity\nFROM Orders o\nJOIN Customers c ON c.id = o.customer_id\nWHERE o.id IN (1, 5);",
        "run": true
      },
      {
        "term": "כינוי לטבלה",
        "title": "c וגם o",
        "text": "מקצר שמות ומבדיל בין טבלאות, חובה ב-self join.",
        "code": "SELECT c.name, c.city\nFROM Customers AS c\nWHERE c.city = 'Haifa';",
        "run": true
      },
      {
        "term": "LEFT JOIN",
        "title": "כל השמאל + התאמות מימין",
        "text": "אם אין התאמה, עמודות הימין הן NULL. תבנית למציאת «יתומים»: WHERE o.id IS NULL.",
        "code": "SELECT p.name, o.id AS order_id\nFROM Products p\nLEFT JOIN Orders o ON o.product_id = p.id\nWHERE p.category = 'Food';",
        "run": true
      },
      {
        "term": "RIGHT JOIN",
        "title": "כל הימין + התאמות משמאל",
        "text": "נתמך ב-‎MySQL‏ וב-‎SQLite‏ 3.39+ (המנוע כאן הוא 3.45). בגרסת SQLite ישנה — הופכים ל-LEFT JOIN עם סדר טבלאות הפוך. FROM Orders o RIGHT JOIN Products p שקול ל-Products p LEFT JOIN Orders o.",
        "code": "SELECT p.name, o.id AS order_id\nFROM Orders o\nRIGHT JOIN Products p ON o.product_id = p.id\nWHERE o.id IS NULL;",
        "run": true
      },
      {
        "term": "שלוש טבלאות",
        "title": "לקוח + הזמנה + מוצר",
        "text": "משרשרים שני JOIN מטבלת הקשר Orders.",
        "code": "SELECT c.name AS customer, p.name AS product, o.quantity\nFROM Orders o\nJOIN Customers c ON c.id = o.customer_id\nJOIN Products p ON p.id = o.product_id\nWHERE o.id = 4;",
        "run": true
      },
      {
        "term": "SELF JOIN",
        "title": "טבלה לעצמה",
        "text": "עובדים ומנהלים מאותה טבלת Employees, עם שני כינויים. LEFT JOIN שומר גם מנהל בלי מנהל-על.",
        "code": "SELECT e.name AS employee, e.role,\n       m.name AS manager\nFROM Employees e\nLEFT JOIN Employees m ON e.manager_id = m.id\nORDER BY e.id;",
        "run": true
      }
    ]
  },
  "mixed": {
    "intro": "כאן מערבבים כמה נושאים יחד, כמו בשאלות אמיתיות. כדאי לחזור לשיעורים הספציפיים אם משהו לא ברור.",
    "items": [
      {
        "term": "שילוב",
        "title": "סינון, מיון וחיתוך",
        "text": "התבנית השכיחה: WHERE, אחר כך ORDER BY, אחר כך LIMIT.",
        "code": "SELECT name, price FROM Products\nWHERE category = 'Food'\nORDER BY price ASC\nLIMIT 2;",
        "run": true
      }
    ]
  }
}
  ;
  root.SQL_LESSONS = SQL_LESSONS;
  if (typeof module !== "undefined" && module.exports) module.exports = { SQL_LESSONS };
})(typeof window !== "undefined" ? window : globalThis);
