/* printer vocabulary track: English terms from SQL, Python and Data Science. */
(function (root) {
  const VOCAB_CHAPTERS =
[
  {
    "id": "sql-keywords",
    "title": "מילות מפתח וסעיפים ב-SQL",
    "short": "מילות SQL",
    "icon": "1",
    "intro": "מילות המפתח והסעיפים שחוזרים בשאילתות: בחירה, סינון, מיון, קיבוץ וחיבור טבלאות."
  },
  {
    "id": "sql-concepts",
    "title": "מושגי SQL",
    "short": "מושגי SQL",
    "icon": "2",
    "intro": "המושגים שמאחורי השאילתה: טבלה, עמודה, שורה, NULL, מפתחות וסכמה."
  },
  {
    "id": "python-basics",
    "title": "יסודות פייתון",
    "short": "יסודות פייתון",
    "icon": "3",
    "intro": "הבסיס של השפה: משתנים, טיפוסים, תנאים, לולאות ומבני נתונים."
  },
  {
    "id": "python-methods",
    "title": "שיטות ופונקציות בפייתון",
    "short": "שיטות ופונקציות",
    "icon": "4",
    "intro": "פונקציות מובנות ושיטות על מחרוזות, רשימות, מילונים וקבוצות, וגם איך מגדירים פונקציה."
  },
  {
    "id": "env",
    "title": "סביבת עבודה",
    "short": "סביבת עבודה",
    "icon": "5",
    "intro": "הכלים שסביב הקוד: Anaconda, Jupyter, pip, kernel ומחברת."
  },
  {
    "id": "numpy",
    "title": "NumPy",
    "short": "NumPy",
    "icon": "6",
    "intro": "מערכים, צורה (shape), טיפוס נתונים, שינוי ממדים ופעולות אקראיות."
  },
  {
    "id": "pandas",
    "title": "Pandas",
    "short": "Pandas",
    "icon": "7",
    "intro": "Series ו-DataFrame: אינדקס, עמודות, בחירה, ניקוי וקיבוץ נתונים."
  },
  {
    "id": "general",
    "title": "מושגים כלליים",
    "short": "כללי",
    "icon": "8",
    "intro": "מונחים כלליים במדעי הנתונים, בקבצים ובפיתוח שמופיעים לאורך המוצר."
  }
];

  const VOCAB_ENTRIES =
[
  {
    "id": "sql-keywords__select",
    "chapter": "sql-keywords",
    "term": "SELECT",
    "he": "בחירה / שליפה",
    "explanation": "סעיף שקובע אילו עמודות או ביטויים יוחזרו בשאילתה. זה בדרך כלל הסעיף הראשון בשאילתת שליפה.",
    "example": "SELECT name FROM students;"
  },
  {
    "id": "sql-keywords__from",
    "chapter": "sql-keywords",
    "term": "FROM",
    "he": "מתוך (טבלה)",
    "explanation": "סעיף שמציין מאיזו טבלה (או חיבור טבלאות) מגיעים הנתונים.",
    "example": "SELECT * FROM students;"
  },
  {
    "id": "sql-keywords__where",
    "chapter": "sql-keywords",
    "term": "WHERE",
    "he": "תנאי סינון",
    "explanation": "סעיף שמסנן שורות לפי תנאי, לפני קיבוץ. רק שורות שמקיימות את התנאי נשארות.",
    "example": "SELECT * FROM students WHERE age >= 18;"
  },
  {
    "id": "sql-keywords__order-by",
    "chapter": "sql-keywords",
    "term": "ORDER BY",
    "he": "מיון",
    "explanation": "סעיף שמסדר את שורות התוצאה לפי עמודה או ביטוי, בסדר עולה או יורד.",
    "example": "SELECT * FROM students ORDER BY name;"
  },
  {
    "id": "sql-keywords__asc",
    "chapter": "sql-keywords",
    "term": "ASC",
    "he": "סדר עולה",
    "explanation": "כיוון מיון מערך נמוך לגבוה, או מ-א' עד ת'. זה ברירת המחדל של ORDER BY.",
    "example": "ORDER BY price ASC"
  },
  {
    "id": "sql-keywords__desc",
    "chapter": "sql-keywords",
    "term": "DESC",
    "he": "סדר יורד",
    "explanation": "כיוון מיון מערך גבוה לנמוך, או מ-ת' עד א'. שימושי כשרוצים את הגדולים או האחרונים קודם.",
    "example": "ORDER BY price DESC"
  },
  {
    "id": "sql-keywords__limit",
    "chapter": "sql-keywords",
    "term": "LIMIT",
    "he": "הגבלת מספר שורות",
    "explanation": "מגביל כמה שורות יוחזרו, בדרך כלל אחרי המיון. נפוץ ב-SQLite וב-MySQL.",
    "example": "SELECT * FROM products ORDER BY price DESC LIMIT 5;"
  },
  {
    "id": "sql-keywords__offset",
    "chapter": "sql-keywords",
    "term": "OFFSET",
    "he": "דילוג על שורות",
    "explanation": "מדלג על מספר שורות בתחילת התוצאה, לעיתים יחד עם LIMIT לדפדוף.",
    "example": "SELECT * FROM products LIMIT 10 OFFSET 20;"
  },
  {
    "id": "sql-keywords__top",
    "chapter": "sql-keywords",
    "term": "TOP",
    "he": "מספר השורות הראשונות",
    "explanation": "ב-SQL Server וב-Access: מגביל את מספר השורות שיוחזרו, בדומה ל-LIMIT.",
    "example": "SELECT TOP 5 * FROM products ORDER BY price DESC;"
  },
  {
    "id": "sql-keywords__distinct",
    "chapter": "sql-keywords",
    "term": "DISTINCT",
    "he": "ערכים ייחודיים",
    "explanation": "מסיר כפילויות מהתוצאה ומחזיר כל ערך (או צירוף ערכים) פעם אחת בלבד.",
    "example": "SELECT DISTINCT city FROM students;"
  },
  {
    "id": "sql-keywords__as",
    "chapter": "sql-keywords",
    "term": "AS",
    "he": "כינוי (alias)",
    "explanation": "נותן שם זמני לעמודה, לביטוי או לטבלה בשאילתה, כדי לקצר או להבהיר.",
    "example": "SELECT price * 1.17 AS price_with_vat FROM products;"
  },
  {
    "id": "sql-keywords__group-by",
    "chapter": "sql-keywords",
    "term": "GROUP BY",
    "he": "קיבוץ",
    "explanation": "מקבץ שורות לפי ערכים משותפים בעמודות, בדרך כלל יחד עם פונקציות סיכום כמו COUNT או SUM.",
    "example": "SELECT city, COUNT(*) FROM students GROUP BY city;"
  },
  {
    "id": "sql-keywords__having",
    "chapter": "sql-keywords",
    "term": "HAVING",
    "he": "סינון אחרי קיבוץ",
    "explanation": "מסנן קבוצות אחרי GROUP BY, לפי תוצאה של פונקציית סיכום. WHERE מסנן שורות לפני הקיבוץ.",
    "example": "SELECT city, COUNT(*) FROM students GROUP BY city HAVING COUNT(*) > 3;"
  },
  {
    "id": "sql-keywords__join",
    "chapter": "sql-keywords",
    "term": "JOIN",
    "he": "חיבור טבלאות",
    "explanation": "מחבר שורות מטבלאות שונות לפי תנאי התאמה, כדי לקרוא נתונים קשורים יחד.",
    "example": "SELECT * FROM orders JOIN customers ON orders.customer_id = customers.id;"
  },
  {
    "id": "sql-keywords__inner-join",
    "chapter": "sql-keywords",
    "term": "INNER JOIN",
    "he": "חיבור פנימי",
    "explanation": "מחזיר רק שורות שיש להן התאמה בשתי הטבלאות. שורות בלי התאמה נזרקות.",
    "example": "SELECT * FROM a INNER JOIN b ON a.id = b.a_id;"
  },
  {
    "id": "sql-keywords__left-join",
    "chapter": "sql-keywords",
    "term": "LEFT JOIN",
    "he": "חיבור שמאלי",
    "explanation": "מחזיר את כל שורות הטבלה השמאלית, ואת ההתאמות מימין אם יש. בלי התאמה יופיע NULL מימין.",
    "example": "SELECT * FROM students LEFT JOIN grades ON students.id = grades.student_id;"
  },
  {
    "id": "sql-keywords__right-join",
    "chapter": "sql-keywords",
    "term": "RIGHT JOIN",
    "he": "חיבור ימני",
    "explanation": "מחזיר את כל שורות הטבלה הימנית, ואת ההתאמות משמאל אם יש. ההפך מ-LEFT JOIN.",
    "example": "SELECT * FROM grades RIGHT JOIN students ON grades.student_id = students.id;"
  },
  {
    "id": "sql-keywords__self-join",
    "chapter": "sql-keywords",
    "term": "SELF JOIN",
    "he": "חיבור טבלה לעצמה",
    "explanation": "חיבור של טבלה עם עותק של עצמה, למשל כדי למצוא עובד והמנהל שלו באותה טבלה.",
    "example": "SELECT e.name, m.name FROM employees e JOIN employees m ON e.manager_id = m.id;"
  },
  {
    "id": "sql-keywords__on",
    "chapter": "sql-keywords",
    "term": "ON",
    "he": "תנאי החיבור",
    "explanation": "מציין לפי אילו עמודות (או ביטוי) שורות משתי טבלאות נחשבות מתאימות ב-JOIN.",
    "example": "JOIN products ON order_items.product_id = products.id"
  },
  {
    "id": "sql-keywords__insert",
    "chapter": "sql-keywords",
    "term": "INSERT",
    "he": "הוספת שורות",
    "explanation": "פקודה שמוסיפה שורה חדשה (או כמה שורות) לטבלה.",
    "example": "INSERT INTO students (name, age) VALUES ('Dana', 20);"
  },
  {
    "id": "sql-keywords__update",
    "chapter": "sql-keywords",
    "term": "UPDATE",
    "he": "עדכון שורות",
    "explanation": "פקודה שמשנה ערכים בשורות קיימות, בדרך כלל עם WHERE כדי לא לעדכן את כל הטבלה.",
    "example": "UPDATE students SET age = 21 WHERE name = 'Dana';"
  },
  {
    "id": "sql-keywords__delete",
    "chapter": "sql-keywords",
    "term": "DELETE",
    "he": "מחיקת שורות",
    "explanation": "פקודה שמוחקת שורות מטבלה. בלי WHERE היא עלולה למחוק את כל השורות.",
    "example": "DELETE FROM students WHERE id = 7;"
  },
  {
    "id": "sql-keywords__and",
    "chapter": "sql-keywords",
    "term": "AND",
    "he": "וגם",
    "explanation": "אופרטור לוגי: התנאי מתקיים רק אם שני הצדדים אמיתיים.",
    "example": "WHERE city = 'Haifa' AND age >= 18"
  },
  {
    "id": "sql-keywords__or",
    "chapter": "sql-keywords",
    "term": "OR",
    "he": "או",
    "explanation": "אופרטור לוגי: התנאי מתקיים אם לפחות אחד מהצדדים אמיתי.",
    "example": "WHERE city = 'Haifa' OR city = 'Eilat'"
  },
  {
    "id": "sql-keywords__not",
    "chapter": "sql-keywords",
    "term": "NOT",
    "he": "שלילה",
    "explanation": "הופך תנאי לאמיתי־שלילי: מתאים לשורות שלא מקיימות את התנאי הפנימי.",
    "example": "WHERE NOT city = 'Haifa'"
  },
  {
    "id": "sql-keywords__in",
    "chapter": "sql-keywords",
    "term": "IN",
    "he": "נמצא ברשימה",
    "explanation": "בודק אם ערך שייך לרשימת ערכים נתונה, במקום כמה תנאי OR.",
    "example": "WHERE city IN ('Haifa', 'Eilat', 'Tel Aviv')"
  },
  {
    "id": "sql-keywords__between",
    "chapter": "sql-keywords",
    "term": "BETWEEN",
    "he": "בטווח",
    "explanation": "בודק אם ערך נמצא בטווח סגור, כולל את שני הקצוות.",
    "example": "WHERE price BETWEEN 10 AND 50"
  },
  {
    "id": "sql-keywords__like",
    "chapter": "sql-keywords",
    "term": "LIKE",
    "he": "התאמת תבנית",
    "explanation": "משווה מחרוזת לתבנית עם תווי כל־יכול, למשל שמות שמתחילים באות מסוימת.",
    "example": "WHERE name LIKE 'A%'"
  },
  {
    "id": "sql-keywords__is-null",
    "chapter": "sql-keywords",
    "term": "IS NULL",
    "he": "הוא ערך חסר",
    "explanation": "בודק אם בעמודה אין ערך. אי אפשר להשתמש ב-= NULL, כי NULL לא שווה לשום דבר, גם לא לעצמו.",
    "example": "WHERE phone IS NULL"
  },
  {
    "id": "sql-keywords__is-not-null",
    "chapter": "sql-keywords",
    "term": "IS NOT NULL",
    "he": "אינו ערך חסר",
    "explanation": "בודק שיש ערך בעמודה, כלומר שהתא אינו NULL.",
    "example": "WHERE phone IS NOT NULL"
  },
  {
    "id": "sql-keywords__count",
    "chapter": "sql-keywords",
    "term": "COUNT",
    "he": "ספירה",
    "explanation": "פונקציית סיכום שסופרת שורות או ערכים שאינם NULL בעמודה.",
    "example": "SELECT COUNT(*) FROM students;"
  },
  {
    "id": "sql-keywords__sum",
    "chapter": "sql-keywords",
    "term": "SUM",
    "he": "סכום",
    "explanation": "פונקציית סיכום שמחברת ערכים מספריים בקבוצה.",
    "example": "SELECT SUM(price) FROM products;"
  },
  {
    "id": "sql-keywords__avg",
    "chapter": "sql-keywords",
    "term": "AVG",
    "he": "ממוצע",
    "explanation": "פונקציית סיכום שמחזירה את הממוצע החשבוני של ערכים מספריים (מתעלמת מ-NULL).",
    "example": "SELECT AVG(age) FROM students;"
  },
  {
    "id": "sql-keywords__min",
    "chapter": "sql-keywords",
    "term": "MIN",
    "he": "ערך מינימלי",
    "explanation": "פונקציית סיכום שמחזירה את הערך הקטן ביותר בקבוצה.",
    "example": "SELECT MIN(price) FROM products;"
  },
  {
    "id": "sql-keywords__max",
    "chapter": "sql-keywords",
    "term": "MAX",
    "he": "ערך מקסימלי",
    "explanation": "פונקציית סיכום שמחזירה את הערך הגדול ביותר בקבוצה.",
    "example": "SELECT MAX(price) FROM products;"
  },
  {
    "id": "sql-keywords__case-when",
    "chapter": "sql-keywords",
    "term": "CASE WHEN",
    "he": "תנאי בתוך שאילתה",
    "explanation": "ביטוי שבודק תנאים ומחזיר ערך מתאים, כמו if בתוך SQL.",
    "example": "SELECT CASE WHEN score >= 60 THEN 'pass' ELSE 'fail' END FROM exams;"
  },
  {
    "id": "sql-keywords__percent-like",
    "chapter": "sql-keywords",
    "term": "% (LIKE)",
    "he": "תו־כל־יכול לרצף תווים",
    "explanation": "בתוך LIKE, התו % מתאים לאפס או יותר תווים בכל אורך.",
    "example": "WHERE name LIKE '%son'"
  },
  {
    "id": "sql-keywords__uscore-like",
    "chapter": "sql-keywords",
    "term": "_ (LIKE)",
    "he": "תו־כל־יכול לתו בודד",
    "explanation": "בתוך LIKE, התו _ מתאים בדיוק לתו אחד.",
    "example": "WHERE code LIKE 'A_2'"
  },
  {
    "id": "sql-keywords__round",
    "chapter": "sql-keywords",
    "term": "ROUND",
    "he": "עיגול מספר",
    "explanation": "פונקציה שעיגול מספר למספר ספרות אחרי הנקודה, או למספר שלם.",
    "example": "SELECT ROUND(price * 1.17, 2) FROM products;"
  },
  {
    "id": "sql-keywords__select-star",
    "chapter": "sql-keywords",
    "term": "SELECT *",
    "he": "בחירת כל העמודות",
    "explanation": "הכוכבית אחרי SELECT מבקשת את כל עמודות הטבלה. נוח לבדיקות, אבל בשאילתה סופית עדיף לציין עמודות במפורש.",
    "example": "SELECT * FROM students;"
  },
  {
    "id": "sql-concepts__table",
    "chapter": "sql-concepts",
    "term": "table",
    "he": "טבלה",
    "explanation": "אוסף שורות ועמודות במסד נתונים יחסים. כל טבלה מתארת סוג ישות, למשל תלמידים או הזמנות.",
    "example": "CREATE TABLE students (id INT, name TEXT);"
  },
  {
    "id": "sql-concepts__column",
    "chapter": "sql-concepts",
    "term": "column",
    "he": "עמודה",
    "explanation": "שדה בטבלה: כל העמודות יחד מגדירות את מבנה השורה, וכל עמודה היא מסוג נתונים מסוים.",
    "example": "SELECT column_name FROM table_name;"
  },
  {
    "id": "sql-concepts__row",
    "chapter": "sql-concepts",
    "term": "row",
    "he": "שורה",
    "explanation": "רשומה אחת בטבלה: צירוף הערכים של כל העמודות עבור פריט אחד."
  },
  {
    "id": "sql-concepts__null",
    "chapter": "sql-concepts",
    "term": "null",
    "he": "ערך חסר",
    "explanation": "סימון שאין ערך בתא. זה לא אפס ולא מחרוזת ריקה, אלא היעדר מידע. משווים אותו עם IS NULL.",
    "example": "WHERE email IS NULL"
  },
  {
    "id": "sql-concepts__primary-key",
    "chapter": "sql-concepts",
    "term": "primary key",
    "he": "מפתח ראשי",
    "explanation": "עמודה (או צירוף עמודות) שמזהה כל שורה באופן ייחודי, ואינה יכולה להיות NULL.",
    "example": "id INTEGER PRIMARY KEY"
  },
  {
    "id": "sql-concepts__foreign-key",
    "chapter": "sql-concepts",
    "term": "foreign key",
    "he": "מפתח זר",
    "explanation": "עמודה שמצביעה על מפתח ראשי בטבלה אחרת, וכך מקשרת בין הרשומות.",
    "example": "customer_id INTEGER REFERENCES customers(id)"
  },
  {
    "id": "sql-concepts__database",
    "chapter": "sql-concepts",
    "term": "database",
    "he": "מסד נתונים",
    "explanation": "מאגר מאורגן של נתונים, שמכיל טבלאות, קשרים ולעיתים גם הרשאות ושאילתות שמורות."
  },
  {
    "id": "sql-concepts__schema",
    "chapter": "sql-concepts",
    "term": "schema",
    "he": "סכמה / מבנה",
    "explanation": "הגדרת המבנה של הנתונים: שמות טבלאות, עמודות, טיפוסים ואילוצים. ב-SQL זה לרוב «schema-on-write»."
  },
  {
    "id": "sql-concepts__query",
    "chapter": "sql-concepts",
    "term": "query",
    "he": "שאילתה",
    "explanation": "בקשה למסד הנתונים, בדרך כלל ב-SQL, כדי לשלוף או לשנות נתונים.",
    "example": "SELECT name FROM students;"
  },
  {
    "id": "sql-concepts__result-set",
    "chapter": "sql-concepts",
    "term": "result set",
    "he": "קבוצת תוצאות",
    "explanation": "הטבלה הזמנית שמתקבלת אחרי הרצת שאילתת SELECT: עמודות ושורות שהשאילתה החזירה."
  },
  {
    "id": "sql-concepts__alias",
    "chapter": "sql-concepts",
    "term": "alias",
    "he": "כינוי",
    "explanation": "שם זמני לעמודה, לביטוי או לטבלה בתוך שאילתה, לרוב עם AS.",
    "example": "SELECT name AS student_name FROM students;"
  },
  {
    "id": "sql-concepts__constraint",
    "chapter": "sql-concepts",
    "term": "constraint",
    "he": "אילוץ",
    "explanation": "כלל שמגביל אילו ערכים מותרים בטבלה, למשל PRIMARY KEY, UNIQUE, NOT NULL או FOREIGN KEY.",
    "example": "name TEXT NOT NULL"
  },
  {
    "id": "sql-concepts__unique",
    "chapter": "sql-concepts",
    "term": "unique",
    "he": "ייחודי",
    "explanation": "אילוץ שמונע כפילות בערכי עמודה (או צירוף עמודות), אבל בניגוד למפתח ראשי עשוי לאפשר NULL בהתאם למסד.",
    "example": "email TEXT UNIQUE"
  },
  {
    "id": "sql-concepts__index-sql",
    "chapter": "sql-concepts",
    "term": "index (SQL)",
    "he": "אינדקס במסד",
    "explanation": "מבנה עזר שמאיץ חיפוש ומיון לפי עמודות מסוימות, במחיר של מקום ושל עדכונים איטיים יותר.",
    "example": "CREATE INDEX idx_students_name ON students(name);"
  },
  {
    "id": "sql-concepts__data-type",
    "chapter": "sql-concepts",
    "term": "data type",
    "he": "טיפוס נתונים",
    "explanation": "סוג הערך שעמודה יכולה להחזיק, למשל מספר שלם, טקסט, תאריך או בוליאני.",
    "example": "age INTEGER, name VARCHAR(80)"
  },
  {
    "id": "sql-concepts__integer",
    "chapter": "sql-concepts",
    "term": "INTEGER",
    "he": "מספר שלם",
    "explanation": "טיפוס למספרים שלמים בלי נקודה עשרונית, כמו גיל או מזהה.",
    "example": "age INTEGER"
  },
  {
    "id": "sql-concepts__varchar",
    "chapter": "sql-concepts",
    "term": "VARCHAR",
    "he": "מחרוזת באורך משתנה",
    "explanation": "טיפוס טקסט עם אורך מרבי מוגדר, למשל VARCHAR(50). חוסך מקום לעומת CHAR הקבוע.",
    "example": "name VARCHAR(50)"
  },
  {
    "id": "sql-concepts__text",
    "chapter": "sql-concepts",
    "term": "TEXT",
    "he": "טקסט ארוך",
    "explanation": "טיפוס למחרוזות ארוכות בלי הגבלת אורך קשיחה (תלוי במסד), מתאים לתיאורים או הערות.",
    "example": "bio TEXT"
  },
  {
    "id": "sql-concepts__boolean",
    "chapter": "sql-concepts",
    "term": "BOOLEAN",
    "he": "בוליאני (אמת/שקר)",
    "explanation": "טיפוס לערכים True/False, או 1/0, לציון כן/לא.",
    "example": "is_active BOOLEAN"
  },
  {
    "id": "sql-concepts__date",
    "chapter": "sql-concepts",
    "term": "DATE",
    "he": "תאריך",
    "explanation": "טיפוס לשמירת תאריך (ולעיתים שעה, לפי הטיפוס המדויק במסד).",
    "example": "born_on DATE"
  },
  {
    "id": "sql-concepts__filter",
    "chapter": "sql-concepts",
    "term": "filter",
    "he": "סינון",
    "explanation": "בחירת תת־קבוצה של שורות לפי תנאי, ב-SQL בעיקר בעזרת WHERE או HAVING.",
    "example": "WHERE price > 100"
  },
  {
    "id": "sql-concepts__sort",
    "chapter": "sql-concepts",
    "term": "sort",
    "he": "מיון",
    "explanation": "סידור השורות לפי ערך, ב-SQL באמצעות ORDER BY.",
    "example": "ORDER BY created_at DESC"
  },
  {
    "id": "sql-concepts__aggregation",
    "chapter": "sql-concepts",
    "term": "aggregation",
    "he": "סיכום / קיבוץ",
    "explanation": "חישוב ערך אחד מתוך קבוצת שורות, למשל סכום, ממוצע או ספירה, לרוב עם GROUP BY.",
    "example": "SELECT city, AVG(age) FROM students GROUP BY city;"
  },
  {
    "id": "sql-concepts__duplicate",
    "chapter": "sql-concepts",
    "term": "duplicate",
    "he": "כפילות",
    "explanation": "שורות או ערכים שחוזרים על עצמם. DISTINCT ו-UNIQUE עוזרים להימנע מהן או להסתיר אותן.",
    "example": "SELECT DISTINCT email FROM users;"
  },
  {
    "id": "sql-concepts__clause",
    "chapter": "sql-concepts",
    "term": "clause",
    "he": "סעיף",
    "explanation": "חלק בשאילתה עם תפקיד משלו, כמו WHERE, ORDER BY או GROUP BY."
  },
  {
    "id": "sql-concepts__statement",
    "chapter": "sql-concepts",
    "term": "statement",
    "he": "פקודה / משפט",
    "explanation": "הוראה שלמה ב-SQL שמסתיימת לרוב בנקודה־פסיק, למשל SELECT, INSERT או CREATE.",
    "example": "DELETE FROM logs WHERE ts < '2024-01-01';"
  },
  {
    "id": "sql-concepts__default",
    "chapter": "sql-concepts",
    "term": "default",
    "he": "ערך ברירת מחדל",
    "explanation": "ערך שיוכנס לעמודה אוטומטית אם בהוספת שורה לא צוין ערך אחר.",
    "example": "status TEXT DEFAULT 'new'"
  },
  {
    "id": "python-basics__variable",
    "chapter": "python-basics",
    "term": "variable",
    "he": "משתנה",
    "explanation": "שם שמחזיק ערך בזיכרון. אפשר לקרוא אותו מחדש ולדרוס אותו בהשמה חדשה.",
    "example": "age = 20"
  },
  {
    "id": "python-basics__assignment",
    "chapter": "python-basics",
    "term": "assignment",
    "he": "השמה",
    "explanation": "הפעולה ששמה ערך במשתנה בעזרת הסימן =. זה לא בדיקת שוויון.",
    "example": "x = 10"
  },
  {
    "id": "python-basics__print",
    "chapter": "python-basics",
    "term": "print",
    "he": "הדפסה",
    "explanation": "פונקציה שמציגה ערכים למסך (או לפלט התכנית), ואז יורדת שורה כברירת מחדל.",
    "example": "print('hello')"
  },
  {
    "id": "python-basics__comment",
    "chapter": "python-basics",
    "term": "comment",
    "he": "הערה",
    "explanation": "טקסט שהמפרש מתעלם ממנו. בפייתון שורה שמתחילה ב-# היא הערה.",
    "example": "# זה לא רץ"
  },
  {
    "id": "python-basics__int",
    "chapter": "python-basics",
    "term": "int",
    "he": "מספר שלם",
    "explanation": "טיפוס למספרים שלמים בלי נקודה, למשל 3 או -7.",
    "example": "n = 3"
  },
  {
    "id": "python-basics__float",
    "chapter": "python-basics",
    "term": "float",
    "he": "מספר עשרוני",
    "explanation": "טיפוס למספרים עם נקודה עשרונית, למשל 3.14 או 2.0.",
    "example": "pi = 3.14"
  },
  {
    "id": "python-basics__str",
    "chapter": "python-basics",
    "term": "str",
    "he": "מחרוזת",
    "explanation": "טיפוס לרצף תווים, נכתב בין גרשיים בודדים או כפולים.",
    "example": "name = 'Dana'"
  },
  {
    "id": "python-basics__bool",
    "chapter": "python-basics",
    "term": "bool",
    "he": "בוליאני",
    "explanation": "טיפוס לשני ערכים בלבד: True או False. משמש בתנאים.",
    "example": "ok = True"
  },
  {
    "id": "python-basics__true",
    "chapter": "python-basics",
    "term": "True",
    "he": "אמת",
    "explanation": "הערך הבוליאני החיובי בפייתון. נכתב עם T גדולה.",
    "example": "if True:"
  },
  {
    "id": "python-basics__false",
    "chapter": "python-basics",
    "term": "False",
    "he": "שקר",
    "explanation": "הערך הבוליאני השלילי בפייתון. נכתב עם F גדולה.",
    "example": "ok = False"
  },
  {
    "id": "python-basics__none",
    "chapter": "python-basics",
    "term": "None",
    "he": "אין ערך / ריק",
    "explanation": "ערך מיוחד שאומר «אין כאן כלום». זה לא 0, לא מחרוזת ריקה ולא False, אלא היעדר תוצאה.",
    "example": "result = None"
  },
  {
    "id": "python-basics__type",
    "chapter": "python-basics",
    "term": "type()",
    "he": "בדיקת טיפוס",
    "explanation": "פונקציה שמחזירה את הטיפוס של ערך. לרוב מדפיסים type(x).__name__ כדי לראות את השם.",
    "example": "print(type(3).__name__)  # int"
  },
  {
    "id": "python-basics__list",
    "chapter": "python-basics",
    "term": "list",
    "he": "רשימה",
    "explanation": "אוסף מסודר וניתן לשינוי של איברים, בסוגריים מרובעים. אפשר לשנות, להוסיף ולמחוק איברים.",
    "example": "nums = [1, 2, 3]"
  },
  {
    "id": "python-basics__tuple",
    "chapter": "python-basics",
    "term": "tuple",
    "he": "רביעייה / טאפל",
    "explanation": "אוסף מסודר שאי אפשר לשנות אחרי היצירה, בסוגריים עגולים. מתאים לערכים קבועים כקבוצה.",
    "example": "point = (3, 4)"
  },
  {
    "id": "python-basics__dict",
    "chapter": "python-basics",
    "term": "dict",
    "he": "מילון",
    "explanation": "אוסף של זוגות מפתח־ערך. הגישה לערך היא לפי המפתח, בסוגריים מסולסלים.",
    "example": "ages = {'Dana': 20, 'Noa': 22}"
  },
  {
    "id": "python-basics__set",
    "chapter": "python-basics",
    "term": "set",
    "he": "קבוצה",
    "explanation": "אוסף של ערכים ייחודיים בלי סדר מובטח. מתאים לבדיקת שייכות ולפעולות איחוד וחיתוך.",
    "example": "colors = {'red', 'blue'}"
  },
  {
    "id": "python-basics__if",
    "chapter": "python-basics",
    "term": "if",
    "he": "תנאי אם",
    "explanation": "מתחיל בלוק שרץ רק אם התנאי אמיתי. בפייתון הבלוק מוזח אחרי הנקודתיים.",
    "example": "if age >= 18:\n    print('adult')"
  },
  {
    "id": "python-basics__elif",
    "chapter": "python-basics",
    "term": "elif",
    "he": "אחרת־אם",
    "explanation": "תנאי נוסף אחרי if, שנבדק רק אם התנאים הקודמים נכשלו.",
    "example": "if x > 0:\n    print('pos')\nelif x < 0:\n    print('neg')"
  },
  {
    "id": "python-basics__else",
    "chapter": "python-basics",
    "term": "else",
    "he": "אחרת",
    "explanation": "בלוק שרץ אם אף תנאי קודם לא התקיים.",
    "example": "if ok:\n    print('yes')\nelse:\n    print('no')"
  },
  {
    "id": "python-basics__for",
    "chapter": "python-basics",
    "term": "for",
    "he": "לולאת מעבר",
    "explanation": "עוברת על איברי אוסף (רשימה, מחרוזת, range ועוד) ומריצה את הבלוק לכל איבר.",
    "example": "for n in [1, 2, 3]:\n    print(n)"
  },
  {
    "id": "python-basics__while",
    "chapter": "python-basics",
    "term": "while",
    "he": "לולאה כל עוד",
    "explanation": "חוזרת על בלוק כל עוד התנאי אמיתי. חשוב לעדכן את התנאי כדי לא להיכנס ללולאה אינסופית.",
    "example": "while n < 3:\n    n = n + 1"
  },
  {
    "id": "python-basics__break",
    "chapter": "python-basics",
    "term": "break",
    "he": "יציאה מלולאה",
    "explanation": "יוצא מיד מהלולאה הקרובה, גם אם עוד לא הסתיימה.",
    "example": "for x in nums:\n    if x < 0:\n        break"
  },
  {
    "id": "python-basics__continue",
    "chapter": "python-basics",
    "term": "continue",
    "he": "דילוג לאיטרציה הבאה",
    "explanation": "מדלג על שאר הבלוק ועובר לאיבר או לבדיקה הבאים בלולאה.",
    "example": "if x == 0:\n    continue"
  },
  {
    "id": "python-basics__range",
    "chapter": "python-basics",
    "term": "range",
    "he": "רצף מספרים",
    "explanation": "מייצר סדרת מספרים שלמים, לרוב לשימוש ב-for. range(5) זה 0 עד 4, ו-range(1, 5) זה 1 עד 4.",
    "example": "for i in range(3):\n    print(i)"
  },
  {
    "id": "python-basics__indentation",
    "chapter": "python-basics",
    "term": "indentation",
    "he": "הזחה",
    "explanation": "הרווחים בתחילת השורה שמגדירים בפייתון איזה קוד שייך לבלוק (אחרי if, for, def וכו').",
    "example": "if True:\n    print('inside')"
  },
  {
    "id": "python-basics__f-string",
    "chapter": "python-basics",
    "term": "f-string",
    "he": "מחרוזת מעוצבת",
    "explanation": "מחרוזת שמתחילה ב-f ומאפשרת לשבץ ביטויים בתוך סוגריים מסולסלים.",
    "example": "f'שלום {name}'"
  },
  {
    "id": "python-basics__slice",
    "chapter": "python-basics",
    "term": "slice",
    "he": "חיתוך / פרוסה",
    "explanation": "בחירת תת־רצף מתוך רשימה או מחרוזת עם תחביר start:stop, בלי לכלול את האינדקס stop.",
    "example": "letters[1:4]"
  },
  {
    "id": "python-basics__index-python",
    "chapter": "python-basics",
    "term": "index (Python)",
    "he": "אינדקס (מיקום)",
    "explanation": "המספר שמציין את מיקום האיבר באוסף מסודר. בפייתון האינדקס הראשון הוא 0, והאחרון הוא -1.",
    "example": "names[0]"
  },
  {
    "id": "python-basics__eqeq",
    "chapter": "python-basics",
    "term": "==",
    "he": "שווה ל-",
    "explanation": "אופרטור השוואה: בודק אם שני ערכים שווים. לא לבלבל עם = שעושה השמה.",
    "example": "if x == 10:"
  },
  {
    "id": "python-basics__eq",
    "chapter": "python-basics",
    "term": "!=",
    "he": "לא שווה ל-",
    "explanation": "אופרטור השוואה: אמיתי כששני הערכים שונים.",
    "example": "if name != 'Dana':"
  },
  {
    "id": "python-basics__and-python",
    "chapter": "python-basics",
    "term": "and (Python)",
    "he": "וגם (פייתון)",
    "explanation": "אופרטור לוגי: הביטוי אמיתי רק אם שני הצדדים אמיתיים.",
    "example": "if x > 0 and x < 10:"
  },
  {
    "id": "python-basics__or-python",
    "chapter": "python-basics",
    "term": "or (Python)",
    "he": "או (פייתון)",
    "explanation": "אופרטור לוגי: הביטוי אמיתי אם לפחות צד אחד אמיתי.",
    "example": "if city == 'Haifa' or city == 'Eilat':"
  },
  {
    "id": "python-basics__not-python",
    "chapter": "python-basics",
    "term": "not (Python)",
    "he": "שלילה (פייתון)",
    "explanation": "הופך ערך בוליאני: not True הוא False.",
    "example": "if not found:"
  },
  {
    "id": "python-basics__in-python",
    "chapter": "python-basics",
    "term": "in (Python)",
    "he": "נמצא בתוך",
    "explanation": "בודק שייכות: האם איבר נמצא ברשימה, במחרוזת, במפתחות מילון וכו'.",
    "example": "if 'a' in name:"
  },
  {
    "id": "python-basics__slashslash",
    "chapter": "python-basics",
    "term": "//",
    "he": "חילוק שלם",
    "explanation": "חילוק שמשאיר רק את החלק השלם, בלי השארית העשרונית. 7 // 2 הוא 3.",
    "example": "pages = n // 10"
  },
  {
    "id": "python-basics__percent-modulo",
    "chapter": "python-basics",
    "term": "% (modulo)",
    "he": "שארית חילוק",
    "explanation": "האופרטור % בפייתון מחזיר את השארית. 7 % 2 הוא 1. שימושי לבדיקת זוגיות.",
    "example": "if n % 2 == 0:"
  },
  {
    "id": "python-basics__starstar",
    "chapter": "python-basics",
    "term": "**",
    "he": "חזקה",
    "explanation": "אופרטור העלאה בחזקה. 2 ** 3 הוא 8.",
    "example": "square = n ** 2"
  },
  {
    "id": "python-basics__input",
    "chapter": "python-basics",
    "term": "input()",
    "he": "קלט מהמשתמש",
    "explanation": "פונקציה שעוצרת ומקבלת טקסט מהמשתמש. התוצאה היא תמיד מחרוזת, ולכן לעיתים ממירים ב-int.",
    "example": "name = input('שם: ')"
  },
  {
    "id": "python-methods__append",
    "chapter": "python-methods",
    "term": "append",
    "he": "הוספה לסוף רשימה",
    "explanation": "שיטת רשימה שמוסיפה איבר אחד בסוף הרשימה הקיימת.",
    "example": "nums.append(4)"
  },
  {
    "id": "python-methods__extend",
    "chapter": "python-methods",
    "term": "extend",
    "he": "הרחבת רשימה",
    "explanation": "שיטת רשימה שמוסיפה בסוף את כל איברי אוסף אחר, לא כאיבר בודד.",
    "example": "nums.extend([4, 5])"
  },
  {
    "id": "python-methods__listdotinsert",
    "chapter": "python-methods",
    "term": "list.insert",
    "he": "הוספה במקום",
    "explanation": "שיטת רשימה שתוחבת איבר באינדקס נתון ומסיטה את השאר ימינה.",
    "example": "nums.insert(0, 99)"
  },
  {
    "id": "python-methods__pop",
    "chapter": "python-methods",
    "term": "pop",
    "he": "שליפה ומחיקה",
    "explanation": "מסיר איבר ומחזיר אותו. ברשימה בלי ארגומנט מסיר את האחרון, ובמילון מסיר לפי מפתח.",
    "example": "last = nums.pop()"
  },
  {
    "id": "python-methods__remove",
    "chapter": "python-methods",
    "term": "remove",
    "he": "מחיקה לפי ערך",
    "explanation": "מסיר את המופע הראשון של ערך מרשימה (או מקבוצה). אם הערך לא קיים תיזרק שגיאה.",
    "example": "nums.remove(3)"
  },
  {
    "id": "python-methods__listdotsort",
    "chapter": "python-methods",
    "term": "list.sort",
    "he": "מיון במקום",
    "explanation": "שיטת רשימה שמסדרת את הרשימה עצמה בסדר עולה (או לפי מפתח), ומחזירה None.",
    "example": "nums.sort()"
  },
  {
    "id": "python-methods__reverse",
    "chapter": "python-methods",
    "term": "reverse",
    "he": "היפוך במקום",
    "explanation": "שיטת רשימה שהופכת את סדר האיברים בתוך אותה רשימה.",
    "example": "nums.reverse()"
  },
  {
    "id": "python-methods__split",
    "chapter": "python-methods",
    "term": "split",
    "he": "פיצול מחרוזת",
    "explanation": "שיטת מחרוזת שמפצלת לפי מפריד (ברירת מחדל: רווח) ומחזירה רשימת חלקים.",
    "example": "'a,b,c'.split(',')"
  },
  {
    "id": "python-methods__strdotjoin",
    "chapter": "python-methods",
    "term": "str.join",
    "he": "חיבור מחרוזות",
    "explanation": "שיטת מחרוזת: המחרוזת שעליה קוראים היא המפריד, והיא מחברת איברי אוסף למחרוזת אחת.",
    "example": "', '.join(['a', 'b'])"
  },
  {
    "id": "python-methods__strip",
    "chapter": "python-methods",
    "term": "strip",
    "he": "הסרת רווחי קצוות",
    "explanation": "שיטת מחרוזת שמסירה רווחים (או תווים נתונים) מתחילת המחרוזת וסופה.",
    "example": "'  hi  '.strip()"
  },
  {
    "id": "python-methods__replace",
    "chapter": "python-methods",
    "term": "replace",
    "he": "החלפת טקסט",
    "explanation": "שיטת מחרוזת שמחזירה עותק שבו מופעים של מחרוזת אחת הוחלפו באחרת. המחרוזת המקורית לא משתנה.",
    "example": "'haifa'.replace('h', 'H')"
  },
  {
    "id": "python-methods__lower",
    "chapter": "python-methods",
    "term": "lower",
    "he": "אותיות קטנות",
    "explanation": "שיטת מחרוזת שמחזירה עותק שבו כל האותיות האנגליות קטנות.",
    "example": "'SQL'.lower()  # 'sql'"
  },
  {
    "id": "python-methods__upper",
    "chapter": "python-methods",
    "term": "upper",
    "he": "אותיות גדולות",
    "explanation": "שיטת מחרוזת שמחזירה עותק שבו כל האותיות האנגליות גדולות.",
    "example": "'sql'.upper()  # 'SQL'"
  },
  {
    "id": "python-methods__startswith",
    "chapter": "python-methods",
    "term": "startswith",
    "he": "מתחיל ב-",
    "explanation": "שיטת מחרוזת שבודקת אם המחרוזת מתחילה בקידומת נתונה.",
    "example": "name.startswith('A')"
  },
  {
    "id": "python-methods__len",
    "chapter": "python-methods",
    "term": "len",
    "he": "אורך",
    "explanation": "פונקציה מובנית שמחזירה כמה איברים יש באוסף, או כמה תווים במחרוזת.",
    "example": "len([1, 2, 3])  # 3"
  },
  {
    "id": "python-methods__sum",
    "chapter": "python-methods",
    "term": "sum()",
    "he": "סכום (פייתון)",
    "explanation": "פונקציה מובנית שמחברת איברים מספריים באוסף.",
    "example": "sum([1, 2, 3])  # 6"
  },
  {
    "id": "python-methods__min",
    "chapter": "python-methods",
    "term": "min()",
    "he": "מינימום (פייתון)",
    "explanation": "פונקציה מובנית שמחזירה את הערך הקטן ביותר מבין הארגומנטים או מתוך אוסף.",
    "example": "min(3, 1, 2)  # 1"
  },
  {
    "id": "python-methods__max",
    "chapter": "python-methods",
    "term": "max()",
    "he": "מקסימום (פייתון)",
    "explanation": "פונקציה מובנית שמחזירה את הערך הגדול ביותר.",
    "example": "max([3, 1, 2])  # 3"
  },
  {
    "id": "python-methods__abs",
    "chapter": "python-methods",
    "term": "abs",
    "he": "ערך מוחלט",
    "explanation": "פונקציה מובנית שמחזירה את המספר בלי סימן שלילי. abs(-4) הוא 4.",
    "example": "abs(-4)"
  },
  {
    "id": "python-methods__round",
    "chapter": "python-methods",
    "term": "round()",
    "he": "עיגול (פייתון)",
    "explanation": "פונקציה מובנית שמעגלת מספר. אפשר לציין כמה ספרות אחרי הנקודה.",
    "example": "round(3.1415, 2)  # 3.14"
  },
  {
    "id": "python-methods__sorted",
    "chapter": "python-methods",
    "term": "sorted",
    "he": "מיון שמחזיר רשימה חדשה",
    "explanation": "פונקציה שמחזירה רשימה ממוינת חדשה, בלי לשנות את האוסף המקורי. שונה מ-sort של רשימה.",
    "example": "sorted([3, 1, 2])"
  },
  {
    "id": "python-methods__enumerate",
    "chapter": "python-methods",
    "term": "enumerate",
    "he": "מעבר עם אינדקס",
    "explanation": "פונקציה שזוגות לכל איבר את המיקום שלו, נוחה ב-for כשצריך גם את האינדקס וגם את הערך.",
    "example": "for i, name in enumerate(names):\n    print(i, name)"
  },
  {
    "id": "python-methods__zip",
    "chapter": "python-methods",
    "term": "zip",
    "he": "צימוד אוספים",
    "explanation": "פונקציה שמצמידה איברים מאוספים כמה בכל פעם: הראשון עם הראשון, השני עם השני, וכן הלאה.",
    "example": "for a, b in zip(left, right):\n    print(a, b)"
  },
  {
    "id": "python-methods__def",
    "chapter": "python-methods",
    "term": "def",
    "he": "הגדרת פונקציה",
    "explanation": "מילת מפתח שמתחילה הגדרת פונקציה: שם, פרמטרים בסוגריים, נקודתיים, ואז בלוק מוזח.",
    "example": "def greet(name):\n    return 'Hi ' + name"
  },
  {
    "id": "python-methods__return",
    "chapter": "python-methods",
    "term": "return",
    "he": "החזרת ערך",
    "explanation": "מסיים את הפונקציה ומחזיר ערך למי שקרא לה. בלי return הפונקציה מחזירה None.",
    "example": "def double(x):\n    return x * 2"
  },
  {
    "id": "python-methods__parameter",
    "chapter": "python-methods",
    "term": "parameter",
    "he": "פרמטר",
    "explanation": "שם המשתנה בהגדרת הפונקציה, שמקבל את הערך שנשלח בקריאה.",
    "example": "def greet(name):  # name הוא פרמטר"
  },
  {
    "id": "python-methods__argument",
    "chapter": "python-methods",
    "term": "argument",
    "he": "ארגומנט",
    "explanation": "הערך ששולחים לפונקציה בזמן הקריאה. לפעמים קוראים לו גם «ארגומנט בפועל».",
    "example": "greet('Dana')  # 'Dana' הוא ארגומנט"
  },
  {
    "id": "python-methods__method",
    "chapter": "python-methods",
    "term": "method",
    "he": "שיטה",
    "explanation": "פונקציה ששייכת לאובייקט ומופעלת עם נקודה, למשל lst.append(1). היא מקבלת את האובייקט עצמו כ-self.",
    "example": "text.lower()"
  },
  {
    "id": "python-methods__function",
    "chapter": "python-methods",
    "term": "function",
    "he": "פונקציה",
    "explanation": "בלוק קוד עם שם שאפשר לקרוא לו שוב. פונקציה מובנית או שהוגדרה ב-def, ולא בהכרח שייכת לאובייקט.",
    "example": "len(items)"
  },
  {
    "id": "python-methods__keys",
    "chapter": "python-methods",
    "term": "keys",
    "he": "מפתחות המילון",
    "explanation": "שיטת מילון שמחזירה את אוסף המפתחות.",
    "example": "ages.keys()"
  },
  {
    "id": "python-methods__values",
    "chapter": "python-methods",
    "term": "values",
    "he": "ערכי המילון",
    "explanation": "שיטת מילון שמחזירה את אוסף הערכים, בלי המפתחות.",
    "example": "ages.values()"
  },
  {
    "id": "python-methods__items",
    "chapter": "python-methods",
    "term": "items",
    "he": "זוגות מפתח־ערך",
    "explanation": "שיטת מילון שמחזירה את הזוגות (מפתח, ערך), נוחה למעבר ב-for.",
    "example": "for k, v in ages.items():\n    print(k, v)"
  },
  {
    "id": "python-methods__get",
    "chapter": "python-methods",
    "term": "get",
    "he": "שליפה בטוחה ממילון",
    "explanation": "שיטת מילון שמחזירה את הערך למפתח, או ערך ברירת מחדל (None אם לא צוין) במקום לזרוק KeyError.",
    "example": "ages.get('Omar', 0)"
  },
  {
    "id": "python-methods__dictdotupdate",
    "chapter": "python-methods",
    "term": "dict.update",
    "he": "עדכון מילון",
    "explanation": "שיטת מילון שמוסיפה או דורסת זוגות ממילון או מזוגות אחרים.",
    "example": "ages.update({'Noa': 23})"
  },
  {
    "id": "python-methods__add",
    "chapter": "python-methods",
    "term": "add",
    "he": "הוספה לקבוצה",
    "explanation": "שיטת set שמוסיפה איבר אחד לקבוצה. אם הוא כבר קיים, הקבוצה לא משתנה.",
    "example": "colors.add('green')"
  },
  {
    "id": "python-methods__setdotunion",
    "chapter": "python-methods",
    "term": "set.union",
    "he": "איחוד קבוצות",
    "explanation": "מחזיר קבוצה חדשה עם כל האיברים שמופיעים לפחות באחת הקבוצות.",
    "example": "a.union(b)"
  },
  {
    "id": "python-methods__intersection",
    "chapter": "python-methods",
    "term": "intersection",
    "he": "חיתוך קבוצות",
    "explanation": "מחזיר קבוצה חדשה עם האיברים שמופיעים בשתי הקבוצות.",
    "example": "a.intersection(b)"
  },
  {
    "id": "python-methods__int",
    "chapter": "python-methods",
    "term": "int()",
    "he": "המרה לשלם",
    "explanation": "פונקציה שממירה ערך (למשל מחרוזת '7' או float) למספר שלם. '7.2' לא יומר ישירות ב-int.",
    "example": "int('12')"
  },
  {
    "id": "python-methods__str",
    "chapter": "python-methods",
    "term": "str()",
    "he": "המרה למחרוזת",
    "explanation": "פונקציה שממירה ערך למחרוזת, למשל כדי לחבר מספר לטקסט.",
    "example": "str(12) + '3'  # '123'"
  },
  {
    "id": "python-methods__float",
    "chapter": "python-methods",
    "term": "float()",
    "he": "המרה לעשרוני",
    "explanation": "פונקציה שממירה ערך למספר עשרוני, למשל float('4.5').",
    "example": "float('4.5') + 1.5"
  },
  {
    "id": "python-methods__bool",
    "chapter": "python-methods",
    "term": "bool()",
    "he": "המרה לבוליאני",
    "explanation": "פונקציה שממירה ערך לאמת או שקר לפי כללי «אמתיות»: 0, '', [], None נחשבים False.",
    "example": "bool(0)  # False"
  },
  {
    "id": "env__anaconda",
    "chapter": "env",
    "term": "Anaconda",
    "he": "הפצת פייתון למדעי הנתונים",
    "explanation": "ערכת התקנה שכוללת את פייתון, את מנהל החבילות conda, וספריות נפוצות כמו NumPy, Pandas ו-Jupyter."
  },
  {
    "id": "env__conda",
    "chapter": "env",
    "term": "conda",
    "he": "מנהל סביבות וחבילות",
    "explanation": "כלי של Anaconda ליצירת סביבות מבודדות ולהתקנת חבילות, לא רק לחבילות פייתון.",
    "example": "conda create -n course python=3.11"
  },
  {
    "id": "env__jupyter",
    "chapter": "env",
    "term": "Jupyter",
    "he": "סביבת מחברות אינטראקטיבית",
    "explanation": "מערכת להרצת קוד במחברת בדפדפן, עם תאים, טקסט Markdown ותוצאות מתחת לקוד."
  },
  {
    "id": "env__jupyter-notebook",
    "chapter": "env",
    "term": "Jupyter Notebook",
    "he": "מחברת Jupyter קלאסית",
    "explanation": "הממשק הקלאסי של Jupyter לקובץ ‎.ipynb: תאים שאפשר להריץ אחד־אחד ולשמור יחד עם הפלט."
  },
  {
    "id": "env__kernel",
    "chapter": "env",
    "term": "kernel",
    "he": "ליבה",
    "explanation": "תהליך שמריץ את הקוד של המחברת (למשל ליבת פייתון). אם הליבה נתקעת, מפעילים אותה מחדש בלי למחוק את הקובץ."
  },
  {
    "id": "env__notebook",
    "chapter": "env",
    "term": "notebook",
    "he": "מחברת",
    "explanation": "מסמך עם תאי קוד ותאי טקסט, בדרך כלל קובץ ‎.ipynb, שבו רצים צעד־צעד ורואים פלט מיד."
  },
  {
    "id": "env__cell-jupyter",
    "chapter": "env",
    "term": "cell (Jupyter)",
    "he": "תא במחברת",
    "explanation": "יחידת עבודה במחברת: תא קוד שרצים, או תא Markdown לכותרות ולהסברים."
  },
  {
    "id": "env__pip",
    "chapter": "env",
    "term": "pip",
    "he": "מתקין חבילות של פייתון",
    "explanation": "הכלי הסטנדרטי להתקנת חבילות מ-PyPI. כותבים למשל pip install pandas.",
    "example": "pip install numpy"
  },
  {
    "id": "env__venv",
    "chapter": "env",
    "term": "venv",
    "he": "סביבה וירטואלית מובנית",
    "explanation": "מודול מובנה בפייתון ליצירת סביבה מבודדת, כדי שלא יתערבבו חבילות בין פרויקטים.",
    "example": "python -m venv .venv"
  },
  {
    "id": "env__virtual-environment",
    "chapter": "env",
    "term": "virtual environment",
    "he": "סביבה וירטואלית",
    "explanation": "תיקיית התקנה נפרדת לפייתון ולחבילות של פרויקט אחד, כך שגרסאות לא יתנגשו."
  },
  {
    "id": "env__package",
    "chapter": "env",
    "term": "package",
    "he": "חבילה",
    "explanation": "קוד מוכן שמתקינים ומשתמשים בו בפרויקט, למשל חבילת pandas או numpy.",
    "example": "pip install pandas"
  },
  {
    "id": "env__library",
    "chapter": "env",
    "term": "library",
    "he": "ספרייה",
    "explanation": "אוסף קוד מוכן למשימה מסוימת. בפייתון מדברים לרוב על חבילה או מודול שמייבאים.",
    "example": "import math"
  },
  {
    "id": "env__import",
    "chapter": "env",
    "term": "import",
    "he": "ייבוא",
    "explanation": "הפקודה שטוענת מודול או ספרייה לתוך התכנית כדי שנוכל להשתמש בהם.",
    "example": "import numpy as np"
  },
  {
    "id": "env__module",
    "chapter": "env",
    "term": "module",
    "he": "מודול",
    "explanation": "קובץ פייתון (או יחידת קוד) שאפשר לייבא. למשל math הוא מודול מובנה.",
    "example": "import math"
  },
  {
    "id": "env__ide",
    "chapter": "env",
    "term": "IDE",
    "he": "סביבת פיתוח משולבת",
    "explanation": "תוכנה לעריכת קוד עם השלמה, הרצה וניפוי שגיאות, למשל VS Code או PyCharm."
  },
  {
    "id": "env__interpreter",
    "chapter": "env",
    "term": "interpreter",
    "he": "מפרש",
    "explanation": "התוכנה שמריצה קוד פייתון שורה־שורה, בלי קומפילציה לקובץ הרצה מראש כמו ב-C.",
    "example": "python script.py"
  },
  {
    "id": "env__repl",
    "chapter": "env",
    "term": "REPL",
    "he": "מעטפת אינטראקטיבית",
    "explanation": "לולאת Read-Eval-Print: כותבים ביטוי, הוא רץ מיד, והתוצאה מודפסת. המסוף של פייתון הוא REPL.",
    "example": ">>> 2 + 2"
  },
  {
    "id": "env__google-colab",
    "chapter": "env",
    "term": "Google Colab",
    "he": "מחברת בענן של גוגל",
    "explanation": "סביבת Jupyter בדפדפן, בלי התקנה מקומית, שמריצה את הקוד על שרתי גוגל."
  },
  {
    "id": "env__terminal",
    "chapter": "env",
    "term": "terminal",
    "he": "מסוף",
    "explanation": "חלון לשורות פקודה: מריצים בו תוכניות, מתקינים חבילות ומנווטים בתיקיות.",
    "example": "cd project && python main.py"
  },
  {
    "id": "env__edit-mode",
    "chapter": "env",
    "term": "Edit mode",
    "he": "מצב עריכה (Jupyter)",
    "explanation": "במחברת: כשהתא פעיל לעריכת הטקסט שבו (הסמן בתוך התא). יוצאים ממנו בדרך כלל עם Esc."
  },
  {
    "id": "env__command-mode",
    "chapter": "env",
    "term": "Command mode",
    "he": "מצב פקודות (Jupyter)",
    "explanation": "במחברת: קיצורי מקלדת פועלים על התא כולו, למשל A/B להוספה ו-DD למחיקה. נכנסים אליו עם Esc."
  },
  {
    "id": "env__markdown",
    "chapter": "env",
    "term": "Markdown",
    "he": "שפת סימון לטקסט",
    "explanation": "פורמט פשוט לכותרות, רשימות ודגשים בתאי טקסט במחברת, בלי לכתוב HTML מלא.",
    "example": "# כותרת"
  },
  {
    "id": "env__shiftplusenter",
    "chapter": "env",
    "term": "Shift+Enter",
    "he": "הרצת תא ומעבר הלאה",
    "explanation": "ב-Jupyter: מריץ את התא הנוכחי ועובר לתא הבא. זו הדרך הנפוצה להתקדם במחברת."
  },
  {
    "id": "numpy__numpy",
    "chapter": "numpy",
    "term": "NumPy",
    "he": "ספריית מערכים מספריים",
    "explanation": "הספרייה המרכזית לחישובים על מערכים רב־ממדיים בפייתון. מייבאים אותה בדרך כלל בשם np.",
    "example": "import numpy as np"
  },
  {
    "id": "numpy__npdotarray",
    "chapter": "numpy",
    "term": "np.array",
    "he": "יצירת מערך",
    "explanation": "פונקציה שיוצרת מערך NumPy מרשימה (או מאוסף). זה הטיפוס הבסיסי לעבודה ב-NumPy.",
    "example": "np.array([1, 2, 3])"
  },
  {
    "id": "numpy__ndarray",
    "chapter": "numpy",
    "term": "ndarray",
    "he": "מערך רב־ממדי",
    "explanation": "טיפוס המערך של NumPy: רשת אחידה של ערכים מאותו טיפוס, עם צורה (shape) וממדים.",
    "example": "type(np.array([1, 2]))"
  },
  {
    "id": "numpy__npdotshape",
    "chapter": "numpy",
    "term": "np.shape",
    "he": "צורת המערך",
    "explanation": "מאפיין שמחזיר כמה איברים יש בכל ממד, כטופל. למשל מערך 2×3 יחזיר (2, 3). אפשר גם לכתוב a.shape.",
    "example": "a = np.array([[1, 2, 3], [4, 5, 6]])\nprint(a.shape)  # (2, 3)"
  },
  {
    "id": "numpy__shape",
    "chapter": "numpy",
    "term": "shape",
    "he": "צורה (ממדים)",
    "explanation": "המבנה של המערך: כמה שורות, עמודות וממדים נוספים. זה מה ש-np.shape / a.shape מדווחים.",
    "example": "a.shape"
  },
  {
    "id": "numpy__ndim",
    "chapter": "numpy",
    "term": "ndim",
    "he": "מספר ממדים",
    "explanation": "מאפיין שמחזיר כמה ממדים יש למערך: וקטור חד־ממדי הוא 1, מטריצה היא 2, וכן הלאה.",
    "example": "a.ndim"
  },
  {
    "id": "numpy__dtype",
    "chapter": "numpy",
    "term": "dtype",
    "he": "טיפוס האיברים במערך",
    "explanation": "סוג הערכים בתוך המערך, למשל int64 או float64. כל האיברים ב-ndarray הם מאותו טיפוס.",
    "example": "a.dtype"
  },
  {
    "id": "numpy__reshape",
    "chapter": "numpy",
    "term": "reshape",
    "he": "שינוי צורה",
    "explanation": "מחזיר תצוגה של אותם נתונים במבנה ממדים אחר, למשל מ-6 איברים ל-2×3, בלי לשנות את הערכים עצמם.",
    "example": "np.arange(6).reshape(2, 3)"
  },
  {
    "id": "numpy__size",
    "chapter": "numpy",
    "term": "size",
    "he": "מספר האיברים הכולל",
    "explanation": "כמה ערכים יש במערך בסך הכול, כלומר מכפלת ערכי ה-shape.",
    "example": "a.size"
  },
  {
    "id": "numpy__axis",
    "chapter": "numpy",
    "term": "axis",
    "he": "ציר",
    "explanation": "הממד שעליו מפעילים פעולה. axis=0 בדרך כלל לאורך השורות (לפי עמודות), axis=1 לאורך העמודות (לפי שורות).",
    "example": "a.sum(axis=0)"
  },
  {
    "id": "numpy__npdotzeros",
    "chapter": "numpy",
    "term": "np.zeros",
    "he": "מערך אפסים",
    "explanation": "יוצר מערך מלא באפסים בצורה שנתבקשה.",
    "example": "np.zeros((2, 3))"
  },
  {
    "id": "numpy__npdotarange",
    "chapter": "numpy",
    "term": "np.arange",
    "he": "טווח ערכים במערך",
    "explanation": "יוצר מערך מספרים בטווח, דומה ל-range של פייתון, אבל התוצאה היא ndarray ואפשר גם צעד עשרוני.",
    "example": "np.arange(0, 1, 0.25)"
  },
  {
    "id": "numpy__npdotlinspace",
    "chapter": "numpy",
    "term": "np.linspace",
    "he": "חלוקה שווה של טווח",
    "explanation": "יוצר מספר נקודות (ברירת מחדל 50) במרחקים שווים בין התחלה לסוף, כולל שני הקצוות.",
    "example": "np.linspace(0, 1, 5)"
  },
  {
    "id": "numpy__npdotrandom",
    "chapter": "numpy",
    "term": "np.random",
    "he": "מודול מספרים אקראיים",
    "explanation": "תת־מודול של NumPy ליצירת ערכים אקראיים: rand, randint, בחירה, ערבוב ועוד.",
    "example": "np.random.rand(3)"
  },
  {
    "id": "numpy__npdotrandomdotrand",
    "chapter": "numpy",
    "term": "np.random.rand",
    "he": "אקראי בין 0 ל-1",
    "explanation": "מחזיר מערך בממדים שנתבקשו עם מספרים אחידים בין 0 (כולל) ל-1 (לא כולל).",
    "example": "np.random.rand(2, 2)"
  },
  {
    "id": "numpy__npdotrandomdotrandint",
    "chapter": "numpy",
    "term": "np.random.randint",
    "he": "שלמים אקראיים",
    "explanation": "מחזיר שלמים אקראיים בטווח חצי־פתוח, למשל מ-low (כולל) עד high (לא כולל).",
    "example": "np.random.randint(1, 7, size=4)"
  },
  {
    "id": "numpy__npdotrandomdotseed",
    "chapter": "numpy",
    "term": "np.random.seed",
    "he": "זרע לאקראיות",
    "explanation": "קובע את מצב מחולל המספרים האקראיים, כדי לקבל תוצאות חוזרות ונשנות בהרצות שונות.",
    "example": "np.random.seed(0)"
  },
  {
    "id": "numpy__broadcasting",
    "chapter": "numpy",
    "term": "broadcasting",
    "he": "שידור ממדים",
    "explanation": "הכלל של NumPy שמרחיב מערך קטן כך שיתאים לפעולה עם מערך גדול יותר, בלי להעתיק את כל הנתונים.",
    "example": "np.array([1, 2, 3]) + 10"
  },
  {
    "id": "numpy__npdotsum",
    "chapter": "numpy",
    "term": "np.sum",
    "he": "סכום במערך",
    "explanation": "סוכם את כל האיברים, או לפי ציר אם מעבירים axis.",
    "example": "np.sum(a, axis=0)"
  },
  {
    "id": "numpy__npdotmean",
    "chapter": "numpy",
    "term": "np.mean",
    "he": "ממוצע במערך",
    "explanation": "מחשב ממוצע של האיברים, או לפי ציר.",
    "example": "np.mean(a)"
  },
  {
    "id": "numpy__npdotmax",
    "chapter": "numpy",
    "term": "np.max",
    "he": "מקסימום במערך",
    "explanation": "הערך הגדול ביותר במערך, או לאורך ציר.",
    "example": "np.max(a)"
  },
  {
    "id": "numpy__npdotmin",
    "chapter": "numpy",
    "term": "np.min",
    "he": "מינימום במערך",
    "explanation": "הערך הקטן ביותר במערך, או לאורך ציר.",
    "example": "np.min(a)"
  },
  {
    "id": "numpy__npdotargmax",
    "chapter": "numpy",
    "term": "np.argmax",
    "he": "אינדקס המקסימום",
    "explanation": "מחזיר את מיקום (האינדקס השטוח, או לפי ציר) של הערך הגדול ביותר.",
    "example": "np.argmax(a)"
  },
  {
    "id": "numpy__npdotdot",
    "chapter": "numpy",
    "term": "np.dot",
    "he": "מכפלה פנימית / כפל מטריצות",
    "explanation": "מכפילה וקטורים (מכפלה פנימית) או מטריצות לפי כללי האלגברה הלינארית.",
    "example": "np.dot(a, b)"
  },
  {
    "id": "numpy__transpose",
    "chapter": "numpy",
    "term": "transpose",
    "he": "שחלוף",
    "explanation": "מחליף שורות בעמודות. במערך דו־ממדי זה a.T.",
    "example": "a.T"
  },
  {
    "id": "numpy__nan",
    "chapter": "numpy",
    "term": "NaN",
    "he": "לא־מספר",
    "explanation": "סימון לערך מספרי חסר או לא מוגדר (Not a Number). חישובים עם NaN לרוב מפיקים גם הם NaN.",
    "example": "np.nan"
  },
  {
    "id": "numpy__vector",
    "chapter": "numpy",
    "term": "vector",
    "he": "וקטור",
    "explanation": "מערך חד־ממדי של מספרים, למשל שורת מדידות או רשימת קואורדינטות.",
    "example": "np.array([1, 2, 3])"
  },
  {
    "id": "numpy__matrix",
    "chapter": "numpy",
    "term": "matrix",
    "he": "מטריצה",
    "explanation": "מערך דו־ממדי: שורות ועמודות של מספרים. ב-NumPy זה ndarray עם ndim שווה 2.",
    "example": "np.array([[1, 2], [3, 4]])"
  },
  {
    "id": "numpy__boolean-indexing",
    "chapter": "numpy",
    "term": "boolean indexing",
    "he": "אינדוקס בוליאני",
    "explanation": "בחירת איברים ממערך לפי מערך תנאים של True/False באותה צורה.",
    "example": "a[a > 0]"
  },
  {
    "id": "numpy__copy-numpy",
    "chapter": "numpy",
    "term": "copy (NumPy)",
    "he": "העתק עצמאי",
    "explanation": "יצירת עותק נפרד של המערך. בלי copy, חיתוך עשוי להיות תצוגה שמשפיעה על המקור.",
    "example": "b = a.copy()"
  },
  {
    "id": "numpy__element-wise",
    "chapter": "numpy",
    "term": "element-wise",
    "he": "פעולה לפי איבר",
    "explanation": "חישוב שמתבצע על כל איבר בנפרד, למשל חיבור שני מערכים באותה צורה איבר־מול־איבר.",
    "example": "a * b"
  },
  {
    "id": "pandas__pandas",
    "chapter": "pandas",
    "term": "Pandas",
    "he": "ספריית טבלאות וסדרות",
    "explanation": "ספרייה לעבודה עם נתונים טבלאיים בפייתון: קריאה מקבצים, סינון, קיבוץ וניקוי. מייבאים לרוב כ-pd.",
    "example": "import pandas as pd"
  },
  {
    "id": "pandas__series",
    "chapter": "pandas",
    "term": "Series",
    "he": "סדרה (עמודה עם אינדקס)",
    "explanation": "מבנה חד־ממדי ב-Pandas: רצף ערכים עם אינדקס תוויות. כמו עמודה אחת בטבלה.",
    "example": "pd.Series([10, 20], index=['a', 'b'])"
  },
  {
    "id": "pandas__dataframe",
    "chapter": "pandas",
    "term": "DataFrame",
    "he": "טבלת נתונים",
    "explanation": "המבנה המרכזי ב-Pandas: טבלה עם שורות ועמודות, שמורכבת מכמה Series שחולקים אינדקס.",
    "example": "pd.DataFrame({'name': ['A', 'B'], 'age': [20, 21]})"
  },
  {
    "id": "pandas__index-pandas",
    "chapter": "pandas",
    "term": "Index (Pandas)",
    "he": "אינדקס של שורות",
    "explanation": "תוויות השורות ב-Series או ב-DataFrame. זה לא בהכרח 0,1,2 — אפשר שמות, תאריכים או מפתחות אחרים.",
    "example": "s.index"
  },
  {
    "id": "pandas__columns",
    "chapter": "pandas",
    "term": "columns",
    "he": "שמות העמודות",
    "explanation": "התוויות של עמודות ה-DataFrame, שמשמשות לבחירה ולסינון.",
    "example": "df.columns"
  },
  {
    "id": "pandas__loc",
    "chapter": "pandas",
    "term": "loc",
    "he": "בחירה לפי תווית",
    "explanation": "גישה לשורות ולעמודות לפי שם האינדקס ושם העמודה, לא לפי מיקום מספרי.",
    "example": "df.loc['Haifa', 'temp']"
  },
  {
    "id": "pandas__iloc",
    "chapter": "pandas",
    "term": "iloc",
    "he": "בחירה לפי מיקום",
    "explanation": "גישה לשורות ולעמודות לפי אינדקס מספרי (0, 1, 2…), בלי תלות בשמות.",
    "example": "df.iloc[0, 1]"
  },
  {
    "id": "pandas__head",
    "chapter": "pandas",
    "term": "head",
    "he": "שורות ראשונות",
    "explanation": "מחזיר את תחילת הטבלה, כברירת מחדל חמש שורות. שימושי למבט ראשון על הנתונים.",
    "example": "df.head()"
  },
  {
    "id": "pandas__tail",
    "chapter": "pandas",
    "term": "tail",
    "he": "שורות אחרונות",
    "explanation": "מחזיר את סוף הטבלה, כברירת מחדל חמש שורות.",
    "example": "df.tail()"
  },
  {
    "id": "pandas__info",
    "chapter": "pandas",
    "term": "info",
    "he": "סיכום מבנה הטבלה",
    "explanation": "מדפיס מידע על העמודות, הטיפוסים וכמה ערכים שאינם חסרים.",
    "example": "df.info()"
  },
  {
    "id": "pandas__describe",
    "chapter": "pandas",
    "term": "describe",
    "he": "סטטיסטיקה תיאורית",
    "explanation": "מחזיר סיכום מספרי לעמודות (ספירה, ממוצע, פיזור, רבעונים) — כלי ראשון לחקירת נתונים.",
    "example": "df.describe()"
  },
  {
    "id": "pandas__readuscorecsv",
    "chapter": "pandas",
    "term": "read_csv",
    "he": "קריאה מקובץ CSV",
    "explanation": "טוען טבלה מקובץ מופרד בפסיקים (או מפריד אחר) ל-DataFrame.",
    "example": "pd.read_csv('data.csv')"
  },
  {
    "id": "pandas__touscorecsv",
    "chapter": "pandas",
    "term": "to_csv",
    "he": "שמירה לקובץ CSV",
    "explanation": "כותב DataFrame או Series לקובץ CSV.",
    "example": "df.to_csv('out.csv', index=False)"
  },
  {
    "id": "pandas__dropna",
    "chapter": "pandas",
    "term": "dropna",
    "he": "מחיקת ערכים חסרים",
    "explanation": "מסיר שורות (או עמודות) שמכילות NaN, לפי הפרמטרים.",
    "example": "df.dropna()"
  },
  {
    "id": "pandas__fillna",
    "chapter": "pandas",
    "term": "fillna",
    "he": "מילוי ערכים חסרים",
    "explanation": "מחליף ערכי NaN בערך או בשיטה שציינו, בלי בהכרח למחוק שורות.",
    "example": "df.fillna(0)"
  },
  {
    "id": "pandas__groupby-pandas",
    "chapter": "pandas",
    "term": "groupby (Pandas)",
    "he": "קיבוץ ב-Pandas",
    "explanation": "מפצל את הטבלה לפי ערכי עמודה (או כמה עמודות) כדי לחשב סיכומים לכל קבוצה.",
    "example": "df.groupby('city')['salary'].mean()"
  },
  {
    "id": "pandas__merge",
    "chapter": "pandas",
    "term": "merge",
    "he": "מיזוג טבלאות",
    "explanation": "מחבר שני DataFrame לפי עמודות מפתח, בדומה ל-JOIN ב-SQL.",
    "example": "pd.merge(orders, customers, on='customer_id')"
  },
  {
    "id": "pandas__valueuscorecounts",
    "chapter": "pandas",
    "term": "value_counts",
    "he": "ספירת הופעות",
    "explanation": "סופר כמה פעמים כל ערך מופיע בסדרה, מהנפוץ לנדיר כברירת מחדל.",
    "example": "df['city'].value_counts()"
  },
  {
    "id": "pandas__seriesdotunique",
    "chapter": "pandas",
    "term": "Series.unique",
    "he": "ערכים ייחודיים (Pandas)",
    "explanation": "מחזיר את הערכים השונים בעמודה או בסדרה, בלי כפילויות.",
    "example": "df['city'].unique()"
  },
  {
    "id": "pandas__nunique",
    "chapter": "pandas",
    "term": "nunique",
    "he": "מספר ערכים ייחודיים",
    "explanation": "מחזיר כמה ערכים שונים יש, כמספר.",
    "example": "df['city'].nunique()"
  },
  {
    "id": "pandas__isna",
    "chapter": "pandas",
    "term": "isna",
    "he": "בדיקת ערך חסר",
    "explanation": "מחזיר True במקומות שבהם יש NaN / ערך חסר, ו-False במקומות עם ערך.",
    "example": "df.isna()"
  },
  {
    "id": "pandas__inplace",
    "chapter": "pandas",
    "term": "inplace",
    "he": "שינוי במקום",
    "explanation": "פרמטר בחלק מהשיטות: אם True, השינוי נעשה על אותו אובייקט במקום להחזיר עותק חדש. כיום מעדיפים לעיתים השמה מחדש.",
    "example": "df.dropna(inplace=True)"
  },
  {
    "id": "pandas__apply",
    "chapter": "pandas",
    "term": "apply",
    "he": "הפעלת פונקציה",
    "explanation": "מפעיל פונקציה על כל עמודה או שורה (לפי axis), ומחזיר תוצאה מתאימה.",
    "example": "df['name'].apply(str.lower)"
  },
  {
    "id": "pandas__filluscorevalue",
    "chapter": "pandas",
    "term": "fill_value",
    "he": "ערך מילוי בחיבור",
    "explanation": "בחיבור Series, ערך שימלא מפתח שחסר באחד הצדדים במקום לקבל NaN.",
    "example": "a.add(b, fill_value=0)"
  },
  {
    "id": "pandas__resetuscoreindex",
    "chapter": "pandas",
    "term": "reset_index",
    "he": "איפוס האינדקס",
    "explanation": "מחזיר DataFrame שבו האינדקס הישן הופך לעמודה רגילה, ואינדקס חדש רץ מ-0.",
    "example": "df.reset_index()"
  },
  {
    "id": "pandas__sortuscorevalues",
    "chapter": "pandas",
    "term": "sort_values",
    "he": "מיון לפי ערכים",
    "explanation": "מסדר את השורות לפי ערכי עמודה אחת או יותר.",
    "example": "df.sort_values('age')"
  },
  {
    "id": "pandas__setuscoreindex",
    "chapter": "pandas",
    "term": "set_index",
    "he": "קביעת אינדקס מעמודה",
    "explanation": "הופך עמודה לאינדקס השורות. אחרי הפעולה העמודה כבר לא מופיעה בין עמודות הטבלה.",
    "example": "df.set_index('id')"
  },
  {
    "id": "pandas__pddotconcat",
    "chapter": "pandas",
    "term": "pd.concat",
    "he": "שרשור טבלאות",
    "explanation": "מחבר DataFrame-ים זה מתחת לזה (או לצד). אם העמודות לא תואמות, החסר יתמלא ב-NaN. עדיף על append שהוצא משימוש.",
    "example": "pd.concat([a, b], ignore_index=True)"
  },
  {
    "id": "pandas__between-pandas",
    "chapter": "pandas",
    "term": "between (Pandas)",
    "he": "סינון בטווח",
    "explanation": "מחזיר True לערכים שנמצאים בין שני גבולות. inclusive='both' כולל את שני הקצוות.",
    "example": "df[df['age'].between(30, 50, inclusive='both')]"
  },
  {
    "id": "pandas__npdotvectorize",
    "chapter": "pandas",
    "term": "np.vectorize",
    "he": "התאמת פונקציה למערכים",
    "explanation": "מקבל פונקציית פייתון ומתאים אותה לעבודה על כמה עמודות או מערכים בבת אחת.",
    "example": "np.vectorize(quality)(df['total_bill'], df['tip'])"
  },
  {
    "id": "pandas__map-pandas",
    "chapter": "pandas",
    "term": "map (Pandas)",
    "he": "החלפה לפי מילון",
    "explanation": "מחליף ערכים בעמודה לפי מיפוי {ישן: חדש}. תוצאה דומה ל-replace, עם תחביר של מילון.",
    "example": "df['sex'].map({'Female': 'F', 'Male': 'M'})"
  },
  {
    "id": "pandas__duplicated",
    "chapter": "pandas",
    "term": "duplicated",
    "he": "זיהוי כפילויות",
    "explanation": "מחזיר True בכל הופעה נוספת של ערך שכבר נראה; ההופעה הראשונה נשארת False.",
    "example": "df['a'].duplicated()"
  },
  {
    "id": "pandas__dropuscoreduplicates",
    "chapter": "pandas",
    "term": "drop_duplicates",
    "he": "מחיקת כפילויות",
    "explanation": "מוחק שורות כפולות ומשאיר את ההופעה הראשונה של כל ערך.",
    "example": "df.drop_duplicates()"
  },
  {
    "id": "pandas__nlargest",
    "chapter": "pandas",
    "term": "nlargest",
    "he": "n הערכים הגדולים",
    "explanation": "מחזיר את n השורות עם הערכים הגדולים ביותר בעמודה שנבחרה.",
    "example": "df.nlargest(10, 'tip')"
  },
  {
    "id": "pandas__nsmallest",
    "chapter": "pandas",
    "term": "nsmallest",
    "he": "n הערכים הקטנים",
    "explanation": "מחזיר את n השורות עם הערכים הקטנים ביותר בעמודה שנבחרה.",
    "example": "df.nsmallest(5, 'tip')"
  },
  {
    "id": "pandas__sample-pandas",
    "chapter": "pandas",
    "term": "sample (Pandas)",
    "he": "דגימה אקראית",
    "explanation": "בוחר שורות באקראי: מספר קבוע עם n, או חלק יחסי עם frac (למשל 0.1 ל-10%).",
    "example": "df.sample(frac=0.1)"
  },
  {
    "id": "pandas__isnull",
    "chapter": "pandas",
    "term": "isnull",
    "he": "בדיקת ערך חסר",
    "explanation": "מחזיר True במקומות שבהם הערך חסר (NaN). כינוי נפוץ ל-isna.",
    "example": "df['score'].isnull()"
  },
  {
    "id": "pandas__notnull",
    "chapter": "pandas",
    "term": "notnull",
    "he": "בדיקת ערך קיים",
    "explanation": "ההפך מ-isnull: True במקומות שיש ערך, False במקומות החסרים.",
    "example": "df[df['score'].notnull()]"
  },
  {
    "id": "pandas__thresh",
    "chapter": "pandas",
    "term": "thresh",
    "he": "סף ערכים לא-חסרים",
    "explanation": "ב-dropna, thresh=n משאיר שורה רק אם יש בה לפחות n ערכים שאינם חסרים.",
    "example": "df.dropna(thresh=1)"
  },
  {
    "id": "pandas__subset-dropna",
    "chapter": "pandas",
    "term": "subset (dropna)",
    "he": "עמודות לבדיקת חסרים",
    "explanation": "מגביל את dropna לעמודות מסוימות בלבד: נבדק NaN רק בהן.",
    "example": "df.dropna(subset=['A', 'C'])"
  },
  {
    "id": "pandas__drop-pandas",
    "chapter": "pandas",
    "term": "drop (Pandas)",
    "he": "מחיקת עמודה או שורה",
    "explanation": "מחזיר טבלה בלי העמודה (axis=1) או השורה (axis=0) שצוינה. עם inplace=True משנים את המקור.",
    "example": "df.drop('col', axis=1, inplace=True)"
  },
  {
    "id": "pandas__dataframedott",
    "chapter": "pandas",
    "term": "DataFrame.T",
    "he": "תצוגה מוחלפת",
    "explanation": "מחליף שורות ועמודות. שימושי אחרי describe, כדי ששמות העמודות יופיעו בשורות.",
    "example": "df.describe().T"
  },
  {
    "id": "general__data-science",
    "chapter": "general",
    "term": "Data Science",
    "he": "מדעי הנתונים",
    "explanation": "תחום שמשלב שיטות מדעיות, סטטיסטיקה ותכנות כדי לחלץ תובנות מנתונים ולסייע בהחלטות ובחיזוי."
  },
  {
    "id": "general__dataset",
    "chapter": "general",
    "term": "dataset",
    "he": "קובץ / אוסף נתונים",
    "explanation": "האוסף שעליו עובדים: טבלה, כמה קבצים, או מאגר מדידות שמוכן לניתוח."
  },
  {
    "id": "general__csv",
    "chapter": "general",
    "term": "CSV",
    "he": "קובץ מופרד בפסיקים",
    "explanation": "פורמט טקסט פשוט לטבלאות: כל שורה היא רשומה, והעמודות מופרדות בפסיק (או במפריד דומה).",
    "example": "name,age\nDana,20"
  },
  {
    "id": "general__json",
    "chapter": "general",
    "term": "JSON",
    "he": "פורמט נתונים היררכי",
    "explanation": "פורמט טקסט נפוץ להעברת אובייקטים ורשימות, ידידותי גם למכונות וגם לקריאה חלקית.",
    "example": "{'name': 'Dana', 'age': 20}"
  },
  {
    "id": "general__api",
    "chapter": "general",
    "term": "API",
    "he": "ממשק תכנות",
    "explanation": "חוזה שמגדיר איך תכנית אחת מבקשת שירות מתכנית אחרת, למשל לשליפת נתונים משרת."
  },
  {
    "id": "general__structured-data",
    "chapter": "general",
    "term": "structured data",
    "he": "נתונים מובנים",
    "explanation": "נתונים במבנה קבוע מראש, כמו טבלת SQL או CSV עם עמודות מוגדרות (schema-on-write)."
  },
  {
    "id": "general__unstructured-data",
    "chapter": "general",
    "term": "unstructured data",
    "he": "נתונים לא מובנים",
    "explanation": "נתונים בלי סכמה קשיחה מראש, כמו טקסט חופשי, תמונות או לוגים. המבנה מתגלה לעיתים רק בשימוש (schema-on-read)."
  },
  {
    "id": "general__schema-on-write",
    "chapter": "general",
    "term": "schema-on-write",
    "he": "סכמה בכתיבה",
    "explanation": "מגדירים את המבנה לפני ששומרים את הנתונים. כך עובד מסד יחסים קלאסי."
  },
  {
    "id": "general__schema-on-read",
    "chapter": "general",
    "term": "schema-on-read",
    "he": "סכמה בקריאה",
    "explanation": "המבנה נקבע כשקוראים או מנתחים את הנתונים, לא בהכרח כששומרים אותם. נפוץ בנתונים לא מובנים."
  },
  {
    "id": "general__machine-learning",
    "chapter": "general",
    "term": "machine learning",
    "he": "למידת מכונה",
    "explanation": "בניית מודלים שלומדים תבניות מנתונים כדי לחזות או לסווג מקרים חדשים, בלי לכתוב את כל הכללים ידנית."
  },
  {
    "id": "general__feature",
    "chapter": "general",
    "term": "feature",
    "he": "תכונה / משתנה מסביר",
    "explanation": "עמודה או מדד שמשמש קלט למודל, למשל גיל, מחיר או מילה בטקסט."
  },
  {
    "id": "general__label",
    "chapter": "general",
    "term": "label",
    "he": "תווית / משתנה מוסבר",
    "explanation": "הערך שאותו רוצים לחזות בבעיית למידה מונחית, למשל «עזב» או «נשאר»."
  },
  {
    "id": "general__model",
    "chapter": "general",
    "term": "model",
    "he": "מודל",
    "explanation": "ייצוג מתמטי או חישובי של קשר בנתונים, שאפשר לאמן ואחר כך להפעיל על מקרים חדשים."
  },
  {
    "id": "general__visualization",
    "chapter": "general",
    "term": "visualization",
    "he": "הדמיה / תרשים",
    "explanation": "הצגת נתונים בגרף או באיור כדי לראות מגמות, חריגים וסיפור שהמספרים לבדם מסתירים."
  },
  {
    "id": "general__matplotlib",
    "chapter": "general",
    "term": "Matplotlib",
    "he": "ספריית גרפים בפייתון",
    "explanation": "ספרייה נפוצה לציור גרפים: קווים, עמודות, פיזור ועוד, לעיתים יחד עם Pandas.",
    "example": "import matplotlib.pyplot as plt"
  },
  {
    "id": "general__statistics",
    "chapter": "general",
    "term": "statistics",
    "he": "סטטיסטיקה",
    "explanation": "תחום שמסכם, משווה ומסיק מסקנות מנתונים: ממוצעים, פיזור, הסתברות ומבחנים."
  },
  {
    "id": "general__mean",
    "chapter": "general",
    "term": "mean",
    "he": "ממוצע",
    "explanation": "סכום הערכים חלקי מספרם. רגיש לערכים קיצוניים."
  },
  {
    "id": "general__median",
    "chapter": "general",
    "term": "median",
    "he": "חציון",
    "explanation": "הערך האמצעי אחרי מיון. פחות רגיש לחריגים מהממוצע."
  },
  {
    "id": "general__outlier",
    "chapter": "general",
    "term": "outlier",
    "he": "חריג",
    "explanation": "ערך רחוק מאוד משאר הנתונים. לפעמים זו שגיאה, ולפעמים תופעה חשובה שצריך לבדוק."
  },
  {
    "id": "general__raw-data",
    "chapter": "general",
    "term": "raw data",
    "he": "נתונים גולמיים",
    "explanation": "הנתונים כפי שהגיעו מהמקור, לפני ניקוי, המרה וסינון."
  },
  {
    "id": "general__syntax",
    "chapter": "general",
    "term": "syntax",
    "he": "תחביר",
    "explanation": "כללי הכתיבה של השפה: סוגריים, הזחה, מילות מפתח. שגיאת תחביר עוצרת את התכנית עוד לפני שהלוגיקה רצה."
  },
  {
    "id": "general__runtime",
    "chapter": "general",
    "term": "runtime",
    "he": "זמן ריצה",
    "explanation": "השלב שבו התכנית כבר רצה. שגיאת זמן ריצה מופיעה תוך כדי ביצוע, לא בזמן הפיענוח של התחביר."
  },
  {
    "id": "general__bug",
    "chapter": "general",
    "term": "bug",
    "he": "באג / תקלה",
    "explanation": "התנהגות שגויה בקוד: התוכנית רצה אבל התוצאה או הזרימה לא מה שרצינו."
  },
  {
    "id": "general__debug",
    "chapter": "general",
    "term": "debug",
    "he": "ניפוי שגיאות",
    "explanation": "תהליך מציאת הבאג ותיקונו: קריאת הודעות, הדפסות, או כלי debugger."
  },
  {
    "id": "general__script",
    "chapter": "general",
    "term": "script",
    "he": "תסריט / קובץ הרצה",
    "explanation": "קובץ קוד שרץ מההתחלה עד הסוף, בניגוד למחברת שבה מריצים תאים לפי בחירה.",
    "example": "python analysis.py"
  },
  {
    "id": "general__pipeline",
    "chapter": "general",
    "term": "pipeline",
    "he": "צינור עיבוד",
    "explanation": "רצף שלבים קבוע: איסוף, ניקוי, עיבוד, מודל והצגה. כל שלב מעביר תוצאה לשלב הבא."
  }
];

  function hashSeed(s) {
    let h = 2166136261;
    const t = String(s || "");
    for (let i = 0; i < t.length; i++) {
      h ^= t.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(a) {
    return function () {
      let t = a += 0x6D2B79F5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(arr, seed) {
    const a = arr.slice();
    const rnd = mulberry32(hashSeed(String(seed || "0")));
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      const tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function uniqueBy(list, keyFn) {
    const seen = new Set();
    const out = [];
    list.forEach((item) => {
      const k = keyFn(item);
      if (seen.has(k)) return;
      seen.add(k);
      out.push(item);
    });
    return out;
  }

  function pickDistractors(entry, pool, field, n, seed) {
    const want = entry[field];
    const others = uniqueBy(
      pool.filter((e) => e.id !== entry.id && e[field] !== want),
      (e) => e[field]
    );
    const same = others.filter((e) => e.chapter === entry.chapter);
    const rest = others.filter((e) => e.chapter !== entry.chapter);
    const ordered = same.concat(shuffle(rest, seed + ":rest"));
    return shuffle(ordered, seed).slice(0, n);
  }

  function buildQuestions(allEntries) {
    const byChapter = {};
    allEntries.forEach((e) => {
      if (!byChapter[e.chapter]) byChapter[e.chapter] = [];
      byChapter[e.chapter].push(e);
    });
    const questionsByChapter = {};
    Object.keys(byChapter).forEach((ch) => {
      const pool = byChapter[ch];
      const qs = [];
      pool.forEach((e) => {
        const dHe = pickDistractors(e, allEntries, "he", 3, e.id + ":he");
        if (dHe.length < 3) return;
        const choicesHe = shuffle([e].concat(dHe), e.id + ":ch-he").map((x) => x.he);
        qs.push({
          id: e.id + "__en2he",
          type: "mcq",
          prompt: "מה המשמעות של המונח הבא?",
          term: e.term,
          choices: choicesHe,
          answer: choicesHe.indexOf(e.he),
          hint: "חושבים על ההקשר של הפרק «" + (VOCAB_CHAPTERS.find((c) => c.id === e.chapter) || {}).title + "».",
          explanation: e.term + " — " + e.he + ". " + e.explanation,
          entryId: e.id,
          direction: "en2he",
        });
        const dEn = pickDistractors(e, allEntries, "term", 3, e.id + ":en");
        if (dEn.length >= 3 && hashSeed(e.id) % 2 === 0) {
          const choicesEn = shuffle([e].concat(dEn), e.id + ":ch-en").map((x) => x.term);
          qs.push({
            id: e.id + "__he2en",
            type: "mcq",
            prompt: "איזה מונח באנגלית מתאים למשמעות: «" + e.he + "»?",
            choices: choicesEn,
            answer: choicesEn.indexOf(e.term),
            hint: "המונח מגיע מפרק «" + (VOCAB_CHAPTERS.find((c) => c.id === e.chapter) || {}).title + "».",
            explanation: e.he + " — " + e.term + ". " + e.explanation,
            entryId: e.id,
            direction: "he2en",
            englishChoices: true,
          });
        }
      });
      const forMatch = pool.filter((e, i, arr) => arr.findIndex((x) => x.he === e.he) === i);
      const groups = [];
      const shuffled = shuffle(forMatch, ch + ":match");
      for (let i = 0; i + 3 <= shuffled.length; i += 3) {
        groups.push(shuffled.slice(i, i + 3));
        if (groups.length >= 4) break;
      }
      groups.forEach((group, gi) => {
        qs.push({
          id: ch + "__match-" + (gi + 1),
          type: "match",
          prompt: "התאימו כל מונח באנגלית למשמעות בעברית.",
          pairs: group.map((e) => ({ term: e.term, he: e.he, entryId: e.id })),
          hint: "קראו את כל האפשרויות ואז שייכו לפי ההקשר של הפרק.",
          explanation: group.map((e) => e.term + " — " + e.he).join(" · "),
        });
      });
      questionsByChapter[ch] = qs;
    });
    return questionsByChapter;
  }

  const QUESTIONS_BY_CHAPTER = buildQuestions(VOCAB_ENTRIES);

  const VOCAB_TOPICS = VOCAB_CHAPTERS.map((ch) => ({
    id: ch.id,
    title: ch.title,
    short: ch.short,
    icon: ch.icon,
    intro: ch.intro,
    entries: VOCAB_ENTRIES.filter((e) => e.chapter === ch.id),
    questions: QUESTIONS_BY_CHAPTER[ch.id] || [],
  }));

  const VOCAB_LESSONS = {};
  VOCAB_TOPICS.forEach((ch) => {
    VOCAB_LESSONS[ch.id] = {
      intro: ch.intro,
      items: (ch.entries || []).map((e) => ({
        term: e.term,
        title: e.he,
        text: e.explanation,
        code: e.example || "",
        entryId: e.id,
      })),
    };
  });

  const Vocab = { VOCAB_CHAPTERS, VOCAB_ENTRIES, VOCAB_TOPICS, VOCAB_LESSONS, buildQuestions };
  root.VOCAB_CHAPTERS = VOCAB_CHAPTERS;
  root.VOCAB_ENTRIES = VOCAB_ENTRIES;
  root.VOCAB_TOPICS = VOCAB_TOPICS;
  root.VOCAB_LESSONS = VOCAB_LESSONS;
  root.Vocab = Vocab;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Vocab;
  }
})(typeof window !== "undefined" ? window : globalThis);
