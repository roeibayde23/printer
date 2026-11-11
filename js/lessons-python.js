/* Hebrew Python lessons for learn mode. */
(function (root) {
  const PYTHON_LESSONS = 
{
  "printvar": {
    "intro": "כל תוכנית פייתון מתחילה בהדפסה ובמשתנים. משתנה הוא שם שמצביע על ערך. # מתחיל הערה.",
    "items": [
      {
        "term": "print",
        "title": "הדפסה למסך",
        "text": "print מדפיס ערכים, ואפשר כמה ארגומנטים מופרדים בפסיק — ביניהם יופיע רווח.",
        "code": "print('שלום')\nprint('Hi', 2026)",
        "run": false,
        "sample": "שלום\nHi 2026"
      },
      {
        "term": "משתנים",
        "title": "השמה עם =",
        "text": "name = 'Dana' שומר ערך. אחר כך אפשר להשתמש בשם. = זה השמה, לא השוואה.",
        "code": "name = 'Dana'\nage = 28\nprint(name, age)",
        "run": false,
        "sample": "Dana 28"
      },
      {
        "term": "#",
        "title": "הערה",
        "text": "כל מה שאחרי # בשורה לא רץ. טוב להסביר כוונה, לא לתרגם את הקוד מילה במילה.",
        "code": "score = 10  # נקודות התחלה\nprint(score)",
        "run": false,
        "sample": "10"
      },
      {
        "term": "קריאה מחדש",
        "title": "עדכון ערך",
        "text": "אפשר להציב למשתנה ערך חדש. הערך הישן מוחלף.",
        "code": "x = 3\nx = x + 1\nprint(x)",
        "run": false,
        "sample": "4"
      }
    ]
  },
  "types": {
    "intro": "לכל ערך יש טיפוס. הטיפוסים הבסיסיים: int, float, str, bool. type() בודק, והפונקציות int/float/str/bool ממירות.",
    "items": [
      {
        "term": "int",
        "title": "מספר שלם",
        "text": "בלי נקודה עשרונית: 0, 28, ‑3.",
        "code": "n = 28\nprint(type(n).__name__, n)",
        "run": false,
        "sample": "int 28"
      },
      {
        "term": "float",
        "title": "שבר עשרוני",
        "text": "עם נקודה: 19.9, 0.5. תוצאת חילוק / היא תמיד float.",
        "code": "print(type(19.9).__name__)\nprint(7 / 2)",
        "run": false,
        "sample": "float\n3.5"
      },
      {
        "term": "str",
        "title": "מחרוזת",
        "text": "טקסט בגרשיים בודדים או כפולים.",
        "code": "s = 'printer'\nprint(type(s).__name__, s)",
        "run": false,
        "sample": "str printer"
      },
      {
        "term": "bool",
        "title": "אמת או שקר",
        "text": "רק True או False (עם אות גדולה).",
        "code": "ok = True\nprint(type(ok).__name__, ok)",
        "run": false,
        "sample": "bool True"
      },
      {
        "term": "type()",
        "title": "בדיקת טיפוס",
        "text": "type(x) מחזיר את הטיפוס. שימושי כשמשהו «לא מתחבר».",
        "code": "print(type(3), type('3'), type(3.0))",
        "run": false,
        "sample": "<class 'int'> <class 'str'> <class 'float'>"
      },
      {
        "term": "int() / float() / str() / bool()",
        "title": "המרות",
        "text": "int('12') → 12. int(3.9) חותך ל-3 (לא מעגל). bool(0) ו-bool('') הם False, כמעט כל דבר אחר True.",
        "code": "print(int('12'), int(3.9), float('2.5'), str(7))\nprint(bool(0), bool(''), bool('hi'))",
        "run": false,
        "sample": "12 3 2.5 7\nFalse False True"
      }
    ]
  },
  "strings": {
    "intro": "מחרוזת היא רצף תווים. אפשר לגשת לפי אינדקס, לחתוך, ולאחות עם f-string או +.",
    "items": [
      {
        "term": "אינדקס",
        "title": "תו לפי מיקום",
        "text": "האינדקס מתחיל ב-0. s[-1] הוא התו האחרון.",
        "code": "s = 'printer'\nprint(s[0], s[1], s[-1])",
        "run": false,
        "sample": "p r r"
      },
      {
        "term": "slice",
        "title": "חיתוך",
        "text": "s[start:end] בלי לכלול את end. s[:3] שלושת הראשונים, s[3:] מהרביעי עד הסוף.",
        "code": "s = 'printer'\nprint(s[0:4], s[:3], s[3:])",
        "run": false,
        "sample": "prin pri nter"
      },
      {
        "term": "len",
        "title": "אורך",
        "text": "len(s) מספר התווים.",
        "code": "print(len('SQL'))",
        "run": false,
        "sample": "3"
      },
      {
        "term": "שיטות",
        "title": "upper, lower, strip, split, replace",
        "text": "השיטות מחזירות מחרוזת חדשה — המקור לא משתנה.",
        "code": "s = '  Hello World  '\nprint(s.strip())\nprint(s.strip().lower())\nprint('a-b-c'.split('-'))\nprint('haifa'.replace('hai', 'HA'))",
        "run": false,
        "sample": "Hello World\nhello world\n['a', 'b', 'c']\nHAfa"
      },
      {
        "term": "f-string",
        "title": "שיבוץ ערכים",
        "text": "לפני הגרשיים שמים f, ובתוך {} ביטוי. הדרך המומלצת מפייתון 3.6.",
        "code": "name = 'Dana'\nage = 28\nprint(f'{name} is {age}')",
        "run": false,
        "sample": "Dana is 28"
      },
      {
        "term": "+ ו-*",
        "title": "שרשור וכפילות",
        "text": "'ab' + 'c' → 'abc'. 'ha' * 3 → 'hahaha'.",
        "code": "print('Good' + ' morning')\nprint('na' * 3)",
        "run": false,
        "sample": "Good morning\nnanana"
      }
    ]
  },
  "operators": {
    "intro": "אופרטורים לחשבון, להשוואה וללוגיקה. קדימות: ** ואז * / // %, אחר כך + -, אחר כך השוואות, ובסוף not / and / or.",
    "items": [
      {
        "term": "+ - * /",
        "title": "חשבון בסיסי",
        "text": "/ תמיד מחזיר float.",
        "code": "print(10 + 3, 10 - 3, 10 * 3, 10 / 4)",
        "run": false,
        "sample": "13 7 30 2.5"
      },
      {
        "term": "// ו-% ו-**",
        "title": "חילוק שלם, שארית, חזקה",
        "text": "// משאיר שלם כלפי מטה. % שארית. ** חזקה.",
        "code": "print(17 // 5, 17 % 5, 2 ** 8)",
        "run": false,
        "sample": "3 2 256"
      },
      {
        "term": "== != < > <= >=",
        "title": "השוואה",
        "text": "== שוויון, != אי-שוויון. התוצאה bool.",
        "code": "print(5 == 5, 5 != 3, 5 >= 7)",
        "run": false,
        "sample": "True True False"
      },
      {
        "term": "and / or / not",
        "title": "לוגיקה",
        "text": "and דורש שני צדדים אמת, or מספיק אחד, not הופך. and חזק מ-or.",
        "code": "print(True and False, True or False, not True)\nprint(False or True and False)\nprint((False or True) and False)",
        "run": false,
        "sample": "False True False\nFalse\nFalse"
      }
    ]
  },
  "conditionals": {
    "intro": "if בודק תנאי. elif בודק חלופה רק אם הקודמים נכשלו. else תופס את השאר. הענף הראשון שמתקיים רץ, והשאר מדולגים.",
    "items": [
      {
        "term": "if",
        "title": "תנאי בסיסי",
        "text": "אחרי הנקודתיים באה גוף מוזח (4 רווחים).",
        "code": "age = 20\nif age >= 18:\n    print('adult')",
        "run": false,
        "sample": "adult"
      },
      {
        "term": "else",
        "title": "אחרת",
        "text": "רץ רק אם ה-if היה False.",
        "code": "n = 3\nif n % 2 == 0:\n    print('even')\nelse:\n    print('odd')",
        "run": false,
        "sample": "odd"
      },
      {
        "term": "elif",
        "title": "חלופות",
        "text": "אפשר לשרשר כמה. רק אחד רץ.",
        "code": "score = 82\nif score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')\nelse:\n    print('C')",
        "run": false,
        "sample": "B"
      },
      {
        "term": "השוואה מקוננת",
        "title": "כמה תנאים יחד",
        "text": "משלבים and/or, או if בתוך if.",
        "code": "city = 'Haifa'\nage = 30\nif city == 'Haifa' and age >= 18:\n    print('ok')",
        "run": false,
        "sample": "ok"
      }
    ]
  },
  "loops": {
    "intro": "לולאה חוזרת על קוד. for רצה על אוסף (או range). while רצה כל עוד התנאי True. break יוצא, continue מדלג לסיבוב הבא.",
    "items": [
      {
        "term": "for",
        "title": "מעבר על אוסף",
        "text": "כל איבר בתורו נכנס למשתנה הלולאה.",
        "code": "for name in ['Dana', 'Noa']:\n    print(name)",
        "run": false,
        "sample": "Dana\nNoa"
      },
      {
        "term": "range",
        "title": "רצף מספרים",
        "text": "range(5) זה 0..4. range(1, 4) זה 1,2,3. range(0, 10, 2) עם קפיצות.",
        "code": "print(list(range(5)))\nprint(list(range(1, 4)))\nprint(list(range(0, 6, 2)))",
        "run": false,
        "sample": "[0, 1, 2, 3, 4]\n[1, 2, 3]\n[0, 2, 4]"
      },
      {
        "term": "while",
        "title": "כל עוד",
        "text": "חשוב לעדכן את המשתנה, אחרת הלולאה לא תיעצר.",
        "code": "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1",
        "run": false,
        "sample": "3\n2\n1"
      },
      {
        "term": "break / continue",
        "title": "יציאה ודילוג",
        "text": "break עוצר לגמרי. continue עובר לאיבר הבא בלי להריץ את סוף הגוף.",
        "code": "for i in range(5):\n    if i == 1:\n        continue\n    if i == 3:\n        break\n    print(i)",
        "run": false,
        "sample": "0\n2"
      }
    ]
  },
  "lists": {
    "intro": "רשימה (list) היא אוסף מסודר וניתן לשינוי. כותבים בסוגריים מרובעים.",
    "items": [
      {
        "term": "יצירה ואינדקס",
        "title": "גישה לאיברים",
        "text": "כמו במחרוזת: 0 הוא הראשון, ‑1 האחרון. אפשר לשנות איבר עם =.",
        "code": "nums = [10, 20, 30]\nprint(nums[0], nums[-1])\nnums[1] = 99\nprint(nums)",
        "run": false,
        "sample": "10 30\n[10, 99, 30]"
      },
      {
        "term": "slice",
        "title": "חיתוך רשימה",
        "text": "אותו תחביר כמו במחרוזת, התוצאה רשימה חדשה.",
        "code": "print([1, 2, 3, 4][1:3])",
        "run": false,
        "sample": "[2, 3]"
      },
      {
        "term": "append / insert / pop / remove",
        "title": "הוספה והסרה",
        "text": "append בסוף, insert במקום, pop מוציא לפי אינדקס (ברירת מחדל: אחרון), remove לפי ערך.",
        "code": "xs = [1, 2]\nxs.append(3)\nxs.insert(0, 0)\nprint(xs)\nprint(xs.pop())\nxs.remove(0)\nprint(xs)",
        "run": false,
        "sample": "[0, 1, 2, 3]\n3\n[1, 2]"
      },
      {
        "term": "len, in, sort",
        "title": "אורך, שייכות, מיון",
        "text": "x in lst זה bool. sort ממיין במקום; sorted מחזיר רשימה חדשה.",
        "code": "xs = [3, 1, 2]\nprint(len(xs), 1 in xs)\nprint(sorted(xs))\nprint(xs)  # המקור לא השתנה",
        "run": false,
        "sample": "3 True\n[1, 2, 3]\n[3, 1, 2]"
      }
    ]
  },
  "tuples": {
    "intro": "tuple היא רשומה מסודרת שאי אפשר לשנות אחרי היצירה. כותבים בסוגריים עגולים.",
    "items": [
      {
        "term": "יצירה",
        "title": "רשומה קבועה",
        "text": "הערכים מסודרים, אבל אין append ואין השמה לאינדקס.",
        "code": "point = (3, 4)\nprint(point[0], len(point))",
        "run": false,
        "sample": "3 2"
      },
      {
        "term": "איבר בודד",
        "title": "פסיק חובה",
        "text": "(3) זה סתם מספר בסוגריים. (3,) זה tuple באורך 1.",
        "code": "print(type((3)).__name__)\nprint(type((3,)).__name__)",
        "run": false,
        "sample": "int\ntuple"
      },
      {
        "term": " unpacked",
        "title": "פריסה למשתנים",
        "text": "x, y = (3, 4) שולף לפי הסדר. נוח מאוד מפונקציות שמחזירות כמה ערכים.",
        "code": "x, y = (3, 4)\nprint(x + y)",
        "run": false,
        "sample": "7"
      }
    ]
  },
  "dicts": {
    "intro": "מילון (dict) ממפה מפתח לערך. חיפוש לפי מפתח הוא מהיר. כותבים בסוגריים מסולסלים.",
    "items": [
      {
        "term": "יצירה וגישה",
        "title": "מפתח → ערך",
        "text": "d['name'] קורא. אם המפתח חסר — KeyError. עדיף d.get('name') שמחזיר None.",
        "code": "d = {'name': 'Dana', 'city': 'Tel Aviv'}\nprint(d['name'])\nprint(d.get('age'), d.get('age', 0))",
        "run": false,
        "sample": "Dana\nNone 0"
      },
      {
        "term": "עדכון",
        "title": "הוספה ושינוי",
        "text": "השמה למפתח חדש מוסיפה, למפתח קיים דורסת.",
        "code": "d = {'n': 1}\nd['n'] = 2\nd['m'] = 3\nprint(d)",
        "run": false,
        "sample": "{'n': 2, 'm': 3}"
      },
      {
        "term": "keys / values / items",
        "title": "מעבר על המילון",
        "text": "ב-for על dict רצים על המפתחות. items() נותן זוגות.",
        "code": "d = {'a': 1, 'b': 2}\nprint(list(d.keys()))\nfor k, v in d.items():\n    print(k, v)",
        "run": false,
        "sample": "['a', 'b']\na 1\nb 2"
      },
      {
        "term": "in",
        "title": "בדיקת מפתח",
        "text": "'name' in d בודק מפתחות, לא ערכים.",
        "code": "d = {'name': 'Dana'}\nprint('name' in d, 'Dana' in d)",
        "run": false,
        "sample": "True False"
      }
    ]
  },
  "sets": {
    "intro": "קבוצה (set) שומרת ערכים ייחודיים בלי סדר מובטח. טובה להסרת כפילויות ולחיתוך/איחוד.",
    "items": [
      {
        "term": "יצירה",
        "title": "ייחודיות",
        "text": "set([1, 1, 2]) → {1, 2}. סוגריים מסולסלים, אבל {} ריק זה dict — קבוצה ריקה היא set().",
        "code": "print(set([1, 1, 2, 2, 3]))\nprint(type({}).__name__, type(set()).__name__)",
        "run": false,
        "sample": "{1, 2, 3}\ndict set"
      },
      {
        "term": "add / remove",
        "title": "שינוי",
        "text": "add מוסיף. remove זורק שגיאה אם חסר; discard לא.",
        "code": "s = {1, 2}\ns.add(3)\ns.remove(1)\nprint(sorted(s))",
        "run": false,
        "sample": "[2, 3]"
      },
      {
        "term": "איחוד וחיתוך",
        "title": "פעולות קבוצה",
        "text": "| איחוד, & חיתוך, - הפרש.",
        "code": "a, b = {1, 2, 3}, {3, 4}\nprint(sorted(a | b))\nprint(sorted(a & b))\nprint(sorted(a - b))",
        "run": false,
        "sample": "[1, 2, 3, 4]\n[3]\n[1, 2]"
      }
    ]
  },
  "functions": {
    "intro": "פונקציה היא בלוק עם שם שאפשר לקרוא שוב. def מגדיר, return מחזיר ערך למי שקרא.",
    "items": [
      {
        "term": "def",
        "title": "הגדרה וקריאה",
        "text": "אחרי הנקודתיים גוף מוזח. הקריאה היא name().",
        "code": "def greet():\n    print('hi')\ngreet()",
        "run": false,
        "sample": "hi"
      },
      {
        "term": "פרמטרים",
        "title": "קלט לפונקציה",
        "text": "הערכים שמועברים בסוגריים נכנסים למשתנים.",
        "code": "def greet(name):\n    print('hi', name)\ngreet('Noa')",
        "run": false,
        "sample": "hi Noa"
      },
      {
        "term": "return",
        "title": "ערך חוזר",
        "text": "בלי return הפונקציה מחזירה None. אחרי return הגוף נעצר.",
        "code": "def add(a, b):\n    return a + b\nprint(add(2, 3))",
        "run": false,
        "sample": "5"
      },
      {
        "term": "ברירת מחדל",
        "title": "פרמטר אופציונלי",
        "text": "def greet(name='friend') — אם לא מעבירים, ישתמש ב-friend.",
        "code": "def greet(name='friend'):\n    return f'hi {name}'\nprint(greet())\nprint(greet('Avi'))",
        "run": false,
        "sample": "hi friend\nhi Avi"
      }
    ]
  },
  "builtins": {
    "intro": "פייתון מגיע עם פונקציות מובנות שימושיות, בלי import. input קורא טקסט מהמשתמש (במשחק הוא מדומה בשאלות).",
    "items": [
      {
        "term": "len / sum / min / max",
        "title": "סיכומים",
        "text": "עובדים על אוסף.",
        "code": "xs = [3, 1, 2]\nprint(len(xs), sum(xs), min(xs), max(xs))",
        "run": false,
        "sample": "3 6 1 3"
      },
      {
        "term": "sorted / reversed",
        "title": "סדר",
        "text": "sorted מחזיר רשימה חדשה. reversed הוא איטרטור.",
        "code": "print(sorted([3, 1, 2], reverse=True))",
        "run": false,
        "sample": "[3, 2, 1]"
      },
      {
        "term": "abs / round",
        "title": "ערך מוחלט ועיגול",
        "text": "round(3.14159, 2) → 3.14. שימו לב: round לחצי זוגי בפייתון (bankers' rounding).",
        "code": "print(abs(-7), round(3.14159, 2), round(2.5))",
        "run": false,
        "sample": "7 3.14 2"
      },
      {
        "term": "enumerate / zip",
        "title": "אינדקס וצימוד",
        "text": "enumerate נותן (אינדקס, ערך). zip מצמיד שני אוספים.",
        "code": "for i, n in enumerate(['a', 'b'], start=1):\n    print(i, n)\nprint(list(zip([1, 2], ['a', 'b'])))",
        "run": false,
        "sample": "1 a\n2 b\n[(1, 'a'), (2, 'b')]"
      },
      {
        "term": "input",
        "title": "קלט מהמשתמש",
        "text": "input('שאלה: ') תמיד מחזיר str. ממירים עם int() אם צריך מספר.",
        "code": "name = 'Dana'  # במקום input('שם? ')\nprint(f'hello {name}')",
        "run": false,
        "sample": "hello Dana"
      },
      {
        "term": "range",
        "title": "עוד פעם, כי נפוץ",
        "text": "מופיע גם בלולאות. list(range(...)) אם רוצים לראות את כל המספרים.",
        "code": "print(list(range(2, 8, 2)))",
        "run": false,
        "sample": "[2, 4, 6]"
      }
    ]
  },
  "mixed": {
    "intro": "כאן מערבבים כמה נושאים יחד: פונקציות, אוספים ותנאים. אם משהו נתקע, חזרו לשיעור הספציפי.",
    "items": [
      {
        "term": "שילוב",
        "title": "דוגמה קצרה",
        "text": "פונקציה שמסננת רשימה ומחזירה ממוצע.",
        "code": "def avg_positive(xs):\n    good = [x for x in xs if x > 0]\n    return sum(good) / len(good)\nprint(avg_positive([-2, 4, 6]))",
        "run": false,
        "sample": "5.0"
      }
    ]
  }
}
  ;
  root.PYTHON_LESSONS = PYTHON_LESSONS;
  if (typeof module !== "undefined" && module.exports) module.exports = { PYTHON_LESSONS };
})(typeof window !== "undefined" ? window : globalThis);
