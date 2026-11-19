/* Data-track lesson copy. Used by the Learn tab. */
(function (root) {
  const DATA_LESSONS =
{
  "datascience": {
    "intro": "מדעי הנתונים משלב שיטות מדעיות, סטטיסטיקה, תכנות וידע תחומי כדי לחלץ ידע ותובנות מנתונים מובנים ולא מובנים, ולסייע בהחלטות ובחיזויים.",
    "items": [
      {
        "term": "Data Science",
        "title": "מהו מדעי הנתונים",
        "text": "התחום שואב ממתמטיקה, סטטיסטיקה, מדעי המחשב ומדעי המידע: כריית נתונים, למידת מכונה, אשכולות, הסקה סטטיסטית והדמיה. המטרה העיקרית היא להפיק תובנות שמסייעות לקבל החלטות ולחזות מצבים.",
        "code": "# דוגמאות לשאלות שמדעי הנתונים עוזר לענות עליהן\nquestions = [\n    'אילו לקוחות עלולים לעזוב?',\n    'מה צפוי להיות הביקוש בשבוע הבא?',\n    'איזה מוצר כדאי להמליץ?',\n]\nprint(len(questions))",
        "run": false,
        "sample": "3"
      },
      {
        "term": "Structured",
        "title": "נתונים מובנים (schema-on-write)",
        "text": "נתונים מובנים מוגדרים ומעוצבים לפי מבנה קבוע לפני השמירה — זה נקרא schema-on-write. הדוגמה הקלאסית היא מסד יחסים: שדות מוגדרים כמו מספר כרטיס או כתובת, ואפשר לשלוף אותם בקלות ב-SQL. יתרונות: נוח ללמידת מכונה, ידידותי למשתמש עסקי, ויש הרבה כלים בשלים. חסרונות: הייעוד הקבוע מגביל גמישות, ושינוי מבנה דורש זמן ומשאבים.",
        "code": "structured = {\n    'source': 'טבלת SQL',\n    'schema': 'on-write',\n    'examples': ['מספרי אשראי', 'כתובות', 'קובץ CSV'],\n}\nprint(structured['schema'])",
        "run": false,
        "sample": "on-write"
      },
      {
        "term": "Unstructured",
        "title": "נתונים לא מובנים (schema-on-read)",
        "text": "נתונים לא מובנים נשמרים בפורמט המקורי ומעובדים רק כשמשתמשים בהם — schema-on-read. דוגמאות: מיילים, פוסטים ברשתות, מצגות, צ'אטים, חיישני IoT ותמונות לוויין. יתרונות: גמישות ושפע מקורות. חסרונות: קשה יותר לשאילתות סטנדרטיות, ודורש כלים ומיומנות נוספים.",
        "code": "unstructured = [\n    'אימייל', 'פוסט בפייסבוק', 'הקלטה', 'תמונה', 'מצגת'\n]\nprint('schema-on-read')\nprint(len(unstructured))",
        "run": false,
        "sample": "schema-on-read\n5"
      },
      {
        "term": "Roles",
        "title": "תפקידים בארגון",
        "text": "בארגון יש שני זרמים עיקריים: שימוש בנתונים להחלטות ולחיזוי (שאלה עסקית, ניתוח, המלצה להנהלה), ויצירת מוצר נתונים (מודל או מערכת שנכנסים למוצר). אנליסט נתונים מתמקד בשאלות ובדיווח; מדען נתונים בונה מודלים וניסויים. תפקידים נוספים: מהנדס נתונים (צינורות וזרימות), מפתח AI, ומהנדס DevOps. בארגון קטן אותו אדם עשוי למלא כמה כובעים.",
        "code": "roles = {\n    'data analyst': 'שאלות, דוחות והחלטות',\n    'data scientist': 'מודלים, ניסויים וחיזוי',\n    'data engineer': 'צינורות נתונים וזרימות',\n}\nprint(roles['data scientist'])",
        "run": false,
        "sample": "מודלים, ניסויים וחיזוי"
      }
    ]
  },
  "libraries": {
    "intro": "ספריית פייתון היא אוסף קוד מוכן שאפשר להתקין ולייבא לתוכנית. מתקינים עם PIP, ומייבאים בפקודת import. בסבב הזה: PIP, import, NumPy ו-Pandas, ואיך נעזרים בהשלמה אוטומטית.",
    "items": [
      {
        "term": "library",
        "title": "מהי ספריית פייתון",
        "text": "ספרייה (library) מרכזת פונקציות ומבני נתונים לשימוש חוזר. במדעי הנתונים נפוצות NumPy (מערכים וחישובים), Pandas (עיבוד נתונים מובנים), ו-Matplotlib (הדמיה). במקום לכתוב הכל מאפס, מייבאים ספרייה ומשתמשים בכלים שלה.",
        "code": "libs = ['numpy', 'pandas', 'matplotlib']\nprint(', '.join(libs))",
        "run": false,
        "sample": "numpy, pandas, matplotlib"
      },
      {
        "term": "PIP",
        "title": "התקנת חבילות עם pip",
        "text": "PIP (Pip Installs Packages) הוא מנהל החבילות של פייתון. מתקינים מספרייה חיצונית בחלון CMD או טרמינל, לא בתוך מחברת: pip install שם_הספרייה. אחרי התקנה מוצלחת אפשר לייבא אותה בקוד. דוגמאות: pip install numpy ו-pip install pandas.",
        "code": "# הרצה בטרמינל / CMD, לא בתוך מחברת:\n# pip install numpy\n# pip install pandas\ncmd = 'pip install numpy'\nprint(cmd)",
        "run": false,
        "sample": "pip install numpy"
      },
      {
        "term": "import",
        "title": "ייבוא וכינוי (as)",
        "text": "אחרי ההתקנה מייבאים במחברת או בסקריפט. מקובל: import numpy as np ו-import pandas as pd. המילה as נותנת כינוי קצר: כל הפונקציות זמינות דרך np או pd. ב-Jupyter, אחרי np. אפשר ללחוץ Tab כדי לראות פונקציות, ו-Shift+Tab בתוך סוגריים של פונקציה מציג הסבר על הפרמטרים.",
        "code": "import numpy as np\nimport pandas as pd\n\narr = np.array([1, 2, 3])\nprint(type(arr))\nprint(pd.Series([10, 20]).tolist())",
        "run": false,
        "sample": "<class 'numpy.ndarray'>\n[10, 20]"
      }
    ]
  },
  "jupyter": {
    "intro": "Jupyter Notebook היא אפליקציית ווב ליצירת מחברות אינטראקטיביות עם קוד, הסברים ותמונות. מקובל להריץ אותה דרך הפצת Anaconda, שכוללת פייתון, R וכלים מדעיים.",
    "items": [
      {
        "term": "Anaconda",
        "title": "Anaconda ו-Jupyter",
        "text": "Anaconda היא הפצה חינמית של פייתון ו-R לעבודה מדעית. Jupyter Notebook הוא אחד הכלים שבה. מתקינים את Anaconda מ-anaconda.com/download לפי מערכת ההפעלה, ואחרי ההתקנה פותחים את Anaconda Navigator ומפעילים משם את Jupyter Notebook (כפתור Launch). אל תסגרו את חלון הטרמינל שנפתח.",
        "code": "# בדיקה ראשונה אחרי הפעלה במחברת:\nprint('Hey from Jupyter Notebook')",
        "run": false,
        "sample": "Hey from Jupyter Notebook"
      },
      {
        "term": "server + UI",
        "title": "שרת וממשק",
        "text": "Jupyter רץ משני חלקים: השרת עובד בחלון CMD/טרמינל במחשב שלכם. אם סוגרים את החלון הזה, המחברת עצמה נסגרת. הממשק (UI) נפתח בדפדפן בכתובת http://localhost:8888/",
        "code": "url = 'http://localhost:8888/'\nprint(url)",
        "run": false,
        "sample": "http://localhost:8888/"
      },
      {
        "term": "Edit / Command",
        "title": "מצב עריכה ומצב פקודה",
        "text": "במחברת שני מצבים עיקריים. במצב עריכה (Edit) אפשר לשנות את תוכן התא: להוסיף ולמחוק שורות קוד. במצב פקודה (Command) מנווטים בין תאים, בלי לשנות את התוכן של תא מסוים. ממצב פקודה לעריכה: Enter. ממצב עריכה לפקודה: Esc.",
        "code": "modes = {\n    'Enter': 'מפקודה לעריכה',\n    'Esc': 'מעריכה לפקודה',\n}\nprint(modes['Enter'])\nprint(modes['Esc'])",
        "run": false,
        "sample": "מפקודה לעריכה\nמעריכה לפקודה"
      },
      {
        "term": "Run",
        "title": "הרצת תאים וסדר ביצוע",
        "text": "מריצים תא מהתפריט Run, מכפתור ה-Play, או בקיצור Ctrl+Enter. משמאל לכל תא מופיע מונה שמראה באיזה סדר הוא הורץ, לא איפה הוא מופיע על המסך. Jupyter מתנהג כמו מפרש פייתון: מה שרץ כבר נשאר בזיכרון ומשפיע על תאים אחרים לפי סדר ההרצה. לדוגמה, אם תא 1 שם x='alon', אחר כך רצים תא שמשנה ל-x='yoav', ואז תא שמדפיס את x — יודפס yoav, גם אם תא ההדפסה מופיע מעל תא השינוי.",
        "code": "# סדר ההרצה, לא מיקום התאים, קובע את התוצאה\nx = 'alon'\nx = 'yoav'\nprint(x)",
        "run": false,
        "sample": "yoav"
      },
      {
        "term": "A / B / DD",
        "title": "הוספה ומחיקה של תאים",
        "text": "כפתור + מוסיף תא חדש מתחת לתא הנוכחי. במצב פקודה: B מוסיף תא מתחת, A מוסיף תא מעל. מחיקה: בתפריט Edit → Delete Cells, או במצב פקודה לוחצים D פעמיים (D ואז שוב D). חשוב להיות במצב פקודה (Esc) לפני קיצור המחיקה.",
        "code": "shortcuts = {\n    'A': 'תא חדש מעל',\n    'B': 'תא חדש מתחת',\n    'DD': 'מחיקת התא הנבחר (מצב פקודה)',\n    '+': 'תא חדש מתחת (מהתפריט)',\n}\nprint(shortcuts['A'])\nprint(shortcuts['DD'])",
        "run": false,
        "sample": "תא חדש מעל\nמחיקת התא הנבחר (מצב פקודה)"
      },
      {
        "term": "Markdown",
        "title": "תאי Markdown",
        "text": "אפשר להוסיף טקסט הסבר, כותרות ותמונות ליד הקוד. בוחרים תא ומשנים את סוגו ל-Markdown (מהתפריט: Cell Type, או במצב פקודה מקש M). כדי לראות את העיצוב צריך להריץ גם את תא ה-Markdown, בדיוק כמו תא קוד. # כותרת, **מודגש**.",
        "code": "# כותרת המחברת\n**שם:** Dana\n**עיר:** Tel Aviv\n\n# ואז בתאי קוד מדפיסים את אותן העובדות:\nprint('Dana')\nprint('Tel Aviv')",
        "run": false,
        "sample": "Dana\nTel Aviv"
      }
    ]
  },
  "numpy-intro": {
    "intro": "NumPy (Numerical Python) מוסיפה לפייתון מערכים רב-ממדיים ופונקציות מתמטיות יעילות. משתמשים בה בחישוב מדעי, למידת מכונה, אלגברה לינארית, סימולציה אקראית ועיבוד תמונה.",
    "items": [
      {
        "term": "np.array",
        "title": "יצירת מערך מתוך רשימה",
        "text": "np.array מקבל רשימת פייתון (או משתנה שמחזיק רשימה) ומחזיר מערך מסוג numpy.ndarray. אפשר גם להעביר מטריצה (רשימה של רשימות) ונקבל מערך דו-ממדי.",
        "code": "import numpy as np\n\narr = np.array([1, 2, 3, 4])\nprint(arr)\nprint(type(arr))\n\nmat = np.array([[1, 2], [3, 4]])\nprint(mat)",
        "run": false,
        "sample": "[1 2 3 4]\n<class 'numpy.ndarray'>\n[[1 2]\n [3 4]]"
      },
      {
        "term": "arrays vs lists",
        "title": "מערכי NumPy מול רשימות פייתון",
        "text": "מערכים דומים לרשימות אבל יעילים יותר למספרים רבים. מהירות: קומפקטיים ומהירים יותר. פונקציונליות: אפשר חיבור וכפל על כל המערך בבת אחת, וגם סטטיסטיקה ואלגברה לינארית — פעולות שלא קיימות כך על list. זיכרון: צורכים פחות זיכרון. תאימות: ספריות כמו SciPy, Matplotlib ו-Pandas מתבססות על מערכי NumPy.",
        "code": "import numpy as np\n\na = np.array([1, 2, 3])\nprint((a + 5).tolist())\n# רשימה רגילה לא מתנהגת כך:\n# [1, 2, 3] + 5  → TypeError",
        "run": false,
        "sample": "[6, 7, 8]"
      },
      {
        "term": "np.arange",
        "title": "טווח מספרים, כולל קפיצות",
        "text": "np.arange(start, stop) יוצר מערך מההתחלה ועד stop בלי לכלול את stop. np.arange(0, 10) הוא 0 עד 9. פרמטר שלישי הוא גודל הקפיצה: np.arange(0, 10, 2) נותן 0, 2, 4, 6, 8.",
        "code": "import numpy as np\n\nprint(np.arange(0, 10))\nprint(np.arange(0, 10, 2))",
        "run": false,
        "sample": "[0 1 2 3 4 5 6 7 8 9]\n[0 2 4 6 8]"
      },
      {
        "term": "np.zeros",
        "title": "מערך אפסים, גם דו-ממדי",
        "text": "np.zeros(n) יוצר מערך עם n אפסים (כברירת מחדל מסוג float). למערך דו-ממדי מעבירים צורה בסוגריים כפולים: np.zeros((2, 5)) הוא 2 שורות ו-5 עמודות. הפרמטר dtype קובע את סוג האיברים, למשל dtype=int לאפסים שלמים.",
        "code": "import numpy as np\n\nprint(np.zeros(5))\nprint(np.zeros((2, 5), dtype=int))",
        "run": false,
        "sample": "[0. 0. 0. 0. 0.]\n[[0 0 0 0 0]\n [0 0 0 0 0]]"
      },
      {
        "term": "np.linspace",
        "title": "מספרים במרווחים שווים",
        "text": "np.linspace(start, stop, num) מחזיר num מספרים בטווח, כולל את שני הקצוות, במרווחים שווים. np.linspace(0, 10, 3) נותן 0, 5, 10.",
        "code": "import numpy as np\n\nprint(np.linspace(0, 10, 3))",
        "run": false,
        "sample": "[ 0.  5. 10.]"
      }
    ]
  },
  "numpy-random": {
    "intro": "NumPy יודע לייצר נתונים אקראיים לסימולציות וללמידת מכונה. seed קובע את נקודת ההתחלה של מחולל המספרים, כדי שאפשר יהיה לשחזר תוצאות.",
    "items": [
      {
        "term": "np.random.rand",
        "title": "מספרים עשרוניים בין 0 ל-1",
        "text": "np.random.rand יוצר מספרים עשרוניים מקריים בטווח 0 עד 1. אפשר לקבוע את הגודל: np.random.rand(2, 5) הוא מטריצה של 2 שורות ו-5 עמודות.",
        "code": "import numpy as np\n\nnp.random.seed(0)\nprint(np.random.rand(2, 3).round(3))",
        "run": false,
        "sample": "[[0.549 0.715 0.603]\n [0.545 0.424 0.646]]"
      },
      {
        "term": "np.random.randint",
        "title": "מספרים שלמים בטווח",
        "text": "np.random.randint עובד דומה, אבל מחזיר שלמים. מעבירים טווח, ואפשר גם צורה. לדוגמה np.random.randint(0, 101, (2, 5)) הוא מטריצה 2×5 של שלמים מ-0 עד 100 (הגבול העליון לא כלול, כמו ב-arange).",
        "code": "import numpy as np\n\nnp.random.seed(42)\nprint(np.random.randint(0, 10, 4))\nprint(np.random.randint(0, 101, (2, 3)))",
        "run": false,
        "sample": "[6 3 7 4]\n[[82 86 74]\n [74 87 99]]"
      },
      {
        "term": "np.random.seed",
        "title": "שחזור רצף אקראי",
        "text": "seed הוא ערך התחלתי למחולל הפסבדו-אקראי. אותו seed תמיד יתחיל את אותו רצף. אם קובעים seed ואז קוראים ל-randint כמה פעמים, הקריאה הראשונה תמיד זהה, השנייה תמיד זהה לעצמה, וכן הלאה — המספרים משתנים בין קריאות באותו ריצה, אבל הרצף כולו חוזר אחרי אותו seed.",
        "code": "import numpy as np\n\nnp.random.seed(7)\nprint(np.random.randint(0, 100, 3))\nprint(np.random.randint(0, 100, 3))\n\nnp.random.seed(7)\nprint(np.random.randint(0, 100, 3))",
        "run": false,
        "sample": "[47 68 25]\n[67 83 23]\n[47 68 25]"
      }
    ]
  },
  "numpy-index": {
    "intro": "אחרי שיש מערך, מפעילים עליו שיטות (methods) וגם ניגשים לאיברים עם סוגריים מרובעים. shape היא תכונה, לא שיטה — בלי סוגריים.",
    "items": [
      {
        "term": "reshape",
        "title": "שינוי צורה",
        "text": "reshape משנה את צורת המערך לצורה אחרת, בלי לשנות את מספר האיברים. אם המספר לא מתאים — למשל 25 איברים ל-5×5 זה בסדר, אבל 24 ל-5×5 יזרוק שגיאה.",
        "code": "import numpy as np\n\na = np.arange(25)\nprint(a.reshape(5, 5))",
        "run": false,
        "sample": "[[ 0  1  2  3  4]\n [ 5  6  7  8  9]\n [10 11 12 13 14]\n [15 16 17 18 19]\n [20 21 22 23 24]]"
      },
      {
        "term": "max / min / argmax",
        "title": "קיצון ומיקום הקיצון",
        "text": "max ו-min מחזירים את הערך הגדול והקטן. argmax ו-argmin מחזירים את האינדקס שלהם. shape מחזיר את הצורה כ-tuple. שימו לב: shape היא תכונה (property) ולא שיטה, לכן כותבים arr.shape בלי סוגריים.",
        "code": "import numpy as np\n\na = np.array([1, 5, 2, 9, 3])\nprint(a.max(), a.min())\nprint(a.argmax(), a.argmin())\nprint(a.shape)",
        "run": false,
        "sample": "9 1\n3 0\n(5,)"
      },
      {
        "term": "[]",
        "title": "אינדקס, חיתוך ומטריצה",
        "text": "גישה לאיבר בודד נראית כמו ברשימה: a[0]. חיתוך a[0:7] מחזיר מערך חדש מהאינדקס 0 עד 7 לא כולל. a[7:] הוא מהאינדקס 7 עד הסוף. במטריצה: שורה ואז עמודה, אפשר a[row][col] או a[row, col]. אפשר גם להציב ערך לקטע: a[0:4] = 100.",
        "code": "import numpy as np\n\na = np.arange(10)\nprint(a[0:7])\nprint(a[7:])\n\nm = np.arange(1, 13).reshape(3, 4)\nprint(m[2, 3])",
        "run": false,
        "sample": "[0 1 2 3 4 5 6]\n[7 8 9]\n12"
      },
      {
        "term": "copy",
        "title": "העתק מול תצוגה (view)",
        "text": "מערך NumPy חי בזיכרון משותף. אם כותבים new = original או חותכים קטע בלי copy, שינוי ב-new עלול לשנות גם את המקור. כדי לשכפל באמת משתמשים ב-copy() — זה יוצר העתק נפרד, והמקור נשאר כמו שהוא.",
        "code": "import numpy as np\n\noriginal = np.array([1, 2, 3, 4])\nview = original[:2]\nview[:] = 100\nprint('view:', original)\n\noriginal = np.array([1, 2, 3, 4])\ndup = original.copy()\ndup[0] = 100\nprint('copy:', original, dup)",
        "run": false,
        "sample": "view: [100 100   3   4]\ncopy: [1 2 3 4] [100   2   3   4]"
      }
    ]
  },
  "numpy-ops": {
    "intro": "אפשר לסנן מערך לפי תנאי, לבצע חשבון על כל האיברים בבת אחת, ולסכם לפי שורות או עמודות עם axis.",
    "items": [
      {
        "term": "[condition]",
        "title": "סינון מותנה",
        "text": "כותבים תנאי בתוך סוגריים מרובעים, ומקבלים רק את האיברים שמקיימים אותו. תנאים מורכבים נכתבים עם & (וגם) ו-| (או), וכל חלק בסוגריים: a[(a > 4) & (a < 10)].",
        "code": "import numpy as np\n\na = np.arange(11)\nprint(a[a > 4])\nprint(a[(a > 4) & (a < 10)])",
        "run": false,
        "sample": "[ 5  6  7  8  9 10]\n[5 6 7 8 9]"
      },
      {
        "term": "+ *",
        "title": "חשבון על כל המערך",
        "text": "אפשר לחבר מספר לכל איבר (a + 5) או לחבר שני מערכים באותו גודל איבר-איבר. ברשימת פייתון רגילה היינו צריכים לולאה; ב-NumPy זה נעשה בבת אחת.",
        "code": "import numpy as np\n\na = np.arange(5)\nb = np.array([10, 10, 10, 10, 10])\nprint((a + 5).tolist())\nprint((a + b).tolist())",
        "run": false,
        "sample": "[5, 6, 7, 8, 9]\n[10, 11, 12, 13, 14]"
      },
      {
        "term": "sum / mean / axis",
        "title": "סכום, ממוצע וציר",
        "text": "sum ו-mean על כל המערך מחזירים מספר אחד. במערך דו-ממדי, axis=0 מחשב לאורך השורות — כלומר סכום (או ממוצע) לכל עמודה. axis=1 מחשב לאורך העמודות — סכום לכל שורה.",
        "code": "import numpy as np\n\nm = np.array([[1, 2, 3], [4, 5, 6]])\nprint(m.sum(), m.mean())\nprint(m.sum(axis=0))\nprint(m.sum(axis=1))",
        "run": false,
        "sample": "21 3.5\n[5 7 9]\n[ 6 15]"
      }
    ]
  },
  "pandas-series": {
    "intro": "Pandas (Python Data Analysis Library) היא ספרייה לעיבוד ולניתוח נתונים מובנים: ניקוי, מיזוג, סטטיסטיקה, קריאה מ-CSV/Excel/SQL, וטיפול בערכים חסרים. כאן נכיר את Series — מערך חד-ממדי עם תוויות.",
    "items": [
      {
        "term": "pd.Series",
        "title": "יצירת Series מרשימה",
        "text": "Series הוא עצם דמוי מערך חד-ממדי שיכול להחזיק כל טיפוס: מספרים, מחרוזות, אובייקטים. pd.Series([10, 20, 30]) יוצר סדרה עם אינדקס מספרי ברירת מחדל 0, 1, 2. בהדפסה רואים את האינדקס בעמודה אחת ואת הערך בעמודה השנייה.",
        "code": "import pandas as pd\n\ns = pd.Series([10, 20, 30])\nprint(s.tolist())\nprint(list(s.index))",
        "run": false,
        "sample": "[10, 20, 30]\n[0, 1, 2]"
      },
      {
        "term": "index",
        "title": "תוויות מותאמות ואינדקס כפול",
        "text": "אפשר להעביר index= עם רשימת תוויות. ניגשים לפי התווית (s['b']) או לפי מיקום עם s.iloc[1]. בניגוד למילון, Pandas מאפשר תוויות כפולות: תווית ייחודית מחזירה ערך בודד, ותווית כפולה מחזירה תת-Series עם כל ההתאמות. טיפ: s.index.is_unique בודק אם אין כפילויות.",
        "code": "import pandas as pd\n\ns = pd.Series([10, 20, 30], index=['a', 'b', 'c'])\nprint(s['b'])\nprint(s.iloc[1])\nprint(s.index.is_unique)",
        "run": false,
        "sample": "20\n20\nTrue"
      },
      {
        "term": "dict",
        "title": "יצירה ממילון ו-keys",
        "text": "אם מעבירים מילון ל-Series, המפתחות הופכים לאינדקס והערכים לנתון. s.keys() מחזיר את האינדקס, שמתנהג כמו רשימה של התוויות.",
        "code": "import pandas as pd\n\ns = pd.Series({'apple': 3, 'banana': 5})\nprint(s.to_dict())\nprint(list(s.keys()))",
        "run": false,
        "sample": "{'apple': 3, 'banana': 5}\n['apple', 'banana']"
      },
      {
        "term": "+",
        "title": "חיבור לפי אינדקס ו-NaN",
        "text": "האופרטור + מחבר שני Series לפי תווית משותפת. בתוויות שאינן חופפות Pandas שם NaN, כי אין לו ערך לחבר. זה לא שרשור רשימות — זה חיבור לפי מפתח.",
        "code": "import pandas as pd\n\na = pd.Series({'a': 1, 'b': 2, 'c': 3})\nb = pd.Series({'b': 10, 'c': 20, 'd': 30})\nprint((a + b).to_dict())",
        "run": false,
        "sample": "{'a': nan, 'b': 12.0, 'c': 23.0, 'd': nan}"
      },
      {
        "term": "add / fill_value",
        "title": "add עם ערך ברירת מחדל",
        "text": "s.add(other, fill_value=0) מחבר גם הוא לפי אינדקס, אבל בתווית חסרה ישתמש בערך שנתתם במקום NaN. כך a+d ו-b+a לא יישארו ריקים. dtype מציג את סוג הערכים, ו-astype ממיר לסוג אחר (אם ההמרה לא אפשרית תיזרק שגיאה).",
        "code": "import pandas as pd\n\na = pd.Series({'a': 1, 'b': 2, 'c': 3})\nb = pd.Series({'b': 10, 'c': 20, 'd': 30})\nprint(a.add(b, fill_value=0).astype(int).to_dict())",
        "run": false,
        "sample": "{'a': 1, 'b': 12, 'c': 23, 'd': 30}"
      }
    ]
  },
  "pandas-dataframe": {
    "intro": "DataFrame הוא מבנה דו-ממדי עם שורות ועמודות מתויגות — כמו טבלה באקסל או ב-SQL. כל עמודה היא Series שחולקת אינדקס משותף. כאן ניצור טבלאות, נטען CSV, ונכיר את השיטות הבסיסיות לבדיקה.",
    "items": [
      {
        "term": "DataFrame",
        "title": "מהו DataFrame?",
        "text": "עד עכשיו עבדנו עם Series — מבנה חד-ממדי שמקשר תווית לערך אחד. בנתונים אמיתיים יש כמה מאפיינים לכל רשומה, כמו טבלה. DataFrame הוא מבנה דו-ממדי, ניתן לשינוי בגודל, עם צירים מתויגים (שורות ועמודות). הוא מתאים לניקוי, המרה, סטטיסטיקה והכנה ללמידת מכונה, ויכול להחזיק טיפוסים שונים: מספרים, מחרוזות, רשימות ומילונים. בפנים כל עמודה היא Series. לכן DataFrame הוא אוסף של Series עם אינדקס משותף.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame([[1, 2], [3, 4]], columns=['A', 'B'])\nprint(list(df.columns))\nprint(df['A'].tolist())\nprint(type(df['A']).__name__)",
        "run": false,
        "sample": "['A', 'B']\n[1, 3]\nSeries"
      },
      {
        "term": "pd.DataFrame",
        "title": "יצירה ממטריצה, עם index ו-columns",
        "text": "pd.DataFrame(מקור) בונה טבלה מהמקור שמוסרים. אם מעבירים מטריצה (רשימת רשימות), מתקבלים אינדקסים מספריים כברירת מחדל גם לשורות וגם לעמודות. אפשר להוסיף תוויות משלכם: index= לשורות ו-columns= לעמודות. סדר הרשימה קובע את סדר התוויות. כמו ב-Series, תוויות מותאמות לא מחליפות את האינדקס המספרי — הן שכבה נוספת, ואפשר לגשת גם לפי מיקום וגם לפי תווית.",
        "code": "import pandas as pd\n\ndata = [[1, 2], [3, 4]]\ndf = pd.DataFrame(data, columns=['A', 'B'], index=['row1', 'row2'])\nprint(df.values.tolist())\nprint(list(df.index))\nprint(list(df.columns))",
        "run": false,
        "sample": "[[1, 2], [3, 4]]\n['row1', 'row2']\n['A', 'B']"
      },
      {
        "term": "read_csv",
        "title": "טעינת קובץ CSV",
        "text": "בגלל המבנה הטבלאי, DataFrame יכול לייצג טבלת SQL או קובץ CSV. pd.read_csv(נתיב) טוען קובץ מהמחשב לטבלה: מעבירים את הנתיב המלא של הקובץ. ב-Mac: לוחצים ימין על הקובץ ב-Finder, מחזיקים Option ובוחרים Copy as path name. ב-Windows: מחזיקים Shift, לוחצים ימין, ובוחרים Copy as path. במחברת או כאן אפשר גם לקרוא מתוך מחרוזת עם io.StringIO לצורך תרגול.",
        "code": "import pandas as pd\nimport io\n\ncsv = 'name,age\\nDana,20\\nRoei,30'\ndf = pd.read_csv(io.StringIO(csv))\nprint(list(df.columns))\nprint(df['age'].tolist())",
        "run": false,
        "sample": "['name', 'age']\n[20, 30]"
      },
      {
        "term": "head / tail / columns / index",
        "title": "צפייה ראשונית בטבלה",
        "text": "df.columns מחזיר את שמות העמודות, ו-df.index את אינדקס השורות. df.head(n) מחזיר את n השורות הראשונות (למשל head(2) — שתיים ראשונות), ו-df.tail(n) את n האחרונות.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'a': [10, 20, 30, 40], 'b': [1, 2, 3, 4]})\nprint(list(df.columns))\nprint(df.head(2)['a'].tolist())\nprint(df.tail(1)['a'].tolist())",
        "run": false,
        "sample": "['a', 'b']\n[10, 20]\n[40]"
      },
      {
        "term": "info / describe",
        "title": "מידע כללי וסטטיסטיקות",
        "text": "df.info() מציג מידע כללי: תווית וסוג של כל עמודה, וכמות הזיכרון שהטבלה תופסת. df.describe() מחזיר סטטיסטיקה על עמודות מספריות: ממוצע, סטיית תקן, מינימום, מקסימום ועוד. df.describe().transpose() או בקצרה df.describe().T הופך את התצוגה: שמות העמודות עוברים לשורות, והמדדים הסטטיסטיים לעמודות — נוח כשיש הרבה עמודות.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'a': [10, 20, 30], 'b': [2, 4, 6]})\nprint(df.describe().loc['mean', 'a'])\nprint(list(df.describe().T.index))",
        "run": false,
        "sample": "20.0\n['a', 'b']"
      }
    ]
  },
  "pandas-select": {
    "intro": "אחרי שיש DataFrame, בוחרים עמודות, מוסיפים או מוחקים אותן, קובעים אינדקס, וניגשים לפי מיקום (iloc) או תווית (loc). אחר כך מסננים שורות לפי תנאים — כמו בשאילתת SQL, אבל עם תחביר של Pandas.",
    "items": [
      {
        "term": "בחירת עמודות",
        "title": "בחירה, יצירה ועדכון של עמודות",
        "text": "df['שם'] מחזיר עמודה אחת (Series). כמה עמודות בוחרים עם רשימה: df[['col1', 'col2']]. אם שני העמודות מאותו טיפוס אפשר לחבר אותן ב-+. כדי ליצור עמודה חדשה או לעדכן קיימת, כותבים בצד שמאל שם בסוגריים מרובעים: df['new_col'] = df['col1'] + df['col2'].",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'a': [1, 2], 'b': [10, 20]})\nprint(df['a'].tolist())\nprint(df[['a', 'b']].values.tolist())\ndf['sum'] = df['a'] + df['b']\nprint(df['sum'].tolist())",
        "run": false,
        "sample": "[1, 2]\n[[1, 10], [2, 20]]\n[11, 22]"
      },
      {
        "term": "drop",
        "title": "מחיקת עמודה או שורה",
        "text": "df.drop(...) מסיר עמודה או שורה ומחזיר DataFrame חדש — המקור לא משתנה, אלא אם מעבירים inplace=True, או דורסים את המשתנה בתוצאה. הציר axis קובע מה מוחקים: axis=0 (ברירת המחדל) מוחק שורה לפי האינדקס, ו-axis=1 מוחק עמודה לפי שמה. לדוגמה: df.drop('col1', axis=1) מוחק עמודה, ו-df.drop(3, axis=0) מוחק את השורה באינדקס 3.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'a': [1, 2, 3], 'b': [10, 20, 30]})\nout = df.drop('b', axis=1)\nprint(list(out.columns))\ndf.drop(0, axis=0, inplace=True)\nprint(df['a'].tolist())",
        "run": false,
        "sample": "['a']\n[2, 3]"
      },
      {
        "term": "set_index / reset_index",
        "title": "קביעת אינדקס והחזרתו לעמודה",
        "text": "df.set_index('עמודה') הופך עמודה לאינדקס השורות. אחרי כן העמודה הזו כבר לא מופיעה בין עמודות הטבלה. df.reset_index() מחזיר את האינדקס להיות עמודה רגילה, ומציב אינדקס מספרי חדש. בשניהם אפשר inplace=True כדי לשנות את הטבלה המקורית.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'id': ['p1', 'p2'], 'n': [10, 20]})\ndf = df.set_index('id')\nprint(list(df.index))\nprint(list(df.columns))\ndf = df.reset_index()\nprint(list(df.columns))",
        "run": false,
        "sample": "['p1', 'p2']\n['n']\n['id', 'n']"
      },
      {
        "term": "iloc / loc",
        "title": "גישה לפי מיקום ולפי תווית",
        "text": "df.iloc[] ניגש לפי מיקום מספרי: df.iloc[0] היא השורה הראשונה, ו-df.iloc[0:4] הוא טווח כמו בפייתון (עד 4, בלי 4). df.loc[] ניגש לפי תווית האינדקס: שורה אחת, או כמה תוויות ברשימה, למשל df.loc[['row1', 'row2']].",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'n': [10, 20, 30, 40]}, index=['a', 'b', 'c', 'd'])\nprint(int(df.iloc[0]['n']))\nprint(df.iloc[1:3]['n'].tolist())\nprint(df.loc[['a', 'c']]['n'].tolist())",
        "run": false,
        "sample": "10\n[20, 30]\n[10, 30]"
      },
      {
        "term": "concat",
        "title": "שרשור טבלאות",
        "text": "pd.concat([df1, df2]) מחבר שני DataFrame-ים. אם שמות העמודות או מספרן לא תואמים, Pandas ישלים את החסר ב-NaN. פעם היה גם df.append() להוספת שורה, אבל השיטה הזו הוצאה משימוש ולא מומלץ להשתמש בה — עדיף concat.",
        "code": "import pandas as pd\n\na = pd.DataFrame({'x': [1, 2]})\nb = pd.DataFrame({'x': [3]})\nout = pd.concat([a, b], ignore_index=True)\nprint(out['x'].tolist())",
        "run": false,
        "sample": "[1, 2, 3]"
      },
      {
        "term": "סינון לפי תנאים",
        "title": "מסכה בוליאנית, אופרטורים ו-between",
        "text": "תנאי כמו df['population'] > 50 מחזיר Series של True/False. כדי לקבל את השורות שעומדות בתנאי, מעבירים את המסכה לסוגריים: df[df['population'] > 50]. כמה תנאים מחברים עם אופרטורים של Pandas (לא and/or/not של פייתון): & ל-AND, | ל-OR, ו-~ ל-NOT. חובה סוגריים סביב כל תנאי. Series.between(a, b) מסנן ערכים בטווח. inclusive='both' כולל את שני הקצוות (למשל חשבונות בין 10 ל-20 כולל 20).",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({\n    'country': ['USA', 'Canada', 'Italy'],\n    'population': [80, 40, 60],\n    'year': [1776, 1867, 1861],\n})\nprint(df[df['population'] > 50]['country'].tolist())\nprint(df[(df['population'] > 50) & ((df['country'] == 'USA') | (df['country'] == 'Canada'))]['country'].tolist())\nprint(df[~(df['year'] == 1776)]['country'].tolist())",
        "run": false,
        "sample": "['USA', 'Italy']\n['USA']\n['Canada', 'Italy']"
      }
    ]
  },
  "pandas-transform": {
    "intro": "כשפונקציות מובנות לא מספיקות, מעבירים פונקציה משלכם עם apply (עמודה אחת) או np.vectorize (כמה עמודות). אחר כך ממיינים, סופרים ערכים, מחליפים, מזהים כפילויות, ודולים את השורות הגדולות או הקטנות ביותר.",
    "items": [
      {
        "term": "apply",
        "title": "פונקציה מותאמת על עמודה",
        "text": "לפעמים אין ב-Pandas פונקציה מוכנה למה שצריך. אז כותבים פונקציית פייתון ומפעילים אותה על כל ערך בעמודה עם apply. דוגמה מהקורס: לחלץ ארבע הספרות האחרונות של מספר כרטיס. ממירים למחרוזת וחותכים ב-[-4:]: def last_four(num): return str(num)[-4:] ואז df['last_four'] = df['CC Number'].apply(last_four).",
        "code": "import pandas as pd\n\ndef last_four(num):\n    return str(num)[-4:]\n\ndf = pd.DataFrame({'CC Number': [3560325168603410, 1234567890123456]})\ndf['last_four'] = df['CC Number'].apply(last_four)\nprint(df['last_four'].tolist())",
        "run": false,
        "sample": "['3410', '3456']"
      },
      {
        "term": "np.vectorize",
        "title": "פונקציה על כמה עמודות יחד",
        "text": "כשהפונקציה צריכה כמה עמודות בבת אחת, משתמשים ב-np.vectorize: היא מקבלת פונקציית פייתון ומתאימה אותה לעבודה עם מערכים. דוגמה מהקורס: quality(total_bill, tip) מחזירה 'Generous' אם tip/total_bill > 0.25, אחרת 'Not Generous'. אחרי כן: df['quality'] = np.vectorize(quality)(df['total_bill'], df['tip']). בסיכום השיעור מופיעה גם דוגמה לחישוב אחוז טיפ עם round.",
        "code": "import numpy as np\nimport pandas as pd\n\ndef quality(total_bill, tip):\n    if tip / total_bill > 0.25:\n        return 'Generous'\n    return 'Not Generous'\n\ndf = pd.DataFrame({'total_bill': [20, 10], 'tip': [3, 3]})\ndf['quality'] = np.vectorize(quality)(df['total_bill'], df['tip'])\nprint(df['quality'].tolist())",
        "run": false,
        "sample": "['Not Generous', 'Generous']"
      },
      {
        "term": "sort_values",
        "title": "מיון שורות",
        "text": "df.sort_values(...) ממיין שורות לפי ערכי עמודה. ascending=True (ברירת המחדל) מהקטן לגדול, ו-False מהגדול לקטן. אפשר למסור רשימת עמודות: המיון הראשון לפי העמודה הראשונה, ואז לפי השנייה, וכן הלאה.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'name': ['A', 'B', 'C'], 'tip': [5, 1, 5], 'n': [2, 9, 1]})\nprint(df.sort_values(['tip', 'n'], ascending=False)['name'].tolist())",
        "run": false,
        "sample": "['A', 'C', 'B']"
      },
      {
        "term": "value_counts / unique / nunique",
        "title": "ספירה וערכים ייחודיים",
        "text": "value_counts() מחזיר כמה פעמים מופיע כל ערך בעמודה (למשל כמה Male/Female). unique() מחזיר את הערכים הייחודיים בלי כפילויות, ו-nunique() את מספרם. אפשר גם לשלב: למשל value_counts על כמה עמודות יחד כדי לראות שכיחות לפי מין ולפי רמת 'נדיבות'.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'sex': ['Male', 'Female', 'Male', 'Male']})\nprint(df['sex'].value_counts().to_dict())\nprint(sorted(df['sex'].unique().tolist()))\nprint(int(df['sex'].nunique()))",
        "run": false,
        "sample": "{'Male': 3, 'Female': 1}\n['Female', 'Male']\n2"
      },
      {
        "term": "replace / map",
        "title": "החלפת ערכים",
        "text": "replace מחליף ערכים לפי רשימות: הסדר ברשימת הישן מתאים לסדר ברשימת החדש, למשל החלפת Female/Male ב-F/M. map עושה החלפה דומה, אבל עם מילון {ישן: חדש} — לפעמים קריא יותר.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'sex': ['Female', 'Male', 'Female']})\nprint(df['sex'].replace(['Female', 'Male'], ['F', 'M']).tolist())\nprint(df['sex'].map({'Female': 'F', 'Male': 'M'}).tolist())",
        "run": false,
        "sample": "['F', 'M', 'F']\n['F', 'M', 'F']"
      },
      {
        "term": "duplicated / drop_duplicates",
        "title": "כפילויות",
        "text": "duplicated() מחזיר Series בוליאני: להופעה הראשונה של ערך יתקבל False, ולכל הופעה נוספת True. drop_duplicates() מוחק מהטבלה את השורות הכפולות ומשאיר את ההופעה הראשונה.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'a': [1, 2, 1, 1]})\nprint(df['a'].duplicated().tolist())\nprint(df.drop_duplicates()['a'].tolist())",
        "run": false,
        "sample": "[False, False, True, True]\n[1, 2]"
      },
      {
        "term": "nlargest / nsmallest / sample",
        "title": "הערכים הגדולים והקטנים, ודגימה",
        "text": "nlargest(n, 'col') מחזיר n השורות עם הערכים הגדולים ביותר בעמודה, ו-nsmallest את הקטנים ביותר. sample(n) מחזיר n שורות אקראיות, ו-sample(frac=0.1) כ-10% מהשורות באקראי. בדגימה אקראית כדאי לקבע random_state אם רוצים תוצאה חוזרת.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'name': ['A', 'B', 'C', 'D'], 'tip': [1, 9, 3, 7]})\nprint(df.nlargest(2, 'tip')['name'].tolist())\nprint(df.nsmallest(1, 'tip')['name'].tolist())",
        "run": false,
        "sample": "['B', 'D']\n['A']"
      }
    ]
  },
  "pandas-missing": {
    "intro": "ערכים חסרים הם בעיה נפוצה במדעי הנתונים. לפני שמטפלים מחליטים: להשאיר NaN, למחוק, או למלא. אחר כך מזהים חסרים ב-Pandas עם isnull/notnull, ומשתמשים ב-dropna ו-fillna.",
    "items": [
      {
        "term": "אסטרטגיות",
        "title": "להשאיר, למחוק או למלא — יתרונות וחסרונות",
        "text": "יש שלוש דרכים עיקריות. להשאיר NaN: קל, והנתונים נשארים מקוריים ומציאותיים; אבל ספריות רבות לא תומכות ב-NaN, ולפעמים NaN מתפרש בטעות כ-0. למחוק: קל, ואפשר למחוק לפי כללים; אבל מוחקים גם ערכים טובים באותה שורה (אובדן מידע), והאלגוריתם עלול לא לפגוש סוגים מסוימים של נתונים. למלא: שומרים את כל השורות ואפשר להשתמש בכל הכלים; אבל קשה לבחור ערך נכון, וערך שגוי עלול לפגוע באיכות המודל.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'score': [10, None, 30]})\nprint(df['score'].isna().tolist())\nprint(df['score'].fillna(0).tolist())",
        "run": false,
        "sample": "[False, True, False]\n[10.0, 0.0, 30.0]"
      },
      {
        "term": "שורות מול עמודות",
        "title": "מה למחוק, ומתי",
        "text": "אם מחליטים למחוק: הגיוני למחוק שורה כשרוב הערכים בה חסרים, ולמחוק עמודה שלמה כשברוב השורות היא ריקה. מומלץ לחשב קודם איזה אחוז מהנתונים יימחק. אם האחוז גבוה, עדיף לנסות לאסוף נתונים מחדש במקום למחוק מהמקור הקיים.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'A': [1, None, 3], 'B': [None, None, 2]})\nmiss = df.isna().mean() * 100\nprint({k: round(v) for k, v in miss.to_dict().items()})",
        "run": false,
        "sample": "{'A': 33, 'B': 67}"
      },
      {
        "term": "isnull / notnull",
        "title": "זיהוי ערכים חסרים",
        "text": "ב-Pandas ערך חסר מיוצג כ-np.nan. לבדיקה אם ערך בודד הוא nan משתמשים ב-is ולא ב-==, כי np.nan == np.nan הוא False. מעשית בטבלה: isnull() (או isna()) מחזיר True במקומות החסרים, ו-notnull() את ההפך. כך אפשר לקחת למשל רק שורות שיש בהן ערך ב-pre_movie_score: df[df['pre_movie_score'].notnull()]. וגם תנאי משולב: שם פרטי קיים אבל ציון מקדים חסר: df[(df['first_name'].notnull()) & (df['pre_movie_score'].isnull())].",
        "code": "import numpy as np\nimport pandas as pd\n\nprint(np.nan is np.nan)\nprint(np.nan == np.nan)\ndf = pd.DataFrame({'first_name': ['Ana', None, 'Ben'], 'pre_movie_score': [8, None, 7]})\nprint(df['first_name'].isnull().tolist())\nprint(df[df['pre_movie_score'].notnull()]['first_name'].tolist())",
        "run": false,
        "sample": "True\nFalse\n[False, True, False]\n['Ana', 'Ben']"
      },
      {
        "term": "dropna",
        "title": "מחיקת שורות או עמודות עם חסרים",
        "text": "dropna() מוחק שורות שיש בהן לפחות ערך חסר אחד (נשארות רק שורות מלאות). thresh=n משאיר שורה רק אם יש בה לפחות n ערכים שאינם חסרים (thresh=1 מוחק רק שורות שכל ערכיהן חסרים). axis=0 (ברירת מחדל) מוחק שורות, ו-axis=1 מוחק עמודות. subset=['col1', 'col2'] מיישם את הבדיקה רק על העמודות האלה. זהירות: אם משלבים subset של עמודה אחת עם thresh גדול מ-1, לא תישאר אף שורה.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'A': [None, 2, 3], 'B': [10, None, 30], 'C': [100, 200, 300]})\nprint(df.dropna().values.tolist())\nprint(df.dropna(subset=['A', 'B']).values.tolist())",
        "run": false,
        "sample": "[[3.0, 30.0, 300.0]]\n[[3.0, 30.0, 300.0]]"
      },
      {
        "term": "fillna",
        "title": "מילוי ערכים חסרים",
        "text": "fillna(ערך) מחליף את כל החסרים (בטבלה או בעמודה) בערך שמסרתם, למשל 0. אפשר גם למלא בחישוב, למשל ממוצע העמודה: df['post_movie_score'] = df['post_movie_score'].fillna(df['post_movie_score'].mean()). כך נשמרות כל השורות ואין NaN בעמודה.",
        "code": "import pandas as pd\n\ndf = pd.DataFrame({'B': [10, None, None, 40, 50]})\nprint(df['B'].fillna(0).tolist())\nprint(df['B'].fillna(df['B'].mean()).tolist())",
        "run": false,
        "sample": "[10.0, 0.0, 0.0, 40.0, 50.0]\n[10.0, 33.333333333333336, 33.333333333333336, 40.0, 50.0]"
      }
    ]
  }
};

  root.DATA_LESSONS = DATA_LESSONS;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { DATA_LESSONS };
  }
})(typeof window !== "undefined" ? window : globalThis);
