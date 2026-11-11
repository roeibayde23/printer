/* Additional / split SQL topics for printer v2. Loads after questions-sql.js */
(function (root) {
  if (typeof require !== "undefined" && !root.SQL_TOPICS) {
    var _base = require("./questions-sql.js");
    root.SQL_TOPICS = _base.SQL_TOPICS;
  }
  const EXTRA = 
[
  {
    "id": "conditions",
    "title": "תנאים — אופרטורים, AND/OR/NOT ו-CASE",
    "short": "תנאים",
    "icon": "?",
    "intro": "סינון שורות עם WHERE: השוואות, שילוב תנאים, שלילה, ו-CASE WHEN לעמודות מחושבות.",
    "questions": [
      {
        "id": "cond-1",
        "type": "mcq",
        "prompt": "אילו אופרטורים בודקים «שווה» ו«לא שווה» ב-SQL?",
        "choices": [
          "= לשוויון, ו-<> או != לאי-שוויון",
          "== ו-!== כמו בפייתון",
          "EQ ו-NE בלבד",
          "IS ו-IS NOT לכל הערכים, גם מספרים"
        ],
        "answer": 0,
        "hint": "ב-SQL סימן יחיד של שווה, לא ==.",
        "explanation": "ב-SQL כותבים = לשוויון. אי-שוויון הוא <> (התקני) או != (נתמך ב-MySQL וב-SQLite). ל-NULL משתמשים ב-IS NULL, לא ב-=."
      },
      {
        "id": "cond-2",
        "type": "predict",
        "prompt": "אילו מוצרים יוחזרו?",
        "code": "SELECT name FROM Products\nWHERE price < 5;",
        "choices": [
          "Apple 3.20, Orange 4.50, Pen 4.90",
          "רק Apple",
          "כל המוצרים מתחת ל-10",
          "אין שורות, כי < לא כולל"
        ],
        "answer": 0,
        "hint": "קטן מ-5, לא קטן-או-שווה.",
        "explanation": "Apple (3.20), Orange (4.50) ו-Pen (4.90) כולם מתחת ל-5. Cola (6.00) כבר לא נכנס."
      },
      {
        "id": "cond-3",
        "type": "write",
        "prompt": "החזירו את name ו-price של מוצרים שמחירם גדול או שווה ל-899.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, price FROM Products WHERE price >= 899;",
        "orderSensitive": false,
        "hint": ">= 899. Monitor ו-Laptop.",
        "explanation": ">= כולל את הקצה. Monitor (899) ו-Laptop (3200) נכנסים. Desk (450) לא."
      },
      {
        "id": "cond-4",
        "type": "mcq",
        "prompt": "בתנאי WHERE a OR b AND c, מה נבדק קודם?",
        "choices": [
          "AND לפני OR, כלומר a OR (b AND c) — אם רוצים אחרת, שמים סוגריים",
          "OR תמיד לפני AND",
          "משמאל לימין בלי קדימות",
          "SQL דורש סוגריים, אחרת זו שגיאה"
        ],
        "answer": 0,
        "hint": "כמו בחשבון: כפל לפני חיבור. AND הוא «הדוק» יותר.",
        "explanation": "AND קודם ל-OR. לכן category = 'Food' OR category = 'Drinks' AND price < 5 אינו «מזון או משקאות זולים», אלא Food (הכל) או Drinks-שזולים-מ-5. סוגריים מונעים בלבול."
      },
      {
        "id": "cond-5",
        "type": "write",
        "prompt": "החזירו שמות מוצרי Food שמחירם נמוך מ-10 (שני התנאים חייבים להתקיים).",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE category = 'Food' AND price < 10;",
        "orderSensitive": false,
        "hint": "AND בין קטגוריה למחיר.",
        "explanation": "Avocado 9.90, Orange 4.50, Bread 8.00, Apple 3.20. Pizza (39.90) היא Food אבל יקרה מ-10."
      },
      {
        "id": "cond-6",
        "type": "write",
        "prompt": "החזירו שמות לקוחות שעירו אינה Tel Aviv, בעזרת NOT.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Customers WHERE NOT city = 'Tel Aviv';",
        "orderSensitive": false,
        "hint": "NOT city = 'Tel Aviv' או city <> 'Tel Aviv'.",
        "explanation": "Yossi ו-Maya מחיפה, Avi מירושלים. NOT הופך את תוצאת התנאי. זה שקול ל-city <> 'Tel Aviv'."
      },
      {
        "id": "cond-7",
        "type": "write",
        "prompt": "החזירו שמות מוצרים שאינם בקטגוריות Furniture ו-Electronics, בעזרת NOT IN.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE category NOT IN ('Furniture', 'Electronics');",
        "orderSensitive": false,
        "hint": "NOT IN ('Furniture', 'Electronics')",
        "explanation": "נשארים Stationery, Food ו-Drinks: Notebook, Pen, Avocado, Orange, Bread, Pizza, Cola, Apple."
      },
      {
        "id": "cond-8",
        "type": "write",
        "prompt": "החזירו name ו-price של מוצרים שמחירם אינו בטווח 10 עד 100 כולל (NOT BETWEEN).",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, price FROM Products WHERE price NOT BETWEEN 10 AND 100;",
        "orderSensitive": false,
        "hint": "ההפך מ-BETWEEN 10 AND 100: מתחת ל-10 או מעל 100.",
        "explanation": "זולים מ-10 (Pen, Avocado, Orange, Bread, Cola, Apple) והיקרים מ-100 (Laptop, Desk, Chair, Monitor, Lamp). Notebook (12.50) ו-Mouse (79.90) כן בטווח ולכן יוצאים."
      },
      {
        "id": "cond-9",
        "type": "write",
        "prompt": "החזירו שמות מוצרים שאינם מתחילים ב-A (NOT LIKE 'A%').",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE name NOT LIKE 'A%';",
        "orderSensitive": false,
        "hint": "NOT LIKE 'A%'",
        "explanation": "Apple ו-Avocado יוצאים. כל השאר נשארים. NOT LIKE הוא השלילה של תבנית LIKE."
      },
      {
        "id": "cond-10",
        "type": "write",
        "prompt": "החזירו שמות לקוחות שחסר להם אימייל או שחסר להם גיל (IS NULL עם OR).",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Customers WHERE email IS NULL OR age IS NULL;",
        "orderSensitive": false,
        "hint": "email IS NULL OR age IS NULL. Noa ו-Avi.",
        "explanation": "ל-Noa חסר אימייל, ל-Avi חסר גיל. OR מחזיר שורה אם לפחות אחד מהתנאים מתקיים. AND היה דורש ששניהם חסרים, ואין כזה לקוח."
      },
      {
        "id": "cond-11",
        "type": "predict",
        "prompt": "מה יוחזר עבור המנורה (Lamp, 129)?",
        "code": "SELECT name,\n  CASE\n    WHEN price >= 500 THEN 'high'\n    WHEN price >= 100 THEN 'mid'\n    ELSE 'low'\n  END AS band\nFROM Products\nWHERE name = 'Lamp';",
        "choices": [
          "Lamp, mid",
          "Lamp, high",
          "Lamp, low",
          "שגיאה, CASE לא קיים ב-SQL"
        ],
        "answer": 0,
        "hint": "129 גדול מ-100 וקטן מ-500. הענף הראשון שמתקיים מנצח.",
        "explanation": "CASE בודק מלמעלה למטה. 129 < 500, אבל 129 >= 100, לכן mid. CASE WHEN בונה ערך חדש לפי תנאים — שימושי לקיבוץ ולדיווח."
      },
      {
        "id": "cond-12",
        "type": "write",
        "prompt": "החזירו את שם מוצר הרהיטים ואת תג המחיר: אם המחיר לפחות 300 כתבו 'expensive', אחרת 'affordable', בכינוי tag. השתמשו ב-CASE WHEN.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, CASE WHEN price >= 300 THEN 'expensive' ELSE 'affordable' END AS tag FROM Products WHERE category = 'Furniture';",
        "orderSensitive": false,
        "hint": "CASE WHEN price >= 300 THEN 'expensive' ELSE 'affordable' END AS tag",
        "explanation": "Desk 450 ו-Chair 299: Desk expensive, Chair affordable (299 < 300), Lamp 129 affordable. END סוגר את ה-CASE, ו-AS נותן שם לעמודה."
      }
    ]
  },
  {
    "id": "ascdesc",
    "title": "ASC ו-DESC — כיוון המיון",
    "short": "ASC / DESC",
    "icon": "↕",
    "intro": "ASC הוא סדר עולה (ברירת מחדל), DESC הוא סדר יורד. הכיוון קובע מי «ראשון» בשילוב עם LIMIT.",
    "questions": [
      {
        "id": "ad-1",
        "type": "mcq",
        "prompt": "מה ההבדל בין ASC ל-DESC?",
        "choices": [
          "ASC עולה (קטן לגדול / א-ת). DESC יורד (גדול לקטן / ת-א)",
          "ASC יורד ו-DESC עולה",
          "אין הבדל",
          "ASC ממיין טקסט, DESC ממיין מספרים"
        ],
        "answer": 0,
        "hint": "Ascending / Descending.",
        "explanation": "ASC הוא הסדר הטבעי העולה. DESC הופך אותו. אם לא כותבים כיוון, ברירת המחדל היא ASC."
      },
      {
        "id": "ad-2",
        "type": "predict",
        "prompt": "מי יופיע ראשון?",
        "code": "SELECT name FROM Customers ORDER BY name DESC;",
        "choices": [
          "Yossi Cohen",
          "Avi Peretz",
          "Dana Levi",
          "הסדר כמו בטבלה"
        ],
        "answer": 0,
        "hint": "DESC על שם — מהסוף של האלפבית.",
        "explanation": "בסדר יורד האות Y באה לפני R, N, M, D, A. Yossi ראשון, Avi אחרון."
      },
      {
        "id": "ad-3",
        "type": "fill",
        "prompt": "השלימו כדי לקבל מחירים מהגבוה לנמוך.",
        "template": "SELECT name, price FROM Products ORDER BY price ___;",
        "blanks": [
          [
            "DESC",
            "desc"
          ]
        ],
        "hint": "סדר יורד.",
        "explanation": "ORDER BY price DESC."
      },
      {
        "id": "ad-4",
        "type": "write",
        "prompt": "החזירו את שמות הלקוחות לפי גיל בסדר יורד (המבוגר ביותר ראשון).",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Customers ORDER BY age DESC;",
        "orderSensitive": true,
        "hint": "ORDER BY age DESC. NULL של Avi בסוף.",
        "explanation": "Maya 41, Yossi 35, Roei 29, Dana 28, Noa 22, ואז Avi עם NULL (ב-DESC ערך NULL בסוף)."
      },
      {
        "id": "ad-5",
        "type": "write",
        "prompt": "החזירו name ו-price של מוצרי Stationery ממוינים לפי מחיר בסדר עולה.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, price FROM Products WHERE category = 'Stationery' ORDER BY price ASC;",
        "orderSensitive": true,
        "hint": "Pen 4.90 ואז Notebook 12.50.",
        "explanation": "ASC הוא גם ברירת המחדל, אבל כדאי לכתוב אותו כשרוצים להדגיש «מהזול ליקר»."
      },
      {
        "id": "ad-6",
        "type": "mcq",
        "prompt": "איך ממיינים לפי שתי עמודות עם כיוונים שונים?",
        "choices": [
          "ORDER BY city ASC, name DESC",
          "ORDER BY city AND name DESC",
          "ORDER BY ASC city, DESC name",
          "אי אפשר לערבב כיוונים"
        ],
        "answer": 0,
        "hint": "כל עמודה יכולה לקבל כיוון משלה, מופרדות בפסיק.",
        "explanation": "רושמים אחרי כל עמודה את הכיוון שלה. הראשונה היא המיון הראשי, השנייה שוברת שוויון."
      },
      {
        "id": "ad-7",
        "type": "predict",
        "prompt": "באיזה סדר יופיעו מוצרי Furniture לפי stock ASC?",
        "code": "SELECT name, stock FROM Products\nWHERE category = 'Furniture'\nORDER BY stock ASC;",
        "choices": [
          "Chair 0, Lamp 6, Desk 12",
          "Desk 12, Lamp 6, Chair 0",
          "Lamp, Chair, Desk",
          "לפי הא-ב של השם"
        ],
        "answer": 0,
        "hint": "מהמלאי הקטן לגדול.",
        "explanation": "Chair עם 0 ראשון, אחר כך Lamp 6, ואז Desk 12."
      },
      {
        "id": "ad-8",
        "type": "write",
        "prompt": "החזירו את שם המוצר הזול ביותר בלבד, בעזרת מיון עולה ו-LIMIT 1.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products ORDER BY price ASC LIMIT 1;",
        "orderSensitive": true,
        "hint": "ORDER BY price ASC LIMIT 1 — Apple.",
        "explanation": "השילוב ASC + LIMIT 1 הוא התבנית ל«הקטן / הזול / הראשון אלפביתית»."
      }
    ]
  },
  {
    "id": "offset",
    "title": "OFFSET — דפדוף בתוצאות",
    "short": "OFFSET",
    "icon": "↦",
    "intro": "OFFSET מדלג על שורות לפני שמחזירים את ה-LIMIT. כך בונים עמוד 2, 3 וכן הלאה.",
    "questions": [
      {
        "id": "off-1",
        "type": "mcq",
        "prompt": "מה עושה OFFSET 10 בשאילתה עם LIMIT 5?",
        "choices": [
          "מדלג על 10 שורות ומחזיר עד 5 הבאות",
          "מחזיר 10 שורות ודולג על 5",
          "מחזיר שורות 5 עד 10",
          "מוחק 10 שורות מהטבלה"
        ],
        "answer": 0,
        "hint": "קודם מדלגים, אחר כך לוקחים.",
        "explanation": "סדר העבודה: ממיינים, מדלגים OFFSET, חותכים LIMIT. בלי ORDER BY הדפדוף אינו יציב."
      },
      {
        "id": "off-2",
        "type": "predict",
        "prompt": "אילו שמות יוחזרו?",
        "code": "SELECT name FROM Products\nORDER BY price ASC\nLIMIT 2 OFFSET 2;",
        "choices": [
          "Pen, Cola",
          "Apple, Orange",
          "Cola, Bread",
          "Orange, Pen"
        ],
        "answer": 0,
        "hint": "הזולים: Apple, Orange, ואז Pen, Cola.",
        "explanation": "דולגים על Apple ו-Orange. השניים הבאים: Pen (4.90) ו-Cola (6.00)."
      },
      {
        "id": "off-3",
        "type": "fill",
        "prompt": "השלימו כדי לדלג על 5 שורות.",
        "template": "SELECT * FROM Customers ORDER BY id LIMIT 3 ___ 5;",
        "blanks": [
          [
            "OFFSET",
            "offset"
          ]
        ],
        "hint": "מילת הדילוג.",
        "explanation": "LIMIT 3 OFFSET 5 מדלג על חמש ומחזיר שלוש."
      },
      {
        "id": "off-4",
        "type": "write",
        "prompt": "החזירו את שמות שלושת המוצרים הבאים אחרי שני היקרים ביותר, בסדר מחיר יורד.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products ORDER BY price DESC LIMIT 3 OFFSET 2;",
        "orderSensitive": true,
        "hint": "יורד: Laptop, Monitor, ואז Desk, Chair, Lamp.",
        "explanation": "OFFSET 2 מדלג על Laptop ו-Monitor. הבאים: Desk, Chair, Lamp."
      },
      {
        "id": "off-5",
        "type": "mcq",
        "prompt": "איך כותבים «עמוד 3» אם בכל עמוד 4 שורות (השורות 9–12)?",
        "choices": [
          "LIMIT 4 OFFSET 8",
          "LIMIT 8 OFFSET 4",
          "LIMIT 3 OFFSET 4",
          "OFFSET 3 LIMIT 12"
        ],
        "answer": 0,
        "hint": "מדלגים על שני עמודים מלאים: 2×4=8.",
        "explanation": "הנוסחה: OFFSET = (מספר_עמוד - 1) × גודל_עמוד, ואז LIMIT גודל_עמוד."
      },
      {
        "id": "off-6",
        "type": "mcq",
        "prompt": "מה המשמעות של הצורה LIMIT 8, 4 ב-MySQL / SQLite?",
        "choices": [
          "היסט 8 וכמות 4 — כמו LIMIT 4 OFFSET 8",
          "כמות 8 והיסט 4",
          "שורות 8 עד 4",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "המספר הראשון הוא ההיסט.",
        "explanation": "LIMIT offset, count מבלבל קצת, לכן רבים מעדיפים LIMIT 4 OFFSET 8."
      },
      {
        "id": "off-7",
        "type": "write",
        "prompt": "החזירו את שם הלקוח השני בסדר אלפביתי (דלגו על אחד, קחו אחד).",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Customers ORDER BY name ASC LIMIT 1 OFFSET 1;",
        "orderSensitive": true,
        "hint": "Avi ראשון, Dana שנייה.",
        "explanation": "OFFSET 1 LIMIT 1 אחרי ORDER BY name ASC מחזיר את Dana Levi."
      },
      {
        "id": "off-8",
        "type": "write",
        "prompt": "דלגו על מוצר המזון הזול ביותר והחזירו את שני הבאים לפי מחיר עולה (שם בלבד).",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE category = 'Food' ORDER BY price ASC LIMIT 2 OFFSET 1;",
        "orderSensitive": true,
        "hint": "Food לפי מחיר: Apple, Orange, Bread, Avocado, Pizza.",
        "explanation": "דולגים על Apple, ואז Orange ו-Bread."
      }
    ]
  },
  {
    "id": "top",
    "title": "TOP מול LIMIT",
    "short": "TOP / LIMIT",
    "icon": "⊤",
    "intro": "ב-MySQL וב-SQLite כותבים LIMIT. SELECT TOP n הוא התחביר של SQL Server (ו-Access). במשחק הזה TOP לא ירוץ.",
    "questions": [
      {
        "id": "top-1",
        "type": "mcq",
        "prompt": "איך מבקשים 5 שורות ב-MySQL / SQLite?",
        "choices": [
          "SELECT ... LIMIT 5",
          "SELECT TOP 5 ...",
          "SELECT FIRST 5 ...",
          "SELECT ROWCOUNT 5 ..."
        ],
        "answer": 0,
        "hint": "הקורס הוא בסגנון MySQL.",
        "explanation": "LIMIT 5. TOP שייך ל-SQL Server: SELECT TOP 5 * FROM Products;"
      },
      {
        "id": "top-2",
        "type": "mcq",
        "prompt": "מה יקרה אם נריץ SELECT TOP 3 * FROM Products; במנוע של printer (SQLite) או ב-MySQL טיפוסי?",
        "choices": [
          "שגיאת תחביר — TOP אינו מילה שמורה כאן",
          "יוחזרו 3 שורות כרגיל",
          "יוחזרו כל השורות",
          "המנוע ימיר אוטומטית ל-LIMIT"
        ],
        "answer": 0,
        "hint": "זה לא התחביר של המנוע שלנו.",
        "explanation": "צריך לכתוב SELECT * FROM Products LIMIT 3; במקום TOP."
      },
      {
        "id": "top-3",
        "type": "fill",
        "prompt": "השלימו את המקבילה ב-MySQL לשאילתת SQL Server: SELECT TOP 1 name FROM Products ORDER BY price DESC;",
        "template": "SELECT name FROM Products ORDER BY price DESC LIMIT ___;",
        "blanks": [
          [
            "1"
          ]
        ],
        "hint": "כמה שורות?",
        "explanation": "LIMIT 1 מחזיר את היקר ביותר — Laptop."
      },
      {
        "id": "top-4",
        "type": "write",
        "prompt": "כתבו ב-LIMIT (לא TOP) שאילתה שמחזירה את שני המוצרים הזולים ביותר: name ו-price, מהזול ליקר.",
        "starter": "SELECT ",
        "expectedSql": "SELECT name, price FROM Products ORDER BY price ASC LIMIT 2;",
        "orderSensitive": true,
        "hint": "ORDER BY price ASC LIMIT 2.",
        "explanation": "Apple ו-Orange. זו המקבילה ל-SELECT TOP 2 ... ORDER BY price ASC ב-SQL Server."
      },
      {
        "id": "top-5",
        "type": "mcq",
        "prompt": "איך כותבים ב-SQL Server «5 שורות אחרי דילוג על 10» (בערך כמו LIMIT 5 OFFSET 10)?",
        "choices": [
          "בגרסאות חדשות: OFFSET 10 ROWS FETCH NEXT 5 ROWS ONLY (או TOP עם תת-שאילתה בגרסאות ישנות)",
          "SELECT TOP 5 OFFSET 10 — תחביר זהה ל-MySQL",
          "LIMIT קיים גם ב-SQL Server מאז ומתמיד",
          "אי אפשר לדפדף ב-SQL Server"
        ],
        "answer": 0,
        "hint": "התחביר המודרני הוא OFFSET ... FETCH.",
        "explanation": "SQL Server משתמש ב-OFFSET/FETCH, לא ב-LIMIT. MySQL/SQLite נשארים עם LIMIT/OFFSET."
      },
      {
        "id": "top-6",
        "type": "write",
        "prompt": "החזירו את שם הלקוח המבוגר ביותר שיש לו גיל ידוע (LIMIT, לא TOP).",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Customers WHERE age IS NOT NULL ORDER BY age DESC LIMIT 1;",
        "orderSensitive": true,
        "hint": "סינון NULL, מיון יורד, LIMIT 1 — Maya.",
        "explanation": "Maya Katz (41). ב-SQL Server היו כותבים SELECT TOP 1 name ... ORDER BY age DESC."
      },
      {
        "id": "top-7",
        "type": "mcq",
        "prompt": "האם אפשר לשלב TOP עם PERCENT ב-SQL Server, למשל TOP 10 PERCENT?",
        "choices": [
          "כן, ב-SQL Server יש TOP n PERCENT. ב-MySQL/SQLite אין, ומחשבים אחרת",
          "כן, וזה עובד גם ב-MySQL",
          "לא, PERCENT לא קיים באף מנוע",
          "PERCENT מחליף את ORDER BY"
        ],
        "answer": 0,
        "hint": "זו יכולת של SQL Server בלבד.",
        "explanation": "TOP 10 PERCENT מחזיר עשירית מהשורות. ב-MySQL צריך לחשב את המספר (למשל עם COUNT) ואז LIMIT."
      },
      {
        "id": "top-8",
        "type": "predict",
        "prompt": "מה יוחזר במנוע שלנו?",
        "code": "SELECT name FROM Products\nORDER BY price DESC\nLIMIT 1;",
        "choices": [
          "Laptop",
          "שגיאה כי חסר TOP",
          "Apple",
          "כל המוצרים"
        ],
        "answer": 0,
        "hint": "LIMIT עובד כאן מצוין.",
        "explanation": "Laptop הוא היקר ביותר. זו הדרך הנכונה במנוע MySQL/SQLite."
      }
    ]
  },
  {
    "id": "wildcards",
    "title": "תווי כלליים ב-LIKE — % ו-_",
    "short": "תווי כללי",
    "icon": "%",
    "intro": "שבע התבניות מהשיעור: a%, %a, %or%, _r%, a_%, a__%, a%o. % הוא רצף כלשהו, _ הוא תו אחד.",
    "questions": [
      {
        "id": "wc-1",
        "type": "mcq",
        "prompt": "מה מבטאים % ו-_ ב-LIKE?",
        "choices": [
          "% רצף כלשהו (גם ריק). _ תו אחד בדיוק",
          "_ רצף, % תו אחד",
          "שניהם תו אחד",
          "% רק בתחילת המחרוזת"
        ],
        "answer": 0,
        "hint": "אחוז = הרבה, קו תחתון = אחד.",
        "explanation": "זו אבן היסוד. כל שאר התבניות נבנות משני התווים האלה."
      },
      {
        "id": "wc-2",
        "type": "write",
        "prompt": "החזירו מוצרים ששמם מתחיל ב-A (תבנית 'A%' / 'a%').",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE name LIKE 'A%';",
        "orderSensitive": false,
        "hint": "Apple, Avocado.",
        "explanation": "'a%' מהשיעור: מתחיל ב-a, ואחר כך כל דבר."
      },
      {
        "id": "wc-3",
        "type": "write",
        "prompt": "החזירו מוצרים ששמם מסתיים ב-a (תבנית '%a').",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE name LIKE '%a';",
        "orderSensitive": false,
        "hint": "Cola, Pizza.",
        "explanation": "'%a' — כל דבר ואז a בסוף."
      },
      {
        "id": "wc-4",
        "type": "write",
        "prompt": "החזירו מוצרים שמכילים את הרצף or (תבנית '%or%').",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE name LIKE '%or%';",
        "orderSensitive": false,
        "hint": "Monitor, Orange.",
        "explanation": "'%or%' מחפש or בכל מקום בשם."
      },
      {
        "id": "wc-5",
        "type": "write",
        "prompt": "החזירו מוצרים שהאות השנייה בשמם היא r (תבנית '_r%').",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE name LIKE '_r%';",
        "orderSensitive": false,
        "hint": "Bread, Orange.",
        "explanation": "תו אחד, אחר כך r, אחר כך כל דבר."
      },
      {
        "id": "wc-6",
        "type": "mcq",
        "prompt": "מה ההבדל בין 'a_%' ל-'a__%'?",
        "choices": [
          "'a_%' לפחות 2 תווים שמתחילים ב-a. 'a__%' לפחות 3",
          "אין הבדל",
          "'a__%' קצרה יותר",
          "'a_%' בדיוק שני תווים בלבד תמיד"
        ],
        "answer": 0,
        "hint": "כל _ הוא תו חובה. % יכול להיות ריק.",
        "explanation": "אורך מינימלי 2 מול 3. Apple (5) ו-Avocado (7) מתאימים לשתיהן."
      },
      {
        "id": "wc-7",
        "type": "fill",
        "prompt": "השלימו תבנית למילה שמתחילה ב-a ומסתיימת ב-o (כמו Avocado).",
        "template": "SELECT name FROM Products WHERE name LIKE '___';",
        "blanks": [
          [
            "a%o",
            "A%o"
          ]
        ],
        "hint": "a, אחוז, o.",
        "explanation": "התבנית 'a%o' מהשיעור."
      },
      {
        "id": "wc-8",
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
        "hint": "לפחות 3 תווים שמתחילים ב-a.",
        "explanation": "שניהם ארוכים מספיק."
      },
      {
        "id": "wc-9",
        "type": "write",
        "prompt": "החזירו מוצרים בני שני תווים לפחות שמתחילים ב-A (תבנית 'a_%').",
        "starter": "SELECT ",
        "expectedSql": "SELECT name FROM Products WHERE name LIKE 'a_%';",
        "orderSensitive": false,
        "hint": "Apple, Avocado.",
        "explanation": "'a_%' דורשת תו נוסף אחרי a — לא מתאימה לשם 'A' לבדו."
      },
      {
        "id": "wc-10",
        "type": "predict",
        "prompt": "איזה לקוח יתאים ל-'%atz'?",
        "code": "SELECT name FROM Customers\nWHERE name LIKE '%atz';",
        "choices": [
          "Maya Katz",
          "Avi Peretz",
          "Dana Levi",
          "אף אחד"
        ],
        "answer": 0,
        "hint": "מסתיים ב-atz.",
        "explanation": "Maya Katz מסתיים ב-atz. % מכסה את 'Maya K'."
      }
    ]
  },
  {
    "id": "types-numeric",
    "title": "טיפוסים מספריים ב-MySQL",
    "short": "מספרים",
    "icon": "123",
    "intro": "חידון ומדריך לטיפוסים המספריים ב-MySQL: BIT, TINYINT, BOOLEAN, INT/INTEGER, BIGINT, FLOAT, DOUBLE ו-DECIMAL.",
    "questions": [
      {
        "id": "tn-1",
        "type": "mcq",
        "prompt": "מה ההבדל בין INT (או INTEGER) ל-BIGINT ב-MySQL?",
        "choices": [
          "INT הוא 4 בתים, BIGINT 8 בתים — טווח גדול בהרבה",
          "INT לשברים, BIGINT לשלמים",
          "אין הבדל",
          "BIGINT קיים רק ב-SQLite"
        ],
        "answer": 0,
        "hint": "כפל הגודל, כפל הטווח.",
        "explanation": "INT מספיק לרוב המזהים. BIGINT למספרים עצומים. INTEGER הוא כינוי ל-INT ב-MySQL."
      },
      {
        "id": "tn-2",
        "type": "mcq",
        "prompt": "מה טווח TINYINT חתום (signed) ב-MySQL?",
        "choices": [
          "מ־128- עד 127, או 0 עד 255 ב-unsigned",
          "0 עד 1 בלבד",
          "כמו INT",
          "רק שליליים"
        ],
        "answer": 0,
        "hint": "בית אחד.",
        "explanation": "TINYINT תופס בית אחד. מתאים למספרים קטנים ולעיתים לבוליאני."
      },
      {
        "id": "tn-3",
        "type": "mcq",
        "prompt": "מהו BOOLEAN (או BOOL) ב-MySQL?",
        "choices": [
          "כינוי ל-TINYINT(1) — בדרך כלל 0=false, 1=true",
          "טיפוס נפרד כמו בפייתון עם True/False בלבד",
          "לא קיים",
          "כינוי ל-BIGINT"
        ],
        "answer": 0,
        "hint": "ב-MySQL בוליאני הוא מספר קטן.",
        "explanation": "BOOL/BOOLEAN = TINYINT(1). BIT הוא טיפוס אחר, לשדה ביטים."
      },
      {
        "id": "tn-4",
        "type": "mcq",
        "prompt": "למה משמש BIT ב-MySQL?",
        "choices": [
          "לשדה של ביטים / דגלים בינאריים, למשל BIT(8)",
          "לתמונות",
          "לטקסט",
          "לתאריכים"
        ],
        "answer": 0,
        "hint": "Bit = סיבית.",
        "explanation": "BIT(n) שומר n ביטים. לא מתאים למחיר או לשם."
      },
      {
        "id": "tn-5",
        "type": "mcq",
        "prompt": "איזה טיפוס מתאים למחיר כסף מדויק כמו 19.90?",
        "choices": [
          "DECIMAL (או NUMERIC) — עשרוני מדויק",
          "FLOAT — תמיד מדויק לכסף",
          "DOUBLE PRECISION",
          "TINYINT"
        ],
        "answer": 0,
        "hint": "FLOAT ו-DOUBLE הם קירוב בינארי.",
        "explanation": "DECIMAL(10,2) שומר 10 ספרות, מהן 2 אחרי הנקודה, בלי שגיאות עיגול של כסף."
      },
      {
        "id": "tn-6",
        "type": "mcq",
        "prompt": "מה ההבדל בין FLOAT(size,d) ל-FLOAT(p) ב-MySQL?",
        "choices": [
          "FLOAT(size,d) הוא תחביר ישן לעשרוני משוער (ספרות, דיוק). FLOAT(p) קובע דיוק ביטים ובוחר בין FLOAT ל-DOUBLE",
          "אין הבדל בכלל",
          "FLOAT(p) מיועד רק למספרים שלמים",
          "שניהם כינוי ל-INT"
        ],
        "answer": 0,
        "hint": "p הוא precision ביטים: עד 24 זה FLOAT, 25–53 זה DOUBLE.",
        "explanation": "MySQL: FLOAT(p) עם p<=24 נשמר כ-FLOAT (4 בתים), p>24 כ-DOUBLE. את FLOAT(size,d) כדאי להחליף ב-DECIMAL כשמדובר בכסף."
      },
      {
        "id": "tn-7",
        "type": "mcq",
        "prompt": "מה הקשר בין DOUBLE ל-DOUBLE PRECISION?",
        "choices": [
          "ב-MySQL הם כינויים לאותו טיפוס — מספר עשרוני בקירוב, 8 בתים",
          "DOUBLE PRECISION מדויק כמו DECIMAL",
          "DOUBLE הוא 4 בתים, PRECISION 8",
          "רק SQLite מכיר אותם"
        ],
        "answer": 0,
        "hint": "שמות נרדפים לטיפוס 8-בתים בקירוב.",
        "explanation": "DOUBLE / DOUBLE PRECISION / REAL (בחלק מהמצבים) הם נקודה צפה. לכסף עדיין מעדיפים DECIMAL."
      },
      {
        "id": "tn-8",
        "type": "fill",
        "prompt": "השלימו טיפוס למחיר עם 2 ספרות אחרי הנקודה.",
        "template": "price ___ (8, 2)",
        "blanks": [
          [
            "DECIMAL",
            "decimal",
            "NUMERIC",
            "numeric"
          ]
        ],
        "hint": "הטיפוס המדויק לכסף.",
        "explanation": "DECIMAL(8,2) או NUMERIC(8,2)."
      },
      {
        "id": "tn-9",
        "type": "mcq",
        "prompt": "איזה טיפוס תבחרו למזהה שורת לוג שעשוי לעבור מיליארדים?",
        "choices": [
          "BIGINT",
          "TINYINT",
          "FLOAT",
          "BIT"
        ],
        "answer": 0,
        "hint": "צריך טווח שלם גדול, לא שבר.",
        "explanation": "BIGINT unsigned מגיע עד כ-18 מילארד-מיליארד. INT עלול להיגמר."
      },
      {
        "id": "tn-10",
        "type": "mcq",
        "prompt": "מה יקרה לערך 3.14 אם נשמור אותו ב-INT?",
        "choices": [
          "השבר ייחתך — יישמר 3",
          "יישמר 3.14 בדיוק",
          "תיזרק שגיאה תמיד",
          "יהפוך ל-314"
        ],
        "answer": 0,
        "hint": "INT הוא שלם.",
        "explanation": "ב-MySQL המספר יעוגל/ייחתך לשלם (תלוי במצב SQL). כדי לשמור 3.14 צריך DECIMAL או FLOAT."
      }
    ]
  },
  {
    "id": "types-string",
    "title": "טיפוסי מחרוזת ובינארי ב-MySQL",
    "short": "מחרוזות",
    "icon": "Ab",
    "intro": "CHAR, VARCHAR, BINARY/VARBINARY, משפחות TEXT ו-BLOB, וגם ENUM ו-SET.",
    "questions": [
      {
        "id": "ts-1",
        "type": "mcq",
        "prompt": "מה ההבדל בין CHAR ל-VARCHAR?",
        "choices": [
          "CHAR באורך קבוע (ריפוד ברווחים). VARCHAR באורך משתנה עד מקסימום",
          "VARCHAR קבוע, CHAR משתנה",
          "CHAR למספרים בלבד",
          "אין הבדל"
        ],
        "answer": 0,
        "hint": "CHAR(2) לקוד מדינה. VARCHAR(255) לשם.",
        "explanation": "CHAR(10) תמיד 10 תווים. VARCHAR(10) תופס לפי האורך האמיתי, עד 10."
      },
      {
        "id": "ts-2",
        "type": "mcq",
        "prompt": "מה מאפיין BINARY / VARBINARY מול CHAR / VARCHAR?",
        "choices": [
          "הם שומרים בתים (בינארי), וההשוואה לפי בתים — בלי כללי שפה / רישיות של טקסט",
          "BINARY הוא כינוי ל-BOOLEAN",
          "VARBINARY לתאריכים",
          "אין הבדל"
        ],
        "answer": 0,
        "hint": "Binary = לפי בתים.",
        "explanation": "מתאים להאש, מזהה בינארי, או נתונים לא-טקסטואליים קצרים."
      },
      {
        "id": "ts-3",
        "type": "mcq",
        "prompt": "מה הסדר במשפחת TEXT ב-MySQL, מהקטן לגדול?",
        "choices": [
          "TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT",
          "TEXT, TINYTEXT, LONGTEXT בלבד",
          "יש רק TEXT אחד",
          "LONGTEXT הוא הקטן ביותר"
        ],
        "answer": 0,
        "hint": "ארבעה גדלים, כמו ב-BLOB.",
        "explanation": "TINYTEXT עד 255 בתים, TEXT עד 64KB, MEDIUMTEXT עד 16MB, LONGTEXT עד 4GB (בערך, לפי בתים)."
      },
      {
        "id": "ts-4",
        "type": "mcq",
        "prompt": "מתי משתמשים ב-BLOB ולא ב-TEXT?",
        "choices": [
          "לקבצים בינאריים — תמונות, אודיו, מסמכים. TEXT לטקסט עם קידוד תווים",
          "BLOB לטקסט עברי בלבד",
          "BLOB למספרים",
          "אין הבדל"
        ],
        "answer": 0,
        "hint": "Binary Large Object.",
        "explanation": "TINYBLOB, BLOB, MEDIUMBLOB, LONGBLOB — אותם סדרי גודל כמו משפחת TEXT, אבל לבתים גולמיים."
      },
      {
        "id": "ts-5",
        "type": "mcq",
        "prompt": "מה ההבדל בין ENUM ל-SET?",
        "choices": [
          "ENUM — ערך אחד מרשימה מותרת. SET — אפשר כמה ערכים מהרשימה יחד",
          "SET כינוי ל-ENUM",
          "ENUM למספרים",
          "שניהם קיימים רק ב-SQLite"
        ],
        "answer": 0,
        "hint": "ENUM בחירה אחת, SET קבוצה.",
        "explanation": "ENUM('s','m','l') שומר ערך אחד. SET('milk','sugar') יכול לשמור milk,sugar. ב-SQLite אין ENUM/SET מובנים."
      },
      {
        "id": "ts-6",
        "type": "mcq",
        "prompt": "איזה טיפוס מתאים לקוד מדינה של שני תווים כמו IL?",
        "choices": [
          "CHAR(2)",
          "LONGTEXT",
          "BLOB",
          "ENUM בלי רשימה"
        ],
        "answer": 0,
        "hint": "אורך קבוע וקצר.",
        "explanation": "CHAR(2) מדויק כאן. VARCHAR(2) גם יעבוד, אבל CHAR טבעי לאורך קבוע."
      },
      {
        "id": "ts-7",
        "type": "mcq",
        "prompt": "איזה טיפוס מתאים לתיאור מוצר של כמה פסקאות?",
        "choices": [
          "TEXT (או VARCHAR ארוך, אם השדה לא ענק)",
          "BIT",
          "TINYINT",
          "BINARY(1)"
        ],
        "answer": 0,
        "hint": "טקסט משתנה, לא בינארי.",
        "explanation": "TEXT משפחה, או VARCHAR(2000) לתיאור בינוני. LONGTEXT למאמרים ענקיים."
      },
      {
        "id": "ts-8",
        "type": "fill",
        "prompt": "השלימו טיפוס לשדה ששומר תמונת מוצר בקובץ בינארי בגודל בינוני.",
        "template": "photo ___",
        "blanks": [
          [
            "BLOB",
            "blob",
            "MEDIUMBLOB",
            "mediumblob"
          ]
        ],
        "hint": "משפחת BLOB.",
        "explanation": "BLOB או MEDIUMBLOB לתמונה. לא TEXT, כי זה לא טקסט."
      },
      {
        "id": "ts-9",
        "type": "mcq",
        "prompt": "מה יקרה ב-ENUM('small','medium','large') אם נכניס את הערך 'xl' (במצב SQL קפדני)?",
        "choices": [
          "שגיאה (או ערך ריק במצב לא-קפדני) — xl לא ברשימה",
          "MySQL יוסיף את xl אוטומטית לרשימה",
          "יישמר כ-NULL תמיד בשקט",
          "יהפוך ל-SET"
        ],
        "answer": 0,
        "hint": "ENUM מקבל רק ערכים שהוגדרו.",
        "explanation": "זו המהות של ENUM: רשימה סגורה. עדיף לפעמים טבלת ערכים נפרדת, לגמישות."
      },
      {
        "id": "ts-10",
        "type": "mcq",
        "prompt": "TINYTEXT ו-TINYBLOB מוגבלים בערך ל…",
        "choices": [
          "עד 255 בתים",
          "עד 4GB",
          "עד 8 תווים תמיד",
          "אין הגבלה"
        ],
        "answer": 0,
        "hint": "TINY = קטן, כמו 255.",
        "explanation": "255 בתים זה הגבול. לשם מוצר קצר עדיף VARCHAR, לא TINYTEXT."
      }
    ]
  },
  {
    "id": "groupby",
    "title": "GROUP BY, HAVING וקיבוץ",
    "short": "GROUP BY",
    "icon": "Σ",
    "intro": "GROUP BY מקבץ שורות לפי ערך משותף, ואז מחשבים קיבוץ (COUNT, SUM, AVG…). HAVING מסנן אחרי הקיבוץ, בניגוד ל-WHERE שמסנן לפני.",
    "questions": [
      {
        "id": "gb-1",
        "type": "mcq",
        "prompt": "מה עושה GROUP BY category?",
        "choices": [
          "מקבץ את כל השורות עם אותה קטגוריה לשורת סיכום אחת",
          "מוחק כפילויות מהטבלה עצמה",
          "ממיין בלבד, בלי סיכום",
          "זה כינוי ל-ORDER BY"
        ],
        "answer": 0,
        "hint": "אחר כך בדרך כלל שמים COUNT או SUM.",
        "explanation": "כל ערך ייחודי של category הופך לשורה אחת בתוצאה, עם פונקציות קיבוץ על השורות שבתוך הקבוצה."
      },
      {
        "id": "gb-2",
        "type": "predict",
        "prompt": "כמה שורות יוחזרו, ומה COUNT של Food?",
        "code": "SELECT category, COUNT(*) AS n\nFROM Products\nGROUP BY category;",
        "choices": [
          "5 שורות; ל-Food יש n=5 (Avocado, Orange, Bread, Pizza, Apple)",
          "14 שורות, אחת לכל מוצר",
          "רק שורה אחת עם 14",
          "Food עם n=1"
        ],
        "answer": 0,
        "hint": "חמש קטגוריות. ב-Food חמישה מוצרים.",
        "explanation": "Electronics 3, Furniture 3, Stationery 2, Food 5, Drinks 1."
      },
      {
        "id": "gb-3",
        "type": "write",
        "prompt": "החזירו לכל עיר את מספר הלקוחות בה, בשתי עמודות: city ו-n (ספירה).",
        "starter": "SELECT ",
        "expectedSql": "SELECT city, COUNT(*) AS n FROM Customers GROUP BY city;",
        "orderSensitive": false,
        "hint": "GROUP BY city, COUNT(*) AS n.",
        "explanation": "Tel Aviv 3, Haifa 2, Jerusalem 1."
      },
      {
        "id": "gb-4",
        "type": "write",
        "prompt": "החזירו לכל קטגוריה את מחיר הממוצע, בעמודות category ו-avg_price.",
        "starter": "SELECT ",
        "expectedSql": "SELECT category, AVG(price) AS avg_price FROM Products GROUP BY category;",
        "orderSensitive": false,
        "hint": "AVG(price) AS avg_price, GROUP BY category.",
        "explanation": "ממוצע לכל קבוצה בנפרד, לא ממוצע כללי לכל הטבלה."
      },
      {
        "id": "gb-5",
        "type": "mcq",
        "prompt": "מה ההבדל בין WHERE ל-HAVING?",
        "choices": [
          "WHERE מסנן שורות לפני הקיבוץ. HAVING מסנן קבוצות אחרי חישוב הקיבוץ",
          "אין הבדל",
          "HAVING רק ל-NULL, WHERE לכל השאר",
          "WHERE אסור עם GROUP BY"
        ],
        "answer": 0,
        "hint": "אי אפשר לכתוב WHERE COUNT(*) > 2. בשביל זה HAVING.",
        "explanation": "סדר לוגי: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. HAVING רואה כבר את תוצאת COUNT/SUM/AVG."
      },
      {
        "id": "gb-6",
        "type": "write",
        "prompt": "החזירו קטגוריות שיש בהן לפחות 3 מוצרים, עם מספר המוצרים n.",
        "starter": "SELECT ",
        "expectedSql": "SELECT category, COUNT(*) AS n FROM Products GROUP BY category HAVING COUNT(*) >= 3;",
        "orderSensitive": false,
        "hint": "HAVING COUNT(*) >= 3. Electronics, Furniture, Food.",
        "explanation": "Stationery (2) ו-Drinks (1) נשארות בחוץ. WHERE לא יכול לסנן לפי COUNT."
      },
      {
        "id": "gb-7",
        "type": "predict",
        "prompt": "מה יוחזר? (SUM מתעלם מ-NULL)",
        "code": "SELECT category, SUM(stock) AS s\nFROM Products\nWHERE category = 'Stationery'\nGROUP BY category;",
        "choices": [
          "Stationery, 200 — Pen עם stock NULL לא נכנס לסכום, Notebook 200",
          "Stationery, NULL כי יש NULL",
          "Stationery, 200+NULL=שגיאה",
          "אין שורה"
        ],
        "answer": 0,
        "hint": "Notebook 200, Pen NULL. SUM מדלג על NULL.",
        "explanation": "WHERE מסנן קודם לקטגוריה, אחר כך GROUP BY, ו-SUM(stock) = 200."
      },
      {
        "id": "gb-8",
        "type": "write",
        "prompt": "החזירו קטגוריות שמחיר הממוצע בהן גבוה מ-100, ממוינות לפי הממוצע בסדר יורד. עמודות: category, avg_price.",
        "starter": "SELECT ",
        "expectedSql": "SELECT category, AVG(price) AS avg_price FROM Products GROUP BY category HAVING AVG(price) > 100 ORDER BY avg_price DESC;",
        "orderSensitive": true,
        "hint": "HAVING AVG(price) > 100, ואז ORDER BY avg_price DESC.",
        "explanation": "Electronics (ממוצע גבוה בגלל Laptop/Monitor) ואז Furniture. Food/Stationery/Drinks נמוכים מ-100."
      },
      {
        "id": "gb-9",
        "type": "fill",
        "prompt": "השלימו את מילת הסינון שאחרי הקיבוץ.",
        "template": "SELECT city, COUNT(*) AS n FROM Customers GROUP BY city ___ n >= 2;",
        "blanks": [
          [
            "HAVING",
            "having"
          ]
        ],
        "hint": "לא WHERE.",
        "explanation": "ב-SQLite וב-MySQL אפשר להשתמש בכינוי n ב-HAVING; אפשר גם HAVING COUNT(*) >= 2. Tel Aviv ו-Haifa."
      },
      {
        "id": "gb-10",
        "type": "mcq",
        "prompt": "ב-SELECT city, COUNT(*) FROM Customers GROUP BY city — למה אי אפשר להוסיף את name ב-SELECT בלי לקבץ אותו?",
        "choices": [
          "כי name אינו בעמודת הקיבוץ ולא בפונקציית קיבוץ — לכל עיר יש כמה שמות",
          "אפשר תמיד, SQL יבחר שם אקראי בשקט ובלי דיון",
          "name הוא מילה שמורה",
          "COUNT דורש רק עמודת id"
        ],
        "answer": 0,
        "hint": "כל עמודה ב-SELECT חייבת להיות מקובצת או מחושבת.",
        "explanation": "זו שגיאה נפוצה. אם רוצים שם — או מוסיפים ל-GROUP BY (ואז אין קיבוץ אמיתי לפי עיר), או מוותרים על name בסיכום."
      },
      {
        "id": "gb-11",
        "type": "write",
        "prompt": "לכל לקוח (customer_id) בטבלת Orders, החזירו את מספר ההזמנות שלו בעמודה n.",
        "starter": "SELECT ",
        "expectedSql": "SELECT customer_id, COUNT(*) AS n FROM Orders GROUP BY customer_id;",
        "orderSensitive": false,
        "hint": "GROUP BY customer_id.",
        "explanation": "למשל לקוח 1 יש שלוש הזמנות (1, 2, 10). זו הכנה טובה ל-JOIN עם שם הלקוח."
      },
      {
        "id": "gb-12",
        "type": "write",
        "prompt": "החזירו את הקטגוריה עם הכי הרבה מוצרים בלבד (category ו-n).",
        "starter": "SELECT ",
        "expectedSql": "SELECT category, COUNT(*) AS n FROM Products GROUP BY category ORDER BY n DESC LIMIT 1;",
        "orderSensitive": true,
        "hint": "GROUP BY, מיון לפי n יורד, LIMIT 1 — Food עם 5.",
        "explanation": "תבנית «הקבוצה הגדולה ביותר»: מקבצים, ממיינים לפי הספירה, וחותכים ל-1."
      }
    ]
  },
  {
    "id": "join",
    "title": "JOIN — חיבור טבלאות",
    "short": "JOIN",
    "icon": "⋈",
    "intro": "INNER JOIN מחזיר רק התאמות, LEFT JOIN שומר את כל השורות משמאל, RIGHT JOIN את כל השורות מימין. אפשר לחבר שלוש טבלאות, ולחבר טבלה לעצמה עם כינוי (self join).",
    "questions": [
      {
        "id": "jn-1",
        "type": "mcq",
        "prompt": "מה מחזיר INNER JOIN בין Orders ל-Customers על customer_id?",
        "choices": [
          "רק הזמנות שיש להן לקוח תואם (וזה המצב הרגיל כאן)",
          "גם לקוחות בלי הזמנות",
          "גם הזמנות בלי לקוח, אבל לא את ההתאמות",
          "מכפלה קרטזית בלי תנאי"
        ],
        "answer": 0,
        "hint": "INNER = רק שורות שמצאו זו את זו.",
        "explanation": "INNER JOIN (או סתם JOIN) דורש התאמה ב-ON. שורה בלי התאמה נזרקת."
      },
      {
        "id": "jn-2",
        "type": "predict",
        "prompt": "מה שם הלקוח וכמות ההזמנה?",
        "code": "SELECT c.name, o.quantity\nFROM Orders o\nJOIN Customers c ON c.id = o.customer_id\nWHERE o.id = 1;",
        "choices": [
          "Dana Levi, 1",
          "Yossi Cohen, 1",
          "Dana Levi, 2",
          "שגיאה כי חסר INNER"
        ],
        "answer": 0,
        "hint": "הזמנה 1 שייכת ללקוח 1, כמות 1, מוצר Laptop.",
        "explanation": "JOIN בלי מילה INNER הוא INNER JOIN. כינויי הטבלאות o ו-c מקצרים את הכתיבה."
      },
      {
        "id": "jn-3",
        "type": "write",
        "prompt": "החזירו את שם הלקוח ואת id ההזמנה לכל הזמנות הלקוחות מחיפה.",
        "starter": "SELECT ",
        "expectedSql": "SELECT c.name, o.id FROM Orders o JOIN Customers c ON c.id = o.customer_id WHERE c.city = 'Haifa';",
        "orderSensitive": false,
        "hint": "JOIN Customers, WHERE c.city = 'Haifa'. יוסי (הזמנות 3, 7) ומאיה (5).",
        "explanation": "מחברים ואז מסננים לפי העיר. אפשר גם לסנן לפני בטבלת הלקוחות, אבל לתחילת הדרך JOIN + WHERE ברור."
      },
      {
        "id": "jn-4",
        "type": "mcq",
        "prompt": "מה ההבדל בין LEFT JOIN ל-INNER JOIN?",
        "choices": [
          "LEFT JOIN שומר את כל השורות מהטבלה השמאלית, גם בלי התאמה (ואז עמודות הימין NULL)",
          "אין הבדל",
          "LEFT מוחק את הטבלה השמאלית",
          "LEFT JOIN עובד רק על עמודת id"
        ],
        "answer": 0,
        "hint": "שמאל = הטבלה ב-FROM / לפני JOIN.",
        "explanation": "Products LEFT JOIN Orders יחזיר גם מוצרים שמעולם לא הוזמנו, עם NULL בעמודות ההזמנה."
      },
      {
        "id": "jn-5",
        "type": "write",
        "prompt": "החזירו את שמות המוצרים שמעולם לא הופיעו בהזמנה, בעזרת LEFT JOIN ל-Orders ותנאי o.id IS NULL.",
        "starter": "SELECT ",
        "expectedSql": "SELECT p.name FROM Products p LEFT JOIN Orders o ON o.product_id = p.id WHERE o.id IS NULL;",
        "orderSensitive": false,
        "hint": "תבנית «אין התאמה»: LEFT JOIN ואז WHERE הימין IS NULL. Pen ומוצרי המזון/משקה.",
        "explanation": "זו דרך קלאסית למצוא רשומות יתומות. המוצרים בהזמנות (Laptop, Mouse, Desk, Chair, Notebook, Monitor, Lamp) לא יופיעו."
      },
      {
        "id": "jn-6",
        "type": "mcq",
        "prompt": "מהו RIGHT JOIN, והאם הוא עובד במנוע של printer?",
        "choices": [
          "הוא שומר את כל השורות מהטבלה הימנית; ב-SQLite 3.39+ (אצלנו 3.45) וב-MySQL הוא נתמך. אם המנוע ישן — הופכים ל-LEFT JOIN",
          "RIGHT JOIN לא קיים באף מנוע",
          "RIGHT JOIN זה כינוי ל-INNER",
          "ב-SQLite הוא קיים אבל אצלנו מנוטרל"
        ],
        "answer": 0,
        "hint": "RIGHT JOIN A הוא כמו A LEFT JOIN עם סדר הפוך.",
        "explanation": "SELECT ... FROM Orders o RIGHT JOIN Products p ON ... שקול ל-Products p LEFT JOIN Orders o. בגרסאות SQLite לפני 3.39 אין RIGHT — אז פשוט הופכים."
      },
      {
        "id": "jn-7",
        "type": "write",
        "prompt": "בעזרת RIGHT JOIN: החזירו את שם כל המוצרים (גם בלי הזמנה) ואת id ההזמנה (יכול להיות NULL). עמודות: name, id. הטבלה הימנית היא Products.",
        "starter": "SELECT ",
        "expectedSql": "SELECT p.name, o.id FROM Orders o RIGHT JOIN Products p ON o.product_id = p.id;",
        "orderSensitive": false,
        "hint": "FROM Orders o RIGHT JOIN Products p ON o.product_id = p.id",
        "explanation": "כל 14 המוצרים מופיעים; למוצרים שהוזמנו כמה פעמים (למשל Mouse, Laptop, Notebook) יופיעו כמה שורות. ל-Pen ולמזון id יהיה NULL."
      },
      {
        "id": "jn-8",
        "type": "write",
        "prompt": "חברו שלוש טבלאות והחזירו את שם הלקוח, שם המוצר והכמות של הזמנה מספר 4.",
        "starter": "SELECT ",
        "expectedSql": "SELECT c.name, p.name, o.quantity FROM Orders o JOIN Customers c ON c.id = o.customer_id JOIN Products p ON p.id = o.product_id WHERE o.id = 4;",
        "orderSensitive": false,
        "hint": "הזמנה 4: לקוח 3 (Noa), מוצר 5 (Notebook), כמות 5.",
        "explanation": "שרשרת JOIN: Orders → Customers, Orders → Products. מקבלים Noa Mizrahi, Notebook, 5."
      },
      {
        "id": "jn-9",
        "type": "write",
        "prompt": "Self join: מטבלת Employees, החזירו את שם העובד (employee) ואת שם המנהל שלו (manager). השתמשו ב-LEFT JOIN כדי שגם למנהל הראשי (בלי manager_id) תופיע שורה.",
        "starter": "SELECT ",
        "expectedSql": "SELECT e.name AS employee, m.name AS manager FROM Employees e LEFT JOIN Employees m ON e.manager_id = m.id;",
        "orderSensitive": false,
        "hint": "Employees e LEFT JOIN Employees m ON e.manager_id = m.id. ל-Dana המנהל NULL.",
        "explanation": "אותה טבלה פעמיים, עם כינויים שונים. Dana מנהלת של יוסי ונועה; יוסי מנהל של אבי ומאיה. בלי LEFT, Dana הייתה נעלמת."
      },
      {
        "id": "jn-10",
        "type": "mcq",
        "prompt": "למה חשוב לתת כינוי (alias) לטבלה ב-JOIN, במיוחד ב-self join?",
        "choices": [
          "כדי להבחין בין שני עותקים של אותה טבלה, ולקצר שמות (c.name במקום Customers.name)",
          "הכינוי משנה את שם הטבלה במסד לצמיתות",
          "בלי כינוי JOIN אסור",
          "כינוי צריך להיות באותיות גדולות בלבד"
        ],
        "answer": 0,
        "hint": "FROM Employees e ... Employees m",
        "explanation": "FROM Employees e JOIN Employees m — בלי e ו-m, SQL לא יידע לאיזה «עותק» להתכוון."
      },
      {
        "id": "jn-11",
        "type": "fill",
        "prompt": "השלימו את מילת תנאי החיבור.",
        "template": "SELECT * FROM Orders o JOIN Customers c ___ c.id = o.customer_id;",
        "blanks": [
          [
            "ON",
            "on"
          ]
        ],
        "hint": "לא WHERE (אף שהוא לפעמים עובד ב-INNER), התקני הוא ON.",
        "explanation": "ON מגדיר איך הטבלאות מתחברות. WHERE נועד לסינון נוסף אחרי החיבור."
      },
      {
        "id": "jn-12",
        "type": "write",
        "prompt": "החזירו שמות עובדים שתפקידם Support ואת שם המנהל שלהם (עמודה manager).",
        "starter": "SELECT ",
        "expectedSql": "SELECT e.name, m.name AS manager FROM Employees e JOIN Employees m ON e.manager_id = m.id WHERE e.role = 'Support';",
        "orderSensitive": false,
        "hint": "Avi ו-Maya, המנהל של שניהם הוא Yossi Cohen.",
        "explanation": "INNER JOIN מספיק כאן, כי לעובדי Support יש מנהל. התוצאה: Avi Peretz / Yossi Cohen, Maya Katz / Yossi Cohen."
      }
    ]
  }
]
  ;
  const ORDER = ["crud", "conditions", "orderby", "ascdesc", "nulls", "math", "limit", "offset", "top", "like", "wildcards", "inbetween", "alias", "distinct", "types-numeric", "types-string", "groupby", "join", "mixed"];
  const byId = {};
  (root.SQL_TOPICS || []).forEach(function (t) { byId[t.id] = t; });
  EXTRA.forEach(function (t) { byId[t.id] = t; });
  delete byId["types"];
  const topics = ORDER.map(function (id) { return byId[id]; }).filter(Boolean);
  const TITLE_FIX = {
    conditions: "תנאים — אופרטורים, AND/OR/NOT, CASE",
    ascdesc: "כיוון המיון: ASC, DESC",
    limit: "LIMIT — הגבלת מספר שורות",
    top: "ההבדל בין TOP לבין LIMIT",
    inbetween: "IN, BETWEEN",
    "types-numeric": "טיפוסים מספריים (MySQL)",
    "types-string": "טיפוסי מחרוזת ובינארי (MySQL)",
    groupby: "קיבוץ: GROUP BY, HAVING",
    wildcards: "תווי כלליים ב-LIKE: אחוז וקו תחתון"
  };
  topics.forEach(function (topic) {
    if (TITLE_FIX[topic.id]) topic.title = TITLE_FIX[topic.id];
  });
  root.SQL_TOPICS = topics;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { SQL_TOPICS: topics };
  }
})(typeof window !== "undefined" ? window : globalThis);
