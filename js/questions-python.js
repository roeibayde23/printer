/* Python question bank. Available in the browser and in Node. */
(function (root) {
  const PYTHON_TOPICS = 
[
  {
    "id": "printvar",
    "title": "הדפסה ומשתנים",
    "short": "הדפסה",
    "icon": "1",
    "intro": "משתנה שומר ערך תחת שם. print מציג ערך על המסך. בפייתון שמים בלוקים בהזחה, והשמה נעשית עם =.",
    "questions": [
      {
        "id": "pv-1",
        "type": "mcq",
        "prompt": "מה עושה הפקודה print בפייתון?",
        "choices": [
          "מדפיסה ערך למסך (לפלט התקני)",
          "שומרת את הערך לקובץ תמיד",
          "יוצרת משתנה חדש",
          "עוצרת את התוכנית"
        ],
        "answer": 0,
        "hint": "זו פקודת הפלט הבסיסית.",
        "explanation": "print מציג את הארגומנטים בפלט. כברירת מחדל נוספת שורת שורה חדשה בסוף."
      },
      {
        "id": "pv-2",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "x = 5\nprint(x)",
        "choices": [
          "5",
          "x",
          "x = 5",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "print מדפיס את הערך שנשמר במשתנה.",
        "explanation": "x מקבל את 5, ואז print(x) מציג את הערך — 5, לא את השם x."
      },
      {
        "id": "pv-3",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "name = \"Roei\"\nprint(name)\nprint(name)",
        "choices": [
          "Roei בשתי שורות",
          "Roei פעם אחת",
          "name פעמיים",
          "Roei Roei באותה שורה"
        ],
        "answer": 0,
        "hint": "כל print יורד שורה כברירת מחדל.",
        "explanation": "שתי קריאות print, כל אחת מדפיסה Roei בשורה נפרדת."
      },
      {
        "id": "pv-4",
        "type": "fill",
        "prompt": "השלימו כדי ליצור משתנה שמחזיק את המספר 10.",
        "template": "___ = 10",
        "blanks": [
          [
            "x",
            "n",
            "num",
            "a",
            "value",
            "number",
            "ten"
          ]
        ],
        "acceptAnyName": true,
        "validNames": true,
        "hint": "בצד שמאל שם המשתנה, בצד ימין הערך.",
        "explanation": "השמה: שם = ערך. שם משתנה מתחיל באות או _, ולא במילה שמורה כמו print."
      },
      {
        "id": "pv-5",
        "type": "write",
        "prompt": "כתבו תוכנית שמדפיסה את המילה שלום בדיוק.",
        "starter": "print(",
        "expectedStdout": "שלום",
        "hint": "print עם מחרוזת במרכאות.",
        "explanation": "print(\"שלום\") או print('שלום') יעבוד. המרכאות לא מודפסות, רק התוכן.",
        "solution": "print(\"שלום\")"
      },
      {
        "id": "pv-6",
        "type": "write",
        "prompt": "שמרו 3 במשתנה a ו-4 במשתנה b, והדפיסו את הסכום a+b (מספר בלבד).",
        "starter": "a = ",
        "expectedStdout": "7",
        "hint": "אחרי ההשמות: print(a + b)",
        "explanation": "a = 3; b = 4; print(a + b) מדפיס 7. שימו לב להדפיס את הסכום, לא את המחרוזת \"a+b\".",
        "solution": "a = 3\nb = 4\nprint(a + b)"
      },
      {
        "id": "pv-7",
        "type": "mcq",
        "prompt": "איזה שם משתנה לא חוקי?",
        "choices": [
          "2name",
          "name2",
          "first_name",
          "_hidden"
        ],
        "answer": 0,
        "hint": "שם לא יכול להתחיל בספרה.",
        "explanation": "2name לא חוקי כי הוא מתחיל בספרה. name2, first_name ו-_hidden כולם חוקיים."
      },
      {
        "id": "pv-8",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "x = 2\nx = 9\nprint(x)",
        "choices": [
          "9",
          "2",
          "2 ואז 9",
          "11"
        ],
        "answer": 0,
        "hint": "השמה חדשה דורסת את הערך הקודם.",
        "explanation": "משתנה מחזיק ערך אחד בכל רגע. אחרי x = 9 הערך 2 נדרס, ולכן יודפס 9."
      },
      {
        "id": "pv-9",
        "type": "fill",
        "prompt": "השלימו כדי שיודפס המספר 42.",
        "template": "print(___)",
        "blanks": [
          [
            "42"
          ]
        ],
        "hint": "אפשר פשוט לכתוב את המספר.",
        "explanation": "print(42) מדפיס 42. גם print(40 + 2) היה מדפיס אותו דבר, אבל כאן ציפינו ל-42."
      },
      {
        "id": "pv-10",
        "type": "write",
        "prompt": "צרו first=\"Code\" ו-last=\"Lab\" והדפיסו אותם בשורה אחת עם רווח ביניהם, כך: Code Lab",
        "starter": "first = ",
        "expectedStdout": "Code Lab",
        "hint": "print(first + \" \" + last) או print(first, last)",
        "explanation": "print(first, last) מוסיף רווח לבד בין הארגומנטים. אפשר גם לחבר מחרוזות עם + ורווח מפורש, או f-string.",
        "solution": "first = \"Code\"\nlast = \"Lab\"\nprint(first, last)"
      }
    ]
  },
  {
    "id": "types",
    "title": "טיפוסים והמרות",
    "short": "טיפוסים",
    "icon": "2",
    "intro": "הטיפוסים הבסיסיים: int, float, str, bool. אפשר להמיר ביניהם עם int(), float(), str() ו-bool().",
    "questions": [
      {
        "id": "ty-1",
        "type": "mcq",
        "prompt": "מהם ארבעת טיפוסי הבסיס שנלמד כאן?",
        "choices": [
          "int, float, str, bool",
          "integer, text, table, null",
          "byte, char, varchar, blob",
          "list, dict, set, tuple בלבד"
        ],
        "answer": 0,
        "hint": "מספר שלם, מספר עשרוני, מחרוזת, בוליאני.",
        "explanation": "int שלם, float עשרוני, str טקסט, bool ערך True/False. טיפוסי אוספים נלמד בפרקים הבאים."
      },
      {
        "id": "ty-2",
        "type": "mcq",
        "prompt": "מה טיפוס הערך 3.0?",
        "choices": [
          "float",
          "int",
          "str",
          "bool"
        ],
        "answer": 0,
        "hint": "יש נקודה עשרונית.",
        "explanation": "3 הוא int, אבל 3.0 הוא float — גם אם הוא «שלם» בערכו."
      },
      {
        "id": "ty-3",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(type(5))",
        "choices": [
          "<class 'int'>",
          "<class 'str'>",
          "<class 'float'>",
          "5"
        ],
        "answer": 0,
        "hint": "type מחזיר את הטיפוס, לא את הערך.",
        "explanation": "type(5) הוא int, ו-print מציג זאת כ-<class 'int'>."
      },
      {
        "id": "ty-4",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(int(\"12\") + 3)",
        "choices": [
          "15",
          "123",
          "12 + 3",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "קודם ממירים את המחרוזת למספר, אחר כך מחברים.",
        "explanation": "int(\"12\") הופך ל-12, ועוד 3 שווה 15. בלי ההמרה, \"12\" + 3 היה מעלה TypeError."
      },
      {
        "id": "ty-5",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(str(2) + str(5))",
        "choices": [
          "25",
          "7",
          "2 + 5",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "+ בין מחרוזות מחבר אותן, לא מחבר חשבון.",
        "explanation": "str(2) הוא \"2\" ו-str(5) הוא \"5\". חיבור מחרוזות נותן \"25\", לא 7."
      },
      {
        "id": "ty-6",
        "type": "fill",
        "prompt": "השלימו כדי להמיר את המחרוזת למספר עשרוני.",
        "template": "n = ___(\"3.14\")",
        "blanks": [
          [
            "float"
          ]
        ],
        "hint": "int(\"3.14\") ייכשל, כי יש נקודה.",
        "explanation": "float(\"3.14\") מחזיר 3.14. int() על אותה מחרוזת יזרוק שגיאה — קודם float, ואם רוצים שלם: int(float(\"3.14\"))."
      },
      {
        "id": "ty-7",
        "type": "write",
        "prompt": "המירו את המחרוזת \"20\" למספר שלם, הכפילו ב-2, והדפיסו את התוצאה.",
        "starter": "print(",
        "expectedStdout": "40",
        "hint": "int(\"20\") * 2",
        "explanation": "print(int(\"20\") * 2) מדפיס 40. זו תבנית נפוצה אחרי input(), שתמיד מחזיר מחרוזת.",
        "solution": "print(int(\"20\") * 2)"
      },
      {
        "id": "ty-8",
        "type": "mcq",
        "prompt": "מה הערכים של bool(0), bool(1) ו-bool(\"\")?",
        "choices": [
          "False, True, False",
          "True, True, True",
          "False, False, True",
          "0, 1, 0"
        ],
        "answer": 0,
        "hint": "0, מחרוזת ריקה, None ורשימה ריקה נחשבים False.",
        "explanation": "bool(0) הוא False, bool(1) הוא True, ומחרוזת ריקה היא False. כל מחרוזת לא-ריקה (גם \"0\") היא True."
      },
      {
        "id": "ty-9",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(bool(\"\"), bool(\"hi\"))",
        "choices": [
          "False True",
          "True True",
          "False False",
          "True False"
        ],
        "answer": 0,
        "hint": "מחרוזת ריקה מול מחרוזת עם תוכן.",
        "explanation": "bool(\"\") הוא False, bool(\"hi\") הוא True. print מפריד ביניהם ברווח."
      },
      {
        "id": "ty-10",
        "type": "mcq",
        "prompt": "מה מחזיר int(3.9)?",
        "choices": [
          "3 — חיתוך כלפי אפס, בלי עיגול למעלה",
          "4 — עיגול רגיל",
          "3.9",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "int על float לא מעגל, הוא חותך את השבר.",
        "explanation": "int(3.9) הוא 3, ו-int(-3.9) הוא ‎-3 (חיתוך לכיוון אפס). לעיגול משתמשים ב-round."
      }
    ]
  },
  {
    "id": "strings",
    "title": "מחרוזות, חיתוך ו-f-strings",
    "short": "מחרוזות",
    "icon": "3",
    "intro": "מחרוזת היא רצף תווים. האינדקס מתחיל מ-0. חיתוך s[start:end] לא כולל את end. f-string משבץ משתנים בתוך טקסט.",
    "questions": [
      {
        "id": "st-1",
        "type": "mcq",
        "prompt": "מאיזה אינדקס מתחילה מחרוזת בפייתון?",
        "choices": [
          "0 — התו הראשון הוא s[0]",
          "1 — כמו בחיי היומיום",
          "1- מן הסוף תמיד",
          "אין אינדקסים למחרוזות"
        ],
        "answer": 0,
        "hint": "כמו ברשימות, סופרים מאפס.",
        "explanation": "ב-\"SQL\" התו S הוא באינדקס 0, Q ב-1, L ב-2. האינדקס האחרון הוא len(s)-1, ואפשר גם אינדקס שלילי: s[-1] הוא התו האחרון."
      },
      {
        "id": "st-2",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(\"SQL\"[0])",
        "choices": [
          "S",
          "SQL",
          "Q",
          "L"
        ],
        "answer": 0,
        "hint": "אינדקס 0 הוא התו הראשון.",
        "explanation": "\"SQL\"[0] הוא S."
      },
      {
        "id": "st-3",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "s = \"Python\"\nprint(s[0:3])",
        "choices": [
          "Pyt",
          "Pyth",
          "Python",
          "yth"
        ],
        "answer": 0,
        "hint": "הסוף לא כלול: מ-0 עד 2.",
        "explanation": "s[0:3] לוקח אינדקסים 0, 1, 2 — P, y, t — כלומר Pyt. האינדקס 3 (h) לא נכנס."
      },
      {
        "id": "st-4",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "s = \"Python\"\nprint(s[-1])",
        "choices": [
          "n",
          "P",
          "o",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "אינדקס שלילי סופר מהסוף.",
        "explanation": "s[-1] הוא התו האחרון — n. s[-2] יהיה o."
      },
      {
        "id": "st-5",
        "type": "fill",
        "prompt": "השלימו f-string שמדפיס Hi ואז את ערך המשתנה name.",
        "template": "print(f\"Hi {___}\")",
        "blanks": [
          [
            "name"
          ]
        ],
        "hint": "בתוך סוגריים מסולסלים שמים את שם המשתנה.",
        "explanation": "f\"Hi {name}\" משבץ את ערך name. הקידומת f לפני המרכאות היא מה שהופך את המחרוזת ל-f-string."
      },
      {
        "id": "st-6",
        "type": "write",
        "prompt": "צרו משתנה name עם הערך Roei, והדפיסו בדיוק: שלום Roei  (עם f-string או חיבור מחרוזות).",
        "starter": "name = ",
        "expectedStdout": "שלום Roei",
        "hint": "print(f\"שלום {name}\")",
        "explanation": "name = \"Roei\" ואז print(f\"שלום {name}\"). אפשר גם print(\"שלום \" + name).",
        "solution": "name = \"Roei\"\nprint(f\"שלום {name}\")"
      },
      {
        "id": "st-7",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(\"ab\" * 3)",
        "choices": [
          "ababab",
          "ab3",
          "abababab",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "כפל מחרוזת חוזר עליה.",
        "explanation": "\"ab\" * 3 מדביק את המחרוזת שלוש פעמים: ababab."
      },
      {
        "id": "st-8",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(len(\"house\"))",
        "choices": [
          "5",
          "4",
          "6",
          "house"
        ],
        "answer": 0,
        "hint": "len סופר תווים.",
        "explanation": "ב-house יש 5 אותיות, לכן 5."
      },
      {
        "id": "st-9",
        "type": "write",
        "prompt": "בהינתן s = \"notebook\", הדפיסו את ארבעת התווים האחרונים בלבד (צריך להתקבל: book).",
        "starter": "s = \"notebook\"\n",
        "expectedStdout": "book",
        "hint": "חיתוך מהסוף: s[-4:]",
        "explanation": "s[-4:] מתחיל ארבעה תווים מהסוף וממשיך עד הסוף — book. גם s[4:] יעבוד כאן, כי notebook באורך 8.",
        "solution": "s = \"notebook\"\nprint(s[-4:])"
      },
      {
        "id": "st-10",
        "type": "mcq",
        "prompt": "ב-s[1:4], האם התו שבאינדקס 4 כלול?",
        "choices": [
          "לא — הסוף לא כלול, נקבל את האינדקסים 1, 2, 3",
          "כן, כולל 1 עד 4",
          "רק אם s ארוכה מ-4",
          "זה בכלל תחביר לא חוקי"
        ],
        "answer": 0,
        "hint": "בפייתון הסוף של חיתוך תמיד בלעדי (exclusive).",
        "explanation": "s[start:end] רץ עד end, בלי לכלול אותו. זו מוסכמה שחוזרת גם ב-range."
      }
    ]
  },
  {
    "id": "operators",
    "title": "אופרטורים: חשבון, השוואה, לוגיקה",
    "short": "אופרטורים",
    "icon": "4",
    "intro": "חשבון: + - * / // % **. השוואה: == != < > <= >=. לוגיים: and, or, not.",
    "questions": [
      {
        "id": "op-1",
        "type": "predict",
        "prompt": "מה יודפס? (חלוקה שלמה)",
        "code": "print(7 // 2)",
        "choices": [
          "3",
          "3.5",
          "4",
          "1"
        ],
        "answer": 0,
        "hint": "// היא חלוקה בלי שארית, עם תוצאה שלמה.",
        "explanation": "7 / 2 הוא 3.5, אבל 7 // 2 הוא 3 — החלק השלם. השארית מתקבלת עם %."
      },
      {
        "id": "op-2",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(7 % 2)",
        "choices": [
          "1",
          "3",
          "0",
          "3.5"
        ],
        "answer": 0,
        "hint": "% מחזיר שארית.",
        "explanation": "7 חלקי 2 הוא 3 ושארית 1, לכן 1. שימושי לבדיקת זוגיות: n % 2 == 0."
      },
      {
        "id": "op-3",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(2 ** 3)",
        "choices": [
          "8",
          "6",
          "9",
          "5"
        ],
        "answer": 0,
        "hint": "** הוא חזקה.",
        "explanation": "2 ** 3 = 2³ = 8. אל תבלבלו עם ^, שבפייתון הוא XOR ביטי, לא חזקה."
      },
      {
        "id": "op-4",
        "type": "mcq",
        "prompt": "מה ההבדל בין = ל-==?",
        "choices": [
          "= משמש להשמה, == משווה שוויון",
          "שניהם אותו דבר",
          "== משמש להשמה, = להשוואה",
          "בפייתון משתמשים רק ב-="
        ],
        "answer": 0,
        "hint": "כמו ברוב השפות: אחד שם ערך, השני שואל «האם שווה?»",
        "explanation": "x = 5 שם 5 ב-x. x == 5 מחזיר True או False. טעות נפוצה היא לכתוב if x = 5 — וזה SyntaxError."
      },
      {
        "id": "op-5",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(5 > 3 and 2 > 8)",
        "choices": [
          "False",
          "True",
          "5",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "and דורש ששני הצדדים יהיו True.",
        "explanation": "5 > 3 הוא True, אבל 2 > 8 הוא False. True and False = False."
      },
      {
        "id": "op-6",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(not False)",
        "choices": [
          "True",
          "False",
          "None",
          "not False"
        ],
        "answer": 0,
        "hint": "not הופך ערך לוגי.",
        "explanation": "not False הוא True, ו-not True הוא False."
      },
      {
        "id": "op-7",
        "type": "fill",
        "prompt": "השלימו את אופרטור «לא שווה».",
        "template": "print(3 ___ 4)",
        "blanks": [
          [
            "!="
          ]
        ],
        "hint": "סימן קריאה ואז שווה.",
        "explanation": "!= הוא אופרטור «לא שווה». 3 != 4 הוא True. שימו לב: is/is not בודקים זהות אובייקט, לא שוויון ערך."
      },
      {
        "id": "op-8",
        "type": "write",
        "prompt": "הדפיסו האם 15 מתחלק ב-3 בלי שארית (צריך להתקבל True).",
        "starter": "print(",
        "expectedStdout": "True",
        "hint": "השתמשו ב-% וב-==.",
        "explanation": "print(15 % 3 == 0) מדפיס True, כי השארית היא 0.",
        "solution": "print(15 % 3 == 0)"
      },
      {
        "id": "op-9",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(3 == 3.0)",
        "choices": [
          "True",
          "False",
          "שגיאה",
          "3"
        ],
        "answer": 0,
        "hint": "== משווה ערך, לא טיפוס.",
        "explanation": "3 (int) ו-3.0 (float) נחשבים שווים בערך, לכן True. להשוואת טיפוס משתמשים ב-type או isinstance."
      },
      {
        "id": "op-10",
        "type": "mcq",
        "prompt": "מה תוצאת True or False, ומה מיוחד ב-or?",
        "choices": [
          "True — ו-or מפסיק לבדוק אחרי שהצד הראשון כבר True (short-circuit)",
          "False",
          "None",
          "שגיאה, or לא קיים בפייתון"
        ],
        "answer": 0,
        "hint": "מספיק תנאי אחד אמתי.",
        "explanation": "True or משהו הוא True מיד, בלי לחשב את הצד הימני. זה נקרא קצר-מעגל, ושימושי למשל ב-x or default."
      }
    ]
  },
  {
    "id": "conditionals",
    "title": "תנאים: if, elif, else",
    "short": "תנאים",
    "icon": "5",
    "intro": "if בודק תנאי. elif מוסיף תנאים נוספים, else רץ אם כולם כשלו. הבלוק מתחת חייב בהזחה.",
    "questions": [
      {
        "id": "if-1",
        "type": "mcq",
        "prompt": "מה חובה אחרי if תנאי: בפייתון?",
        "choices": [
          "נקודתיים, ואז שורה מוזחת (indent) עם הפקודות של הבלוק",
          "סוגריים מסולסלים כמו ב-Java",
          "מילת הסיום end",
          "שום דבר מיוחד, אפשר באותה שורה בלי סימן"
        ],
        "answer": 0,
        "hint": "ההזחה היא חלק מהתחביר, לא רק סגנון.",
        "explanation": "if x > 5: ואז בשורה הבאה בלוק מוזח. בלי הזחה תתקבל שגיאה. אין סוגריים מסולסלים של בלוק כמו ב-C."
      },
      {
        "id": "if-2",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "x = 10\nif x > 5:\n    print(\"big\")\nelse:\n    print(\"small\")",
        "choices": [
          "big",
          "small",
          "big ואז small",
          "שום דבר"
        ],
        "answer": 0,
        "hint": "10 גדול מ-5.",
        "explanation": "התנאי True, לכן רץ בלוק ה-if ומודפס big. בלוק ה-else מדולג."
      },
      {
        "id": "if-3",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "n = 0\nif n > 0:\n    print(\"pos\")\nelif n == 0:\n    print(\"zero\")\nelse:\n    print(\"neg\")",
        "choices": [
          "zero",
          "pos",
          "neg",
          "pos ואז zero"
        ],
        "answer": 0,
        "hint": "בודקים מלמעלה למטה, הראשון שמתקיים מנצח.",
        "explanation": "n אינו גדול מ-0, אבל n == 0, לכן מודפס zero. אחרי ש-elif הצליח, else לא רץ."
      },
      {
        "id": "if-4",
        "type": "fill",
        "prompt": "השלימו את התנאי כך שיודפס ok כאשר age לפחות 18.",
        "template": "if age ___ 18:\n    print(\"ok\")",
        "blanks": [
          [
            ">=",
            ">= "
          ]
        ],
        "hint": "גדול-או-שווה.",
        "explanation": "if age >= 18: בודק גם 18 עצמו. אם כותבים רק > , בן 18 לא ייכנס."
      },
      {
        "id": "if-5",
        "type": "write",
        "prompt": "קבעו age = 17. אם הגיל קטן מ-18 הדפיסו minor, אחרת הדפיסו adult.",
        "starter": "age = 17\n",
        "expectedStdout": "minor",
        "hint": "if age < 18:",
        "explanation": "17 < 18 ולכן מודפס minor. דוגמה קלאסית ל-if/else.",
        "solution": "age = 17\nif age < 18:\n    print(\"minor\")\nelse:\n    print(\"adult\")"
      },
      {
        "id": "if-6",
        "type": "predict",
        "prompt": "מה יודפס? שימו לב שרק הענף הראשון שמתקיים רץ.",
        "code": "a = 5\nif a > 10:\n    print(\"A\")\nelif a > 3:\n    print(\"B\")\nelif a > 1:\n    print(\"C\")",
        "choices": [
          "B",
          "C",
          "B ואז C",
          "A"
        ],
        "answer": 0,
        "hint": "גם a > 3 וגם a > 1 נכונים, אבל הראשון מנצח.",
        "explanation": "a > 10 שגוי, a > 3 נכון — מדפיסים B ויוצאים. הענף a > 1 לא נבדק."
      },
      {
        "id": "if-7",
        "type": "write",
        "prompt": "קבעו score = 85. אם הציון לפחות 60 הדפיסו pass, אחרת fail.",
        "starter": "score = 85\n",
        "expectedStdout": "pass",
        "hint": "if score >= 60:",
        "explanation": "85 >= 60, לכן pass. אפשר גם עם else לענף ה-fail, גם אם במקרה הזה הוא לא רץ.",
        "solution": "score = 85\nif score >= 60:\n    print(\"pass\")\nelse:\n    print(\"fail\")"
      },
      {
        "id": "if-8",
        "type": "mcq",
        "prompt": "מה יקרה אם נשכח הזחה אחרי if?",
        "choices": [
          "IndentationError — בפייתון ההזחה היא חלק מהשפה",
          "פייתון ינחש את הבלוק אוטומטית",
          "הקוד ירוץ, רק ייראה פחות מסודר",
          "רק אזהרה, לא שגיאה"
        ],
        "answer": 0,
        "hint": "זו אחת השגיאות הראשונות שנתקלים בהן.",
        "explanation": "בניגוד לשפות עם {}, בפייתון בלוק מוגדר בהזחה. בלי הזחה — SyntaxError / IndentationError."
      },
      {
        "id": "if-9",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "x = 4\nif x % 2 == 0:\n    print(\"even\")\nprint(\"done\")",
        "choices": [
          "even ואז done בשורה הבאה",
          "רק even",
          "רק done",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "print(\"done\") לא מוזח, לכן הוא תמיד רץ.",
        "explanation": "4 זוגי, לכן even. אחר כך done רץ בכל מקרה, כי הוא מחוץ ל-if."
      },
      {
        "id": "if-10",
        "type": "write",
        "prompt": "קבעו temp = 25. אם הטמפרטורה קטנה מ-15 הדפיסו cold, אם היא קטנה או שווה ל-25 הדפיסו ok, אחרת hot.",
        "starter": "temp = 25\n",
        "expectedStdout": "ok",
        "hint": "if / elif / else. 25 נכנס לענף האמצעי כי <= 25.",
        "explanation": "temp אינו < 15, אבל temp <= 25, לכן ok. בדיוק על הגבול — חשוב לבחור >= או <= במודע.",
        "solution": "temp = 25\nif temp < 15:\n    print(\"cold\")\nelif temp <= 25:\n    print(\"ok\")\nelse:\n    print(\"hot\")"
      }
    ]
  },
  {
    "id": "loops",
    "title": "לולאות for ו-while ו-range",
    "short": "לולאות",
    "icon": "6",
    "intro": "for רצה על רצף (למשל range או מחרוזת). while רצה כל עוד תנאי מתקיים. range(start, stop, step) לא כולל את stop.",
    "questions": [
      {
        "id": "lp-1",
        "type": "mcq",
        "prompt": "מתי נעדיף for, ומתי while?",
        "choices": [
          "for כשמספר החזרות ידוע או שיש רצף; while כשהתנאי הוא העיקר ולא יודעים מראש כמה פעמים",
          "תמיד רק while, for מיועד למתקדמים",
          "for למספרים, while למחרוזות בלבד",
          "אין הבדל, זו אותה פקודה"
        ],
        "answer": 0,
        "hint": "שתי הלולאות יכולות לעשות דברים דומים, הסגנון שונה.",
        "explanation": "for i in range(5) ברור כשיש חמש חזרות. while n > 0 מתאים כשממשיכים עד שתנאי נכשל, למשל קריאת קלט."
      },
      {
        "id": "lp-2",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "for i in range(3):\n    print(i)",
        "choices": [
          "0 1 2 כל אחד בשורה",
          "1 2 3 כל אחד בשורה",
          "0 1 2 3",
          "3"
        ],
        "answer": 0,
        "hint": "range(3) הוא 0, 1, 2 — בלי 3.",
        "explanation": "range(n) מתחיל ב-0 ונעצר לפני n. לכן 0, 1, 2. כל print יורד שורה."
      },
      {
        "id": "lp-3",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(list(range(1, 5)))",
        "choices": [
          "[1, 2, 3, 4]",
          "[1, 2, 3, 4, 5]",
          "[0, 1, 2, 3, 4]",
          "[1, 5]"
        ],
        "answer": 0,
        "hint": "הסוף לא כלול.",
        "explanation": "range(1, 5) הוא 1, 2, 3, 4. כדי להגיע עד 5 כותבים range(1, 6)."
      },
      {
        "id": "lp-4",
        "type": "predict",
        "prompt": "אילו מספרים ב-range(2, 9, 2)?",
        "choices": [
          "2, 4, 6, 8",
          "2, 3, 4, 5, 6, 7, 8, 9",
          "2, 9, 2",
          "9, 7, 5, 3"
        ],
        "answer": 0,
        "hint": "מתחילים ב-2, קופצים ב-2, נעצרים לפני 9.",
        "explanation": "הארגומנט השלישי הוא הצעד. 2, 4, 6, 8. 10 כבר לא נכנס כי 10 אינו קטן מ-9, ו-9 עצמו לא כי הצעד דילג עליו."
      },
      {
        "id": "lp-5",
        "type": "fill",
        "prompt": "השלימו כדי לעבור 5 פעמים (0 עד 4).",
        "template": "for i in ___(5):\n    print(i)",
        "blanks": [
          [
            "range"
          ]
        ],
        "hint": "הפונקציה שיוצרת רצף מספרים.",
        "explanation": "for i in range(5): תרוץ עם i שווה 0, 1, 2, 3, 4."
      },
      {
        "id": "lp-6",
        "type": "write",
        "prompt": "בעזרת for ו-range, הדפיסו את המספרים 1 עד 4 (כל מספר בשורה נפרדת).",
        "starter": "for ",
        "expectedStdout": "1\n2\n3\n4",
        "hint": "range(1, 5) כי הסוף לא כלול.",
        "explanation": "for i in range(1, 5): print(i). אם כותבים range(1, 4) יחסר ה-4; range(4) יתחיל מ-0.",
        "solution": "for i in range(1, 5):\n    print(i)"
      },
      {
        "id": "lp-7",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1",
        "choices": [
          "3 2 1 כל אחד בשורה",
          "3 2 1 0",
          "1 2 3",
          "לולאה אינסופית"
        ],
        "answer": 0,
        "hint": "כל סיבוב מדפיס ואז מקטין. כש-n הופך ל-0 התנאי נכשל.",
        "explanation": "מדפיסים 3, 2, 1. אחרי מכן n=0 והלולאה נעצרת. חשוב לעדכן את n, אחרת הלולאה לא תיגמר."
      },
      {
        "id": "lp-8",
        "type": "write",
        "prompt": "חשבו בלולאה את הסכום 1+2+3+4+5 והדפיסו אותו (מספר אחד: 15).",
        "starter": "total = 0\n",
        "expectedStdout": "15",
        "hint": "עברו עם for על range(1, 6) וצברו ב-total.",
        "explanation": "total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)\nאפשר גם print(sum(range(1, 6))) — גם זה תקין.",
        "solution": "total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)"
      },
      {
        "id": "lp-9",
        "type": "mcq",
        "prompt": "מהי לולאה אינסופית טיפוסית ב-while?",
        "choices": [
          "התנאי תמיד True כי שכחנו לעדכן את המשתנה שבתנאי",
          "for על range תמיד אינסופי",
          "כל while הוא אינסופי בהגדרה",
          "print בתוך לולאה יוצר לולאה אינסופית"
        ],
        "answer": 0,
        "hint": "while n > 0 בלי לשנות את n.",
        "explanation": "while True: בלי break, או while n > 0 בלי n -= 1, ימשיכו לנצח. במשחק כזה המנוע עלול «לתקוע» — לכן תמיד בודקים שיש התקדמות."
      },
      {
        "id": "lp-10",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "for ch in \"hi\":\n    print(ch)",
        "choices": [
          "h ואז i, כל אחד בשורה",
          "hi בשורה אחת",
          "h i",
          "2"
        ],
        "answer": 0,
        "hint": "for יודע לעבור גם על תווי מחרוזת.",
        "explanation": "מחרוזת היא רצף. כל סיבוב נותן תו אחד: קודם h, אחר כך i."
      }
    ]
  },
  {
    "id": "lists",
    "title": "רשימות (list)",
    "short": "רשימות",
    "icon": "7",
    "intro": "רשימה היא אוסף סדור, ניתן לשינוי, ומותרים בה כפילויות. ניגשים באינדקס, מוסיפים ב-append, חותכים כמו מחרוזת.",
    "questions": [
      {
        "id": "ls-1",
        "type": "mcq",
        "prompt": "איזה משפט נכון לגבי list?",
        "choices": [
          "סדורה, ניתנת לשינוי (mutable), ומאפשרת כפילויות",
          "לא סדורה ואסור לשנות אותה",
          "כל איבר חייב להיות ייחודי, כמו set",
          "אי אפשר לערבב טיפוסים באותה רשימה"
        ],
        "answer": 0,
        "hint": "סוגריים מרובעים: [1, 2, 2].",
        "explanation": "רשימות שומרות סדר, אפשר לשנות איבר במקום, ו-[1, 1] חוקי לגמרי. אפשר גם לערבב טיפוסים, למשל [1, \"a\", True]."
      },
      {
        "id": "ls-2",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "nums = [3, 1, 2]\nprint(nums[0], nums[-1])",
        "choices": [
          "3 2",
          "3 1",
          "1 2",
          "[3, 1, 2]"
        ],
        "answer": 0,
        "hint": "0 ראשון, ‎-1 אחרון.",
        "explanation": "nums[0] הוא 3, nums[-1] הוא 2. print עם שני ארגומנטים מפריד ברווח."
      },
      {
        "id": "ls-3",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "a = [1, 2]\na.append(9)\nprint(a)",
        "choices": [
          "[1, 2, 9]",
          "[1, 2]",
          "[9]",
          "[1, 9]"
        ],
        "answer": 0,
        "hint": "append מוסיף בסוף, ומשנה את הרשימה עצמה.",
        "explanation": "אחרי append(9) הרשימה היא [1, 2, 9]. append מחזיר None, לכן מדפיסים את a ולא את תוצאת append."
      },
      {
        "id": "ls-4",
        "type": "fill",
        "prompt": "השלימו כדי להוסיף את המספר 4 לסוף הרשימה items.",
        "template": "items.___(4)",
        "blanks": [
          [
            "append"
          ]
        ],
        "hint": "השיטה להוספה בסוף.",
        "explanation": "items.append(4) מוסיף 4 בסוף. insert(i, x) מכניס במקום מסוים, extend מוסיף כמה איברים."
      },
      {
        "id": "ls-5",
        "type": "write",
        "prompt": "צרו את הרשימה fruits = [\"apple\", \"banana\", \"mango\"] והדפיסו את האיבר השני (banana).",
        "starter": "fruits = ",
        "expectedStdout": "banana",
        "hint": "האיבר השני הוא באינדקס 1.",
        "explanation": "fruits[1] הוא banana, כי הספירה מתחילה ב-0. fruits[2] היה mango.",
        "solution": "fruits = [\"apple\", \"banana\", \"mango\"]\nprint(fruits[1])"
      },
      {
        "id": "ls-6",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print([1, 2] + [3])",
        "choices": [
          "[1, 2, 3]",
          "[1, 2, 3, 1, 2, 3]",
          "[4]",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "+ בין רשימות מדביק אותן.",
        "explanation": "חיבור רשימות יוצר רשימה חדשה [1, 2, 3]. זה לא מחבר את המספרים חשבונית."
      },
      {
        "id": "ls-7",
        "type": "write",
        "prompt": "בהינתן nums = [4, 1, 7, 1], הדפיסו את החיתוך שנותן [1, 7] (שני האיברים האמצעיים).",
        "starter": "nums = [4, 1, 7, 1]\n",
        "expectedStdout": "[1, 7]",
        "hint": "nums[1:3] — הסוף לא כלול.",
        "explanation": "nums[1:3] לוקח אינדקסים 1 ו-2: 1 ו-7. print מציג זאת כ-[1, 7].",
        "solution": "nums = [4, 1, 7, 1]\nprint(nums[1:3])"
      },
      {
        "id": "ls-8",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "x = [1, 2, 3]\nx[1] = 8\nprint(x)",
        "choices": [
          "[1, 8, 3]",
          "[8, 2, 3]",
          "[1, 2, 3]",
          "שגיאה, רשימה לא ניתנת לשינוי"
        ],
        "answer": 0,
        "hint": "אפשר לשנות איבר לפי אינדקס.",
        "explanation": "x[1] = 8 מחליף את 2 ב-8. זו דוגמה ל-mutable: הרשימה משתנה במקום."
      },
      {
        "id": "ls-9",
        "type": "mcq",
        "prompt": "איך בודקים אם 5 נמצא ברשימה nums?",
        "choices": [
          "if 5 in nums:",
          "if nums includes 5:",
          "if nums.has(5):",
          "if nums = 5:"
        ],
        "answer": 0,
        "hint": "האופרטור in עובד גם על רשימות, מחרוזות ומפתחות של מילון.",
        "explanation": "5 in nums מחזיר True או False. זה קריא ומהיר מספיק לרשימות קצרות."
      },
      {
        "id": "ls-10",
        "type": "write",
        "prompt": "התחילו עם colors = [\"red\"], הוסיפו את \"blue\", והדפיסו את הרשימה המעודכנת.",
        "starter": "colors = [\"red\"]\n",
        "expectedStdout": "['red', 'blue']",
        "altStdouts": [
          "[\"red\", \"blue\"]"
        ],
        "hint": "append ואז print(colors).",
        "explanation": "colors.append(\"blue\") ואז print(colors). פייתון מדפיס רשימת מחרוזות בדרך כלל עם מרכאות בודדות: ['red', 'blue'].",
        "solution": "colors = [\"red\"]\ncolors.append(\"blue\")\nprint(colors)"
      }
    ]
  },
  {
    "id": "tuples",
    "title": "רשומות (tuple)",
    "short": "Tuples",
    "icon": "8",
    "intro": "Tuple הוא אוסף סדור שאי אפשר לשנות (immutable). כותבים בסוגריים עגולים. מתאים לערכים קבועים ולפירוק למשתנים.",
    "questions": [
      {
        "id": "tu-1",
        "type": "mcq",
        "prompt": "מה מייחד tuple לעומת list?",
        "choices": [
          "הוא סדור אבל לא ניתן לשינוי — אי אפשר לעשות t[0] = 5",
          "הוא לא סדור",
          "אסור שיהיו בו כפילויות",
          "אפשר לשנות אותו רק עם append"
        ],
        "answer": 0,
        "hint": "immutable.",
        "explanation": "tuple שומר סדר וכפילויות, אבל אחרי היצירה אי אפשר לשנות, להוסיף או למחוק איברים. לכן בטוח יותר כשלא רוצים שינוי בטעות."
      },
      {
        "id": "tu-2",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "t = (1, 2, 3)\nprint(t[0])",
        "choices": [
          "1",
          "(1, 2, 3)",
          "3",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "גישה באינדקס כמו ברשימה.",
        "explanation": "t[0] הוא 1. קריאה מותרת, שינוי לא."
      },
      {
        "id": "tu-3",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print((1, 2) + (3,))",
        "choices": [
          "(1, 2, 3)",
          "(1, 2, 3,)",
          "6",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "(3,) הוא tuple עם איבר אחד. הפסיק הוא החשוב.",
        "explanation": "חיבור tuples יוצר tuple חדש (1, 2, 3). בלי הפסיק, (3) הוא סתם המספר 3 בסוגריים."
      },
      {
        "id": "tu-4",
        "type": "mcq",
        "prompt": "מה יקרה ב-t = (1, 2); t[0] = 5?",
        "choices": [
          "TypeError — אי אפשר לשנות איבר ב-tuple",
          "t יהפוך ל-(5, 2)",
          "הערך ייזרק בשקט",
          "t יהפוך לרשימה אוטומטית"
        ],
        "answer": 0,
        "hint": "immutable.",
        "explanation": "TypeError: 'tuple' object does not support item assignment. כדי «לשנות» יוצרים tuple חדש, או משתמשים ברשימה מלכתחילה."
      },
      {
        "id": "tu-5",
        "type": "write",
        "prompt": "צרו tuple עם שלושה מספרים (למשל 10, 20, 30) והדפיסו את האורך שלו (צריך 3).",
        "starter": "",
        "expectedStdout": "3",
        "hint": "print(len((10, 20, 30)))",
        "explanation": "print(len((10, 20, 30))) מדפיס 3. len עובד גם על tuple, מחרוזת, רשימה, מילון וקבוצה.",
        "solution": "print(len((10, 20, 30)))"
      },
      {
        "id": "tu-6",
        "type": "fill",
        "prompt": "השלימו את פירוק ה-tuple לשני משתנים a ו-b.",
        "template": "___, ___ = (1, 2)",
        "blanks": [
          [
            "a"
          ],
          [
            "b"
          ]
        ],
        "hint": "שני שמות מופרדים בפסיק בצד שמאל.",
        "explanation": "a, b = (1, 2) הוא unpacking: האיבר הראשון נכנס ל-a, השני ל-b. מספר המשתנים חייב להתאים לאורך ה-tuple."
      },
      {
        "id": "tu-7",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "a, b = 5, 8\na, b = b, a\nprint(a, b)",
        "choices": [
          "8 5",
          "5 8",
          "5 5",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "זו הדרך הקלאסית להחלפת ערכים בפייתון, בלי משתנה עזר.",
        "explanation": "a, b = b, a מחליף. קודם נוצר tuple (8, 5) ורק אז הוא מפורק, לכן אין דריסה מוקדמת."
      },
      {
        "id": "tu-8",
        "type": "mcq",
        "prompt": "איך כותבים tuple עם איבר יחיד שהערך שלו 1?",
        "choices": [
          "(1,)",
          "(1)",
          "[1]",
          "tuple 1"
        ],
        "answer": 0,
        "hint": "הפסיק הוא זה שיוצר את ה-tuple, לא הסוגריים לבדם.",
        "explanation": "(1) הוא סתם 1. (1,) הוא tuple באורך 1. אפשר גם 1, בלי סוגריים, אבל הסוגריים ברורים יותר."
      }
    ]
  },
  {
    "id": "dicts",
    "title": "מילונים (dict)",
    "short": "מילונים",
    "icon": "9",
    "intro": "מילון שומר זוגות מפתח-ערך. המפתחות ייחודיים. ניגשים עם dict[key], מוסיפים או מעדכנים באותו תחביר.",
    "questions": [
      {
        "id": "di-1",
        "type": "mcq",
        "prompt": "מה מאפיין dict?",
        "choices": [
          "זוגות מפתח-ערך, מפתחות ייחודיים, והמבנה ניתן לשינוי",
          "רק ערכים בלי מפתחות, כמו רשימה",
          "מפתחות יכולים להופיע כמה פעמים",
          "אי אפשר לשנות מילון אחרי יצירתו"
        ],
        "answer": 0,
        "hint": "כותבים {\"name\": \"Dana\"}.",
        "explanation": "כל מפתח מופיע פעם אחת. השמה למפתח קיים מעדכנת, השמה למפתח חדש מוסיפה. מפייתון 3.7+ הסדר נשמר לפי סדר ההכנסה, אבל הרעיון המרכזי הוא גישה לפי מפתח."
      },
      {
        "id": "di-2",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "d = {\"name\": \"Dana\", \"age\": 28}\nprint(d[\"name\"])",
        "choices": [
          "Dana",
          "name",
          "{\"name\": \"Dana\", \"age\": 28}",
          "28"
        ],
        "answer": 0,
        "hint": "גישה לפי מפתח בסוגריים מרובעים.",
        "explanation": "d[\"name\"] מחזיר את הערך שמשויך למפתח name — Dana. אם המפתח חסר תתקבל KeyError."
      },
      {
        "id": "di-3",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "d = {\"a\": 1}\nd[\"a\"] = 2\nd[\"b\"] = 3\nprint(d[\"a\"], d[\"b\"])",
        "choices": [
          "2 3",
          "1 3",
          "2 1",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "השמה למפתח קיים מעדכנת, למפתח חדש מוסיפה.",
        "explanation": "a מתעדכן מ-1 ל-2, ו-b נוסף עם 3. יודפס 2 3."
      },
      {
        "id": "di-4",
        "type": "fill",
        "prompt": "השלימו כדי לקרוא את העיר מתוך המילון person.",
        "template": "city = person[___]",
        "blanks": [
          [
            "\"city\"",
            "'city'",
            "\"city\""
          ]
        ],
        "hint": "המפתח הוא המחרוזת city.",
        "explanation": "person[\"city\"] (או מרכאות בודדות) מחזיר את הערך. בלי מרכאות, city היה נחשב שם משתנה."
      },
      {
        "id": "di-5",
        "type": "write",
        "prompt": "צרו מילון עם מפתח city וערך Tel Aviv, והדפיסו את ערך העיר בלבד.",
        "starter": "p = ",
        "expectedStdout": "Tel Aviv",
        "hint": "p = {\"city\": \"Tel Aviv\"} ואז print(p[\"city\"])",
        "explanation": "יוצרים את המילון, ניגשים עם המפתח, ומדפיסים רק את הערך — לא את המילון כולו.",
        "solution": "p = {\"city\": \"Tel Aviv\"}\nprint(p[\"city\"])"
      },
      {
        "id": "di-6",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(\"age\" in {\"name\": \"A\"})",
        "choices": [
          "False",
          "True",
          "A",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "in על מילון בודק מפתחות, לא ערכים.",
        "explanation": "המפתח age לא קיים, לכן False. כדי לבדוק ערך: \"A\" in d.values()."
      },
      {
        "id": "di-7",
        "type": "write",
        "prompt": "בהינתן prices = {\"apple\": 3, \"cola\": 6}, הדפיסו את מחיר התפוח בלבד (3).",
        "starter": "prices = {\"apple\": 3, \"cola\": 6}\n",
        "expectedStdout": "3",
        "hint": "prices[\"apple\"]",
        "explanation": "print(prices[\"apple\"]) מדפיס 3.",
        "solution": "prices = {\"apple\": 3, \"cola\": 6}\nprint(prices[\"apple\"])"
      },
      {
        "id": "di-8",
        "type": "mcq",
        "prompt": "אילו שיטות מחזירות את המפתחות, הערכים, ואת הזוגות?",
        "choices": [
          "keys(), values(), items()",
          "names(), data(), pairs()",
          "first(), second(), both()",
          "index(), get_all(), rows()"
        ],
        "answer": 0,
        "hint": "items מחזיר זוגות (key, value) — נוח בלולאת for.",
        "explanation": "for k, v in d.items(): הוא התבנית הנפוצה. keys ו-values מחזירים רק צד אחד."
      },
      {
        "id": "di-9",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "d = {\"x\": 1, \"y\": 2}\nprint(len(d))",
        "choices": [
          "2",
          "1",
          "0",
          "{2}"
        ],
        "answer": 0,
        "hint": "len על מילון סופר מפתחות.",
        "explanation": "יש שני מפתחות, לכן 2."
      },
      {
        "id": "di-10",
        "type": "write",
        "prompt": "צרו מילון d עם a=10 ו-b=4, והדפיסו את סכום שני הערכים (14).",
        "starter": "d = ",
        "expectedStdout": "14",
        "hint": "print(d[\"a\"] + d[\"b\"])",
        "explanation": "d = {\"a\": 10, \"b\": 4} ואז print(d[\"a\"] + d[\"b\"]). חיבור הערכים, לא המפתחות.",
        "solution": "d = {\"a\": 10, \"b\": 4}\nprint(d[\"a\"] + d[\"b\"])"
      }
    ]
  },
  {
    "id": "sets",
    "title": "קבוצות (set)",
    "short": "קבוצות",
    "icon": "10",
    "intro": "קבוצה שומרת ערכים ייחודיים, בלי סדר מובטח. מצוינת להסרת כפילויות ולבדיקת שייכות. איחוד | וחיתוך &.",
    "questions": [
      {
        "id": "se-1",
        "type": "mcq",
        "prompt": "מה מאפיין set?",
        "choices": [
          "ערכים ייחודיים, בלי סדר מובטח, וניתן לשינוי",
          "סדר קבוע וכפילויות מותרות",
          "זוגות מפתח-ערך",
          "אי אפשר לבדוק שייכות עם in"
        ],
        "answer": 0,
        "hint": "set([1, 1, 2]) הופך ל-{1, 2}.",
        "explanation": "כפילויות נעלמות אוטומטית. אין גישה לפי אינדקס (s[0] ייכשל). כן אפשר add, remove, ו-in."
      },
      {
        "id": "se-2",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(len(set([1, 1, 2, 3, 3])))",
        "choices": [
          "3",
          "5",
          "4",
          "{1, 2, 3}"
        ],
        "answer": 0,
        "hint": "הכפילויות יורדות ואז סופרים.",
        "explanation": "הקבוצה היא {1, 2, 3}, אורכה 3. לא הדפסנו את הקבוצה עצמה — הסדר בפנים לא מובטח, ולכן עדיף לספור או למיין."
      },
      {
        "id": "se-3",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(len({\"a\", \"a\", \"b\"}))",
        "choices": [
          "2",
          "3",
          "1",
          "0"
        ],
        "answer": 0,
        "hint": "\"a\" מופיע פעמיים בכתב, אבל נשמר פעם אחת.",
        "explanation": "נשארים a ו-b בלבד, לכן 2."
      },
      {
        "id": "se-4",
        "type": "mcq",
        "prompt": "איך מסמנים איחוד וחיתוך של קבוצות?",
        "choices": [
          "איחוד: |    חיתוך: &",
          "איחוד: &    חיתוך: |",
          "איחוד: +    חיתוך: -",
          "איחוד: add    חיתוך: cut"
        ],
        "answer": 0,
        "hint": "אפשר גם a.union(b) ו-a.intersection(b).",
        "explanation": "{1, 2} | {2, 3} = {1, 2, 3}. {1, 2} & {2, 3} = {2}. ההפרש הוא - : {1, 2} - {2, 3} = {1}."
      },
      {
        "id": "se-5",
        "type": "write",
        "prompt": "הדפיסו כמה ערכים ייחודיים יש ברשימה [1, 2, 2, 3, 1] (צריך 3).",
        "starter": "print(",
        "expectedStdout": "3",
        "hint": "len(set(...))",
        "explanation": "print(len(set([1, 2, 2, 3, 1]))) מדפיס 3. זו הדרך הקצרה להסרת כפילויות.",
        "solution": "print(len(set([1, 2, 2, 3, 1])))"
      },
      {
        "id": "se-6",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "a = {1, 2, 3}\nb = {3, 4}\nprint(sorted(a & b))",
        "choices": [
          "[3]",
          "[1, 2, 3, 4]",
          "[1, 2]",
          "3"
        ],
        "answer": 0,
        "hint": "חיתוך, ואז מיון לרשימה כדי שהסדר יהיה יציב.",
        "explanation": "האיבר המשותף היחיד הוא 3. sorted מחזיר רשימה [3], נוח להדפסה יציבה."
      },
      {
        "id": "se-7",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "a = {1, 2}\na.add(5)\nprint(sorted(a))",
        "choices": [
          "[1, 2, 5]",
          "[1, 2]",
          "[5]",
          "{1, 2, 5}"
        ],
        "answer": 0,
        "hint": "add מוסיף איבר. sorted מחזיר רשימה ממוינת.",
        "explanation": "אחרי ההוספה הקבוצה מכילה 1, 2, 5. מדפיסים רשימה ממוינת, לא את ה-set עצמו."
      },
      {
        "id": "se-8",
        "type": "mcq",
        "prompt": "איזה משפט נכון?",
        "choices": [
          "איברי set חייבים להיות hashable — למשל מספר, מחרוזת או tuple. רשימה לא יכולה להיות איבר",
          "אפשר לשים רשימה בתוך set בלי בעיה",
          "set לא תומך באופרטור in",
          "set ו-dict הם אותו טיפוס"
        ],
        "answer": 0,
        "hint": "רשימה ניתנת לשינוי ולכן אין לה hash יציב.",
        "explanation": "set([ [1, 2] ]) יזרוק TypeError. tuple כן יכול להיות איבר, אם האיברים שבתוכו hashable. בדיקת שייכות ב-set מהירה מאוד."
      }
    ]
  },
  {
    "id": "functions",
    "title": "פונקציות: def, פרמטרים, return",
    "short": "פונקציות",
    "icon": "11",
    "intro": "פונקציה היא קטע קוד עם שם, פרמטרים וערך החזרה. מגדירים ב-def, מחזירים ב-return, וקוראים בשם עם סוגריים.",
    "questions": [
      {
        "id": "fn-1",
        "type": "mcq",
        "prompt": "מה תפקידם של def ושל return?",
        "choices": [
          "def מגדיר את הפונקציה, return מחזיר ערך למי שקרא לה",
          "def מריץ את הפונקציה, return מדפיס למסך",
          "return מגדיר את הפונקציה",
          "אין צורך ב-def בפייתון"
        ],
        "answer": 0,
        "hint": "הגדרה מול החזרה. print לא מחזיר ערך שימושי.",
        "explanation": "אחרי def הפונקציה רק מוגדרת. היא רצה כשקוראים לה. return מוסר ערך החוצה; בלי return הפונקציה מחזירה None."
      },
      {
        "id": "fn-2",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "def add(a, b):\n    return a + b\nprint(add(2, 3))",
        "choices": [
          "5",
          "23",
          "None",
          "a + b"
        ],
        "answer": 0,
        "hint": "הפונקציה מחזירה סכום, ו-print מדפיס אותו.",
        "explanation": "add(2, 3) מחזיר 5, וזה מה שמודפס. אם במקום return היה רק print בפנים, הקריאה עצמה הייתה מחזירה None."
      },
      {
        "id": "fn-3",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "def greet(name):\n    return \"Hi \" + name\nprint(greet(\"Noa\"))",
        "choices": [
          "Hi Noa",
          "Noa",
          "Hi name",
          "greet(Noa)"
        ],
        "answer": 0,
        "hint": "חיבור מחרוזות + הפרמטר.",
        "explanation": "הפרמטר name מקבל \"Noa\", והפונקציה מחזירה את המחרוזת Hi Noa."
      },
      {
        "id": "fn-4",
        "type": "fill",
        "prompt": "השלימו כדי שהפונקציה תחזיר את הערך x כפול 2.",
        "template": "def double(x):\n    ___ x * 2",
        "blanks": [
          [
            "return"
          ]
        ],
        "hint": "מילת ההחזרה.",
        "explanation": "return x * 2 מוסר את התוצאה החוצה. בלי return, double(4) יהיה None."
      },
      {
        "id": "fn-5",
        "type": "write",
        "prompt": "כתבו פונקציה בשם double שמקבלת n ומחזירה את n כפול 2.",
        "starter": "def double(n):\n    ",
        "tests": [
          {
            "expr": "double(4)",
            "expected": 8
          },
          {
            "expr": "double(0)",
            "expected": 0
          },
          {
            "expr": "double(-3)",
            "expected": -6
          }
        ],
        "hint": "return n * 2",
        "explanation": "def double(n):\n    return n * 2\nבודקים כמה קלט, כולל 0 ושלילי, כדי לוודא שזו באמת הכפלה.",
        "solution": "def double(n):\n    return n * 2"
      },
      {
        "id": "fn-6",
        "type": "write",
        "prompt": "כתבו פונקציה is_even(n) שמחזירה True אם n זוגי, אחרת False.",
        "starter": "def is_even(n):\n    ",
        "tests": [
          {
            "expr": "is_even(2)",
            "expected": true
          },
          {
            "expr": "is_even(3)",
            "expected": false
          },
          {
            "expr": "is_even(0)",
            "expected": true
          }
        ],
        "hint": "return n % 2 == 0",
        "explanation": "מחזירים ביטוי בוליאני, לא מדפיסים. 0 נחשב זוגי.",
        "solution": "def is_even(n):\n    return n % 2 == 0"
      },
      {
        "id": "fn-7",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "def f():\n    print(\"x\")\nprint(f())",
        "choices": [
          "x ואז None בשורה הבאה",
          "רק x",
          "רק None",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "יש print בתוך הפונקציה, וגם print על תוצאת הקריאה. אין return.",
        "explanation": "קודם f() מדפיס x. אחר כך print(...) מדפיס את ערך ההחזרה, שהוא None כי לא היה return."
      },
      {
        "id": "fn-8",
        "type": "write",
        "prompt": "כתבו פונקציה area(w, h) שמחזירה את השטח w*h.",
        "starter": "def area(w, h):\n    ",
        "tests": [
          {
            "expr": "area(3, 4)",
            "expected": 12
          },
          {
            "expr": "area(2, 2.5)",
            "expected": 5.0
          },
          {
            "expr": "area(0, 10)",
            "expected": 0
          }
        ],
        "hint": "return w * h",
        "explanation": "שני פרמטרים, החזרה של המכפלה. לא צריך print בתוך הפונקציה.",
        "solution": "def area(w, h):\n    return w * h"
      },
      {
        "id": "fn-9",
        "type": "mcq",
        "prompt": "מהו פרמטר ברירת מחדל, למשל def f(x=1)?",
        "choices": [
          "אם לא מעבירים ערך ל-x, הוא יהיה 1",
          "x תמיד יהיה 1, אי אפשר לשנות",
          "זו שגיאת תחביר",
          "ברירת המחדל חלה רק על return"
        ],
        "answer": 0,
        "hint": "f() תשתמש ב-1, ו-f(5) תשתמש ב-5.",
        "explanation": "ערך ברירת מחדל נכנס לפעולה רק כשלא הועבר ארגומנט. כותבים אותם אחרי הפרמטרים בלי ברירת מחדל."
      },
      {
        "id": "fn-10",
        "type": "write",
        "prompt": "כתבו פונקציה max_of_two(a, b) שמחזירה את הגדול מבין שני הערכים (אם הם שווים, מחזירה את הערך).",
        "starter": "def max_of_two(a, b):\n    ",
        "tests": [
          {
            "expr": "max_of_two(5, 2)",
            "expected": 5
          },
          {
            "expr": "max_of_two(1, 9)",
            "expected": 9
          },
          {
            "expr": "max_of_two(3, 3)",
            "expected": 3
          }
        ],
        "hint": "if a >= b: return a, אחרת return b. אפשר גם return max(a, b).",
        "explanation": "אפשר עם if/else או עם הפונקציה המובנית max. שני הפתרונות תקפים כל עוד הבדיקות עוברות.",
        "solution": "def max_of_two(a, b):\n    return a if a >= b else b"
      }
    ]
  },
  {
    "id": "builtins",
    "title": "פונקציות מובנות וקלט",
    "short": "מובנות",
    "icon": "12",
    "intro": "len, sum, min, max, sorted, abs, round ו-input. input תמיד מחזיר מחרוזת — אם צריך מספר, ממירים.",
    "questions": [
      {
        "id": "bi-1",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(len([1, 2, 3]), sum([1, 2, 3]))",
        "choices": [
          "3 6",
          "6 3",
          "3 3",
          "[1, 2, 3] 6"
        ],
        "answer": 0,
        "hint": "len אורך, sum סכום.",
        "explanation": "ברשימה שלושה איברים שסכומם 6, לכן 3 6."
      },
      {
        "id": "bi-2",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(min(4, 1, 9), max(4, 1, 9))",
        "choices": [
          "1 9",
          "4 4",
          "9 1",
          "1 4"
        ],
        "answer": 0,
        "hint": "min הקטן, max הגדול.",
        "explanation": "מבין 4, 1, 9 הקטן הוא 1 והגדול הוא 9. min ו-max מקבלים גם רשימה: min([4, 1, 9])."
      },
      {
        "id": "bi-3",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(sorted([3, 1, 2]))",
        "choices": [
          "[1, 2, 3]",
          "[3, 1, 2]",
          "[3, 2, 1]",
          "6"
        ],
        "answer": 0,
        "hint": "sorted מחזיר רשימה חדשה ממוינת, ולא משנה את המקור.",
        "explanation": "[1, 2, 3]. אם רוצים למיין במקום משתמשים ב-list.sort(), שמשנה את הרשימה ומחזיר None."
      },
      {
        "id": "bi-4",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(sorted([3, 1, 2], reverse=True))",
        "choices": [
          "[3, 2, 1]",
          "[1, 2, 3]",
          "[3, 1, 2]",
          "True"
        ],
        "answer": 0,
        "hint": "reverse=True הופך לסדר יורד.",
        "explanation": "מיון יורד: 3, 2, 1."
      },
      {
        "id": "bi-5",
        "type": "mcq",
        "prompt": "מה מחזיר input(\"גיל: \") אם המשתמש הקליד 20?",
        "choices": [
          "את המחרוזת \"20\" — תמיד str, גם אם נראית כמו מספר",
          "את המספר השלם 20",
          "int או str לפי מה שהוקלד",
          "None"
        ],
        "answer": 0,
        "hint": "כדי לחשב צריך int(input(...)) או float(...).",
        "explanation": "input תמיד מחזיר מחרוזת. זו טעות קלאסית: \"20\" + 1 ייכשל, ו-\"20\" + \"1\" ייתן \"201\". ממירים במפורש."
      },
      {
        "id": "bi-6",
        "type": "fill",
        "prompt": "השלימו כדי לחשב את סכום איברי הרשימה nums.",
        "template": "total = ___(nums)",
        "blanks": [
          [
            "sum"
          ]
        ],
        "hint": "הפונקציה המובנית לסכום.",
        "explanation": "sum(nums) מחזיר את הסכום. לרשימה ריקה sum([]) הוא 0."
      },
      {
        "id": "bi-7",
        "type": "write",
        "prompt": "הדפיסו את הממוצע של הרשימה [10, 20, 30] בעזרת sum ו-len (צריך 20.0 או 20).",
        "starter": "nums = [10, 20, 30]\n",
        "expectedStdout": "20.0",
        "altStdouts": [
          "20"
        ],
        "hint": "sum(nums) / len(nums)",
        "explanation": "חלוקה ב- / נותנת float, לכן בדרך כלל 20.0. גם 20 יתקבל אם השתמשתם בחלוקה שלמה או ב-int — אבל / הוא הטבעי לממוצע.",
        "solution": "nums = [10, 20, 30]\nprint(sum(nums) / len(nums))"
      },
      {
        "id": "bi-8",
        "type": "write",
        "prompt": "הדפיסו רשימה ממוינת של הערכים הייחודיים מתוך [3, 1, 3, 2] — צריך להתקבל [1, 2, 3].",
        "starter": "print(",
        "expectedStdout": "[1, 2, 3]",
        "hint": "sorted(set(...))",
        "explanation": "print(sorted(set([3, 1, 3, 2]))) — קודם מסירים כפילויות, אחר כך ממיינים לרשימה יציבה.",
        "solution": "print(sorted(set([3, 1, 3, 2])))"
      },
      {
        "id": "bi-9",
        "type": "mcq",
        "prompt": "מה מחזירים abs(-5) ו-round(3.6)?",
        "choices": [
          "5 ו-4",
          "‎-5 ו-3",
          "5 ו-3",
          "5 ו-3.6"
        ],
        "answer": 0,
        "hint": "abs ערך מוחלט, round מעגל למספר השלם הקרוב.",
        "explanation": "abs(-5) הוא 5. round(3.6) הוא 4. שימו לב: round(2.5) בפייתון 3 הוא 2 (עיגול לזוגי הקרוב) — לכן לעיגול «בית ספרי» לפעמים משתמשים בדרך אחרת."
      },
      {
        "id": "bi-10",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "print(abs(-7), round(3.6))",
        "choices": [
          "7 4",
          "7 3",
          "-7 4",
          "7 3.6"
        ],
        "answer": 0,
        "hint": "ערך מוחלט ואז עיגול למעלה כי 0.6 >= 0.5.",
        "explanation": "abs(-7) = 7, round(3.6) = 4."
      }
    ]
  },
  {
    "id": "mixed",
    "title": "אתגר פייתון משולב",
    "short": "אתגר",
    "icon": "★",
    "intro": "שאלות שמחברות לולאות, תנאים, אוספים ופונקציות — כמו תרגילים אמיתיים בשיעור.",
    "questions": [
      {
        "id": "pm-1",
        "type": "write",
        "prompt": "כתבו פונקציה label(n) שמחזירה \"hot\" אם n >= 30, אחרת \"ok\".",
        "starter": "def label(n):\n    ",
        "tests": [
          {
            "expr": "label(30)",
            "expected": "hot"
          },
          {
            "expr": "label(29)",
            "expected": "ok"
          },
          {
            "expr": "label(0)",
            "expected": "ok"
          }
        ],
        "hint": "if n >= 30: return \"hot\"",
        "explanation": "הגבול 30 נכנס ל-hot בגלל >=. כדאי לבדוק גם ערך מתחת וגם אפס.",
        "solution": "def label(n):\n    return \"hot\" if n >= 30 else \"ok\""
      },
      {
        "id": "pm-2",
        "type": "write",
        "prompt": "בהינתן nums = [4, 15, 10, 22], ספרו כמה איברים גדולים מ-10 והדפיסו את המספר (2).",
        "starter": "nums = [4, 15, 10, 22]\n",
        "expectedStdout": "2",
        "hint": "לולאה עם if n > 10. שימו לב: 10 עצמו לא נספר.",
        "explanation": "15 ו-22 גדולים מ-10; 4 ו-10 לא. אפשר גם print(sum(1 for n in nums if n > 10)), אבל לולאה פשוטה מצוינת.",
        "solution": "nums = [4, 15, 10, 22]\ncount = 0\nfor n in nums:\n    if n > 10:\n        count += 1\nprint(count)"
      },
      {
        "id": "pm-3",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "nums = [1, 2, 3]\nfor i in range(len(nums)):\n    nums[i] *= 2\nprint(nums)",
        "choices": [
          "[2, 4, 6]",
          "[1, 2, 3]",
          "[1, 2, 3, 1, 2, 3]",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "משנים את הרשימה במקום, כל איבר כפול 2.",
        "explanation": "עוברים לפי אינדקס ומכפילים. בסוף [2, 4, 6]. זה שונה מיצירת רשימה חדשה."
      },
      {
        "id": "pm-4",
        "type": "write",
        "prompt": "כתבו פונקציה full_name(first, last) שמחזירה מחרוזת בפורמט: first, רווח, last.",
        "starter": "def full_name(first, last):\n    ",
        "tests": [
          {
            "expr": "full_name(\"Dana\", \"Levi\")",
            "expected": "Dana Levi"
          },
          {
            "expr": "full_name(\"Roei\", \"Bar\")",
            "expected": "Roei Bar"
          }
        ],
        "hint": "return f\"{first} {last}\"",
        "explanation": "f-string או חיבור עם +. חשוב הרווח האמצעי, בלי פסיק.",
        "solution": "def full_name(first, last):\n    return f\"{first} {last}\""
      },
      {
        "id": "pm-5",
        "type": "write",
        "prompt": "חשבו את סכום האיברים הזוגיים ברשימה [1, 2, 3, 4, 5] והדפיסו אותו (6).",
        "starter": "nums = [1, 2, 3, 4, 5]\n",
        "expectedStdout": "6",
        "hint": "אם n % 2 == 0, מוסיפים לסכום. 2+4=6.",
        "explanation": "רק 2 ו-4 זוגיים. לולאה עם תנאי, או sum(n for n in nums if n % 2 == 0).",
        "solution": "nums = [1, 2, 3, 4, 5]\ntotal = 0\nfor n in nums:\n    if n % 2 == 0:\n        total += n\nprint(total)"
      },
      {
        "id": "pm-6",
        "type": "predict",
        "prompt": "מה יודפס?",
        "code": "d = {\"a\": 1, \"b\": 2, \"c\": 3}\ntotal = 0\nfor v in d.values():\n    total += v\nprint(total)",
        "choices": [
          "6",
          "3",
          "abc",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "סוכמים את הערכים, לא את המפתחות.",
        "explanation": "1+2+3=6. אם היינו עוברים על d עצמו היינו מקבלים מפתחות, וחיבורם היה נכשל או נותן תוצאה אחרת."
      },
      {
        "id": "pm-7",
        "type": "write",
        "prompt": "כתבו פונקציה in_range(n, a, b) שמחזירה True אם n בין a ל-b כולל (a <= n <= b).",
        "starter": "def in_range(n, a, b):\n    ",
        "tests": [
          {
            "expr": "in_range(5, 1, 10)",
            "expected": true
          },
          {
            "expr": "in_range(1, 1, 10)",
            "expected": true
          },
          {
            "expr": "in_range(10, 1, 10)",
            "expected": true
          },
          {
            "expr": "in_range(0, 1, 10)",
            "expected": false
          }
        ],
        "hint": "return a <= n <= b",
        "explanation": "בפייתון אפשר לשרשר השוואות: a <= n <= b. הקצוות כלולים, כמו BETWEEN ב-SQL.",
        "solution": "def in_range(n, a, b):\n    return a <= n <= b"
      },
      {
        "id": "pm-8",
        "type": "mcq",
        "prompt": "איך סופרים כמה פעמים מופיע כל איבר ברשימה words, לתוך מילון?",
        "choices": [
          "יוצרים counts = {}, ואז לכל w: counts[w] = counts.get(w, 0) + 1",
          "counts = set(words) ואז len בלבד — זה נותן לכל מילה את מספר המופעים",
          "print(words.count) בלי סוגריים סופר אוטומטית הכל",
          "אי אפשר לספור עם מילון"
        ],
        "answer": 0,
        "hint": "get(w, 0) מחזיר 0 אם המפתח עוד לא קיים.",
        "explanation": "זו תבנית ספירה קלאסית. set(words) ישאיר כל מילה פעם אחת, בלי הספירה. גם words.count(w) בלולאה יעבוד, אבל מילון יעיל וברור."
      },
      {
        "id": "pm-9",
        "type": "write",
        "prompt": "התחילו מ-n = 10. כל עוד n קטן מ-100, הכפילו את n ב-2. בסוף הדפיסו את n (160).",
        "starter": "n = 10\n",
        "expectedStdout": "160",
        "hint": "while n < 100: n = n * 2, ואז print(n) מחוץ ללולאה.",
        "explanation": "10 → 20 → 40 → 80 → 160. ברגע ש-n=160 התנאי 160 < 100 נכשל, ומדפיסים 160. אם בודקים <= 100 מקבלים גם כן 160, כי 160 כבר לא קטן-או-שווה ל-100 אחרי ההכפלה מ-80.",
        "solution": "n = 10\nwhile n < 100:\n    n = n * 2\nprint(n)"
      },
      {
        "id": "pm-10",
        "type": "write",
        "prompt": "כתבו פונקציה unique_count(items) שמחזירה כמה ערכים ייחודיים יש ב-items.",
        "starter": "def unique_count(items):\n    ",
        "tests": [
          {
            "expr": "unique_count([1, 1, 2, 3, 3])",
            "expected": 3
          },
          {
            "expr": "unique_count([])",
            "expected": 0
          },
          {
            "expr": "unique_count([\"a\", \"b\", \"a\"])",
            "expected": 2
          }
        ],
        "hint": "return len(set(items))",
        "explanation": "set מסיר כפילויות, len סופר. גם רשימה ריקה צריכה להחזיר 0.",
        "solution": "def unique_count(items):\n    return len(set(items))"
      }
    ]
  }
]
  ;
  root.PYTHON_TOPICS = PYTHON_TOPICS;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { PYTHON_TOPICS };
  }
})(typeof window !== "undefined" ? window : globalThis);
