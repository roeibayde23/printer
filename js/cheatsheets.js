(function (root) {
  const SQL_SHEET = [
    {
      title: "CRUD",
      body: `
<p>ארבע הפעולות הבסיסיות על נתונים:</p>
<pre class="code">INSERT INTO Customers (id, name, city, email, age)
VALUES (7, 'Shira Azulay', 'Eilat', 'shira@example.com', 31);

SELECT name, city FROM Customers WHERE city = 'Haifa';

UPDATE Products SET stock = 10 WHERE id = 4;

DELETE FROM Products WHERE stock = 0;</pre>
<p>בלי <span class="mono">WHERE</span> ב-<span class="mono">UPDATE</span>/<span class="mono">DELETE</span> הפעולה תחול על כל השורות.</p>`
    },
    {
      title: "ORDER BY",
      body: `
<p><span class="mono">ASC</span> — סדר עולה (ברירת מחדל). <span class="mono">DESC</span> — סדר יורד. אפשר למיין לפי כמה עמודות.</p>
<pre class="code">SELECT name, city
FROM Customers
ORDER BY city ASC, name ASC;</pre>
<p>ב-SQLite וב-MySQL ערכי <span class="mono">NULL</span> נחשבים קטנים: ב-<span class="mono">ASC</span> הם בהתחלה, ב-<span class="mono">DESC</span> בסוף.</p>`
    },
    {
      title: "NULL",
      body: `
<p><span class="mono">NULL</span> הוא ערך חסר, לא 0 ולא מחרוזת ריקה. לא בודקים אותו עם <span class="mono">=</span>.</p>
<pre class="code">SELECT name FROM Customers WHERE email IS NULL;
SELECT name FROM Customers WHERE age IS NOT NULL;</pre>
<p><span class="mono">COUNT(*)</span> סופר שורות. <span class="mono">COUNT(email)</span> מתעלם מ-<span class="mono">NULL</span>.</p>`
    },
    {
      title: "חשבון וקיבוץ",
      body: `
<p>חשבון שורה-שורה: <span class="mono">+ - * /</span>. עיגול: <span class="mono">ROUND(price, 2)</span>. קיבוץ: <span class="mono">COUNT, SUM, AVG, MIN, MAX</span>.</p>
<pre class="code">SELECT 10 + 3 * 2;                 -- 16, כפל לפני חיבור
SELECT AVG(age) FROM Customers;    -- מתעלם מ-NULL
SELECT SUM(stock) FROM Products
WHERE category = 'Electronics';</pre>`
    },
    {
      title: "LIMIT, OFFSET ו-TOP",
      body: `
<p>ב-MySQL וב-SQLite משתמשים ב-<span class="mono">LIMIT</span>. <span class="mono">SELECT TOP 5 ...</span> הוא תחביר של SQL Server ולא יעבוד כאן.</p>
<pre class="code">SELECT name, price FROM Products
ORDER BY price DESC
LIMIT 3;

SELECT name FROM Products
ORDER BY price ASC
LIMIT 3 OFFSET 2;          -- גם: LIMIT 2, 3</pre>
<p>ב-MySQL מקובל תמיד לצרף <span class="mono">LIMIT</span> יחד עם <span class="mono">OFFSET</span>.</p>`
    },
    {
      title: "LIKE",
      body: `
<p><span class="mono">%</span> — כל רצף (גם ריק). <span class="mono">_</span> — תו אחד בדיוק.</p>
<pre class="code">name LIKE 'a%'     -- מתחיל ב-a
name LIKE '%a'     -- מסתיים ב-a
name LIKE '%or%'   -- מכיל or
name LIKE '_r%'    -- האות השנייה היא r
name LIKE 'a_%'    -- מתחיל ב-a, לפחות 2 תווים
name LIKE 'a__%'   -- מתחיל ב-a, לפחות 3 תווים
name LIKE 'a%o'    -- מתחיל ב-a ומסתיים ב-o</pre>`
    },
    {
      title: "IN ו-BETWEEN",
      body: `
<p><span class="mono">IN</span> — אחד מתוך רשימה. <span class="mono">BETWEEN</span> — טווח כולל את שני הקצוות.</p>
<pre class="code">city IN ('Haifa', 'Jerusalem')
price BETWEEN 100 AND 500          -- שקול ל- >= 100 AND <= 500
age BETWEEN 25 AND 35              -- NULL לא נכנס לטווח</pre>`
    },
    {
      title: "AS — כינויים",
      body: `
<pre class="code">SELECT name AS product, price * 0.9 AS sale
FROM Products;

SELECT c.name
FROM Customers AS c
WHERE c.city = 'Haifa';</pre>
<p>המילה <span class="mono">AS</span> רשות, אבל מומלצת. אי אפשר בדרך כלל להשתמש בכינוי ב-<span class="mono">WHERE</span> (הוא מחושב מוקדם יותר). ב-<span class="mono">ORDER BY</span> כן אפשר.</p>`
    },
    {
      title: "DISTINCT",
      body: `
<pre class="code">SELECT DISTINCT city FROM Customers;
SELECT COUNT(DISTINCT category) FROM Products;</pre>
<p>כשיש כמה עמודות, הייחודיות היא לכל הצירוף, לא לעמודה בודדת.</p>`
    },
    {
      title: "סוגי נתונים ב-MySQL",
      body: `
<ul>
<li><b>מספרים:</b> BIT (ביטים), TINYINT (בית אחד, לעיתים בוליאני), BOOLEAN (כינוי ל-TINYINT(1)), INT, BIGINT, FLOAT / DOUBLE (קירוב), DECIMAL (מדויק — מתאים לכסף).</li>
<li><b>מחרוזות:</b> CHAR אורך קבוע, VARCHAR אורך משתנה. BINARY / VARBINARY — בתים, בלי כללי שפה.</li>
<li><b>טקסט ארוך:</b> TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT.</li>
<li><b>בינארי:</b> TINYBLOB, BLOB, MEDIUMBLOB, LONGBLOB — קבצים ותמונות.</li>
<li><b>ENUM</b> — ערך אחד מרשימה. <b>SET</b> — כמה ערכים מהרשימה.</li>
</ul>
<p>ב-SQLite (המנוע במשחק) הטיפוסים גמישים יותר, ואין ENUM/SET מובנים. החידון עוסק ב-MySQL, כמו בקורס.</p>`
    }
  ];

  const PYTHON_SHEET = [
    {
      title: "הדפסה ומשתנים",
      body: `
<pre class="code">name = "Roei"
print(name)
print("שלום", name)</pre>
<p>שם משתנה מתחיל באות או <span class="mono">_</span>, לא בספרה. השמה חדשה דורסת את הערך הקודם.</p>`
    },
    {
      title: "טיפוסים והמרות",
      body: `
<p><span class="mono">int</span>, <span class="mono">float</span>, <span class="mono">str</span>, <span class="mono">bool</span>.</p>
<pre class="code">int("12") + 3      # 15
str(2) + str(5)    # "25"
float("3.14")
bool("")           # False
int(3.9)           # 3  (חיתוך, לא עיגול)</pre>`
    },
    {
      title: "מחרוזות ו-f-strings",
      body: `
<pre class="code">s = "Python"
s[0]        # "P"
s[0:3]      # "Pyt"  (הסוף לא כלול)
s[-1]       # "n"
len(s)      # 6
f"שלום {s}" # שלום Python
"ab" * 3    # "ababab"</pre>`
    },
    {
      title: "אופרטורים",
      body: `
<pre class="code">7 // 2     # 3   חלוקה שלמה
7 % 2      # 1   שארית
2 ** 3     # 8   חזקה
5 == 5     # True     = זה השמה, == זה השוואה
5 != 3
5 > 3 and 2 > 8    # False
not False          # True</pre>`
    },
    {
      title: "if / elif / else",
      body: `
<pre class="code">if n > 0:
    print("pos")
elif n == 0:
    print("zero")
else:
    print("neg")</pre>
<p>חובה נקודתיים והזחה. נבדק מלמעלה למטה, והענף הראשון שמתקיים מנצח.</p>`
    },
    {
      title: "לולאות ו-range",
      body: `
<pre class="code">for i in range(3):        # 0, 1, 2
    print(i)

for i in range(1, 5):     # 1..4
    print(i)

n = 3
while n > 0:
    print(n)
    n -= 1</pre>
<p><span class="mono">range(start, stop, step)</span> לא כולל את <span class="mono">stop</span>. ב-<span class="mono">while</span> חובה לעדכן את התנאי כדי לא להיכנס ללולאה אינסופית.</p>`
    },
    {
      title: "רשימות, tuples, מילונים, קבוצות",
      body: `
<pre class="code"># list — סדורה, ניתנת לשינוי, כפילויות מותרות
nums = [3, 1, 2]
nums.append(9)
nums[1] = 8
5 in nums

# tuple — סדור, לא ניתן לשינוי. איבר יחיד: (1,)
t = (1, 2, 3)
a, b = 5, 8
a, b = b, a

# dict — מפתח : ערך
d = {"name": "Dana", "age": 28}
d["name"]
d["city"] = "Haifa"
for k, v in d.items():
    ...

# set — ייחודי, בלי סדר מובטח
set([1, 1, 2])     # {1, 2}
{1, 2} | {2, 3}    # איחוד
{1, 2} & {2, 3}    # חיתוך</pre>`
    },
    {
      title: "פונקציות ומובנות",
      body: `
<pre class="code">def add(a, b):
    return a + b

def f(x=1):        # ברירת מחדל
    return x

len, sum, min, max, sorted, abs, round
sorted([3, 1, 2], reverse=True)   # [3, 2, 1]

# input תמיד מחזיר str:
age = int(input("גיל: "))</pre>
<p>פונקציה בלי <span class="mono">return</span> מחזירה <span class="mono">None</span>. <span class="mono">round(2.5)</span> בפייתון 3 הוא 2 (עיגול לזוגי הקרוב).</p>`
    }
  ];

  root.CHEATSHEETS = { SQL_SHEET, PYTHON_SHEET };
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { SQL_SHEET, PYTHON_SHEET };
  }
})(typeof window !== "undefined" ? window : globalThis);
