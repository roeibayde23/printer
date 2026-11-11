/* SQL question bank. Available in the browser (window.SQL_TOPICS) and in Node (module.exports). */
(function (root) {
  const SQL_TOPICS = 
[
  {
    "id": "crud",
    "title": "CRUD — הוספה, בחירה, עדכון, מחיקה",
    "short": "CRUD",
    "icon": "1",
    "intro": "ארבע פעולות הבסיס על נתונים: INSERT (יצירה), SELECT (קריאה), UPDATE (עדכון) ו-DELETE (מחיקה).",
    "questions": [
      {
        "id": "crud-1",
        "type": "mcq",
        "prompt": "מה המשמעות של ראשי התיבות CRUD?",
        "choices": [
          "Create, Read, Update, Delete — יצירה, קריאה, עדכון, מחיקה",
          "Copy, Rename, Undo, Drop — העתקה, שינוי שם, ביטול, מחיקת טבלה",
          "Column, Row, Unique, Data — עמודה, שורה, ייחודי, נתון",
          "Count, Rank, Union, Distinct — ספירה, דירוג, איחוד, ייחודי"
        ],
        "answer": 0,
        "hint": "כל אות מייצגת פעולה בסיסית על רשומות בטבלה.",
        "explanation": "CRUD הוא קיצור ל-Create, Read, Update, Delete. ב-SQL זה מתורגם לפקודות INSERT, SELECT, UPDATE ו-DELETE."
      },
      {
        "id": "crud-2",
        "type": "mcq",
        "prompt": "איזו פקודה משמשת לקריאת נתונים מטבלה?",
        "choices": [
          "INSERT",
          "SELECT",
          "UPDATE",
          "DELETE"
        ],
        "answer": 1,
        "hint": "המילה באנגלית משמעותה «לבחור».",
        "explanation": "SELECT בוחרת שורות ועמודות מטבלה ומחזירה תוצאה. זו פעולת ה-Read שב-CRUD."
      },
      {
        "id": "crud-3",
        "type": "predict",
        "prompt": "מה יוחזר מהשאילתה הבאה?",
        "code": "SELECT name, city\nFROM Customers\nWHERE city = 'Haifa';",
        "choices": [
          "Yossi Cohen, Haifa וגם Maya Katz, Haifa",
          "Dana Levi, Tel Aviv וגם Roei Bar, Tel Aviv",
          "כל ששת הלקוחות",
          "רק Avi Peretz, Jerusalem"
        ],
        "answer": 0,
        "hint": "בדקו בטבלת Customers מי גר בחיפה.",
        "explanation": "התנאי WHERE city = 'Haifa' מסנן רק את יוסי כהן ואת מאיה כץ. שאר הלקוחות גרים בערים אחרות."
      },
      {
        "id": "crud-4",
        "type": "fill",
        "prompt": "השלימו את השאילתה כך שתוחזרנה כל העמודות של לקוח מספר 1.",
        "template": "SELECT ___ FROM ___ WHERE id = 1;",
        "blanks": [
          [
            "*"
          ],
          [
            "Customers",
            "customers"
          ]
        ],
        "hint": "כוכבית משמעותה «כל העמודות». שם הטבלה הוא באנגלית.",
        "explanation": "SELECT * מחזיר את כל העמודות. FROM Customers מציין את טבלת הלקוחות, ו-WHERE id = 1 בוחר את השורה המבוקשת."
      },
      {
        "id": "crud-5",
        "type": "write",
        "prompt": "כתבו שאילתה שמחזירה את כל העמודות ואת כל השורות מטבלת Products.",
        "starter": "SELECT ",
        "expectedSql": "SELECT * FROM Products;",
        "orderSensitive": false,
        "hint": "השתמשו ב-* ובשם הטבלה.",
        "explanation": "זו הדרך הקצרה לקרוא את כל המוצרים. הכוכבית מייצגת את כל העמודות."
      },
      {
        "id": "crud-6",
        "type": "write",
        "prompt": "כתבו שאילתה שמחזירה רק את עמודת name של לקוחות שגרים בתל אביב (Tel Aviv).",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Customers WHERE city = 'Tel Aviv';",
        "orderSensitive": false,
        "hint": "WHERE city = 'Tel Aviv' — שימו לב למרכאות סביב הטקסט.",
        "explanation": "כשמסננים טקסט, הערך חייב להופיע במרכאות. אמורים להתקבל שלושת הלקוחות מתל אביב: דנה, נועה ורועי."
      },
      {
        "id": "crud-7",
        "type": "write",
        "prompt": "הוסיפו לקוחה חדשה לטבלת Customers עם הערכים: id=7, name='Shira Azulay', city='Eilat', email='shira@example.com', age=31.",
        "starter": "INSERT ",
        "expectedSql": "INSERT INTO Customers (id, name, city, email, age) VALUES (7, 'Shira Azulay', 'Eilat', 'shira@example.com', 31);",
        "gradeTable": "Customers",
        "hint": "המבנה: INSERT INTO table (columns) VALUES (...);",
        "explanation": "INSERT INTO מוסיף שורה חדשה. מציינים את שם הטבלה, את העמודות ואת הערכים באותו סדר. ערכי טקסט במרכאות, מספרים בלי מרכאות."
      },
      {
        "id": "crud-8",
        "type": "write",
        "prompt": "עדכנו את מלאי הכיסא (Chair, id = 4) בטבלת Products כך ש-stock יהיה 10.",
        "starter": "UPDATE ",
        "expectedSql": "UPDATE Products SET stock = 10 WHERE id = 4;",
        "gradeTable": "Products",
        "hint": "UPDATE ... SET ... WHERE ... — אל תשכחו את ה-WHERE, אחרת כל השורות יתעדכנו.",
        "explanation": "UPDATE Products SET stock = 10 WHERE id = 4; משנה רק את השורה של Chair. בלי WHERE כל המוצרים היו מקבלים מלאי 10 — טעות נפוצה ומסוכנת."
      },
      {
        "id": "crud-9",
        "type": "write",
        "prompt": "מחקו מטבלת Products את כל המוצרים שמלאי שלהם הוא 0.",
        "starter": "DELETE ",
        "expectedSql": "DELETE FROM Products WHERE stock = 0;",
        "gradeTable": "Products",
        "hint": "DELETE FROM Products WHERE ...",
        "explanation": "DELETE FROM Products WHERE stock = 0; מוחק את Chair, שזה המוצר היחיד עם מלאי 0. גם כאן WHERE הוא קריטי: בלי תנאי תימחק כל הטבלה."
      },
      {
        "id": "crud-10",
        "type": "mcq",
        "prompt": "מה יקרה אם נריץ UPDATE Products SET price = 0; בלי WHERE?",
        "choices": [
          "רק המוצר הראשון יתעדכן",
          "השאילתה תיכשל עם שגיאה",
          "מחיר כל המוצרים יהפוך ל-0",
          "שום דבר — SQL מתעלם מפקודה בלי WHERE"
        ],
        "answer": 2,
        "hint": "WHERE הוא רשות תחבירית, לא חובה.",
        "explanation": "בלי WHERE הפקודה חלה על כל השורות. לכן תמיד מוודאים את התנאי לפני UPDATE או DELETE."
      }
    ]
  },
  {
    "id": "orderby",
    "title": "ORDER BY — מיון תוצאות",
    "short": "ORDER BY",
    "icon": "2",
    "intro": "ORDER BY ממיין את שורות התוצאה. ASC מהקטן לגדול, DESC מהגדול לקטן. אפשר למיין לפי כמה עמודות.",
    "questions": [
      {
        "id": "ord-1",
        "type": "mcq",
        "prompt": "מה המשמעות של ASC במיון?",
        "choices": [
          "Ascending — סדר עולה (מהקטן לגדול / א־ת)",
          "Asymmetric — מיון אקראי",
          "ASCII — מיון לפי קוד תווים בלבד, תמיד יורד",
          "Ask — SQL שואל את המשתמש איך למיין"
        ],
        "answer": 0,
        "hint": "ההפך מ-DESC (Descending).",
        "explanation": "ASC הוא סדר עולה: מספרים מהקטן לגדול, טקסט מ-A ל-Z. DESC הוא סדר יורד."
      },
      {
        "id": "ord-2",
        "type": "mcq",
        "prompt": "אם כותבים ORDER BY price בלי ASC או DESC, מה יהיה סדר ברירת המחדל?",
        "choices": [
          "DESC — מהיקר לזול",
          "ASC — מהזול ליקר",
          "אין סדר מוגדר",
          "הסדר שבו הנתונים הוזנו בלבד, תמיד"
        ],
        "answer": 1,
        "hint": "ברירת המחדל היא הסדר «הרגיל», העולה.",
        "explanation": "כשלא מציינים כיוון, SQL משתמש ב-ASC. אפשר לכתוב אותו במפורש לקריאות."
      },
      {
        "id": "ord-3",
        "type": "predict",
        "prompt": "מהן שלוש השורות שיוחזרו?",
        "code": "SELECT name FROM Products\nORDER BY price ASC\nLIMIT 3;",
        "choices": [
          "Apple, Orange, Pen",
          "Laptop, Monitor, Desk",
          "Pen, Apple, Orange",
          "Avocado, Bread, Cola"
        ],
        "answer": 0,
        "hint": "המחירים הנמוכים ביותר: Apple 3.20, Orange 4.50, Pen 4.90.",
        "explanation": "מיון לפי מחיר עולה ואז LIMIT 3 מחזיר את שלושת הזולים ביותר: Apple (3.20), Orange (4.50) ו-Pen (4.90)."
      },
      {
        "id": "ord-4",
        "type": "predict",
        "prompt": "באיזה סדר יופיעו הלקוחות? שימו לב לערך ה-NULL.",
        "code": "SELECT name, age FROM Customers\nORDER BY age DESC;",
        "choices": [
          "Maya 41, Yossi 35, Roei 29, Dana 28, Noa 22, ואז Avi עם NULL בסוף",
          "Avi עם NULL ראשון, ואז Maya 41 עד Noa 22",
          "לפי סדר ה-id: Dana ואז Yossi…",
          "Noa 22 ראשונה, Maya 41 אחרונה"
        ],
        "answer": 0,
        "hint": "ב-SQLite וב-MySQL, NULL נחשב קטן מכל ערך: ב-DESC הוא בסוף, ב-ASC בהתחלה.",
        "explanation": "ORDER BY age DESC מציג קודם את הגילאים הגבוהים. ל-Avi אין גיל (NULL), וב-SQLite/MySQL ערכי NULL קטנים מכל מספר — לכן ב-DESC הם מופיעים בסוף."
      },
      {
        "id": "ord-5",
        "type": "fill",
        "prompt": "השלימו כדי לקבל את המוצרים מהזול ליקר.",
        "template": "SELECT name, price FROM Products ORDER BY price ___;",
        "blanks": [
          [
            "ASC",
            "asc"
          ]
        ],
        "hint": "סדר עולה.",
        "explanation": "ORDER BY price ASC ממיין ממחיר נמוך לגבוה. ASC הוא גם ברירת המחדל, אבל כדאי לכתוב אותו במפורש."
      },
      {
        "id": "ord-6",
        "type": "write",
        "prompt": "כתבו שאילתה שמחזירה את שמות כל המוצרים, מהיקר ביותר לזול ביותר.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products ORDER BY price DESC;",
        "orderSensitive": true,
        "hint": "ORDER BY price DESC",
        "explanation": "כשהסדר חשוב, חובה לציין ORDER BY. בלי זה אין הבטחה על סדר השורות. כאן DESC נותן: Laptop, Monitor, Desk וכן הלאה."
      },
      {
        "id": "ord-7",
        "type": "write",
        "prompt": "החזירו את name ו-city של כל הלקוחות, ממוינים קודם לפי עיר בסדר עולה ואז לפי שם בסדר עולה.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, city FROM Customers ORDER BY city ASC, name ASC;",
        "orderSensitive": true,
        "hint": "אפשר לכתוב שתי עמודות אחרי ORDER BY, מופרדות בפסיק.",
        "explanation": "מיון משני נכנס לפעולה כשיש שוויון בראשון. קודם כל הערים (Haifa, Jerusalem, Tel Aviv) ובתוך אותה עיר — השמות לפי אלפבית."
      },
      {
        "id": "ord-8",
        "type": "mcq",
        "prompt": "האם מותר למיין לפי עמודה שלא מופיעה ב-SELECT?",
        "choices": [
          "כן, ב-MySQL וב-SQLite זה מותר",
          "לא, זו שגיאת תחביר תמיד",
          "רק אם זו עמודת מפתח ראשי",
          "רק בתוך תת-שאילתה"
        ],
        "answer": 0,
        "hint": "למשל SELECT name FROM Products ORDER BY price;",
        "explanation": "כן. אפשר לכתוב SELECT name FROM Products ORDER BY price; והמיון יתבסס על המחיר גם אם הוא לא מוצג בתוצאה."
      },
      {
        "id": "ord-9",
        "type": "predict",
        "prompt": "באיזה סדר יופיעו השמות?",
        "code": "SELECT name FROM Customers\nORDER BY name ASC;",
        "choices": [
          "Avi Peretz, Dana Levi, Maya Katz, Noa Mizrahi, Roei Bar, Yossi Cohen",
          "Yossi Cohen, Roei Bar, Noa Mizrahi, Maya Katz, Dana Levi, Avi Peretz",
          "Dana Levi, Yossi Cohen, Noa Mizrahi, Avi Peretz, Maya Katz, Roei Bar",
          "Roei Bar, Maya Katz, Dana Levi…"
        ],
        "answer": 0,
        "hint": "מיון אלפביתי לפי כל המחרוזת, אות ראשונה קודם.",
        "explanation": "סדר עולה לפי name: Avi, Dana, Maya, Noa, Roei, Yossi — בדיוק לפי האות הראשונה (ואם צריך, הבאות אחריה)."
      },
      {
        "id": "ord-10",
        "type": "write",
        "prompt": "החזירו name ו-stock של מוצרי Furniture, ממוינים לפי מלאי בסדר יורד.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, stock FROM Products WHERE category = 'Furniture' ORDER BY stock DESC;",
        "orderSensitive": true,
        "hint": "קודם מסננים ב-WHERE, אחר כך ממיינים.",
        "explanation": "הסדר הלוגי: FROM → WHERE → SELECT → ORDER BY. התוצאה: Desk (12), Lamp (6), Chair (0)."
      }
    ]
  },
  {
    "id": "nulls",
    "title": "ערכי NULL — ערך חסר",
    "short": "NULL",
    "icon": "3",
    "intro": "NULL מסמן ערך חסר או לא ידוע. הוא אינו 0 ואינו מחרוזת ריקה. בודקים אותו עם IS NULL / IS NOT NULL, לא עם =.",
    "questions": [
      {
        "id": "null-1",
        "type": "mcq",
        "prompt": "מה מייצג NULL ב-SQL?",
        "choices": [
          "ערך חסר או לא ידוע",
          "את המספר 0",
          "מחרוזת ריקה ''",
          "שגיאה שיש לתקן תמיד לפני השמירה"
        ],
        "answer": 0,
        "hint": "יש לקוח בלי אימייל ולמוצר בלי מלאי ידוע — זה NULL.",
        "explanation": "NULL הוא «אין ערך». זה לא אפס ולא מחרוזת ריקה, ולכן השוואות רגילות אליו לא עובדות כפי שאולי מצפים."
      },
      {
        "id": "null-2",
        "type": "mcq",
        "prompt": "איך מוצאים שורות שבהן עמודת email ריקה (NULL)?",
        "choices": [
          "WHERE email IS NULL",
          "WHERE email = NULL",
          "WHERE email == NULL",
          "WHERE email = ''"
        ],
        "answer": 0,
        "hint": "אופרטור ההשוואה = לא מתאים ל-NULL.",
        "explanation": "ההשוואה email = NULL מחזירה UNKNOWN, לא TRUE, ולכן לא תחזיר שורות. הדרך הנכונה: IS NULL או IS NOT NULL."
      },
      {
        "id": "null-3",
        "type": "predict",
        "prompt": "מי יוחזר?",
        "code": "SELECT name FROM Customers\nWHERE email IS NULL;",
        "choices": [
          "Noa Mizrahi",
          "Avi Peretz",
          "אין שורות",
          "Noa Mizrahi וגם Avi Peretz"
        ],
        "answer": 0,
        "hint": "בדקו את עמודת email בטבלת הלקוחות.",
        "explanation": "רק ל-Noa Mizrahi אין אימייל (NULL). ל-Avi חסר הגיל, לא האימייל."
      },
      {
        "id": "null-4",
        "type": "predict",
        "prompt": "אילו שמות יוחזרו?",
        "code": "SELECT name FROM Customers\nWHERE age IS NOT NULL;",
        "choices": [
          "Dana, Yossi, Noa, Maya, Roei (בלי Avi)",
          "רק Avi Peretz",
          "כל ששת הלקוחות",
          "אף אחד, כי לחלק יש NULL"
        ],
        "answer": 0,
        "hint": "IS NOT NULL משאיר מי שיש לו ערך בעמודה.",
        "explanation": "ל-Avi Peretz הגיל הוא NULL, ולכן הוא מודר. חמשת האחרים נשארים."
      },
      {
        "id": "null-5",
        "type": "fill",
        "prompt": "השלימו כדי לקבל מוצרים שמלאי שלהם לא ידוע.",
        "template": "SELECT name FROM Products WHERE stock ___ NULL;",
        "blanks": [
          [
            "IS",
            "is"
          ]
        ],
        "hint": "לא כותבים = NULL.",
        "explanation": "WHERE stock IS NULL מחזיר את Pen — המוצר היחיד בלי ערך מלאי."
      },
      {
        "id": "null-6",
        "type": "write",
        "prompt": "כתבו שאילתה שמחזירה את שמות הלקוחות שאין להם גיל (age חסר).",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Customers WHERE age IS NULL;",
        "orderSensitive": false,
        "hint": "IS NULL",
        "explanation": "SELECT name FROM Customers WHERE age IS NULL; מחזיר את Avi Peretz."
      },
      {
        "id": "null-7",
        "type": "write",
        "prompt": "החזירו את שמות המוצרים שבהם stock הוא NULL.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE stock IS NULL;",
        "orderSensitive": false,
        "hint": "טבלת Products, העמודה stock.",
        "explanation": "רק Pen רשום עם stock = NULL. זו דוגמה טובה לערך «לא ידוע» ולא לאפס. ל-Chair יש מלאי 0, וזה ערך ידוע."
      },
      {
        "id": "null-8",
        "type": "mcq",
        "prompt": "מה ההבדל בין COUNT(*) ל-COUNT(email) על טבלת Customers?",
        "choices": [
          "COUNT(*) = 6 (כל השורות), COUNT(email) = 5 (בלי NULL)",
          "שניהם תמיד מחזירים 6",
          "COUNT(email) סופר גם NULL ולכן יחזיר 6, ו-COUNT(*) יחזיר 5",
          "COUNT(*) לא חוקי ב-MySQL"
        ],
        "answer": 0,
        "hint": "רוב פונקציות הקיבוץ מתעלמות מ-NULL. COUNT(*) סופר שורות, לא ערכים.",
        "explanation": "COUNT(*) סופר שורות — 6 לקוחות. COUNT(email) סופר רק ערכים שאינם NULL — 5, כי ל-Noa אין אימייל."
      },
      {
        "id": "null-9",
        "type": "predict",
        "prompt": "מה יוחזר?",
        "code": "SELECT COUNT(*) AS total,\n       COUNT(email) AS with_email\nFROM Customers;",
        "choices": [
          "total=6, with_email=5",
          "total=6, with_email=6",
          "total=5, with_email=5",
          "total=0, with_email=0"
        ],
        "answer": 0,
        "hint": "שש שורות, ואימייל חסר אצל לקוחה אחת.",
        "explanation": "שש שורות בטבלה, וחמישה ערכי אימייל שאינם NULL. זו בדיוק הסיבה להבדיל בין COUNT(*) ל-COUNT(עמודה)."
      },
      {
        "id": "null-10",
        "type": "write",
        "prompt": "החזירו את עמודת id של כל ההזמנות שבהן discount הוא NULL.",
        "starter": "SELECT ",
        "expectedSql": "SELECT id FROM Orders WHERE discount IS NULL;",
        "orderSensitive": false,
        "hint": "טבלת Orders.",
        "explanation": "להזמנות 2, 5 ו-8 אין הנחה ידועה (NULL). שימו לב: הנחה 0.00 (כמו בהזמנות 3, 7, 10) היא ערך קיים — «אין הנחה» — וזה לא NULL."
      }
    ]
  },
  {
    "id": "math",
    "title": "חשבון ופונקציות קיבוץ",
    "short": "חשבון",
    "icon": "4",
    "intro": "אפשר לחשב בעמודות עם + - * /, ולסכם קבוצות ערכים עם COUNT, SUM, AVG, MIN, MAX ו-ROUND.",
    "questions": [
      {
        "id": "math-1",
        "type": "mcq",
        "prompt": "אילו מהבאות הן פונקציות קיבוץ (aggregates)?",
        "choices": [
          "COUNT, SUM, AVG, MIN, MAX",
          "SELECT, WHERE, FROM, LIMIT",
          "LIKE, IN, BETWEEN, AS",
          "INSERT, UPDATE, DELETE, JOIN"
        ],
        "answer": 0,
        "hint": "פונקציות שמחשבות ערך אחד מתוך הרבה שורות.",
        "explanation": "פונקציות קיבוץ מכניסות הרבה ערכים ומחזירות סיכום אחד: ספירה, סכום, ממוצע, מינימום ומקסימום. ROUND מעגל תוצאה מספרית (לא תמיד קיבוץ)."
      },
      {
        "id": "math-2",
        "type": "predict",
        "prompt": "מה תוצאת הביטוי? שימו לב לקדימות אופרטורים.",
        "code": "SELECT 10 + 3 * 2;",
        "choices": [
          "16",
          "26",
          "13",
          "60"
        ],
        "answer": 0,
        "hint": "כפל לפני חיבור, כמו בחשבון.",
        "explanation": "קודם 3 * 2 = 6, ואז 10 + 6 = 16. אם רוצים חיבור קודם, שמים סוגריים: (10 + 3) * 2 = 26."
      },
      {
        "id": "math-3",
        "type": "predict",
        "prompt": "מה יוחזר?",
        "code": "SELECT ROUND(79.90, 0);",
        "choices": [
          "80",
          "79",
          "79.9",
          "80.90"
        ],
        "answer": 0,
        "hint": "ROUND(מספר, מספר ספרות אחרי הנקודה). 0 ספרות = מספר שלם.",
        "explanation": "ROUND(79.90, 0) מעגל למספר השלם הקרוב — 80. ב-MySQL וב-SQLite ROUND עובד באופן דומה למקרים כאלה."
      },
      {
        "id": "math-4",
        "type": "fill",
        "prompt": "השלימו כדי לחשב את מחיר המוצר הממוצע.",
        "template": "SELECT ___(price) FROM Products;",
        "blanks": [
          [
            "AVG",
            "avg",
            "AVERAGE",
            "average"
          ]
        ],
        "hint": "הפונקציה לממוצע.",
        "explanation": "AVG(price) מחשב ממוצע של כל המחירים. הפונקציה מתעלמת מ-NULL, אך כאן לכל המוצרים יש מחיר."
      },
      {
        "id": "math-5",
        "type": "write",
        "prompt": "החזירו בשאילתה אחת את מחיר המוצר הזול ביותר ואת מחיר המוצר היקר ביותר (שתי עמודות: תחילה המינימום ואז המקסימום).",
        "starter": "SELECT ",
        "expectedSql": "SELECT MIN(price), MAX(price) FROM Products;",
        "orderSensitive": false,
        "hint": "MIN ו-MAX.",
        "explanation": "SELECT MIN(price), MAX(price) FROM Products; מחזיר 3.2 ו-3200. אפשר גם לתת לעמודות כינויים ב-AS."
      },
      {
        "id": "math-6",
        "type": "write",
        "prompt": "כתבו שאילתה שמחזירה כמה לקוחות יש בטבלת Customers.",
        "starter": "SELECT ",
        "expectedSql": "SELECT COUNT(*) FROM Customers;",
        "orderSensitive": false,
        "hint": "COUNT(*) סופר שורות.",
        "explanation": "COUNT(*) סופר את כל השורות — 6. אם היינו כותבים COUNT(age) היינו מקבלים 5, כי הגיל של Avi הוא NULL."
      },
      {
        "id": "math-7",
        "type": "write",
        "prompt": "חשבו את סכום המלאי (SUM של stock) של כל המוצרים בקטגוריה Electronics.",
        "starter": "SELECT ",
        "expectedSql": "SELECT SUM(stock) FROM Products WHERE category = 'Electronics';",
        "orderSensitive": false,
        "hint": "Laptop 8 + Mouse 40 + Monitor 15.",
        "explanation": "SUM(stock) עם WHERE category = 'Electronics' מחבר 8 + 40 + 15 = 63. SUM מתעלם מ-NULL, אבל לשלושת מוצרי האלקטרוניקה יש מלאי ידוע."
      },
      {
        "id": "math-8",
        "type": "write",
        "prompt": "החזירו את שם המוצר ואת המחיר כפול 2 (בעמודה בשם double_price) עבור כל מוצרי Food.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, price * 2 AS double_price FROM Products WHERE category = 'Food';",
        "orderSensitive": false,
        "hint": "אפשר לכתוב ביטוי חשבוני ב-SELECT, ולתת לו כינוי ב-AS.",
        "explanation": "price * 2 מחשב עמודה חדשה לכל שורה. AS double_price נותן לה שם ברור בתוצאה. זה חישוב שורה-שורה, לא פונקציית קיבוץ."
      },
      {
        "id": "math-9",
        "type": "mcq",
        "prompt": "מה יעשה SUM(stock) אם לאחד המוצרים stock הוא NULL?",
        "choices": [
          "יתעלם מה-NULL ויסכום את שאר הערכים",
          "התוצאה כולה תהיה NULL",
          "ה-NULL ייחשב כ-0 תמיד, בלי יוצא מן הכלל",
          "תוחזר שגיאה"
        ],
        "answer": 0,
        "hint": "פונקציות קיבוץ בדרך-כלל מדלגות על NULL.",
        "explanation": "SUM, AVG, MIN, MAX ו-COUNT(עמודה) מתעלמים מ-NULL. לכן מלאי לא ידוע של Pen לא נכנס לסכום. COUNT(*) כן סופר את השורה עצמה."
      },
      {
        "id": "math-10",
        "type": "predict",
        "prompt": "מה הממוצע שיוחזר? זכרו ש-NULL לא נכנס לממוצע.",
        "code": "SELECT AVG(age) FROM Customers;",
        "choices": [
          "31",
          "25.833…",
          "NULL",
          "29"
        ],
        "answer": 0,
        "hint": "גילאים: 28, 35, 22, (NULL), 41, 29. חלקו ב-5, לא ב-6.",
        "explanation": "AVG מתעלם מ-NULL. סכום 28+35+22+41+29 = 155, חלקי 5 = 31. אם היינו מחלקים ב-6 (כולל Avi) היינו טועים."
      }
    ]
  },
  {
    "id": "limit",
    "title": "LIMIT, OFFSET ו-TOP",
    "short": "LIMIT",
    "icon": "5",
    "intro": "LIMIT מגביל כמה שורות יוחזרו, OFFSET מדלג על שורות. TOP הוא התחביר של SQL Server; ב-MySQL וב-SQLite משתמשים ב-LIMIT.",
    "questions": [
      {
        "id": "lim-1",
        "type": "mcq",
        "prompt": "מה עושה LIMIT 5 בשאילתת SELECT?",
        "choices": [
          "מחזיר לכל היותר 5 שורות",
          "מדלג על 5 השורות הראשונות",
          "מחזיר רק עמודות עם אורך עד 5",
          "בחר את 5 העמודות הראשונות"
        ],
        "answer": 0,
        "hint": "זו הגבלה על מספר השורות בתוצאה.",
        "explanation": "LIMIT 5 חותך את התוצאה לחמש שורות לכל היותר. בדרך כלל משלבים אותו עם ORDER BY, אחרת «חמש הראשונות» לא מוגדרות היטב."
      },
      {
        "id": "lim-2",
        "type": "mcq",
        "prompt": "איך כותבים «תן לי 5 שורות» ב-MySQL / SQLite, לעומת SQL Server?",
        "choices": [
          "ב-MySQL/SQLite: LIMIT 5. ב-SQL Server: SELECT TOP 5 ...",
          "בכולם כותבים TOP 5 בלבד",
          "ב-MySQL כותבים TOP 5, ב-SQLite כותבים FIRST 5",
          "הפקודה OFFSET 5 מחזירה חמש שורות בכל המנועים"
        ],
        "answer": 0,
        "hint": "TOP שייך בעיקר ל-SQL Server / Access. הקורס שלכם הוא בסגנון MySQL.",
        "explanation": "ב-MySQL וב-SQLite משתמשים ב-LIMIT (וגם OFFSET). SELECT TOP 5 * FROM Products; הוא תחביר של SQL Server ולא יעבוד כאן. במשחק הזה המנוע הוא SQLite, שבו LIMIT עובד כמו ב-MySQL."
      },
      {
        "id": "lim-3",
        "type": "predict",
        "prompt": "איזה מוצר יוחזר?",
        "code": "SELECT name FROM Products\nORDER BY price ASC\nLIMIT 1;",
        "choices": [
          "Apple",
          "Laptop",
          "Pen",
          "Orange"
        ],
        "answer": 0,
        "hint": "המוצר הזול ביותר.",
        "explanation": "מיון עולה לפי מחיר ו-LIMIT 1 מחזירים את Apple במחיר 3.20 — הזול מכולם."
      },
      {
        "id": "lim-4",
        "type": "predict",
        "prompt": "אילו שני שמות יוחזרו?",
        "code": "SELECT name FROM Products\nORDER BY price ASC\nLIMIT 2 OFFSET 1;",
        "choices": [
          "Orange ואז Pen",
          "Apple ואז Orange",
          "Pen ואז Cola",
          "Laptop ואז Monitor"
        ],
        "answer": 0,
        "hint": "OFFSET 1 מדלג על הזול ביותר (Apple). אחר כך לוקחים 2.",
        "explanation": "הסדר לפי מחיר עולה: Apple, Orange, Pen, Cola… OFFSET 1 מדלג על Apple, ו-LIMIT 2 מחזיר Orange ו-Pen."
      },
      {
        "id": "lim-5",
        "type": "fill",
        "prompt": "השלימו כדי לקבל רק שלושה לקוחות.",
        "template": "SELECT * FROM Customers LIMIT ___;",
        "blanks": [
          [
            "3"
          ]
        ],
        "hint": "מספר השורות הרצוי.",
        "explanation": "LIMIT 3 יחזיר לכל היותר שלוש שורות. בלי ORDER BY, אי-אפשר לסמוך על אילו שלוש אלה יהיו."
      },
      {
        "id": "lim-6",
        "type": "write",
        "prompt": "החזירו את name ו-price של שלושת המוצרים היקרים ביותר, מהיקר לזול.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, price FROM Products ORDER BY price DESC LIMIT 3;",
        "orderSensitive": true,
        "hint": "ORDER BY price DESC ואז LIMIT 3.",
        "explanation": "Laptop 3200, Monitor 899, Desk 450. בלי ORDER BY, LIMIT לבדו לא מבטיח «היקרים ביותר»."
      },
      {
        "id": "lim-7",
        "type": "write",
        "prompt": "דלגו על שני המוצרים הזולים ביותר, והחזירו את שמות שלושת הבאים בסדר עולה של מחיר.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products ORDER BY price ASC LIMIT 3 OFFSET 2;",
        "orderSensitive": true,
        "hint": "LIMIT 3 OFFSET 2. הזולים: Apple, Orange, ואז Pen, Cola, Bread.",
        "explanation": "אחרי דילוג על Apple ו-Orange מתחילים ב-Pen (4.90), Cola (6.00) ו-Bread (8.00). ב-MySQL אפשר גם לכתוב LIMIT 2, 3 שזה היסט 2 וכמות 3."
      },
      {
        "id": "lim-8",
        "type": "mcq",
        "prompt": "איזה משפט נכון לגבי OFFSET ב-MySQL לעומת SQLite?",
        "choices": [
          "ב-MySQL הקלאסי OFFSET מגיע עם LIMIT (למשל LIMIT 5 OFFSET 10). ב-SQLite גם OFFSET לבד אפשרי",
          "OFFSET לא קיים ב-MySQL בכלל",
          "ב-SQLite אסור להשתמש ב-OFFSET",
          "TOP ו-OFFSET הם אותה פקודה"
        ],
        "answer": 0,
        "hint": "התחביר הנפוץ ב-MySQL: LIMIT count OFFSET skip, או LIMIT skip, count.",
        "explanation": "ב-MySQL כותבים בדרך כלל LIMIT 5 OFFSET 10 או את הצורה הקצרה LIMIT 10, 5. SQLite תומך גם הוא ב-LIMIT/OFFSET. במנוע של המשחק (SQLite) LIMIT עובד, ו-TOP לא."
      },
      {
        "id": "lim-9",
        "type": "mcq",
        "prompt": "מה המשמעות של LIMIT 2, 3 ב-MySQL (וגם ב-SQLite)?",
        "choices": [
          "לדלג על 2 שורות ולהחזיר עד 3",
          "להחזיר 2 שורות ולדלג על 3",
          "להחזיר שורות 2 עד 3 בלבד, כולל 2 לא כולל 3",
          "זו שגיאת תחביר תמיד"
        ],
        "answer": 0,
        "hint": "המספר הראשון הוא ההיסט, השני הוא הכמות.",
        "explanation": "LIMIT offset, count מדלג ואז לוקח. עדיף לעיתים לכתוב LIMIT 3 OFFSET 2 — זה ברור יותר."
      },
      {
        "id": "lim-10",
        "type": "write",
        "prompt": "החזירו את שם הלקוח הראשון בסדר אלפביתי (עמודה name בלבד).",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Customers ORDER BY name ASC LIMIT 1;",
        "orderSensitive": true,
        "hint": "ORDER BY name ואז LIMIT 1.",
        "explanation": "Avi Peretz הוא הראשון אלפביתית. השילוב ORDER BY + LIMIT 1 הוא תבנית נפוצה ל«הראשון / הגדול ביותר / הזול ביותר»."
      }
    ]
  },
  {
    "id": "like",
    "title": "LIKE — חיפוש לפי תבנית",
    "short": "LIKE",
    "icon": "6",
    "intro": "LIKE משווה מחרוזת לתבנית. % מייצג כל רצף תווים (גם ריק), ו-_ מייצג תו אחד בדיוק. ב-SQLite ההשוואה אינה תלויה ברישיות לאותיות אנגליות, בדומה לרוב הגדרות MySQL.",
    "questions": [
      {
        "id": "like-1",
        "type": "mcq",
        "prompt": "מה ההבדל בין % ל-_ ב-LIKE?",
        "choices": [
          "% = כל רצף תווים (כולל ריק). _ = תו אחד בדיוק",
          "_ = כל רצף, % = תו אחד",
          "שניהם מייצגים תו אחד",
          "% מיועד למספרים בלבד, _ לטקסט"
        ],
        "answer": 0,
        "hint": "חשבו על «מתחיל ב-A» מול «האות השנייה היא r».",
        "explanation": "ב-'A%' אפשר אחרי A אפס תווים או מאה. ב-'_r%' חייבת להיות אות אחת, ואז r, ואז מה שרוצים."
      },
      {
        "id": "like-2",
        "type": "predict",
        "prompt": "אילו מוצרים מתאימים לתבנית 'A%' (מתחיל ב-A)?",
        "code": "SELECT name FROM Products\nWHERE name LIKE 'A%';",
        "choices": [
          "Apple ו-Avocado",
          "רק Apple",
          "רק Avocado",
          "Chair ו-Cola"
        ],
        "answer": 0,
        "hint": "תבנית a% זהה כאן ל-A% (רישיות).",
        "explanation": "'A%' פירושה: מתחיל ב-A, ואחר כך כל דבר. Apple ו-Avocado מתאימים. זו התבנית הקלאסית 'a%' מהשיעור."
      },
      {
        "id": "like-3",
        "type": "predict",
        "prompt": "אילו מוצרים מתאימים ל-'%a' (מסתיימים ב-a)?",
        "code": "SELECT name FROM Products\nWHERE name LIKE '%a';",
        "choices": [
          "Cola ו-Pizza",
          "Apple ו-Avocado",
          "Lamp ו-Sofa",
          "Chair ו-Bread"
        ],
        "answer": 0,
        "hint": "האות האחרונה צריכה להיות a.",
        "explanation": "'%a' = כל דבר ואז a בסוף. Cola ו-Pizza מסתיימים ב-a. Apple מסתיים ב-e, ולכן לא נכנס."
      },
      {
        "id": "like-4",
        "type": "write",
        "prompt": "החזירו את שמות המוצרים שמכילים את הרצף or בכל מקום בשם (תבנית '%or%').",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE name LIKE '%or%';",
        "orderSensitive": false,
        "hint": "Monitor ו-Orange.",
        "explanation": "'%or%' מחפש את 'or' בכל מקום: Monitor (מכיל or) ו-Orange (מתחיל ב-Or). זו התבנית '%or%' מהשיעור."
      },
      {
        "id": "like-5",
        "type": "write",
        "prompt": "החזירו מוצרים שהאות השנייה בשמם היא r (תבנית '_r%').",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE name LIKE '_r%';",
        "orderSensitive": false,
        "hint": "תו אחד, אחר כך r, אחר כך כל דבר. Bread, Orange.",
        "explanation": "'_r%': התו הראשון כלשהו, השני חייב להיות r. Bread (B-r…) ו-Orange (O-r…) מתאימים. Laptop לא, כי האות השנייה היא a."
      },
      {
        "id": "like-6",
        "type": "fill",
        "prompt": "השלימו תבנית למוצרים שמתחילים ב-a ומסתיימים ב-o (כמו Avocado).",
        "template": "SELECT name FROM Products WHERE name LIKE '___';",
        "blanks": [
          [
            "a%o",
            "A%o"
          ]
        ],
        "hint": "a, אחר כך % , אחר כך o.",
        "explanation": "התבנית 'a%o' מהשיעור: מתחיל ב-a, מסתיים ב-o, ובאמצע כל דבר. Avocado מתאים, Apple לא."
      },
      {
        "id": "like-7",
        "type": "write",
        "prompt": "החזירו שמות מוצרים שמתחילים ב-a ויש להם לפחות שני תווים (תבנית 'a_%').",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE name LIKE 'a_%';",
        "orderSensitive": false,
        "hint": "'a_%' = a + תו אחד לפחות + כל דבר.",
        "explanation": "'a_%' דורשת לפחות שני תווים שמתחילים ב-a. Apple ו-Avocado מתאימים. השם התיאורטי 'A' לבדו לא היה מתאים, כי אין את התו ש-_ דורש."
      },
      {
        "id": "like-8",
        "type": "mcq",
        "prompt": "מה ההבדל בין התבניות 'a_%' ל-'a__%'?",
        "choices": [
          "'a_%' — לפחות 2 תווים שמתחילים ב-a. 'a__%' — לפחות 3 תווים שמתחילים ב-a",
          "אין הבדל, שתיהן זהות",
          "'a__%' קצרה יותר מ-'a_%'",
          "'a_%' מתאימה רק למילה בת שתי אותיות בדיוק"
        ],
        "answer": 0,
        "hint": "כל _ דורש תו אחד חובה. % יכול להיות ריק.",
        "explanation": "ב-'a_%' אחרי a יש תו חובה ועוד % חופשי — אורך מינימלי 2. ב-'a__%' שני תווים חובה אחרי a — אורך מינימלי 3. Apple (5) ו-Avocado (7) מתאימים לשתיהן."
      },
      {
        "id": "like-9",
        "type": "predict",
        "prompt": "מי יתאים ל-'a__%'?",
        "code": "SELECT name FROM Products\nWHERE name LIKE 'a__%';",
        "choices": [
          "Apple ו-Avocado",
          "רק Avocado",
          "רק Apple",
          "גם Orange"
        ],
        "answer": 0,
        "hint": "לפחות שלושה תווים, מתחיל ב-a.",
        "explanation": "גם Apple וגם Avocado ארוכים מ-3 תווים ומתחילים ב-A, לכן שניהם מתאימים."
      },
      {
        "id": "like-10",
        "type": "write",
        "prompt": "החזירו את שמות הלקוחות ששמם מתחיל ב-M.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Customers WHERE name LIKE 'M%';",
        "orderSensitive": false,
        "hint": "LIKE 'M%'",
        "explanation": "Maya Katz הוא הלקוח היחיד שמתחיל ב-M. אותה תבנית 'a%' מהשיעור, עם אות אחרת."
      }
    ]
  },
  {
    "id": "inbetween",
    "title": "IN ו-BETWEEN",
    "short": "IN / BETWEEN",
    "icon": "7",
    "intro": "IN בודק האם ערך נמצא ברשימה. BETWEEN בודק טווח, וכולל את שני הקצוות.",
    "questions": [
      {
        "id": "in-1",
        "type": "mcq",
        "prompt": "למה משמש האופרטור IN?",
        "choices": [
          "לבדוק אם ערך שווה לאחד מתוך רשימת ערכים",
          "לחפש תבנית עם % ו-_",
          "למזג שתי טבלאות",
          "להגביל את מספר השורות"
        ],
        "answer": 0,
        "hint": "תחליף קצר לכמה תנאי OR.",
        "explanation": "city IN ('Haifa', 'Jerusalem') שקול ל-city = 'Haifa' OR city = 'Jerusalem', רק קריא יותר."
      },
      {
        "id": "in-2",
        "type": "mcq",
        "prompt": "האם BETWEEN כולל את ערכי הקצוות?",
        "choices": [
          "כן, BETWEEN 10 AND 100 כולל גם 10 וגם 100",
          "לא, רק ערכים גדולים מ-10 וקטנים מ-100",
          "כולל רק את הקצה התחתון",
          "כולל רק את הקצה העליון"
        ],
        "answer": 0,
        "hint": "Inclusive — כולל את הגבולות.",
        "explanation": "price BETWEEN 10 AND 100 שקול ל-price >= 10 AND price <= 100. שני הקצוות בפנים."
      },
      {
        "id": "in-3",
        "type": "predict",
        "prompt": "מי יוחזר?",
        "code": "SELECT name FROM Customers\nWHERE city IN ('Haifa', 'Jerusalem');",
        "choices": [
          "Yossi Cohen, Avi Peretz, Maya Katz",
          "רק הלקוחות מתל אביב",
          "כל הלקוחות",
          "רק Avi Peretz"
        ],
        "answer": 0,
        "hint": "חיפה וירושלים.",
        "explanation": "יוסי ומאיה מחיפה, אבי מירושלים. שלושת הלקוחות מתל אביב לא נכנסים."
      },
      {
        "id": "in-4",
        "type": "predict",
        "prompt": "אילו מוצרים נכנסים לטווח המחירים 4 עד 10 (כולל)?",
        "code": "SELECT name, price FROM Products\nWHERE price BETWEEN 4 AND 10;",
        "choices": [
          "Pen 4.90, Avocado 9.90, Orange 4.50, Bread 8.00, Cola 6.00",
          "גם Apple 3.20 נכנס, כי הוא קרוב ל-4",
          "רק Bread 8.00",
          "Mouse, Lamp ו-Pizza"
        ],
        "answer": 0,
        "hint": "Apple עולה 3.20 — מתחת ל-4, ולכן בחוץ.",
        "explanation": "חמישה מוצרים בין 4 ל-10 כולל. Apple (3.20) קטן מ-4 ולכן נשאר בחוץ. BETWEEN כולל קצוות, אבל 3.20 אינו קצה."
      },
      {
        "id": "in-5",
        "type": "fill",
        "prompt": "השלימו כדי לבחור מוצרים מקטגוריות Food או Drinks.",
        "template": "SELECT name FROM Products WHERE category ___ ('Food', 'Drinks');",
        "blanks": [
          [
            "IN",
            "in"
          ]
        ],
        "hint": "רשימה בסוגריים.",
        "explanation": "category IN ('Food', 'Drinks') בוחר את כל מוצרי המזון והמשקאות."
      },
      {
        "id": "in-6",
        "type": "write",
        "prompt": "החזירו את שמות המוצרים שקטגוריה שלהם היא Furniture או Stationery.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE category IN ('Furniture', 'Stationery');",
        "orderSensitive": false,
        "hint": "IN ('Furniture', 'Stationery')",
        "explanation": "Desk, Chair, Lamp (רהיטים) ו-Notebook, Pen (כלי כתיבה). אפשר גם עם OR, אבל IN נקי יותר."
      },
      {
        "id": "in-7",
        "type": "write",
        "prompt": "החזירו name ו-price של מוצרים שמחירם בין 100 ל-500 כולל.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, price FROM Products WHERE price BETWEEN 100 AND 500;",
        "orderSensitive": false,
        "hint": "BETWEEN 100 AND 500",
        "explanation": "Lamp 129, Chair 299 ו-Desk 450. Monitor (899) כבר מעל 500, Mouse (79.90) מתחת ל-100."
      },
      {
        "id": "in-8",
        "type": "mcq",
        "prompt": "מה מחזיר התנאי price BETWEEN 10 AND 10?",
        "choices": [
          "שורות שבהן price שווה בדיוק ל-10",
          "שום שורה, כי הטווח ריק",
          "כל השורות",
          "שגיאת תחביר"
        ],
        "answer": 0,
        "hint": "שני הקצוות שווים, והם כלולים.",
        "explanation": "BETWEEN כולל קצוות, לכן זה שקול ל-price = 10."
      },
      {
        "id": "in-9",
        "type": "write",
        "prompt": "החזירו name ו-age של לקוחות שגילם בין 25 ל-35 כולל.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, age FROM Customers WHERE age BETWEEN 25 AND 35;",
        "orderSensitive": false,
        "hint": "NULL לא נכנס לטווח.",
        "explanation": "Dana 28, Yossi 35, Roei 29. Noa (22) צעירה מדי, Maya (41) מבוגרת מדי, ו-Avi עם NULL לא עובר את ההשוואה."
      },
      {
        "id": "in-10",
        "type": "predict",
        "prompt": "אילו שמות יוחזרו?",
        "code": "SELECT name FROM Products\nWHERE id IN (1, 7, 14);",
        "choices": [
          "Laptop, Monitor, Apple",
          "Mouse, Desk, Chair",
          "רק Laptop",
          "Avocado, Orange, Bread"
        ],
        "answer": 0,
        "hint": "הסתכלו על ה-id בטבלת Products.",
        "explanation": "id 1 = Laptop, 7 = Monitor, 14 = Apple. IN עובד מצוין גם על מפתחות מספריים."
      }
    ]
  },
  {
    "id": "alias",
    "title": "AS — כינויים לעמודות ולטבלאות",
    "short": "AS",
    "icon": "8",
    "intro": "AS נותן שם זמני לעמודה או לטבלה בתוצאה. זה שימושי לחישובים, לכותרות ברורות ולקיצור שמות טבלאות.",
    "questions": [
      {
        "id": "as-1",
        "type": "mcq",
        "prompt": "למה משמשת המילה AS ב-SELECT?",
        "choices": [
          "לתת כינוי זמני לעמודה או לטבלה",
          "לסנן שורות",
          "למחוק כפילויות",
          "ליצור טבלה חדשה באופן קבוע במסד"
        ],
        "answer": 0,
        "hint": "הכינוי קיים רק בתוצאת השאילתה.",
        "explanation": "AS לא משנה את שם העמודה בטבלה עצמה, רק בכותרת התוצאה (או כקיצור לטבלה בתוך השאילתה)."
      },
      {
        "id": "as-2",
        "type": "mcq",
        "prompt": "האם חובה לכתוב את המילה AS? למשל SELECT name city FROM Customers",
        "choices": [
          "לא חובה: ב-MySQL וב-SQLite אפשר גם SELECT name city, אבל AS ברור יותר",
          "כן, בלי AS זו תמיד שגיאה",
          "AS חוקי רק ב-SQL Server",
          "אפשר להשמיט AS רק ב-INSERT"
        ],
        "answer": 0,
        "hint": "הכינוי יכול לבוא ישר אחרי העמודה.",
        "explanation": "המילה AS רשות ב-MySQL וב-SQLite. עדיין מומלץ לכתוב אותה, כדי שלא נבלבל בין שם עמודה לכינוי."
      },
      {
        "id": "as-3",
        "type": "predict",
        "prompt": "איך ייקראו עמודות התוצאה, ומה הערכים?",
        "code": "SELECT name AS product, price AS nis\nFROM Products\nWHERE id = 5;",
        "choices": [
          "עמודה product = Notebook, עמודה nis = 12.5",
          "עמודה name = Notebook, עמודה price = 12.5 (הכינויים מתעלמים)",
          "שגיאה, כי AS אסור על שתי עמודות",
          "product = 5, nis = Notebook"
        ],
        "answer": 0,
        "hint": "id 5 הוא Notebook שמחירו 12.50.",
        "explanation": "התוצאה שורה אחת: product=Notebook, nis=12.5. הכינויים מחליפים את הכותרות name ו-price בתוצאה."
      },
      {
        "id": "as-4",
        "type": "fill",
        "prompt": "השלימו כדי לקרוא לעמודת הספירה בשם total.",
        "template": "SELECT COUNT(*) ___ total FROM Customers;",
        "blanks": [
          [
            "AS",
            "as"
          ]
        ],
        "hint": "מילת הכינוי.",
        "explanation": "SELECT COUNT(*) AS total FROM Customers; מחזיר עמודה בשם total עם הערך 6. בלי כינוי, שם העמודה עלול להיות COUNT(*) — פחות נוח."
      },
      {
        "id": "as-5",
        "type": "write",
        "prompt": "החזירו את שם הלקוח בכינוי customer_name ואת העיר בכינוי town, רק ללקוחות מחיפה.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name AS customer_name, city AS town FROM Customers WHERE city = 'Haifa';",
        "orderSensitive": false,
        "hint": "AS customer_name, AS town.",
        "explanation": "שתי שורות: Yossi Cohen / Haifa ו-Maya Katz / Haifa, עם כותרות customer_name ו-town. לצורך הבדיקה מספיק שהערכים נכונים."
      },
      {
        "id": "as-6",
        "type": "write",
        "prompt": "החזירו עמודה אחת בשם sale_price: מחיר המנורה (Lamp) כפול 0.9.",
        "starter": "SELECT ",
        "expectedSql": "SELECT price * 0.9 AS sale_price FROM Products WHERE name = 'Lamp';",
        "orderSensitive": false,
        "hint": "129 * 0.9 = 116.1",
        "explanation": "ביטוי חשבוני מקבל כינוי כדי שהעמודה לא תיקרא «price * 0.9». התוצאה: 116.1."
      },
      {
        "id": "as-7",
        "type": "mcq",
        "prompt": "האם אפשר להשתמש בכינוי של עמודה בתוך WHERE?",
        "choices": [
          "בדרך כלל לא — WHERE מחושב לפני ה-SELECT, לכן הכינוי עוד לא קיים",
          "כן, תמיד, בכל מנוע",
          "רק אם הכינוי באותיות גדולות",
          "רק ב-DELETE"
        ],
        "answer": 0,
        "hint": "סדר העיבוד: FROM → WHERE → SELECT → ORDER BY.",
        "explanation": "WHERE רץ לפני שהכינוי נוצר. לכן WHERE sale_price > 10 ייכשל. אפשר לחזור על הביטוי ב-WHERE, או בחלק מהמנועים להשתמש בכינוי ב-ORDER BY / HAVING."
      },
      {
        "id": "as-8",
        "type": "predict",
        "prompt": "מה יוחזר? שימו לב שהמיון משתמש בכינוי.",
        "code": "SELECT name, price AS p FROM Products\nORDER BY p DESC\nLIMIT 1;",
        "choices": [
          "Laptop עם p=3200",
          "Apple עם p=3.2",
          "שגיאה כי אי אפשר למיין לפי כינוי",
          "Monitor עם p=899"
        ],
        "answer": 0,
        "hint": "ORDER BY כן יכול להשתמש בכינוי, ב-MySQL וב-SQLite.",
        "explanation": "הכינוי p זמין ב-ORDER BY. המוצר היקר ביותר הוא Laptop במחיר 3200."
      },
      {
        "id": "as-9",
        "type": "write",
        "prompt": "השתמשו בכינוי טבלה: החזירו את c.name של לקוחות ש-c.city היא 'Haifa'. השתמשו ב-Customers AS c.",
        "starter": "SELECT ",
        "expectedSql": "SELECT c.name FROM Customers AS c WHERE c.city = 'Haifa';",
        "orderSensitive": false,
        "hint": "FROM Customers AS c ואז c.name, c.city.",
        "explanation": "כינוי לטבלה מקצר שמות וחשוב במיוחד כשיש כמה טבלאות. כאן Customers AS c, ואז מתייחסים ל-c.name ול-c.city. התוצאה: Yossi Cohen ו-Maya Katz."
      }
    ]
  },
  {
    "id": "distinct",
    "title": "DISTINCT — ערכים ייחודיים",
    "short": "DISTINCT",
    "icon": "9",
    "intro": "DISTINCT מסיר כפילויות מתוצאת השאילתה. אפשר גם לספור ערכים ייחודיים עם COUNT(DISTINCT ...).",
    "questions": [
      {
        "id": "dist-1",
        "type": "mcq",
        "prompt": "מה עושה DISTINCT?",
        "choices": [
          "מסיר שורות כפולות מהתוצאה",
          "ממיין את התוצאה",
          "מוחק כפילויות מהטבלה עצמה לצמיתות",
          "בוחר רק את השורה הראשונה"
        ],
        "answer": 0,
        "hint": "הטבלה במסד לא משתנה, רק התוצאה.",
        "explanation": "SELECT DISTINCT city מחזיר כל עיר פעם אחת, גם אם גרים בה כמה לקוחות. הנתונים בטבלה נשארים כשהיו."
      },
      {
        "id": "dist-2",
        "type": "predict",
        "prompt": "אילו ערכים יוחזרו?",
        "code": "SELECT DISTINCT city FROM Customers;",
        "choices": [
          "Tel Aviv, Haifa, Jerusalem",
          "Tel Aviv שלוש פעמים, Haifa פעמיים, Jerusalem פעם אחת",
          "רק Tel Aviv",
          "כל ששת השמות של הלקוחות"
        ],
        "answer": 0,
        "hint": "יש שלוש ערים שונות בטבלה.",
        "explanation": "בלי DISTINCT היינו מקבלים את תל אביב שלוש פעמים ואת חיפה פעמיים. DISTINCT משאיר כל עיר פעם אחת."
      },
      {
        "id": "dist-3",
        "type": "predict",
        "prompt": "כמה קטגוריות ייחודיות יש, ומהן?",
        "code": "SELECT DISTINCT category FROM Products;",
        "choices": [
          "Electronics, Furniture, Stationery, Food, Drinks — חמש קטגוריות",
          "רק Electronics ו-Food",
          "14 קטגוריות, אחת לכל מוצר",
          "NULL בלבד"
        ],
        "answer": 0,
        "hint": "עברו על עמודת category במוצרים.",
        "explanation": "חמש קטגוריות שונות: Electronics, Furniture, Stationery, Food, Drinks."
      },
      {
        "id": "dist-4",
        "type": "fill",
        "prompt": "השלימו כדי לקבל כל עיר פעם אחת בלבד.",
        "template": "SELECT ___ city FROM Customers;",
        "blanks": [
          [
            "DISTINCT",
            "distinct"
          ]
        ],
        "hint": "המילה שמורידה כפילויות.",
        "explanation": "SELECT DISTINCT city FROM Customers;"
      },
      {
        "id": "dist-5",
        "type": "write",
        "prompt": "כתבו שאילתה שמחזירה את רשימת הערים הייחודיות בטבלת Customers.",
        "starter": "SELECT ",
        "expectedSql": "SELECT DISTINCT city FROM Customers;",
        "orderSensitive": false,
        "hint": "DISTINCT city",
        "explanation": "Tel Aviv, Haifa, Jerusalem — בלי כפילויות. הסדר לא מובטח בלי ORDER BY."
      },
      {
        "id": "dist-6",
        "type": "write",
        "prompt": "החזירו את הקטגוריות הייחודיות של מוצרים שמחירם נמוך מ-20.",
        "starter": "SELECT ",
        "expectedSql": "SELECT DISTINCT category FROM Products WHERE price < 20;",
        "orderSensitive": false,
        "hint": "WHERE price < 20 ואז DISTINCT על category.",
        "explanation": "Stationery, Food ו-Drinks נכנסות (יש בהן מוצר מתחת ל-20). Electronics ו-Furniture יקרים יותר בטבלה הזו, ולא יופיעו."
      },
      {
        "id": "dist-7",
        "type": "mcq",
        "prompt": "מה יחזיר COUNT(DISTINCT city) על Customers?",
        "choices": [
          "3",
          "6",
          "1",
          "0"
        ],
        "answer": 0,
        "hint": "כמה ערים שונות יש?",
        "explanation": "COUNT(DISTINCT city) סופר ערכים ייחודיים שאינם NULL. יש שלוש ערים, לכן 3."
      },
      {
        "id": "dist-8",
        "type": "predict",
        "prompt": "מה המספר שיוחזר?",
        "code": "SELECT COUNT(DISTINCT category) FROM Products;",
        "choices": [
          "5",
          "14",
          "4",
          "6"
        ],
        "answer": 0,
        "hint": "ספירת הקטגוריות השונות.",
        "explanation": "חמש קטגוריות ייחודיות, לכן התוצאה 5. COUNT(*) היה מחזיר 14 — מספר המוצרים."
      },
      {
        "id": "dist-9",
        "type": "mcq",
        "prompt": "מה קורה ב-SELECT DISTINCT city, name מטבלת Customers?",
        "choices": [
          "DISTINCT חל על השילוב של העמודות: שורה כפולה רק אם גם העיר וגם השם זהים",
          "רק העיר תהיה ייחודית, והשם יכול לחזור",
          "זו שגיאת תחביר",
          "יוחזר רק העמודה הראשונה"
        ],
        "answer": 0,
        "hint": "כל שורת תוצאה נבדקת בשלמותה.",
        "explanation": "כשיש כמה עמודות, הייחודיות היא לכל הצירוף. אצלנו לכל לקוח יש שם שונה, לכן נקבל 6 שורות."
      },
      {
        "id": "dist-10",
        "type": "write",
        "prompt": "החזירו את ערכי product_id הייחודיים מטבלת Orders.",
        "starter": "SELECT ",
        "expectedSql": "SELECT DISTINCT product_id FROM Orders;",
        "orderSensitive": false,
        "hint": "לא כל המוצרים הוזמנו.",
        "explanation": "המזהים שהוזמנו: 1, 2, 3, 4, 5, 7, 8. למשל Pen (6) ומוצרי המזון לא מופיעים בהזמנות הדוגמה."
      }
    ]
  },
  {
    "id": "types",
    "title": "סוגי נתונים ב-MySQL",
    "short": "סוגי נתונים",
    "icon": "10",
    "intro": "חידון על טיפוסים ב-MySQL: מספרים, מחרוזות, ENUM ו-SET. זה חומר תיאורטי — לא מריצים כאן את הטיפוסים ב-SQLite (יש ביניהם הבדלים).",
    "questions": [
      {
        "id": "typ-1",
        "type": "mcq",
        "prompt": "מה ההבדל העיקרי בין INT ל-BIGINT ב-MySQL?",
        "choices": [
          "BIGINT תופס יותר מקום ומכיל טווח מספרים גדול בהרבה",
          "INT מיועד לשברים, BIGINT למספרים שלמים",
          "אין הבדל, אלה כינויים לאותו טיפוס",
          "BIGINT קיים רק ב-SQLite"
        ],
        "answer": 0,
        "hint": "INT הוא 4 בתים, BIGINT הוא 8 בתים.",
        "explanation": "INT (4 בתים) מספיק לרוב המזהים. BIGINT (8 בתים) מתאים למספרים גדולים מאוד, למשל מונים עצומים או מזהים גדולים."
      },
      {
        "id": "typ-2",
        "type": "mcq",
        "prompt": "מה טווח TINYINT ב-MySQL (חתום, signed)?",
        "choices": [
          "מ־128- עד 127 (או 0 עד 255 ב-unsigned)",
          "מ־0 עד 1 בלבד",
          "כמו INT בדיוק",
          "רק מספרים שליליים"
        ],
        "answer": 0,
        "hint": "TINY = קטן. בית אחד.",
        "explanation": "TINYINT תופס בית אחד: ‎-128 עד 127, או 0–255 אם מוגדר unsigned. שימושי למספרים קטנים ולעיתים לייצוג בוליאני."
      },
      {
        "id": "typ-3",
        "type": "mcq",
        "prompt": "איך מוגדר BOOLEAN ב-MySQL?",
        "choices": [
          "זה כינוי ל-TINYINT(1) — בדרך כלל 0=false, 1=true",
          "טיפוס נפרד לגמרי, כמו בפייתון, עם ערכים True/False בלבד",
          "זה בכלל לא קיים ב-MySQL",
          "זה כינוי ל-BIGINT"
        ],
        "answer": 0,
        "hint": "ב-MySQL בוליאני הוא מספר קטן.",
        "explanation": "BOOLEAN / BOOL הם כינויים ל-TINYINT(1). בניגוד לפייתון, במסד זה נשמר כמספר. BIT הוא טיפוס אחר, לשדה ביטים."
      },
      {
        "id": "typ-4",
        "type": "mcq",
        "prompt": "למה משמש הטיפוס BIT ב-MySQL?",
        "choices": [
          "לאחסון שדה של ביטים (למשל דגלים בינאריים)",
          "לאחסון תמונות",
          "לטקסט ארוך",
          "לתאריכים בלבד"
        ],
        "answer": 0,
        "hint": "Bit = סיבית.",
        "explanation": "BIT(n) שומר n ביטים. מתאים לדגלים קומפקטיים, לא למספרים עשרוניים רגילים וגם לא לקבצים."
      },
      {
        "id": "typ-5",
        "type": "mcq",
        "prompt": "צריך לשמור מחיר כסף מדויק (למשל 19.90). איזה טיפוס עדיף?",
        "choices": [
          "DECIMAL — מספר עשרוני מדויק",
          "FLOAT — תמיד מדויק יותר לכסף",
          "DOUBLE — כי הוא «כפול» ולכן מושלם לכסף",
          "TINYINT"
        ],
        "answer": 0,
        "hint": "FLOAT ו-DOUBLE הם קירוב בינארי, ויכולים «לזוז» קצת.",
        "explanation": "DECIMAL (או NUMERIC) שומר את הספרות העשרוניות במדויק, ולכן מתאים לכסף. FLOAT ו-DOUBLE הם מספרים מקורבים — מצוינים למדע, פחות למחירי מוצרים."
      },
      {
        "id": "typ-6",
        "type": "mcq",
        "prompt": "מה ההבדל בין CHAR ל-VARCHAR?",
        "choices": [
          "CHAR באורך קבוע (משלים ברווחים). VARCHAR באורך משתנה עד מקסימום",
          "VARCHAR תמיד באורך קבוע, CHAR משתנה",
          "CHAR מיועד למספרים, VARCHAR לטקסט",
          "אין הבדל ב-MySQL"
        ],
        "answer": 0,
        "hint": "CHAR(2) לקוד מדינה כמו IL, VARCHAR(255) לשם משתנה.",
        "explanation": "CHAR(10) תמיד תופס 10 תווים (עם ריפוד). VARCHAR(10) תופס רק לפי האורך האמיתי, עד 10. לטקסט באורך משתנה — VARCHAR."
      },
      {
        "id": "typ-7",
        "type": "mcq",
        "prompt": "מה נכון לגבי משפחת TEXT ב-MySQL?",
        "choices": [
          "TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT — לאחסון מחרוזות ארוכות בגדלים שונים",
          "TEXT הוא כינוי ל-INT",
          "יש רק TEXT אחד, בלי גדלים",
          "TEXT שומר קבצים בינאריים בלבד"
        ],
        "answer": 0,
        "hint": "ארבעה גדלים, כמו במשפחת BLOB.",
        "explanation": "למחרוזות ארוכות (תיאור, מאמר) משתמשים ב-TEXT לפי הגודל הנדרש. לשמות קצרים עדיף VARCHAR."
      },
      {
        "id": "typ-8",
        "type": "mcq",
        "prompt": "למה משמשת משפחת BLOB (TINYBLOB, BLOB, MEDIUMBLOB, LONGBLOB)?",
        "choices": [
          "לאחסון נתונים בינאריים — תמונות, קבצים, אודיו",
          "לשמירת טקסט בעברית בלבד",
          "למספרים עשרוניים גדולים",
          "לערכים בוליאניים"
        ],
        "answer": 0,
        "hint": "Binary Large Object.",
        "explanation": "BLOB שומר בתים גולמיים. TEXT שומר טקסט עם קידוד תווים. לקובץ תמונה — BLOB; לתיאור המוצר — TEXT או VARCHAR."
      },
      {
        "id": "typ-9",
        "type": "mcq",
        "prompt": "מה ההבדל בין ENUM ל-SET ב-MySQL?",
        "choices": [
          "ENUM — ערך אחד מתוך רשימת ערכים מותרים. SET — אפשר כמה ערכים מהרשימה בבת אחת",
          "SET זה כינוי ל-ENUM",
          "ENUM מיועד למספרים, SET לטקסט",
          "שניהם קיימים רק ב-SQLite, לא ב-MySQL"
        ],
        "answer": 0,
        "hint": "ENUM = בחירה אחת. SET = קבוצה.",
        "explanation": "ENUM('small','medium','large') שומר ערך אחד. SET('milk','sugar','ice') יכול לשמור צירוף, למשל milk,ice. ב-SQLite אין ENUM/SET מובנים — זה הבדל חשוב מול MySQL."
      },
      {
        "id": "typ-10",
        "type": "mcq",
        "prompt": "מה מאפיין את BINARY / VARBINARY לעומת CHAR / VARCHAR?",
        "choices": [
          "הם שומרים מחרוזות בינאריות (בתים), וההשוואה ביניהם לפי בתים — לא לפי כללי שפה",
          "BINARY הוא כינוי ל-BOOLEAN",
          "VARBINARY מיועד רק לתאריכים",
          "אין שום הבדל, רק שם אחר"
        ],
        "answer": 0,
        "hint": "Binary = לפי בתים, לא לפי אותיות מנוקדות/רישיות של טקסט.",
        "explanation": "CHAR/VARCHAR הם טקסט עם collation (למשל האם a שווה ל-A). BINARY/VARBINARY משווים בתים. מתאים למזהים בינאריים, האשים וכו'."
      }
    ]
  },
  {
    "id": "mixed",
    "title": "אתגר משולב",
    "short": "אתגר",
    "icon": "★",
    "intro": "שאלות שמערבבות כמה נושאים יחד — כמו בשאלות אמיתיות בקורס ובעבודה.",
    "questions": [
      {
        "id": "mix-1",
        "type": "write",
        "prompt": "החזירו את שמות הלקוחות מתל אביב, ממוינים לפי גיל בסדר עולה.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Customers WHERE city = 'Tel Aviv' ORDER BY age ASC;",
        "orderSensitive": true,
        "hint": "WHERE ואז ORDER BY age.",
        "explanation": "Noa (22), Dana (28), Roei (29). שילוב של סינון ומיון — שני צעדים שרצים בסדר הזה."
      },
      {
        "id": "mix-2",
        "type": "write",
        "prompt": "החזירו name ו-price של שני מוצרי ה-Food הזולים ביותר, מהזול ליקר.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, price FROM Products WHERE category = 'Food' ORDER BY price ASC LIMIT 2;",
        "orderSensitive": true,
        "hint": "WHERE + ORDER BY + LIMIT.",
        "explanation": "Apple 3.20 ואז Orange 4.50. התבנית: לסנן, למיין, לחתוך."
      },
      {
        "id": "mix-3",
        "type": "write",
        "prompt": "החזירו שמות מוצרים שמתחילים ב-A ומחירם נמוך מ-20.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE name LIKE 'A%' AND price < 20;",
        "orderSensitive": false,
        "hint": "LIKE וגם AND על המחיר.",
        "explanation": "Apple ו-Avocado שניהם מתחילים ב-A וזולים מ-20. Laptop לא מתחיל ב-A."
      },
      {
        "id": "mix-4",
        "type": "predict",
        "prompt": "כמה הזמנות יוחזרו?",
        "code": "SELECT COUNT(*) FROM Orders\nWHERE discount IS NULL;",
        "choices": [
          "3",
          "0",
          "10",
          "7"
        ],
        "answer": 0,
        "hint": "הזמנות 2, 5 ו-8.",
        "explanation": "שלוש הזמנות בלי הנחה ידועה. COUNT(*) סופר את השורות שעברו את התנאי."
      },
      {
        "id": "mix-5",
        "type": "write",
        "prompt": "החזירו את הקטגוריות הייחודיות של מוצרים שיש להם מלאי ידוע (לא NULL) והמלאי קטן מ-10.",
        "starter": "SELECT ",
        "expectedSql": "SELECT DISTINCT category FROM Products WHERE stock IS NOT NULL AND stock < 10;",
        "orderSensitive": false,
        "hint": "IS NOT NULL, השוואת מלאי, ו-DISTINCT.",
        "explanation": "Laptop (8, Electronics), Chair (0, Furniture), Lamp (6, Furniture), Pizza (7, Food). Pen עם NULL לא נכנס. הקטגוריות הייחודיות: Electronics, Furniture, Food."
      },
      {
        "id": "mix-6",
        "type": "write",
        "prompt": "החזירו את שם מוצר הרהיטים ואת מחיר המבצע אחרי 20% הנחה (כלומר 80% מהמחיר, מעגל לשתי ספרות) בכינוי sale, ממוין לפי sale בסדר עולה.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, ROUND(price * 0.8, 2) AS sale FROM Products WHERE category = 'Furniture' ORDER BY sale ASC;",
        "orderSensitive": true,
        "hint": "20% הנחה = כפל ב-0.8. ROUND(price * 0.8, 2) AS sale, ואז ORDER BY sale ASC.",
        "explanation": "20% הנחה = כפל ב-0.8. Lamp 103.2, Chair 239.2, Desk 360. משתמשים בכינוי גם למיון. (אם כתבתם 0.9 זו 10% הנחה — לא מה שביקשנו.)"
      },
      {
        "id": "mix-7",
        "type": "write",
        "prompt": "החזירו id ו-quantity של הזמנות שכמותן בין 2 ל-5 כולל.",
        "starter": "SELECT ",
        "expectedSql": "SELECT id, quantity FROM Orders WHERE quantity BETWEEN 2 AND 5;",
        "orderSensitive": false,
        "hint": "BETWEEN כולל את 2 ואת 5.",
        "explanation": "הזמנות 2 (qty 2), 4 (5), 6 (2), 7 (3). הזמנה 10 עם כמות 10 מחוץ לטווח, והזמנות עם כמות 1 גם כן."
      },
      {
        "id": "mix-8",
        "type": "mcq",
        "prompt": "איזו שאילתה מחזירה את שני הלקוחות המבוגרים ביותר שיש להם גיל ידוע?",
        "choices": [
          "SELECT name, age FROM Customers WHERE age IS NOT NULL ORDER BY age DESC LIMIT 2;",
          "SELECT name, age FROM Customers ORDER BY age LIMIT 2;",
          "SELECT TOP 2 name, age FROM Customers WHERE age IS NOT NULL;",
          "SELECT name, age FROM Customers WHERE age IN (2);"
        ],
        "answer": 0,
        "hint": "צריך לסנן NULL, למיין יורד, ולהגביל ל-2. TOP לא יעבוד כאן.",
        "explanation": "התשובה הנכונה משלבת IS NOT NULL, ORDER BY age DESC ו-LIMIT 2: Maya ו-Yossi. אפשרות ה-TOP היא תחביר SQL Server, לא MySQL/SQLite."
      },
      {
        "id": "mix-9",
        "type": "write",
        "prompt": "החזירו name ו-price של מוצרים שמחירם הוא 4.5 או 6 או 8, ממוינים לפי מחיר עולה.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, price FROM Products WHERE price IN (4.5, 6, 8) ORDER BY price ASC;",
        "orderSensitive": true,
        "hint": "IN + ORDER BY.",
        "explanation": "Orange 4.50, Cola 6.00, Bread 8.00. IN נוח לרשימת ערכים בדידים, בניגוד ל-BETWEEN שמיועד לטווח רציף."
      },
      {
        "id": "mix-10",
        "type": "write",
        "prompt": "עדכנו את האימייל של כל לקוח שאין לו אימייל, לערך 'missing@example.com'.",
        "starter": "UPDATE ",
        "expectedSql": "UPDATE Customers SET email = 'missing@example.com' WHERE email IS NULL;",
        "gradeTable": "Customers",
        "hint": "UPDATE ... SET ... WHERE email IS NULL. בלי WHERE תדרסו את כל האימיילים!",
        "explanation": "רק Noa חסרה אימייל, והיא תקבל missing@example.com. השילוב של UPDATE עם IS NULL הוא תבנית נפוצה למילוי ערכים חסרים."
      }
    ]
  }
]
  ;
  root.SQL_TOPICS = SQL_TOPICS;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { SQL_TOPICS };
  }
})(typeof window !== "undefined" ? window : globalThis);
