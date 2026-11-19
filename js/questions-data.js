/* Data Science / NumPy / Pandas question bank. Available in the browser and in Node. */
(function (root) {
  const DATA_TOPICS =
[
  {
    "id": "datascience",
    "title": "מבוא למדעי הנתונים",
    "short": "מבוא",
    "icon": "1",
    "intro": "מהו מדעי הנתונים, ההבדל בין נתונים מובנים ללא מובנים, ואיך נראים התפקידים בארגון.",
    "questions": [
      {
        "id": "ds-1",
        "prompt": "מהו מדעי הנתונים?",
        "choices": [
          "תחום שמשתמש בשיטות מדעיות, סטטיסטיקה ותכנות כדי לחלץ תובנות מנתונים ולסייע בהחלטות ובחיזויים",
          "רק בניית אתרים וממשקי משתמש",
          "רק תחזוקת שרתים ורשתות",
          "רק ציור גרפים ידניים בלי נתונים"
        ],
        "answer": 0,
        "hint": "חושבים על החלטות, חיזוי ונתונים מובנים ולא מובנים.",
        "explanation": "מדעי הנתונים משלב מתמטיקה, סטטיסטיקה ומדעי המחשב כדי להפיק ידע מנתונים ולתמוך בהחלטות ובחיזויים.",
        "type": "mcq"
      },
      {
        "id": "ds-2",
        "prompt": "מה מתאר schema-on-write?",
        "choices": [
          "המבנה מוגדר לפני שהנתונים נשמרים, כמו בטבלת SQL",
          "המבנה נקבע רק ברגע הקריאה, כמו במייל או בתמונה",
          "אין בכלל מבנה לנתונים",
          "רק שמירת קבצי וידאו"
        ],
        "answer": 0,
        "hint": "Write = בשמירה.",
        "explanation": "בנתונים מובנים המבנה נקבע לפני האחסון (schema-on-write). דוגמה קלאסית: מסד יחסים.",
        "type": "mcq"
      },
      {
        "id": "ds-3",
        "prompt": "איזה מהבאים הוא נתון לא מובנה (schema-on-read)?",
        "choices": [
          "טור כתובות בטבלת לקוחות",
          "פוסט ברשת חברתית",
          "קובץ CSV עם עמודות קבועות",
          "טבלת SQL של הזמנות"
        ],
        "answer": 1,
        "hint": "נשמר בפורמט המקורי ומעובד רק בשימוש.",
        "explanation": "פוסטים, מיילים, תמונות ומצגות הם לא מובנים: נשמרים כפי שהם ומקבלים מבנה בקריאה.",
        "type": "mcq"
      },
      {
        "id": "ds-4",
        "prompt": "מה ההבדל הטיפוסי בין אנליסט נתונים למדען נתונים?",
        "choices": [
          "אנליסט מתמקד בשאלות, דוחות והחלטות; מדען נתונים בונה מודלים, ניסויים וחיזויים",
          "אין הבדל, אלה שני שמות לאותו תפקיד תמיד",
          "מדען נתונים רק מתקין אנטי-וירוס",
          "אנליסט רק כותב HTML"
        ],
        "answer": 0,
        "hint": "שאלות מול מודלים.",
        "explanation": "שני התפקידים עובדים עם נתונים, אבל האנליסט קרוב יותר להחלטות ולדיווח, ומדען הנתונים קרוב יותר למודלים ולניסויים. בארגון קטן אדם אחד עשוי לעשות גם וגם.",
        "type": "mcq"
      },
      {
        "id": "ds-5",
        "prompt": "כתבו פונקציה data_kind(name) שמקבלת מחרוזת ומחזירה 'structured' עבור 'csv', 'sql', 'table' ו-'excel', ומחזירה 'unstructured' עבור 'email', 'image', 'tweet' ו-'audio'.",
        "starter": "def data_kind(name):\n    ",
        "tests": [
          {
            "expr": "data_kind('csv')",
            "expected": "structured"
          },
          {
            "expr": "data_kind('sql')",
            "expected": "structured"
          },
          {
            "expr": "data_kind('table')",
            "expected": "structured"
          },
          {
            "expr": "data_kind('excel')",
            "expected": "structured"
          },
          {
            "expr": "data_kind('email')",
            "expected": "unstructured"
          },
          {
            "expr": "data_kind('image')",
            "expected": "unstructured"
          },
          {
            "expr": "data_kind('tweet')",
            "expected": "unstructured"
          },
          {
            "expr": "data_kind('audio')",
            "expected": "unstructured"
          }
        ],
        "hint": "אפשר שני סטים (set) ובדיקת השתייכות.",
        "explanation": "נתונים מובנים מגיעים בפורמט עם מבנה מוכן (טבלאות, CSV, Excel). מייל, תמונה, ציוץ והקלטה נשמרים בפורמט המקורי.",
        "solution": "def data_kind(name):\n    structured = {'csv', 'sql', 'table', 'excel'}\n    if name in structured:\n        return 'structured'\n    return 'unstructured'",
        "type": "write"
      },
      {
        "id": "ds-6",
        "prompt": "כתבו פונקציה schema_moment(kind) שמקבלת 'structured' או 'unstructured' ומחזירה 'write' או 'read' בהתאם: מובנים הם schema-on-write, ולא מובנים הם schema-on-read.",
        "starter": "def schema_moment(kind):\n    ",
        "tests": [
          {
            "expr": "schema_moment('structured')",
            "expected": "write"
          },
          {
            "expr": "schema_moment('unstructured')",
            "expected": "read"
          }
        ],
        "hint": "structured → write, unstructured → read.",
        "explanation": "schema-on-write: המבנה נקבע בשמירה. schema-on-read: המבנה נקבע כשקוראים את הנתונים.",
        "solution": "def schema_moment(kind):\n    return 'write' if kind == 'structured' else 'read'",
        "type": "write"
      },
      {
        "id": "ds-7",
        "prompt": "שמרו במשתנה STRUCTURED רשימה עם שלושת המחרוזות הבאות בדיוק ובאותו סדר: 'SQL table', 'CSV', 'credit card numbers'.",
        "starter": "STRUCTURED = ",
        "tests": [
          {
            "expr": "STRUCTURED",
            "expected": [
              "SQL table",
              "CSV",
              "credit card numbers"
            ]
          }
        ],
        "hint": "רשימת מחרוזות בסוגריים מרובעים.",
        "explanation": "אלה דוגמאות קלאסיות לנתונים מובנים: טבלאות, קבצי CSV ושדות מוגדרים כמו מספר כרטיס.",
        "solution": "STRUCTURED = ['SQL table', 'CSV', 'credit card numbers']",
        "type": "write"
      },
      {
        "id": "ds-8",
        "prompt": "שמרו במשתנה UNSTRUCTURED רשימה עם המחרוזות 'email', 'social media post', 'satellite image' בסדר הזה.",
        "starter": "UNSTRUCTURED = ",
        "tests": [
          {
            "expr": "UNSTRUCTURED",
            "expected": [
              "email",
              "social media post",
              "satellite image"
            ]
          }
        ],
        "hint": "רשימה של שלוש מחרוזות.",
        "explanation": "מייל, פוסט ותמונת לוויין נשמרים בפורמט המקורי ומעובדים רק בשימוש.",
        "solution": "UNSTRUCTURED = ['email', 'social media post', 'satellite image']",
        "type": "write"
      },
      {
        "id": "ds-9",
        "prompt": "כתבו פונקציה role_focus(role) שמחזירה 'decisions' עבור 'analyst', 'models' עבור 'scientist', ו-'pipelines' עבור 'engineer'.",
        "starter": "def role_focus(role):\n    ",
        "tests": [
          {
            "expr": "role_focus('analyst')",
            "expected": "decisions"
          },
          {
            "expr": "role_focus('scientist')",
            "expected": "models"
          },
          {
            "expr": "role_focus('engineer')",
            "expected": "pipelines"
          }
        ],
        "hint": "מילון קטן או תנאי if.",
        "explanation": "אנליסט קרוב להחלטות, מדען נתונים למודלים, ומהנדס נתונים לצינורות ולזרימות.",
        "solution": "def role_focus(role):\n    return {'analyst': 'decisions', 'scientist': 'models', 'engineer': 'pipelines'}[role]",
        "type": "write"
      },
      {
        "id": "ds-10",
        "prompt": "צרו מילון ROLES שבו המפתחות הם 'analyst', 'scientist', 'engineer' והערכים בהתאמה 'reports', 'models', 'pipelines'.",
        "starter": "ROLES = ",
        "tests": [
          {
            "expr": "ROLES",
            "expected": {
              "analyst": "reports",
              "scientist": "models",
              "engineer": "pipelines"
            }
          }
        ],
        "hint": "מילון בסוגריים מסולסלים: מפתח: ערך.",
        "explanation": "כך אפשר למפות תפקיד לאחריות העיקרית שלו בארגון.",
        "solution": "ROLES = {'analyst': 'reports', 'scientist': 'models', 'engineer': 'pipelines'}",
        "type": "write"
      }
    ]
  },
  {
    "id": "libraries",
    "title": "ספריות ו-PIP",
    "short": "ספריות",
    "icon": "2",
    "intro": "איך מתקינים ספריית פייתון עם pip ואיך מייבאים אותה לקוד, כולל הכינויים המקובלים np ו-pd.",
    "questions": [
      {
        "id": "lib-1",
        "prompt": "מהו PIP?",
        "choices": [
          "מנהל חבילות שמתקין ומנהל ספריות פייתון",
          "סוג של מערך ב-NumPy",
          "עורך הטקסט של Jupyter בלבד",
          "מסד נתונים יחסי"
        ],
        "answer": 0,
        "hint": "Pip Installs Packages.",
        "explanation": "PIP מתקין ספריות חיצוניות מהטרמינל, למשל pip install numpy.",
        "type": "mcq"
      },
      {
        "id": "lib-2",
        "prompt": "איפה מריצים את הפקודה pip install numpy?",
        "choices": [
          "בחלון CMD או בטרמינל של המחשב",
          "רק בתוך תא Markdown",
          "רק בתוך קובץ CSV",
          "אין צורך להתקין, pip רץ לבד תמיד"
        ],
        "answer": 0,
        "hint": "התקנה נעשית מחוץ למחברת.",
        "explanation": "את pip מריצים בטרמינל/CMD. אחרי שההתקנה הצליחה, מייבאים במחברת עם import.",
        "type": "mcq"
      },
      {
        "id": "lib-3",
        "prompt": "מה הכינוי המקובל בייבוא NumPy?",
        "choices": [
          "import numpy as np",
          "import numpy as pd",
          "from numpy import pandas",
          "import pip as np"
        ],
        "answer": 0,
        "hint": "שתי אותיות, n ו-p.",
        "explanation": "import numpy as np הוא המוסכמה: כל הפונקציות זמינות דרך np, למשל np.array.",
        "type": "mcq"
      },
      {
        "id": "lib-4",
        "prompt": "מה יודפס?",
        "code": "import numpy as np\nprint(type(np.array([1, 2])).__name__)",
        "choices": [
          "ndarray",
          "list",
          "tuple",
          "Series"
        ],
        "answer": 0,
        "hint": "np.array מחזיר מערך של NumPy.",
        "explanation": "סוג המערך הוא numpy.ndarray, והשם הקצר הוא ndarray.",
        "type": "predict"
      },
      {
        "id": "lib-5",
        "prompt": "ייבאו את NumPy בכינוי np, וצרו משתנה arr שהוא np.array עם הרשימה [1, 2, 3].",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "arr.tolist()",
            "expected": [
              1,
              2,
              3
            ]
          },
          {
            "expr": "type(arr).__name__",
            "expected": "ndarray"
          }
        ],
        "hint": "import numpy as np ואז arr = np.array(...).",
        "explanation": "כך מייבאים את הספרייה ויוצרים מערך ראשון.",
        "solution": "import numpy as np\narr = np.array([1, 2, 3])",
        "type": "write"
      },
      {
        "id": "lib-6",
        "prompt": "ייבאו את Pandas בכינוי pd, וצרו משתנה s שהוא pd.Series עם הרשימה [10, 20, 30].",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "s.tolist()",
            "expected": [
              10,
              20,
              30
            ]
          }
        ],
        "hint": "import pandas as pd ואז pd.Series(...).",
        "explanation": "הכינוי המקובל ל-Pandas הוא pd, בדיוק כמו np ל-NumPy.",
        "solution": "import pandas as pd\ns = pd.Series([10, 20, 30])",
        "type": "write"
      },
      {
        "id": "lib-7",
        "prompt": "הדפיסו בדיוק את הפקודה שמתקינה את NumPy מהטרמינל: pip install numpy",
        "starter": "print(",
        "expectedStdout": "pip install numpy",
        "hint": "print עם המחרוזת המלאה.",
        "explanation": "ההתקנה נעשית בטרמינל בפקודה pip install ואז שם החבילה.",
        "solution": "print(\"pip install numpy\")",
        "type": "write"
      },
      {
        "id": "lib-8",
        "prompt": "הדפיסו בדיוק את הפקודה שמתקינה את Pandas: pip install pandas",
        "starter": "print(",
        "expectedStdout": "pip install pandas",
        "hint": "print עם המחרוזת המלאה.",
        "explanation": "גם Pandas מותקן עם pip install מהטרמינל.",
        "solution": "print(\"pip install pandas\")",
        "type": "write"
      },
      {
        "id": "lib-9",
        "prompt": "ייבאו את numpy כ-np ואת pandas כ-pd. לא צריך ליצור משתנים נוספים.",
        "starter": "",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "np.__name__",
            "expected": "numpy"
          },
          {
            "expr": "pd.__name__",
            "expected": "pandas"
          }
        ],
        "hint": "שתי שורות import ... as ...",
        "explanation": "אחרי שני הייבואים אפשר להשתמש ב-np וב-pd בכל שאר התאים (או השורות) שירוצו אחר כך.",
        "solution": "import numpy as np\nimport pandas as pd",
        "type": "write"
      },
      {
        "id": "lib-10",
        "prompt": "ייבאו את הספרייה המובנית math, ושמרו במשתנה root את תוצאת math.sqrt(16).",
        "starter": "import math\n",
        "tests": [
          {
            "expr": "root",
            "expected": 4
          }
        ],
        "hint": "root = math.sqrt(16)",
        "explanation": "גם ספריות מובנות מייבאים ב-import. sqrt(16) הוא 4.0.",
        "solution": "import math\nroot = math.sqrt(16)",
        "type": "write"
      }
    ]
  },
  {
    "id": "jupyter",
    "title": "Jupyter ו-Anaconda",
    "short": "Jupyter",
    "icon": "3",
    "intro": "איך Jupyter רץ, מה ההבדל בין מצב עריכה למצב פקודה, איך מריצים תאים, ומהו Markdown.",
    "questions": [
      {
        "id": "jb-1",
        "prompt": "מה קורה אם סוגרים את חלון ה-CMD/טרמינל שבו רץ שרת Jupyter?",
        "choices": [
          "המחברת עצמה תיסגר, כי השרת הוא הרכיב שמריץ אותה",
          "רק הצבע של התאים ישתנה",
          "שום דבר, הממשק בדפדפן ממשיך בלי שרת",
          "יווצר אוטומטית קובץ CSV"
        ],
        "answer": 0,
        "hint": "Jupyter רץ משני רכיבים: שרת וממשק.",
        "explanation": "השרת רץ בטרמינל. סגירת החלון סוגרת את המחברת. הממשק עצמו הוא דף בכתובת localhost:8888.",
        "type": "mcq"
      },
      {
        "id": "jb-2",
        "prompt": "איך עוברים ממצב פקודה (Command) למצב עריכה (Edit)?",
        "choices": [
          "Enter",
          "Esc",
          "Ctrl+Enter",
          "לחיצה כפולה על D"
        ],
        "answer": 0,
        "hint": "מקש שמכניס אותנו לתוך התא.",
        "explanation": "Enter נכנס לעריכת התא. Esc חוזר למצב פקודה, שבו מנווטים בין תאים בלי לשנות תוכן.",
        "type": "mcq"
      },
      {
        "id": "jb-3",
        "prompt": "מה קובע את הערך של משתנה במחברת Jupyter?",
        "choices": [
          "סדר ההרצה של התאים, לא הסדר הוויזואלי על המסך",
          "רק מיקום התא מלמעלה למטה, גם אם לא רצנו אותו",
          "רק שם הקובץ של המחברת",
          "אין משתנים במחברת"
        ],
        "answer": 0,
        "hint": "שימו לב למונה משמאל לתא.",
        "explanation": "Jupyter זוכר מה שכבר הורץ. אם שינינו משתנה בתא שרץ מאוחר יותר, ההדפסה תראה את הערך החדש גם אם תא ההדפסה מופיע מעליו.",
        "type": "mcq"
      },
      {
        "id": "jb-4",
        "prompt": "איך מוחקים תא בקיצור מקלדת?",
        "choices": [
          "במצב פקודה לוחצים D פעמיים",
          "במצב עריכה לוחצים D פעמיים",
          "רק Ctrl+Enter",
          "רק Shift+Tab"
        ],
        "answer": 0,
        "hint": "קודם Esc, אחר כך D ו-D.",
        "explanation": "קיצור המחיקה DD פועל במצב פקודה. במצב עריכה המקש D פשוט כותב את האות D. אפשר גם Edit → Delete Cells. להוספה: A מעל, B מתחת, או כפתור +.",
        "type": "mcq"
      },
      {
        "id": "jb-5",
        "prompt": "הרצנו במחברת בסדר הזה: קודם x='alon', אחר כך x='yoav', ואז print(x). מה יודפס?",
        "code": "x = 'alon'\nx = 'yoav'\nprint(x)",
        "choices": [
          "yoav",
          "alon",
          "alon yoav",
          "שגיאה"
        ],
        "answer": 0,
        "hint": "ההשמה האחרונה שנירצה היא זו שנשמרת.",
        "explanation": "סדר ההרצה קובע: אחרי השינוי ל-yoav, ההדפסה מציגה yoav.",
        "type": "predict"
      },
      {
        "id": "jb-6",
        "prompt": "הדפיסו בדיוק את כתובת ממשק Jupyter שרצה מקומית: http://localhost:8888/",
        "starter": "print(",
        "expectedStdout": "http://localhost:8888/",
        "hint": "הכתובת כוללת http://, את מספר היציאה, ואת הלוכסן בסוף.",
        "explanation": "הממשק נפתח בדפדפן ב-http://localhost:8888/. השרת עצמו רץ בטרמינל.",
        "solution": "print(\"http://localhost:8888/\")",
        "type": "write"
      },
      {
        "id": "jb-7",
        "prompt": "כתבו קוד שמדמה שלושה תאים לפי סדר ההרצה: קודם שומרים 'alon' ב-x, אחר כך משנים את x ל-'yoav', ולבסוף מדפיסים את x.",
        "starter": "x = ",
        "expectedStdout": "yoav",
        "hint": "שתי השמות ואז print(x).",
        "explanation": "גם אם תא ההדפסה מופיע מעל תא השינוי במחברת, מה שקובע הוא מה רץ אחרון.",
        "solution": "x = 'alon'\nx = 'yoav'\nprint(x)",
        "type": "write"
      },
      {
        "id": "jb-8",
        "prompt": "כתבו בדיקה ראשונה למחברת חדשה: הדפיסו בדיוק את המחרוזת Hey from Jupyter Notebook",
        "starter": "print(",
        "expectedStdout": "Hey from Jupyter Notebook",
        "hint": "print עם המחרוזת המלאה, כולל האותיות הגדולות.",
        "explanation": "זו בדיקה פשוטה אחרי שמפעילים Jupyter מ-Anaconda Navigator, שמוודאת שהתא רץ.",
        "solution": "print(\"Hey from Jupyter Notebook\")",
        "type": "write"
      },
      {
        "id": "jb-9",
        "prompt": "שמרו במשתנה md מחרוזת Markdown שמתחילה ב-# ואז רווח ואז המילה Title (כלומר כותרת רמה 1 בשם Title).",
        "starter": "md = ",
        "tests": [
          {
            "expr": "md.startswith('# Title')",
            "expected": true
          }
        ],
        "hint": "מחרוזת שמתחילה ב-# Title",
        "explanation": "בתא Markdown, # Title הופך לכותרת אחרי שמריצים את התא. צריך להריץ גם תאי Markdown כדי לראות עיצוב.",
        "solution": "md = '# Title'",
        "type": "write"
      },
      {
        "id": "jb-10",
        "prompt": "כמו בתרגיל כיתתי: שמרו 'Dana' ב-name, 'Tel Aviv' ב-city, ו-'Data Science' ב-course, והדפיסו כל אחד בשורה נפרדת בסדר הזה.",
        "starter": "name = ",
        "expectedStdout": "Dana\nTel Aviv\nData Science",
        "hint": "שלוש השמות ושלושה print.",
        "explanation": "במחברת: תא Markdown מציג את הפרטים, ותאי הקוד מדפיסים אותם. כאן עושים את חלק הקוד.",
        "solution": "name = 'Dana'\ncity = 'Tel Aviv'\ncourse = 'Data Science'\nprint(name)\nprint(city)\nprint(course)",
        "type": "write"
      },
      {
        "type": "write",
        "id": "jb-11",
        "prompt": "כתבו פונקציה switch_mode(key) שמחזירה 'edit' עבור 'Enter' ו-'command' עבור 'Esc'.",
        "starter": "def switch_mode(key):\n    ",
        "tests": [
          {
            "expr": "switch_mode('Enter')",
            "expected": "edit"
          },
          {
            "expr": "switch_mode('Esc')",
            "expected": "command"
          }
        ],
        "hint": "Enter נכנס לעריכה, Esc חוזר לפקודה.",
        "explanation": "אלה שני קיצורי המעבר בין מצבי המחברת.",
        "solution": "def switch_mode(key):\n    return 'edit' if key == 'Enter' else 'command'"
      },
      {
        "type": "write",
        "id": "jb-12",
        "prompt": "כתבו פונקציה cell_action(key) שמחזירה 'above' עבור 'A', 'below' עבור 'B', ו-'delete' עבור 'DD'.",
        "starter": "def cell_action(key):\n    ",
        "tests": [
          {
            "expr": "cell_action('A')",
            "expected": "above"
          },
          {
            "expr": "cell_action('B')",
            "expected": "below"
          },
          {
            "expr": "cell_action('DD')",
            "expected": "delete"
          }
        ],
        "hint": "קיצורי מצב הפקודה להוספה ומחיקה.",
        "explanation": "A מוסיף תא מעל, B מתחת, ו-DD (במצב פקודה) מוחק את התא.",
        "solution": "def cell_action(key):\n    return {'A': 'above', 'B': 'below', 'DD': 'delete'}[key]"
      },
      {
        "type": "write",
        "id": "jb-13",
        "prompt": "צרו מילון SHORTCUTS עם המפתחות 'Enter', 'Esc', 'A', 'B' והערכים בהתאמה 'edit', 'command', 'above', 'below'.",
        "starter": "SHORTCUTS = ",
        "tests": [
          {
            "expr": "SHORTCUTS",
            "expected": {
              "Enter": "edit",
              "Esc": "command",
              "A": "above",
              "B": "below"
            }
          }
        ],
        "hint": "מילון של קיצורי Jupyter.",
        "explanation": "מילון קטן שמרכז את קיצורי המקלדת של המצבים וההוספה.",
        "solution": "SHORTCUTS = {'Enter': 'edit', 'Esc': 'command', 'A': 'above', 'B': 'below'}"
      }
    ]
  },
  {
    "id": "numpy-intro",
    "title": "מבוא ל-NumPy",
    "short": "NumPy",
    "icon": "4",
    "intro": "יצירת מערכים עם array, arange, zeros ו-linspace, וההבדל בינם לבין רשימות פייתון.",
    "questions": [
      {
        "id": "npi-1",
        "prompt": "מהו NumPy?",
        "choices": [
          "ספרייה למערכים רב-ממדיים ולחישובים מתמטיים יעילים בפייתון",
          "מסד נתונים יחסי כמו SQL",
          "עורך מחברות בלבד",
          "שפת תכנות נפרדת מפייתון"
        ],
        "answer": 0,
        "hint": "Numerical Python.",
        "explanation": "NumPy מוסיפה מערכים, מטריצות ופונקציות מתמטיות, ומשמשת חישוב מדעי, למידת מכונה ועיבוד תמונה.",
        "type": "mcq"
      },
      {
        "id": "npi-2",
        "prompt": "מה יתרון מרכזי של מערך NumPy מול רשימת פייתון?",
        "choices": [
          "אפשר לבצע חשבון על כל האיברים בבת אחת, והמערך חסכוני ומהיר יותר למספרים רבים",
          "רשימה תומכת רק במספרים, ומערך תומך רק במחרוזות",
          "אי אפשר לשמור מספרים במערך",
          "מערך לא עובד עם Pandas"
        ],
        "answer": 0,
        "hint": "מהירות, זיכרון ופעולות וקטוריות.",
        "explanation": "מערכים קומפקטיים ומהירים יותר, תומכים בחשבון על כל האיברים, וספריות כמו Pandas ו-Matplotlib מתבססות עליהם.",
        "type": "mcq"
      },
      {
        "id": "npi-3",
        "prompt": "מה האיברים ב-np.arange(0, 10)?",
        "code": "import numpy as np\nprint(np.arange(0, 10))",
        "choices": [
          "0 עד 9",
          "0 עד 10 כולל",
          "1 עד 10",
          "רק 0 ו-10"
        ],
        "answer": 0,
        "hint": "כמו range: הסוף לא כלול.",
        "explanation": "arange(0, 10) יוצר 0, 1, …, 9. הגבול העליון לא נכלל.",
        "type": "predict"
      },
      {
        "id": "npi-4",
        "prompt": "מה יתקבל מ-np.linspace(0, 10, 3)?",
        "code": "import numpy as np\nprint(np.linspace(0, 10, 3))",
        "choices": [
          "0, 5 ו-10",
          "0, 10 ו-3",
          "0 עד 9",
          "שלושה אפסים"
        ],
        "answer": 0,
        "hint": "שלושה מספרים מההתחלה עד הסוף כולל, במרווחים שווים.",
        "explanation": "linspace כולל את שני הקצוות ומחלק למרווחים שווים: 0, 5, 10.",
        "type": "predict"
      },
      {
        "id": "npi-5",
        "prompt": "ייבאו numpy כ-np וצרו משתנה arr שהוא מערך מהרשימה [1, 2, 3, 4].",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "arr.tolist()",
            "expected": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "expr": "type(arr).__name__",
            "expected": "ndarray"
          }
        ],
        "hint": "arr = np.array([1, 2, 3, 4])",
        "explanation": "np.array מקבל רשימה ומחזיר ndarray.",
        "solution": "import numpy as np\narr = np.array([1, 2, 3, 4])",
        "type": "write"
      },
      {
        "id": "npi-6",
        "prompt": "ייבאו numpy כ-np ושמרו ב-arr את התוצאה של np.arange(0, 10).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "arr.tolist()",
            "expected": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9
            ]
          }
        ],
        "hint": "הסוף 10 לא כלול.",
        "explanation": "np.arange(0, 10) הוא 0 עד 9.",
        "solution": "import numpy as np\narr = np.arange(0, 10)",
        "type": "write"
      },
      {
        "id": "npi-7",
        "prompt": "ייבאו numpy כ-np ושמרו ב-arr את np.arange(0, 10, 2) — קפיצות של 2.",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "arr.tolist()",
            "expected": [
              0,
              2,
              4,
              6,
              8
            ]
          }
        ],
        "hint": "הפרמטר השלישי הוא גודל הקפיצה.",
        "explanation": "מנקודת 0 עד 10 לא כולל, בקפיצות של 2: 0, 2, 4, 6, 8.",
        "solution": "import numpy as np\narr = np.arange(0, 10, 2)",
        "type": "write"
      },
      {
        "id": "npi-8",
        "prompt": "ייבאו numpy כ-np ושמרו ב-arr מערך של 5 אפסים בעזרת np.zeros.",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "arr.tolist()",
            "expected": [
              0,
              0,
              0,
              0,
              0
            ]
          }
        ],
        "hint": "np.zeros(5) — ברירת המחדל היא float, כלומר 0.0.",
        "explanation": "zeros(5) יוצר חמישה אפסים עשרוניים.",
        "solution": "import numpy as np\narr = np.zeros(5)",
        "type": "write"
      },
      {
        "id": "npi-9",
        "prompt": "ייבאו numpy כ-np וצרו מערך דו-ממדי 2×5 של אפסים שלמים: np.zeros((2, 5), dtype=int). שמרו ב-arr.",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "arr.tolist()",
            "expected": [
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ]
            ]
          },
          {
            "expr": "arr.dtype.kind",
            "expected": "i"
          }
        ],
        "hint": "שימו לב לסוגריים הכפולים של הצורה, ול-dtype=int.",
        "explanation": "צורה מועברת כרכיב אחד (2, 5). dtype=int הופך את האפסים לשלמים.",
        "solution": "import numpy as np\narr = np.zeros((2, 5), dtype=int)",
        "type": "write"
      },
      {
        "id": "npi-10",
        "prompt": "ייבאו numpy כ-np ושמרו ב-arr את np.linspace(0, 10, 3).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "arr.tolist()",
            "expected": [
              0,
              5,
              10
            ]
          }
        ],
        "hint": "שלושה מספרים מ-0 עד 10 כולל.",
        "explanation": "המרווח השווה בין 0 ל-10 בשלוש נקודות הוא 5.",
        "solution": "import numpy as np\narr = np.linspace(0, 10, 3)",
        "type": "write"
      },
      {
        "id": "npi-11",
        "prompt": "ייבאו numpy כ-np והמרו מטריצת פייתון [[1, 2], [3, 4]] למערך NumPy בשם mat.",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "mat.tolist()",
            "expected": [
              [
                1,
                2
              ],
              [
                3,
                4
              ]
            ]
          },
          {
            "expr": "list(mat.shape)",
            "expected": [
              2,
              2
            ]
          }
        ],
        "hint": "np.array עם רשימה של רשימות.",
        "explanation": "array יודע לקבל גם מטריצה, והתוצאה היא מערך דו-ממדי.",
        "solution": "import numpy as np\nmat = np.array([[1, 2], [3, 4]])",
        "type": "write"
      },
      {
        "id": "npi-12",
        "prompt": "ייבאו numpy כ-np, צרו a = np.array([1, 2, 3]) ושמרו ב-b את התוצאה של a + 5 (חיבור 5 לכל איבר).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "b.tolist()",
            "expected": [
              6,
              7,
              8
            ]
          }
        ],
        "hint": "b = a + 5, בלי לולאה.",
        "explanation": "זה אחד ההבדלים מול רשימה: החיבור פועל על כל האיברים בבת אחת. [1,2,3]+5 על list היה זורק שגיאה.",
        "solution": "import numpy as np\na = np.array([1, 2, 3])\nb = a + 5",
        "type": "write"
      }
    ]
  },
  {
    "id": "numpy-random",
    "title": "מספרים אקראיים ו-seed",
    "short": "אקראי",
    "icon": "5",
    "intro": "יצירת מספרים מקריים עם rand ו-randint, ואיך seed מאפשר לשחזר את אותו רצף.",
    "questions": [
      {
        "id": "npr-1",
        "prompt": "מה מחזיר np.random.rand(2, 5)?",
        "choices": [
          "מטריצה 2×5 של מספרים עשרוניים מקריים בין 0 ל-1",
          "חמישה שלמים בין 2 ל-5",
          "תמיד את אותם המספרים 2 ו-5",
          "Series של Pandas"
        ],
        "answer": 0,
        "hint": "rand בלי int הוא עשרוני בטווח יחידה.",
        "explanation": "rand מייצר עשרוניים בטווח 0–1. הפרמטרים קובעים את הצורה.",
        "type": "mcq"
      },
      {
        "id": "npr-2",
        "prompt": "למה משמש np.random.seed?",
        "choices": [
          "לקבוע ערך התחלתי למחולל, כדי שאותו seed ייצר תמיד את אותו רצף",
          "למחוק את כל המערכים מהזיכרון",
          "להמיר מערך ל-Series",
          "להריץ תא Markdown"
        ],
        "answer": 0,
        "hint": "שחזור תוצאות.",
        "explanation": "אותו seed מתחיל את אותו רצף. הקריאה הראשונה אחרי ה-seed תמיד זהה לעצמה; הקריאה הבאה ממשיכה את הרצף.",
        "type": "mcq"
      },
      {
        "id": "npr-3",
        "prompt": "אחרי np.random.seed(42), מה יתקבל מ-np.random.randint(0, 10, 4)?",
        "code": "import numpy as np\nnp.random.seed(42)\nprint(np.random.randint(0, 10, 4))",
        "choices": [
          "[6, 3, 7, 4]",
          "[0, 1, 2, 3]",
          "[42, 42, 42, 42]",
          "[10, 9, 8, 7]"
        ],
        "answer": 0,
        "hint": "ה-seed קובע רצף ידוע.",
        "explanation": "עם seed 42 הקריאה הראשונה ל-randint בטווח 0–10 באורך 4 היא 6, 3, 7, 4.",
        "type": "predict"
      },
      {
        "id": "npr-4",
        "prompt": "ב-np.random.randint(0, 101, (2, 5)) מה מייצג (2, 5) ומה הטווח?",
        "choices": [
          "צורת המטריצה 2 שורות ו-5 עמודות, ושלמים מ-0 עד 100 (101 לא כלול)",
          "הטווח הוא 2 עד 5 בלבד, בלי צורה",
          "תמיד 101 שורות",
          "רק שני מספרים: 0 ו-101"
        ],
        "answer": 0,
        "hint": "כמו arange, הגבול העליון לא כלול.",
        "explanation": "הארגומנט השלישי הוא הצורה. הטווח הוא start עד stop לא כולל.",
        "type": "mcq"
      },
      {
        "id": "npr-5",
        "prompt": "ייבאו numpy כ-np, קבעו seed ל-42, ושמרו ב-arr את np.random.randint(0, 10, 4).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "arr.tolist()",
            "expected": [
              6,
              3,
              7,
              4
            ]
          }
        ],
        "hint": "קודם seed, אחר כך randint.",
        "explanation": "אותו seed תמיד ייצר את אותה קריאה ראשונה: [6, 3, 7, 4].",
        "solution": "import numpy as np\nnp.random.seed(42)\narr = np.random.randint(0, 10, 4)",
        "type": "write"
      },
      {
        "id": "npr-6",
        "prompt": "ייבאו numpy כ-np, קבעו seed ל-7, ושמרו ב-first את np.random.randint(0, 100, 3).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "first.tolist()",
            "expected": [
              47,
              68,
              25
            ]
          }
        ],
        "hint": "seed(7) ואז randint עם גודל 3.",
        "explanation": "הקריאה הראשונה אחרי seed 7 בטווח 0–100 באורך 3 היא 47, 68, 25.",
        "solution": "import numpy as np\nnp.random.seed(7)\nfirst = np.random.randint(0, 100, 3)",
        "type": "write"
      },
      {
        "id": "npr-7",
        "prompt": "ייבאו numpy כ-np, קבעו seed ל-7, קראו פעמיים ל-np.random.randint(0, 100, 3) ושמרו ב-first וב-second בהתאמה.",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "first.tolist()",
            "expected": [
              47,
              68,
              25
            ]
          },
          {
            "expr": "second.tolist()",
            "expected": [
              67,
              83,
              23
            ]
          }
        ],
        "hint": "אותו seed פעם אחת, ואז שתי קריאות ברצף.",
        "explanation": "המספרים משתנים בין קריאות באותה הרצה, אבל הרצף כולו חוזר אחרי אותו seed. השנייה היא 67, 83, 23.",
        "solution": "import numpy as np\nnp.random.seed(7)\nfirst = np.random.randint(0, 100, 3)\nsecond = np.random.randint(0, 100, 3)",
        "type": "write"
      },
      {
        "id": "npr-8",
        "prompt": "ייבאו numpy כ-np, קבעו seed ל-0, ושמרו ב-arr את np.random.rand(2, 3) מעוגל ל-3 ספרות: arr = np.random.rand(2, 3).round(3).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "arr.tolist()",
            "expected": [
              [
                0.549,
                0.715,
                0.603
              ],
              [
                0.545,
                0.424,
                0.646
              ]
            ]
          }
        ],
        "hint": "seed(0), אחריו rand(2, 3), ואז round(3).",
        "explanation": "rand מייצר עשרוניים בטווח 0–1. עיגול עוזר לבדוק ערך יציב.",
        "solution": "import numpy as np\nnp.random.seed(0)\narr = np.random.rand(2, 3).round(3)",
        "type": "write"
      },
      {
        "id": "npr-9",
        "prompt": "כתבו פונקציה first_ints(seed, n) שקובעת את ה-seed לערך שהתקבל ומחזירה רשימת פייתון (tolist) של np.random.randint(0, 10, n).",
        "starter": "import numpy as np\n\ndef first_ints(seed, n):\n    ",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "first_ints(42, 4)",
            "expected": [
              6,
              3,
              7,
              4
            ]
          },
          {
            "expr": "first_ints(0, 3)",
            "expected": [
              5,
              0,
              3
            ]
          }
        ],
        "hint": "בתוך הפונקציה: seed ואז return ...tolist().",
        "explanation": "הפונקציה מדגימה שחזור: אותם פרמטרים יחזירו תמיד את אותה רשימה.",
        "solution": "import numpy as np\n\ndef first_ints(seed, n):\n    np.random.seed(seed)\n    return np.random.randint(0, 10, n).tolist()",
        "type": "write"
      },
      {
        "id": "npr-10",
        "prompt": "תרגיל כיתתי (חלק א): ייבאו numpy כ-np, קבעו seed ל-101, וצרו מערך דו-ממדי 5×5 בשם arr עם np.random.randint(0, 101, (5, 5)).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "arr.tolist()",
            "expected": [
              [
                95,
                11,
                81,
                70,
                63
              ],
              [
                87,
                75,
                9,
                77,
                40
              ],
              [
                4,
                63,
                40,
                60,
                92
              ],
              [
                64,
                5,
                12,
                93,
                40
              ],
              [
                49,
                83,
                8,
                29,
                59
              ]
            ]
          },
          {
            "expr": "list(arr.shape)",
            "expected": [
              5,
              5
            ]
          }
        ],
        "hint": "seed(101) ואז randint עם צורה (5, 5) וטווח 0 עד 101.",
        "explanation": "עם seed 101 מתקבלת מטריצה קבועה שאפשר לחשב עליה סטטיסטיקות בשורות הבאות.",
        "solution": "import numpy as np\nnp.random.seed(101)\narr = np.random.randint(0, 101, (5, 5))",
        "type": "write"
      }
    ]
  },
  {
    "id": "numpy-index",
    "title": "שיטות, אינדקס ו-copy",
    "short": "אינדקס",
    "icon": "6",
    "intro": "reshape, max/min/argmax, גישה ב-[], וחשיבות copy כדי לא לשנות את המערך המקורי.",
    "questions": [
      {
        "id": "npx-1",
        "prompt": "מתי reshape(5, 5) יצליח?",
        "choices": [
          "כשיש במערך בדיוק 25 איברים",
          "תמיד, גם אם יש 24 איברים",
          "רק במערך של מחרוזות",
          "רק אחרי המרה ל-Series"
        ],
        "answer": 0,
        "hint": "מספר האיברים חייב להתאים לצורה החדשה.",
        "explanation": "5×5=25. אם מספר האיברים לא מתאים, NumPy זורק שגיאה.",
        "type": "mcq"
      },
      {
        "id": "npx-2",
        "prompt": "מה ההבדל בין max ל-argmax, ומה מיוחד ב-shape?",
        "choices": [
          "max מחזיר את הערך הגדול, argmax את האינדקס שלו, ו-shape היא תכונה בלי סוגריים",
          "max ו-argmax זהים, ו-shape חייבת סוגריים",
          "argmax מוחק את האיבר הגדול",
          "shape היא שיטה שמקבלת את הצורה החדשה כמו reshape"
        ],
        "answer": 0,
        "hint": "property מול method.",
        "explanation": "כותבים arr.shape ולא arr.shape(). max/min לערך, argmax/argmin למיקום.",
        "type": "mcq"
      },
      {
        "id": "npx-3",
        "prompt": "עבור a = np.array([1, 5, 2, 9, 3]), מה יחזירו max ו-argmax?",
        "code": "import numpy as np\na = np.array([1, 5, 2, 9, 3])\nprint(a.max(), a.argmax())",
        "choices": [
          "9 ו-3",
          "5 ו-1",
          "9 ו-4",
          "1 ו-0"
        ],
        "answer": 0,
        "hint": "הערך הגדול הוא 9, והוא באינדקס 3.",
        "explanation": "האיברים: אינדקס 0=1, 1=5, 2=2, 3=9, 4=3. לכן max=9 ו-argmax=3.",
        "type": "predict"
      },
      {
        "id": "npx-4",
        "prompt": "מה ההבדל בין view ל-copy במערך NumPy?",
        "choices": [
          "בלי copy, שינוי בהעתק או בחיתוך עלול לשנות גם את המקור; copy יוצר מערך נפרד",
          "copy תמיד משנה את המקור, ו-view אף פעם לא",
          "אין הבדל",
          "copy עובד רק על רשימות פייתון"
        ],
        "answer": 0,
        "hint": "זיכרון משותף מול שכפול אמיתי.",
        "explanation": "השמה או חיתוך בלי copy יוצרים view. כדי לשמור על המקור משתמשים ב-copy().",
        "type": "mcq"
      },
      {
        "id": "npx-5",
        "prompt": "ייבאו numpy כ-np, צרו a = np.arange(25) ושמרו ב-mat את a.reshape(5, 5).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "mat.tolist()",
            "expected": [
              [
                0,
                1,
                2,
                3,
                4
              ],
              [
                5,
                6,
                7,
                8,
                9
              ],
              [
                10,
                11,
                12,
                13,
                14
              ],
              [
                15,
                16,
                17,
                18,
                19
              ],
              [
                20,
                21,
                22,
                23,
                24
              ]
            ]
          },
          {
            "expr": "list(mat.shape)",
            "expected": [
              5,
              5
            ]
          }
        ],
        "hint": "arange(25) ואז reshape(5, 5).",
        "explanation": "25 איברים נכנסים בדיוק למטריצת 5×5.",
        "solution": "import numpy as np\na = np.arange(25)\nmat = a.reshape(5, 5)",
        "type": "write"
      },
      {
        "id": "npx-6",
        "prompt": "ייבאו numpy כ-np, הגדירו a = np.array([1, 5, 2, 9, 3]), ושמרו ב-mx את a.max(), ב-mn את a.min(), ב-ix את a.argmax() וב-in_ את a.argmin().",
        "starter": "import numpy as np\na = np.array([1, 5, 2, 9, 3])\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "int(mx)",
            "expected": 9
          },
          {
            "expr": "int(mn)",
            "expected": 1
          },
          {
            "expr": "int(ix)",
            "expected": 3
          },
          {
            "expr": "int(in_)",
            "expected": 0
          }
        ],
        "hint": "ארבע השמות: max, min, argmax, argmin. שימו לב לשם in_ ולא in.",
        "explanation": "הערך הגדול 9 באינדקס 3, והקטן 1 באינדקס 0.",
        "solution": "import numpy as np\na = np.array([1, 5, 2, 9, 3])\nmx = a.max()\nmn = a.min()\nix = a.argmax()\nin_ = a.argmin()",
        "type": "write"
      },
      {
        "id": "npx-7",
        "prompt": "ייבאו numpy כ-np, צרו a = np.array([1, 5, 2, 9, 3]) ושמרו ב-sh את הצורה כרשימת פייתון: list(a.shape).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "sh",
            "expected": [
              5
            ]
          }
        ],
        "hint": "shape בלי סוגריים, ואז list(...).",
        "explanation": "shape היא תכונה שמחזירה tuple. למערך חד-ממדי באורך 5 נקבל (5,), וברשימה [5].",
        "solution": "import numpy as np\na = np.array([1, 5, 2, 9, 3])\nsh = list(a.shape)",
        "type": "write"
      },
      {
        "id": "npx-8",
        "prompt": "ייבאו numpy כ-np, צרו a = np.arange(10) ושמרו ב-part את החיתוך a[0:7].",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "part.tolist()",
            "expected": [
              0,
              1,
              2,
              3,
              4,
              5,
              6
            ]
          }
        ],
        "hint": "הסוף 7 לא כלול.",
        "explanation": "חיתוך עובד כמו ברשימה: מ-0 עד 7 לא כולל.",
        "solution": "import numpy as np\na = np.arange(10)\npart = a[0:7]",
        "type": "write"
      },
      {
        "id": "npx-9",
        "prompt": "ייבאו numpy כ-np, צרו m = np.arange(1, 13).reshape(3, 4) ושמרו ב-val את האיבר בשורה 2 ובעמודה 3 (אינדקס אפס-התחלה).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "int(val)",
            "expected": 12
          }
        ],
        "hint": "m[2, 3] או m[2][3]. השורה האחרונה, העמודה האחרונה.",
        "explanation": "המטריצה 3×4 של 1 עד 12, והאיבר האחרון הוא 12.",
        "solution": "import numpy as np\nm = np.arange(1, 13).reshape(3, 4)\nval = m[2, 3]",
        "type": "write"
      },
      {
        "id": "npx-10",
        "prompt": "ייבאו numpy כ-np. צרו original = np.array([1, 2, 3, 4]), העתיקו עם copy ל-dup, ושנו רק את dup[0] ל-100. המקור חייב להישאר [1, 2, 3, 4].",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "original.tolist()",
            "expected": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "expr": "dup.tolist()",
            "expected": [
              100,
              2,
              3,
              4
            ]
          }
        ],
        "hint": "dup = original.copy() ואז שינוי.",
        "explanation": "בלי copy השינוי היה משפיע גם על original.",
        "solution": "import numpy as np\noriginal = np.array([1, 2, 3, 4])\ndup = original.copy()\ndup[0] = 100",
        "type": "write"
      },
      {
        "id": "npx-11",
        "prompt": "ייבאו numpy כ-np, צרו a = np.arange(10) ושמרו ב-tail את a[7:] (מאינדקס 7 עד הסוף).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "tail.tolist()",
            "expected": [
              7,
              8,
              9
            ]
          }
        ],
        "hint": "נקודתיים בלי מספר אחרי.",
        "explanation": "a[7:] חותך מהאינדקס 7 עד הסוף: 7, 8, 9.",
        "solution": "import numpy as np\na = np.arange(10)\ntail = a[7:]",
        "type": "write"
      },
      {
        "id": "npx-12",
        "prompt": "ייבאו numpy כ-np, צרו a = np.array([1, 2, 3, 4, 5, 6]) והציבו 100 בכל האיברים באינדקסים 0 עד 3 לא כולל (a[0:4] = 100).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "a.tolist()",
            "expected": [
              100,
              100,
              100,
              100,
              5,
              6
            ]
          }
        ],
        "hint": "הצבה לחיתוך משנה כמה איברים בבת אחת.",
        "explanation": "אפשר לשנות קטע שלם בלי לולאה: a[0:4] = 100.",
        "solution": "import numpy as np\na = np.array([1, 2, 3, 4, 5, 6])\na[0:4] = 100",
        "type": "write"
      }
    ]
  },
  {
    "id": "numpy-ops",
    "title": "סינון, חשבון ו-axis",
    "short": "פעולות",
    "icon": "7",
    "intro": "סינון לפי תנאי, חשבון על כל המערך, וסיכומים לפי שורות או עמודות עם axis.",
    "questions": [
      {
        "id": "npo-1",
        "prompt": "מה מחזיר a[a > 4] כאשר a = np.arange(11)?",
        "choices": [
          "מערך עם האיברים הגדולים מ-4 בלבד",
          "את האינדקסים בלבד, בלי הערכים",
          "את כל המערך בלי שינוי",
          "רק את המספר 4"
        ],
        "answer": 0,
        "hint": "התנאי בתוך הסוגריים מסנן איברים.",
        "explanation": "זו בחירה מותנית: רק איברים שמקיימים את התנאי חוזרים — 5 עד 10.",
        "type": "mcq"
      },
      {
        "id": "npo-2",
        "prompt": "איך כותבים סינון של איברים גדולים מ-4 וקטנים מ-10?",
        "choices": [
          "a[(a > 4) & (a < 10)]",
          "a[a > 4 and a < 10]",
          "a[a > 4 + a < 10]",
          "a.filter(4, 10)"
        ],
        "answer": 0,
        "hint": "משתמשים ב-& עם סוגריים, לא במילת and.",
        "explanation": "על מערכים משתמשים ב-& וב-| (לא and/or), וכל תנאי בסוגריים.",
        "type": "mcq"
      },
      {
        "id": "npo-3",
        "prompt": "במערך דו-ממדי, מה מחזיר sum(axis=0) ומה מחזיר sum(axis=1)?",
        "choices": [
          "axis=0 סכום לכל עמודה, axis=1 סכום לכל שורה",
          "axis=0 סכום לכל שורה, axis=1 סכום לכל עמודה",
          "שניהם מחזירים רק מספר אחד — סכום כל המערך",
          "axis קובע רק את ה-seed"
        ],
        "answer": 0,
        "hint": "axis=0 הולך לאורך השורות, כלומר יורד בעמודה.",
        "explanation": "axis=0 מסכם את כל השורות בכל עמודה. axis=1 מסכם את כל העמודות בכל שורה.",
        "type": "mcq"
      },
      {
        "id": "npo-4",
        "prompt": "עבור m = np.array([[1, 2, 3], [4, 5, 6]]), מה יחזירו m.sum(axis=0) ו-m.sum(axis=1)?",
        "code": "import numpy as np\nm = np.array([[1, 2, 3], [4, 5, 6]])\nprint(m.sum(axis=0))\nprint(m.sum(axis=1))",
        "choices": [
          "[5, 7, 9] ו-[6, 15]",
          "[6, 15] ו-[5, 7, 9]",
          "[21] ו-[21]",
          "[1, 2, 3] ו-[4, 5, 6]"
        ],
        "answer": 0,
        "hint": "עמודות: 1+4, 2+5, 3+6. שורות: 1+2+3 ו-4+5+6.",
        "explanation": "סכומי העמודות 5, 7, 9 וסכומי השורות 6 ו-15.",
        "type": "predict"
      },
      {
        "id": "npo-5",
        "prompt": "ייבאו numpy כ-np, צרו a = np.arange(11) ושמרו ב-part את האיברים הגדולים מ-4: a[a > 4].",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "part.tolist()",
            "expected": [
              5,
              6,
              7,
              8,
              9,
              10
            ]
          }
        ],
        "hint": "התנאי נכתב בתוך הסוגריים המרובעים.",
        "explanation": "הסינון מחזיר 5 עד 10.",
        "solution": "import numpy as np\na = np.arange(11)\npart = a[a > 4]",
        "type": "write"
      },
      {
        "id": "npo-6",
        "prompt": "ייבאו numpy כ-np, צרו a = np.arange(11) ושמרו ב-part את האיברים שמקיימים גדול מ-4 וקטן מ-10.",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "part.tolist()",
            "expected": [
              5,
              6,
              7,
              8,
              9
            ]
          }
        ],
        "hint": "a[(a > 4) & (a < 10)]",
        "explanation": "שני התנאים בסוגריים מחוברים ב-&.",
        "solution": "import numpy as np\na = np.arange(11)\npart = a[(a > 4) & (a < 10)]",
        "type": "write"
      },
      {
        "id": "npo-7",
        "prompt": "ייבאו numpy כ-np, צרו a = np.arange(5) ושמרו ב-b את a + 5.",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "b.tolist()",
            "expected": [
              5,
              6,
              7,
              8,
              9
            ]
          }
        ],
        "hint": "חיבור מספר למערך פועל על כל איבר.",
        "explanation": "0..4 ועוד 5 נותן 5..9, בלי לולאה.",
        "solution": "import numpy as np\na = np.arange(5)\nb = a + 5",
        "type": "write"
      },
      {
        "id": "npo-8",
        "prompt": "ייבאו numpy כ-np, צרו a = np.arange(5) ו-b = np.array([10, 10, 10, 10, 10]), ושמרו ב-c את הסכום a + b.",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "c.tolist()",
            "expected": [
              10,
              11,
              12,
              13,
              14
            ]
          }
        ],
        "hint": "שני מערכים באותו גודל מתחברים איבר-איבר.",
        "explanation": "0+10, 1+10, וכן הלאה.",
        "solution": "import numpy as np\na = np.arange(5)\nb = np.array([10, 10, 10, 10, 10])\nc = a + b",
        "type": "write"
      },
      {
        "id": "npo-9",
        "prompt": "ייבאו numpy כ-np, צרו m = np.array([[1, 2, 3], [4, 5, 6]]), ושמרו ב-total את m.sum() וב-avg את m.mean().",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "int(total)",
            "expected": 21
          },
          {
            "expr": "float(avg)",
            "expected": 3.5
          }
        ],
        "hint": "בלי axis זה על כל האיברים יחד.",
        "explanation": "הסכום 21 והממוצע 21/6 = 3.5.",
        "solution": "import numpy as np\nm = np.array([[1, 2, 3], [4, 5, 6]])\ntotal = m.sum()\navg = m.mean()",
        "type": "write"
      },
      {
        "id": "npo-10",
        "prompt": "ייבאו numpy כ-np, צרו m = np.array([[1, 2, 3], [4, 5, 6]]), ושמרו ב-by_col את m.sum(axis=0) וב-by_row את m.sum(axis=1).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "by_col.tolist()",
            "expected": [
              5,
              7,
              9
            ]
          },
          {
            "expr": "by_row.tolist()",
            "expected": [
              6,
              15
            ]
          }
        ],
        "hint": "axis=0 לעמודות, axis=1 לשורות.",
        "explanation": "סכומי העמודות 5, 7, 9 וסכומי השורות 6 ו-15.",
        "solution": "import numpy as np\nm = np.array([[1, 2, 3], [4, 5, 6]])\nby_col = m.sum(axis=0)\nby_row = m.sum(axis=1)",
        "type": "write"
      },
      {
        "id": "npo-11",
        "prompt": "תרגיל כיתתי: ייבאו numpy כ-np, קבעו seed ל-101, צרו arr = np.random.randint(0, 101, (5, 5)). שמרו ב-row_sum, row_min, row_max, row_mean, row_median את הסטטיסטיקות לכל שורה (axis=1; לממוצע המדיאני השתמשו ב-np.median(arr, axis=1)).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "row_sum.tolist()",
            "expected": [
              320,
              288,
              259,
              214,
              228
            ]
          },
          {
            "expr": "row_min.tolist()",
            "expected": [
              11,
              9,
              4,
              5,
              8
            ]
          },
          {
            "expr": "row_max.tolist()",
            "expected": [
              95,
              87,
              92,
              93,
              83
            ]
          },
          {
            "expr": "row_mean.tolist()",
            "expected": [
              64,
              57.6,
              51.8,
              42.8,
              45.6
            ]
          },
          {
            "expr": "row_median.tolist()",
            "expected": [
              70,
              75,
              60,
              40,
              49
            ]
          }
        ],
        "hint": "אחרי יצירת arr, כל מדד עם axis=1. median דרך np.median.",
        "explanation": "מחשבים לכל שורה סכום, מינימום, מקסימום, ממוצע ומדיאן. axis=1 מסכם לאורך העמודות, כלומר לפי שורה.",
        "solution": "import numpy as np\nnp.random.seed(101)\narr = np.random.randint(0, 101, (5, 5))\nrow_sum = arr.sum(axis=1)\nrow_min = arr.min(axis=1)\nrow_max = arr.max(axis=1)\nrow_mean = arr.mean(axis=1)\nrow_median = np.median(arr, axis=1)",
        "type": "write"
      },
      {
        "id": "npo-12",
        "prompt": "המשיכו את התרגיל הכיתתי: ייבאו numpy כ-np, קבעו seed ל-101, צרו את אותו arr בגודל 5×5, ושמרו ב-gt10 את כל האיברים הגדולים מ-10 (מערך חד-ממדי).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy"
        ],
        "tests": [
          {
            "expr": "gt10.tolist()",
            "expected": [
              95,
              11,
              81,
              70,
              63,
              87,
              75,
              77,
              40,
              63,
              40,
              60,
              92,
              64,
              12,
              93,
              40,
              49,
              83,
              29,
              59
            ]
          }
        ],
        "hint": "gt10 = arr[arr > 10]",
        "explanation": "הסינון המותנה אוסף את כל איברי המטריצה שגדולים מ-10 למערך חד-ממדי.",
        "solution": "import numpy as np\nnp.random.seed(101)\narr = np.random.randint(0, 101, (5, 5))\ngt10 = arr[arr > 10]",
        "type": "write"
      }
    ]
  },
  {
    "id": "pandas-series",
    "title": "Pandas Series",
    "short": "Series",
    "icon": "8",
    "intro": "יצירת Series, תוויות, יצירה ממילון, חיבור לפי אינדקס, ו-add עם fill_value.",
    "questions": [
      {
        "id": "pds-1",
        "prompt": "מהו Pandas Series?",
        "choices": [
          "מערך חד-ממדי עם תוויות, שיכול להחזיק כל טיפוס נתונים",
          "רק טבלת SQL",
          "מערך של NumPy בלי אינדקס",
          "פקודת pip"
        ],
        "answer": 0,
        "hint": "סדרה חד-ממדית מתויגת.",
        "explanation": "Series הוא עצם דמוי מערך חד-ממדי עם אינדקס. אפשר ליצור מרשימה, עם תוויות, או ממילון.",
        "type": "mcq"
      },
      {
        "id": "pds-2",
        "prompt": "מה קורה בחיבור s1 + s2 בתווית שקיימת רק באחד מהם?",
        "choices": [
          "Pandas שם NaN בתווית שאינה חופפת",
          "התווית נמחקת תמיד",
          "נזרקת שגיאה תמיד",
          "הערכים משושרשרים כמו רשימות"
        ],
        "answer": 0,
        "hint": "חיבור לפי מפתח, לא שרשור.",
        "explanation": "האופרטור + מחבר לפי תווית משותפת. בתווית חסרה מתקבל NaN. כדי למלא ערך ברירת מחדל משתמשים ב-add(..., fill_value=0).",
        "type": "mcq"
      },
      {
        "id": "pds-3",
        "prompt": "אם יוצרים Series ממילון, מה הופך לאינדקס?",
        "choices": [
          "מפתחות המילון",
          "הערכים של המילון",
          "תמיד המספרים 0, 1, 2 בלבד",
          "שמות העמודות ב-SQL"
        ],
        "answer": 0,
        "hint": "מפתח → תווית, ערך → נתון.",
        "explanation": "המפתחות נעשים אינדקס והערכים נעשים הנתונים. s.keys() מחזיר את התוויות.",
        "type": "mcq"
      },
      {
        "id": "pds-4",
        "prompt": "עבור s = pd.Series([10, 20, 30], index=['a', 'b', 'c']), מה ערך s['b']?",
        "code": "import pandas as pd\ns = pd.Series([10, 20, 30], index=['a', 'b', 'c'])\nprint(s['b'])",
        "choices": [
          "20",
          "10",
          "b",
          "1"
        ],
        "answer": 0,
        "hint": "ניגשים לפי התווית.",
        "explanation": "התווית b שייכת לערך 20. אפשר גם s.iloc[1] לפי מיקום.",
        "type": "predict"
      },
      {
        "id": "pds-5",
        "prompt": "ייבאו pandas כ-pd וצרו s = pd.Series([10, 20, 30]).",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "s.tolist()",
            "expected": [
              10,
              20,
              30
            ]
          },
          {
            "expr": "list(s.index)",
            "expected": [
              0,
              1,
              2
            ]
          }
        ],
        "hint": "pd.Series עם רשימה. האינדקס ברירת המחדל הוא 0, 1, 2.",
        "explanation": "יצירה בסיסית מרשימה. בהדפסה רואים אינדקס וערך.",
        "solution": "import pandas as pd\ns = pd.Series([10, 20, 30])",
        "type": "write"
      },
      {
        "id": "pds-6",
        "prompt": "ייבאו pandas כ-pd, צרו s = pd.Series([10, 20, 30], index=['a', 'b', 'c']) ושמרו ב-by_label את s['b'] וב-by_pos את s.iloc[1].",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "int(by_label)",
            "expected": 20
          },
          {
            "expr": "int(by_pos)",
            "expected": 20
          }
        ],
        "hint": "גישה לפי תווית עם ['b'], ולפי מיקום עם iloc.",
        "explanation": "שתי הדרכים מגיעות לאותו ערך 20, כל עוד התוויות ייחודיות. בתווית כפולה מוחזרת תת-סדרה.",
        "solution": "import pandas as pd\ns = pd.Series([10, 20, 30], index=['a', 'b', 'c'])\nby_label = s['b']\nby_pos = s.iloc[1]",
        "type": "write"
      },
      {
        "id": "pds-7",
        "prompt": "ייבאו pandas כ-pd וצרו s = pd.Series({'apple': 3, 'banana': 5}). שמרו ב-keys את list(s.keys()).",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "s.to_dict()",
            "expected": {
              "apple": 3,
              "banana": 5
            }
          },
          {
            "expr": "keys",
            "expected": [
              "apple",
              "banana"
            ]
          }
        ],
        "hint": "מילון הופך מפתחות לאינדקס. keys() מחזיר את התוויות.",
        "explanation": "ממילון מקבלים סדרה מתויגת בלי להעביר index בנפרד.",
        "solution": "import pandas as pd\ns = pd.Series({'apple': 3, 'banana': 5})\nkeys = list(s.keys())",
        "type": "write"
      },
      {
        "id": "pds-8",
        "prompt": "ייבאו pandas כ-pd. צרו a = pd.Series({'a': 1, 'b': 2, 'c': 3}) ו-b = pd.Series({'b': 10, 'c': 20, 'd': 30}). שמרו ב-added מילון של a+b שבו NaN מוחלף ב-None: {k: (None if v != v else int(v)) for k, v in (a+b).items()}",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "added",
            "expected": {
              "a": null,
              "b": 12,
              "c": 23,
              "d": null
            }
          }
        ],
        "hint": "קודם החיבור a+b, אחר כך ההמרה שתוארה בשאלה כדי לבדוק NaN.",
        "explanation": "b ו-c חופפים ולכן 2+10=12 ו-3+20=23. a ו-d לא חופפים ולכן NaN.",
        "solution": "import pandas as pd\na = pd.Series({'a': 1, 'b': 2, 'c': 3})\nb = pd.Series({'b': 10, 'c': 20, 'd': 30})\nadded = {k: (None if v != v else int(v)) for k, v in (a + b).items()}",
        "type": "write"
      },
      {
        "id": "pds-9",
        "prompt": "ייבאו pandas כ-pd. עם אותם a ו-b מהשאלה הקודמת (a: a,b,c = 1,2,3 ו-b: b,c,d = 10,20,30), שמרו ב-filled את a.add(b, fill_value=0).astype(int).to_dict().",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "filled",
            "expected": {
              "a": 1,
              "b": 12,
              "c": 23,
              "d": 30
            }
          }
        ],
        "hint": "add עם fill_value=0 ממלא את התוויות החסרות באפס.",
        "explanation": "a מקבל 1+0, d מקבל 0+30, והחופפים מתחברים כרגיל. אין NaN.",
        "solution": "import pandas as pd\na = pd.Series({'a': 1, 'b': 2, 'c': 3})\nb = pd.Series({'b': 10, 'c': 20, 'd': 30})\nfilled = a.add(b, fill_value=0).astype(int).to_dict()",
        "type": "write"
      },
      {
        "id": "pds-10",
        "prompt": "ייבאו pandas כ-pd, צרו s = pd.Series(['1', '2', '3']) והמירו לטיפוס int: s = s.astype(int).",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "s.tolist()",
            "expected": [
              1,
              2,
              3
            ]
          },
          {
            "expr": "s.dtype.kind",
            "expected": "i"
          }
        ],
        "hint": "astype(int) ממיר את כל הערכים. אם ההמרה לא אפשרית תיזרק שגיאה.",
        "explanation": "dtype מציג את סוג הערכים, ו-astype ממיר אותו.",
        "solution": "import pandas as pd\ns = pd.Series(['1', '2', '3'])\ns = s.astype(int)",
        "type": "write"
      },
      {
        "id": "pds-11",
        "prompt": "תרגיל כיתתי (חלק א): ייבאו pandas כ-pd וצרו שלושה Series: telaviv עם Computer=1500, Phone=800, Cable=50, Chair=200, Desk=450; haifa עם Phone=750, Cable=60, Lamp=90, Desk=400, Mouse=40; eilat עם Computer=1600, Chair=180, Lamp=100, Mouse=35, Keyboard=70.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "telaviv.to_dict()",
            "expected": {
              "Computer": 1500,
              "Phone": 800,
              "Cable": 50,
              "Chair": 200,
              "Desk": 450
            }
          },
          {
            "expr": "haifa.to_dict()",
            "expected": {
              "Phone": 750,
              "Cable": 60,
              "Lamp": 90,
              "Desk": 400,
              "Mouse": 40
            }
          },
          {
            "expr": "eilat.to_dict()",
            "expected": {
              "Computer": 1600,
              "Chair": 180,
              "Lamp": 100,
              "Mouse": 35,
              "Keyboard": 70
            }
          }
        ],
        "hint": "נוח ליצור כל חנות ממילון: pd.Series({...}).",
        "explanation": "כל חנות היא Series: הפריטים הם התוויות והמחירים הם הערכים. זו המקבילה לתרגיל המחסנים מהקורס.",
        "solution": "import pandas as pd\ntelaviv = pd.Series({'Computer': 1500, 'Phone': 800, 'Cable': 50, 'Chair': 200, 'Desk': 450})\nhaifa = pd.Series({'Phone': 750, 'Cable': 60, 'Lamp': 90, 'Desk': 400, 'Mouse': 40})\neilat = pd.Series({'Computer': 1600, 'Chair': 180, 'Lamp': 100, 'Mouse': 35, 'Keyboard': 70})",
        "type": "write"
      },
      {
        "id": "pds-12",
        "prompt": "המשיכו את התרגיל: אחרי יצירת telaviv, haifa ו-eilat (אותם מחירים כמו בשאלה הקודמת), כתבו פונקציה order_summary(items) שמקבלת רשימת שמות פריטים ומחזירה מילון עם 'total' — סכום המחיר הזול ביותר מבין החנויות שיש בהן את הפריט — ועם 'options' — מילון לכל פריט: המחיר הזול, או None אם הפריט לא קיים באף חנות.",
        "starter": "import pandas as pd\n\ntelaviv = pd.Series({'Computer': 1500, 'Phone': 800, 'Cable': 50, 'Chair': 200, 'Desk': 450})\nhaifa = pd.Series({'Phone': 750, 'Cable': 60, 'Lamp': 90, 'Desk': 400, 'Mouse': 40})\neilat = pd.Series({'Computer': 1600, 'Chair': 180, 'Lamp': 100, 'Mouse': 35, 'Keyboard': 70})\n\ndef order_summary(items):\n    ",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "order_summary(['Computer', 'Mouse', 'Tablet'])",
            "expected": {
              "total": 1535,
              "options": {
                "Computer": 1500,
                "Mouse": 35,
                "Tablet": null
              }
            }
          },
          {
            "expr": "order_summary(['Phone', 'Desk'])",
            "expected": {
              "total": 1150,
              "options": {
                "Phone": 750,
                "Desk": 400
              }
            }
          },
          {
            "expr": "order_summary(['Keyboard'])",
            "expected": {
              "total": 70,
              "options": {
                "Keyboard": 70
              }
            }
          }
        ],
        "hint": "לאסוף מחירים מכל חנות שיש בה את המפתח, לקחת min, ולסכום רק פריטים שנמצאו.",
        "explanation": "Computer זול יותר בתל אביב (1500), Mouse זול יותר באילת (35), ו-Tablet חסר ולכן None ולא נכנס לסכום.",
        "solution": "import pandas as pd\n\ntelaviv = pd.Series({'Computer': 1500, 'Phone': 800, 'Cable': 50, 'Chair': 200, 'Desk': 450})\nhaifa = pd.Series({'Phone': 750, 'Cable': 60, 'Lamp': 90, 'Desk': 400, 'Mouse': 40})\neilat = pd.Series({'Computer': 1600, 'Chair': 180, 'Lamp': 100, 'Mouse': 35, 'Keyboard': 70})\n\ndef order_summary(items):\n    stores = [telaviv, haifa, eilat]\n    options = {}\n    total = 0\n    for item in items:\n        prices = [int(s[item]) for s in stores if item in s.index]\n        if prices:\n            best = min(prices)\n            options[item] = best\n            total += best\n        else:\n            options[item] = None\n    return {'total': total, 'options': options}",
        "type": "write"
      }
    ]
  },
  {
    "id": "pandas-dataframe",
    "title": "Pandas DataFrame",
    "short": "DataFrame",
    "icon": "9",
    "intro": "מהו DataFrame, איך יוצרים אותו ממטריצה או מ-CSV, ואיך בודקים אותו עם head, info ו-describe.",
    "questions": [
      {
        "id": "pdf-1",
        "prompt": "מהו Pandas DataFrame?",
        "choices": [
          "מבנה נתונים דו-ממדי עם שורות ועמודות מתויגות, שבו כל עמודה היא Series עם אינדקס משותף",
          "מערך חד-ממדי בלבד, בלי שמות לעמודות",
          "קובץ תמונה ששומר גרפים",
          "פונקציה שמציירת תרשים עמודות"
        ],
        "answer": 0,
        "hint": "חושבים על טבלה, כמו אקסל או SQL.",
        "explanation": "DataFrame הוא טבלה דו-ממדית, ניתנת לשינוי בגודל, עם תוויות לשורות ולעמודות. כל עמודה היא Series.",
        "type": "mcq"
      },
      {
        "id": "pdf-2",
        "prompt": "מה קורה כשמוסיפים index= או columns= ביצירת DataFrame?",
        "choices": [
          "נוספת שכבת תוויות; עדיין אפשר לגשת גם לפי מיקום מספרי וגם לפי התווית",
          "האינדקס המספרי נמחק לגמרי ואי אפשר יותר להשתמש ב-iloc",
          "הטבלה הופכת ל-Series",
          "Pandas מוחק את הנתונים ומשאיר רק את התוויות"
        ],
        "answer": 0,
        "hint": "כמו ב-Series: תווית מותאמת היא תוספת, לא תחליף מלא.",
        "explanation": "התוויות המותאמות לא מחליפות את האינדקס המספרי. יש גישה כפולה: לפי מיקום ולפי תווית.",
        "type": "mcq"
      },
      {
        "id": "pdf-3",
        "prompt": "למה משמש pd.read_csv?",
        "choices": [
          "לטעון קובץ CSV מהמחשב (לפי נתיב מלא) ולהפוך אותו ל-DataFrame",
          "רק לשמור תמונה של הטבלה",
          "רק לחשב ממוצע בלי ליצור טבלה",
          "למחוק את כל העמודות מקובץ הטקסט"
        ],
        "answer": 0,
        "hint": "CSV הוא טבלה בטקסט. Pandas הופך אותה ל-DataFrame.",
        "explanation": "pd.read_csv(נתיב) טוען את הקובץ כטבלה עם שורות ועמודות.",
        "type": "mcq"
      },
      {
        "id": "pdf-4",
        "prompt": "מה יודפס?",
        "code": "import pandas as pd\ndf = pd.DataFrame([[1, 2], [3, 4]], columns=['A', 'B'], index=['r1', 'r2'])\nprint(df.loc['r2', 'A'])",
        "choices": [
          "3",
          "1",
          "4",
          "r2"
        ],
        "answer": 0,
        "hint": "loc ניגש לפי תווית שורה ואז תווית עמודה.",
        "explanation": "השורה r2 והעמודה A מכילות את 3.",
        "type": "predict"
      },
      {
        "id": "pdf-5",
        "prompt": "ייבאו pandas כ-pd וצרו df = pd.DataFrame([[1, 2], [3, 4]]).",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "df.values.tolist()",
            "expected": [
              [
                1,
                2
              ],
              [
                3,
                4
              ]
            ]
          },
          {
            "expr": "df.shape[0]",
            "expected": 2
          },
          {
            "expr": "df.shape[1]",
            "expected": 2
          }
        ],
        "hint": "מעבירים מטריצה (רשימת רשימות) ל-pd.DataFrame.",
        "explanation": "בלי columns/index מתקבלים אינדקסים מספריים כברירת מחדל לשורות ולעמודות.",
        "solution": "import pandas as pd\ndf = pd.DataFrame([[1, 2], [3, 4]])",
        "type": "write"
      },
      {
        "id": "pdf-6",
        "prompt": "ייבאו pandas כ-pd. צרו df מ-[[1, 2], [3, 4]] עם columns=['A', 'B'] ו-index=['row1', 'row2'].",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "list(df.columns)",
            "expected": [
              "A",
              "B"
            ]
          },
          {
            "expr": "list(df.index)",
            "expected": [
              "row1",
              "row2"
            ]
          },
          {
            "expr": "df.loc['row1', 'B']",
            "expected": 2
          }
        ],
        "hint": "מוסרים columns= ו-index= ל-DataFrame.",
        "explanation": "סדר הרשימות קובע את סדר תוויות השורות והעמודות.",
        "solution": "import pandas as pd\ndf = pd.DataFrame([[1, 2], [3, 4]], columns=['A', 'B'], index=['row1', 'row2'])",
        "type": "write"
      },
      {
        "id": "pdf-7",
        "prompt": "ייבאו pandas כ-pd. צרו df עם עמודה n שווה ל-[10, 20, 30, 40]. שמרו ב-first את שתי השורות הראשונות (ערכי n כרשימה) וב-last את השורה האחרונה (ערכי n כרשימה).",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "first",
            "expected": [
              10,
              20
            ]
          },
          {
            "expr": "last",
            "expected": [
              40
            ]
          }
        ],
        "hint": "head(2) ו-tail(1).",
        "explanation": "head מחזיר מההתחלה, tail מהסוף.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'n': [10, 20, 30, 40]})\nfirst = df.head(2)['n'].tolist()\nlast = df.tail(1)['n'].tolist()",
        "type": "write"
      },
      {
        "id": "pdf-8",
        "prompt": "ייבאו pandas כ-pd. צרו df = pd.DataFrame({'a': [1, 2], 'b': [3, 4]}). שמרו ב-cols את רשימת שמות העמודות וב-idx את רשימת האינדקס.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "cols",
            "expected": [
              "a",
              "b"
            ]
          },
          {
            "expr": "idx",
            "expected": [
              0,
              1
            ]
          }
        ],
        "hint": "df.columns ו-df.index, ולהמיר לרשימה.",
        "explanation": "columns הם שמות העמודות, index הם תוויות השורות (כאן 0 ו-1).",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})\ncols = list(df.columns)\nidx = list(df.index)",
        "type": "write"
      },
      {
        "id": "pdf-9",
        "prompt": "ייבאו pandas כ-pd. צרו df = pd.DataFrame({'a': [10, 20, 30], 'b': [2, 4, 6]}). שמרו ב-mean_a את ממוצע העמודה a מתוך describe, וב-t_index את רשימת האינדקס של df.describe().T (שמות העמודות המקוריות).",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "mean_a",
            "expected": 20.0
          },
          {
            "expr": "t_index",
            "expected": [
              "a",
              "b"
            ]
          }
        ],
        "hint": "describe().loc['mean', 'a'] ו-describe().T.index.",
        "explanation": "transpose/.T הופך את תצוגת describe כך ששמות העמודות הופכים לאינדקס.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'a': [10, 20, 30], 'b': [2, 4, 6]})\nmean_a = df.describe().loc['mean', 'a']\nt_index = list(df.describe().T.index)",
        "type": "write"
      },
      {
        "id": "pdf-10",
        "prompt": "ייבאו pandas כ-pd וגם io. קראו DataFrame בשם df מתוך המחרוזת 'name,age\\nDana,20\\nRoei,30' בעזרת pd.read_csv ו-io.StringIO.",
        "starter": "import pandas as pd\nimport io\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "list(df.columns)",
            "expected": [
              "name",
              "age"
            ]
          },
          {
            "expr": "df['name'].tolist()",
            "expected": [
              "Dana",
              "Roei"
            ]
          },
          {
            "expr": "df['age'].tolist()",
            "expected": [
              20,
              30
            ]
          }
        ],
        "hint": "pd.read_csv(io.StringIO(המחרוזת)).",
        "explanation": "כך מתרגלים read_csv בלי קובץ בדיסק. בקורס מעבירים נתיב מלא לקובץ.",
        "solution": "import pandas as pd\nimport io\ndf = pd.read_csv(io.StringIO('name,age\\nDana,20\\nRoei,30'))",
        "type": "write"
      },
      {
        "id": "pdf-11",
        "prompt": "ייבאו pandas כ-pd. צרו df = pd.DataFrame({'x': [5, 15, 25]}). שמרו ב-desc את התוצאה של df.describe(), וב-mn את ערך mean של העמודה x.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "mn",
            "expected": 15.0
          },
          {
            "expr": "int(desc.loc['count', 'x'])",
            "expected": 3
          }
        ],
        "hint": "describe מחזיר בין השאר count ו-mean.",
        "explanation": "info מציג סוגים וזיכרון; describe מציג סטטיסטיקות מספריות.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'x': [5, 15, 25]})\ndesc = df.describe()\nmn = desc.loc['mean', 'x']",
        "type": "write"
      },
      {
        "id": "pdf-12",
        "prompt": "ייבאו pandas כ-pd. צרו df עם העמודות city=['Haifa', 'Eilat', 'Eilat'] ו-temp=[22, 30, 31]. שמרו ב-n_rows את מספר השורות וב-n_cols את מספר העמודות.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "n_rows",
            "expected": 3
          },
          {
            "expr": "n_cols",
            "expected": 2
          },
          {
            "expr": "df['city'].tolist()",
            "expected": [
              "Haifa",
              "Eilat",
              "Eilat"
            ]
          }
        ],
        "hint": "shape הוא (שורות, עמודות).",
        "explanation": "shape[0] שורות, shape[1] עמודות. זה משלים את מה ש-info מציג.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'city': ['Haifa', 'Eilat', 'Eilat'], 'temp': [22, 30, 31]})\nn_rows = df.shape[0]\nn_cols = df.shape[1]",
        "type": "write"
      }
    ]
  },
  {
    "id": "pandas-select",
    "title": "עמודות, אינדקס וסינון",
    "short": "בחירה וסינון",
    "icon": "10",
    "intro": "בחירת עמודות, הוספה ומחיקה, set_index/loc/iloc, וסינון לפי תנאים, כולל & | ~ ו-between.",
    "questions": [
      {
        "id": "pdc-1",
        "prompt": "ב-df.drop(..., axis=1) מה נמחק?",
        "choices": [
          "עמודה לפי השם שמוסרים",
          "שורה לפי האינדקס שמוסרים",
          "כל הערכים החסרים בטבלה",
          "רק את האינדקס, בלי לגעת בעמודות"
        ],
        "answer": 0,
        "hint": "axis=0 שורות, axis=1 עמודות.",
        "explanation": "axis=1 מוחק עמודה לפי שמה; axis=0 מוחק שורה לפי האינדקס.",
        "type": "mcq"
      },
      {
        "id": "pdc-2",
        "prompt": "מה עושה inplace=True ב-drop או ב-set_index?",
        "choices": [
          "משנה את ה-DataFrame המקורי במקום להחזיר רק עותק חדש",
          "תמיד מוחק את כל העמודות",
          "שומר את הטבלה לקובץ CSV",
          "מבטל את הפעולה הקודמת"
        ],
        "answer": 0,
        "hint": "בלי inplace המקור נשאר, ומתקבל אובייקט חדש.",
        "explanation": "אפשר גם לדרוס את המשתנה: df = df.drop(...). inplace=True משנה במקום.",
        "type": "mcq"
      },
      {
        "id": "pdc-3",
        "prompt": "איך מחברים כמה תנאי סינון ב-Pandas?",
        "choices": [
          "עם &, | ו-~ (וסוגריים סביב כל תנאי), לא עם and/or/not של פייתון",
          "רק עם המילה and כמו במשפט",
          "אי אפשר יותר מתנאי אחד",
          "רק עם פונקציית if על כל הטבלה בבת אחת"
        ],
        "answer": 0,
        "hint": "האופרטורים המיוחדים של Pandas על מסכות.",
        "explanation": "& זה AND, | זה OR, ~ זה NOT. חובה סוגריים, אחרת תהיה שגיאת קדימות.",
        "type": "mcq"
      },
      {
        "id": "pdc-4",
        "prompt": "מה יודפס?",
        "code": "import pandas as pd\ndf = pd.DataFrame({'n': [10, 20, 30, 40]}, index=['a', 'b', 'c', 'd'])\nprint(df.iloc[1:3]['n'].tolist())",
        "choices": [
          "[20, 30]",
          "[20, 30, 40]",
          "[10, 20, 30]",
          "[b, c]"
        ],
        "answer": 0,
        "hint": "iloc עם חיתוך כמו בפייתון: כולל את ההתחלה, בלי הסוף.",
        "explanation": "אינדקסי המיקום 1 ו-2 הם 20 ו-30. 3 לא נכלל.",
        "type": "predict"
      },
      {
        "id": "pdc-5",
        "prompt": "ייבאו pandas כ-pd. צרו df = pd.DataFrame({'a': [1, 2], 'b': [10, 20], 'c': [7, 8]}). שמרו ב-one את ערכי העמודה a כרשימה, וב-two את הטבלה רק עם העמודות a ו-c כרשימת רשימות (values.tolist()).",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "one",
            "expected": [
              1,
              2
            ]
          },
          {
            "expr": "two",
            "expected": [
              [
                1,
                7
              ],
              [
                2,
                8
              ]
            ]
          }
        ],
        "hint": "עמודה אחת בסוגריים רגילים, כמה עמודות ברשימה כפולה.",
        "explanation": "df['a'] הוא Series; df[['a', 'c']] הוא DataFrame.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'a': [1, 2], 'b': [10, 20], 'c': [7, 8]})\none = df['a'].tolist()\ntwo = df[['a', 'c']].values.tolist()",
        "type": "write"
      },
      {
        "id": "pdc-6",
        "prompt": "ייבאו pandas כ-pd. צרו df עם col1=[1, 2] ו-col2=[10, 20]. הוסיפו עמודה new_col שהיא סכום col1 ו-col2.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "df['new_col'].tolist()",
            "expected": [
              11,
              22
            ]
          },
          {
            "expr": "list(df.columns)",
            "expected": [
              "col1",
              "col2",
              "new_col"
            ]
          }
        ],
        "hint": "df['new_col'] = df['col1'] + df['col2'].",
        "explanation": "השמה לשם חדש בסוגריים מרובעים יוצרת עמודה; לשם קיים — מעדכנת.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'col1': [1, 2], 'col2': [10, 20]})\ndf['new_col'] = df['col1'] + df['col2']",
        "type": "write"
      },
      {
        "id": "pdc-7",
        "prompt": "ייבאו pandas כ-pd. צרו df עם a=[1, 2, 3] ו-b=[10, 20, 30]. מחקו את העמודה b מהטבלה עצמה (inplace) כך שהשינוי יישאר ב-df.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "list(df.columns)",
            "expected": [
              "a"
            ]
          },
          {
            "expr": "df['a'].tolist()",
            "expected": [
              1,
              2,
              3
            ]
          }
        ],
        "hint": "drop עם axis=1 ו-inplace=True.",
        "explanation": "בלי inplace היינו מקבלים עותק, והמשתנה df היה נשאר עם b.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'a': [1, 2, 3], 'b': [10, 20, 30]})\ndf.drop('b', axis=1, inplace=True)",
        "type": "write"
      },
      {
        "id": "pdc-8",
        "prompt": "ייבאו pandas כ-pd. צרו df = pd.DataFrame({'id': ['p1', 'p2'], 'n': [10, 20]}). קבעו את העמודה id כאינדקס (ושמרו את התוצאה ב-df). אחר כך שמרו ב-idx את רשימת האינדקס וב-cols את רשימת העמודות שנשארו.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "idx",
            "expected": [
              "p1",
              "p2"
            ]
          },
          {
            "expr": "cols",
            "expected": [
              "n"
            ]
          },
          {
            "expr": "int(df.loc['p1', 'n'])",
            "expected": 10
          }
        ],
        "hint": "set_index('id'). העמודה שנבחרה יוצאת מרשימת העמודות.",
        "explanation": "reset_index יחזיר את id להיות עמודה רגילה.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'id': ['p1', 'p2'], 'n': [10, 20]})\ndf = df.set_index('id')\nidx = list(df.index)\ncols = list(df.columns)",
        "type": "write"
      },
      {
        "id": "pdc-9",
        "prompt": "ייבאו pandas כ-pd. צרו df עם n=[10, 20, 30, 40] ואינדקס ['a','b','c','d']. שמרו ב-mid את ערכי n של df.iloc[1:3] כרשימה, וב-picked את ערכי n של df.loc[['a', 'c']] כרשימה.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "mid",
            "expected": [
              20,
              30
            ]
          },
          {
            "expr": "picked",
            "expected": [
              10,
              30
            ]
          }
        ],
        "hint": "iloc לפי מיקום (חיתוך בלי הסוף), loc לפי תוויות ברשימה.",
        "explanation": "iloc[1:3] אלו שורות המיקום 1 ו-2. loc בוחר לפי השמות a ו-c.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'n': [10, 20, 30, 40]}, index=['a', 'b', 'c', 'd'])\nmid = df.iloc[1:3]['n'].tolist()\npicked = df.loc[['a', 'c']]['n'].tolist()",
        "type": "write"
      },
      {
        "id": "pdc-10",
        "prompt": "ייבאו pandas כ-pd. צרו שתי טבלאות: a עם x=[1, 2] ו-b עם x=[3]. שמרו ב-out את pd.concat שלהן עם ignore_index=True, וב-vals את ערכי x של out כרשימה.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "vals",
            "expected": [
              1,
              2,
              3
            ]
          },
          {
            "expr": "len(out)",
            "expected": 3
          }
        ],
        "hint": "pd.concat([a, b], ignore_index=True).",
        "explanation": "append הוצא משימוש; לשרשור טבלאות משתמשים ב-concat.",
        "solution": "import pandas as pd\na = pd.DataFrame({'x': [1, 2]})\nb = pd.DataFrame({'x': [3]})\nout = pd.concat([a, b], ignore_index=True)\nvals = out['x'].tolist()",
        "type": "write"
      },
      {
        "id": "pdc-11",
        "prompt": "ייבאו pandas כ-pd. צרו df עם country=['USA','Canada','Italy'], population=[80, 40, 60], year=[1776, 1867, 1861]. שמרו ב-big את שמות המדינות עם population גדול מ-50, ב-combo את שמות המדינות עם population > 50 וגם country שווה ל-USA או ל-Canada, וב-not1776 את שמות המדינות ששנתן אינה 1776.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "big",
            "expected": [
              "USA",
              "Italy"
            ]
          },
          {
            "expr": "combo",
            "expected": [
              "USA"
            ]
          },
          {
            "expr": "not1776",
            "expected": [
              "Canada",
              "Italy"
            ]
          }
        ],
        "hint": "מסכה בסוגריים, עם & | ו-~ כמו בשקפי השיעור.",
        "explanation": "קודם בונים Series בוליאני, ואז df[מסכה] מחזיר את השורות המתאימות.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'country': ['USA', 'Canada', 'Italy'], 'population': [80, 40, 60], 'year': [1776, 1867, 1861]})\nbig = df[df['population'] > 50]['country'].tolist()\ncombo = df[(df['population'] > 50) & ((df['country'] == 'USA') | (df['country'] == 'Canada'))]['country'].tolist()\nnot1776 = df[~(df['year'] == 1776)]['country'].tolist()",
        "type": "write"
      },
      {
        "id": "pdc-12",
        "prompt": "תרגיל כיתתי בסגנון tips: ייבאו pandas כ-pd. צרו df עם Payer Name=['Avi','Dana','Gadi'], total_bill=[40, 18, 32], tip=[5, 1, 4], sex=['Male','Female','Male']. שמרו ב-pay את הטבלה רק עם העמודות Payer Name, tip ו-total_bill. הוסיפו ל-pay עמודה total_payment שהיא total_bill+tip ועמודה tip_percentage שהיא (tip/total_payment)*100. שמרו ב-males30 את שמות המשלמים עם total_bill מעל 30 ו-sex שווה ל-Male, וב-generous את שמות המשלמים שהטיפ שלהם מעל 10% מ-total_bill.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "list(pay.columns)",
            "expected": [
              "Payer Name",
              "tip",
              "total_bill",
              "total_payment",
              "tip_percentage"
            ]
          },
          {
            "expr": "pay['total_payment'].tolist()",
            "expected": [
              45,
              19,
              36
            ]
          },
          {
            "expr": "males30",
            "expected": [
              "Avi",
              "Gadi"
            ]
          },
          {
            "expr": "generous",
            "expected": [
              "Avi",
              "Gadi"
            ]
          }
        ],
        "hint": "זה התרגיל הכיתתי משיעור 20, על טבלה קטנה במקום tips.csv.",
        "explanation": "total_payment הוא חשבון+טיפ. אחוז הטיפ מהתשלום הכולל הוא tip/total_payment. הסינון השני בשקף הוא טיפ מעל 10% מהחשבון (total_bill). בשקף נכתב tip_precentage — כאן השם הנכון tip_percentage.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'Payer Name': ['Avi', 'Dana', 'Gadi'], 'total_bill': [40, 18, 32], 'tip': [5, 1, 4], 'sex': ['Male', 'Female', 'Male']})\npay = df[['Payer Name', 'tip', 'total_bill']].copy()\npay['total_payment'] = pay['total_bill'] + pay['tip']\npay['tip_percentage'] = pay['tip'] / pay['total_payment'] * 100\nmales30 = df[(df['total_bill'] > 30) & (df['sex'] == 'Male')]['Payer Name'].tolist()\ngenerous = df[(df['tip'] / df['total_bill']) > 0.1]['Payer Name'].tolist()",
        "type": "write"
      }
    ]
  },
  {
    "id": "pandas-transform",
    "title": "apply, מיון וערכים",
    "short": "פונקציות וערכים",
    "icon": "11",
    "intro": "apply ו-np.vectorize לפונקציות מותאמות, מיון, ספירת ערכים, החלפה, כפילויות, ו-nlargest/nsmallest.",
    "questions": [
      {
        "id": "pdt-1",
        "prompt": "מתי משתמשים ב-df['col'].apply(func)?",
        "choices": [
          "כשרוצים להפעיל פונקציית פייתון מותאמת על כל ערך בעמודה אחת",
          "רק כדי למיין את הטבלה מהגדול לקטן",
          "רק כדי למחוק שורות כפולות",
          "כדי לשמור את הטבלה לקובץ בלבד"
        ],
        "answer": 0,
        "hint": "בשיעור: ארבע הספרות האחרונות של כרטיס אשראי.",
        "explanation": "apply מעביר כל ערך בעמודה לפונקציה ומחזיר את התוצאות, למשל לעמודה חדשה.",
        "type": "mcq"
      },
      {
        "id": "pdt-2",
        "prompt": "מה ההבדל בין unique, nunique ו-value_counts על עמודה?",
        "choices": [
          "unique מחזיר את הערכים הייחודיים, nunique את מספרם, ו-value_counts כמה פעמים כל ערך מופיע",
          "כולם מחזירים בדיוק את אותו דבר תמיד",
          "value_counts מוחק כפילויות מהטבלה עצמה",
          "nunique מחזיר את השורה עם הערך הגדול ביותר"
        ],
        "answer": 0,
        "hint": "שלוש שאלות שונות: מה הערכים, כמה סוגים, כמה מכל סוג.",
        "explanation": "למשל על מין: unique ייתן Male/Female, nunique ייתן 2, value_counts יספור כמה מכל אחד.",
        "type": "mcq"
      },
      {
        "id": "pdt-3",
        "prompt": "מה נכון לגבי replace ו-map להחלפת ערכים בעמודה?",
        "choices": [
          "replace מקבל לרוב רשימות ישן/חדש לפי סדר, ו-map מקבל מילון {ישן: חדש}",
          "שתי השיטות מוחקות את העמודה",
          "map עובד רק על אינדקס מספרי, לא על ערכים",
          "replace יודע רק למלא NaN ולא להחליף מחרוזות"
        ],
        "answer": 0,
        "hint": "בשיעור החליפו Female/Male ב-F/M בשתי הדרכים.",
        "explanation": "הפונקציונליות דומה; המילון של map לעיתים קריא יותר.",
        "type": "mcq"
      },
      {
        "id": "pdt-4",
        "prompt": "מה יודפס?",
        "code": "def last_four(num):\n    return str(num)[-4:]\nprint(last_four(3560325168603410))",
        "choices": [
          "3410",
          "3560",
          "0341",
          "1603"
        ],
        "answer": 0,
        "hint": "ממירים למחרוזת וחותכים את ארבעת התווים האחרונים.",
        "explanation": "זו הפונקציה מהשיעור, לפני שמפעילים עליה apply.",
        "type": "predict"
      },
      {
        "id": "pdt-5",
        "prompt": "ייבאו pandas כ-pd. הגדירו last_four שמחזירה את ארבע הספרות האחרונות של המספר (כמחרוזת). צרו df עם CC Number=[3560325168603410, 1234567890123456] והוסיפו עמודה last_four בעזרת apply.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "df['last_four'].tolist()",
            "expected": [
              "3410",
              "3456"
            ]
          }
        ],
        "hint": "str(num)[-4:] ואז apply על העמודה.",
        "explanation": "אין פונקציה מובנית ל'ארבע אחרונות' — לכן כותבים פונקציה ומפעילים apply, כמו בשיעור 21.",
        "solution": "import pandas as pd\ndef last_four(num):\n    return str(num)[-4:]\ndf = pd.DataFrame({'CC Number': [3560325168603410, 1234567890123456]})\ndf['last_four'] = df['CC Number'].apply(last_four)",
        "type": "write"
      },
      {
        "id": "pdt-6",
        "prompt": "ייבאו numpy כ-np ו-pandas כ-pd. הגדירו quality(total_bill, tip) שמחזירה 'Generous' אם tip/total_bill גדול מ-0.25, אחרת 'Not Generous'. צרו df עם total_bill=[20, 10] ו-tip=[3, 3], והוסיפו עמודה quality בעזרת np.vectorize.",
        "starter": "import numpy as np\nimport pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "df['quality'].tolist()",
            "expected": [
              "Not Generous",
              "Generous"
            ]
          }
        ],
        "hint": "np.vectorize(quality)(df['total_bill'], df['tip']).",
        "explanation": "vectorize מתאים פונקציית פייתון לכמה עמודות בבת אחת. 3/20=0.15 לא נדיב, 3/10=0.3 נדיב.",
        "solution": "import numpy as np\nimport pandas as pd\ndef quality(total_bill, tip):\n    if tip / total_bill > 0.25:\n        return 'Generous'\n    return 'Not Generous'\ndf = pd.DataFrame({'total_bill': [20, 10], 'tip': [3, 3]})\ndf['quality'] = np.vectorize(quality)(df['total_bill'], df['tip'])",
        "type": "write"
      },
      {
        "id": "pdt-7",
        "prompt": "ייבאו pandas כ-pd. צרו df עם name=['A','B','C'] , tip=[5, 1, 5] ו-n=[2, 9, 1]. שמרו ב-names את רשימת השמות אחרי מיון לפי tip ואז n, שניהם בסדר יורד (ascending=False).",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "names",
            "expected": [
              "A",
              "C",
              "B"
            ]
          }
        ],
        "hint": "sort_values עם רשימת עמודות ו-ascending=False.",
        "explanation": "קודם tip מהגדול לקטן, ואז בין שווים לפי n. לכן A (5,2) לפני C (5,1), ו-B בסוף.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'name': ['A', 'B', 'C'], 'tip': [5, 1, 5], 'n': [2, 9, 1]})\nnames = df.sort_values(['tip', 'n'], ascending=False)['name'].tolist()",
        "type": "write"
      },
      {
        "id": "pdt-8",
        "prompt": "ייבאו pandas כ-pd. צרו df עם sex=['Male','Female','Male','Male']. שמרו ב-counts את value_counts כמילון, ב-nuniq את nunique, וב-uniq את הערכים הייחודיים כרשימה ממוינת.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "counts",
            "expected": {
              "Male": 3,
              "Female": 1
            }
          },
          {
            "expr": "nuniq",
            "expected": 2
          },
          {
            "expr": "uniq",
            "expected": [
              "Female",
              "Male"
            ]
          }
        ],
        "hint": "value_counts().to_dict(), nunique(), unique().",
        "explanation": "counts סופר, nunique מונה סוגים, unique מחזיר את הערכים עצמם.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'sex': ['Male', 'Female', 'Male', 'Male']})\ncounts = df['sex'].value_counts().to_dict()\nnuniq = int(df['sex'].nunique())\nuniq = sorted(df['sex'].unique().tolist())",
        "type": "write"
      },
      {
        "id": "pdt-9",
        "prompt": "ייבאו pandas כ-pd. צרו df עם sex=['Female','Male','Female']. שמרו ב-by_replace את העמודה אחרי replace של Female/Male ל-F/M, וב-by_map את אותה החלפה עם map ומילון.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "by_replace",
            "expected": [
              "F",
              "M",
              "F"
            ]
          },
          {
            "expr": "by_map",
            "expected": [
              "F",
              "M",
              "F"
            ]
          }
        ],
        "hint": "replace עם שתי רשימות, או map עם מילון.",
        "explanation": "שתי הדרכים נלמדו בשיעור 21 ומגיעות לאותה תוצאה.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'sex': ['Female', 'Male', 'Female']})\nby_replace = df['sex'].replace(['Female', 'Male'], ['F', 'M']).tolist()\nby_map = df['sex'].map({'Female': 'F', 'Male': 'M'}).tolist()",
        "type": "write"
      },
      {
        "id": "pdt-10",
        "prompt": "ייבאו pandas כ-pd. צרו df עם a=[1, 2, 1, 1]. שמרו ב-flags את תוצאת duplicated על העמודה a כרשימה, וב-clean את ערכי a אחרי drop_duplicates כרשימה.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "flags",
            "expected": [
              false,
              false,
              true,
              true
            ]
          },
          {
            "expr": "clean",
            "expected": [
              1,
              2
            ]
          }
        ],
        "hint": "ההופעה הראשונה היא False; הבאות True. drop_duplicates משאיר את הראשונה.",
        "explanation": "1 מופיע שוב בשורות 2 ו-3 (מניה מ-0), לכן שם True.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'a': [1, 2, 1, 1]})\nflags = df['a'].duplicated().tolist()\nclean = df.drop_duplicates()['a'].tolist()",
        "type": "write"
      },
      {
        "id": "pdt-11",
        "prompt": "ייבאו pandas כ-pd. צרו df עם name=['A','B','C','D'] ו-tip=[1, 9, 3, 7]. שמרו ב-top את שני השמות עם הטיפ הגדול ביותר (nlargest), וב-low את השם עם הטיפ הקטן ביותר (nsmallest), כרשימות.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "top",
            "expected": [
              "B",
              "D"
            ]
          },
          {
            "expr": "low",
            "expected": [
              "A"
            ]
          }
        ],
        "hint": "nlargest(2, 'tip') ו-nsmallest(1, 'tip').",
        "explanation": "sample לדגימה אקראית לא נבדק כאן, כי בלי random_state התוצאה משתנה.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'name': ['A', 'B', 'C', 'D'], 'tip': [1, 9, 3, 7]})\ntop = df.nlargest(2, 'tip')['name'].tolist()\nlow = df.nsmallest(1, 'tip')['name'].tolist()",
        "type": "write"
      },
      {
        "id": "pdt-12",
        "prompt": "ייבאו numpy כ-np ו-pandas כ-pd. הגדירו calc_percent(t_bill, tip) שמחזירה round(tip / t_bill * 100, 2). צרו df עם total_bill=[20, 50] ו-tip=[5, 7], והוסיפו עמודה tip_percent בעזרת np.vectorize(calc_percent).",
        "starter": "import numpy as np\nimport pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "df['tip_percent'].tolist()",
            "expected": [
              25.0,
              14.0
            ]
          }
        ],
        "hint": "זו דוגמת הסיכום של שיעור 21 לחישוב אחוז טיפ.",
        "explanation": "vectorize מפעיל את הפונקציה על שתי העמודות ומעגל לשתי ספרות.",
        "solution": "import numpy as np\nimport pandas as pd\ndef calc_percent(t_bill, tip):\n    return round(tip / t_bill * 100, 2)\ndf = pd.DataFrame({'total_bill': [20, 50], 'tip': [5, 7]})\ndf['tip_percent'] = np.vectorize(calc_percent)(df['total_bill'], df['tip'])",
        "type": "write"
      }
    ]
  },
  {
    "id": "pandas-missing",
    "title": "ערכים חסרים",
    "short": "חסרים / NaN",
    "icon": "12",
    "intro": "שלוש אסטרטגיות לטיפול בחסרים, זיהוי עם isnull/notnull, מחיקה עם dropna (thresh, subset) ומילוי עם fillna.",
    "questions": [
      {
        "id": "pdm-1",
        "prompt": "אילו שלוש דרכים עיקריות יש לטיפול בערכים חסרים, לפי השיעור?",
        "choices": [
          "להשאיר את ה-NaN, למחוק שורות/עמודות עם חסרים, או למלא בערך אחר",
          "רק להמיר הכול למחרוזות",
          "רק לצייר גרף ולהתעלם מהטבלה",
          "חובה תמיד למחוק את כל העמודות בטבלה"
        ],
        "answer": 0,
        "hint": "Keep, Delete, או Fill.",
        "explanation": "לכל דרך יש יתרונות וחסרונות: מקוריות מול תאימות ספריות, אובדן מידע, או סיכון במילוי שגוי.",
        "type": "mcq"
      },
      {
        "id": "pdm-2",
        "prompt": "למה בודקים ערך בודד של np.nan עם is ולא עם ==?",
        "choices": [
          "כי np.nan == np.nan הוא False, ואילו np.nan is np.nan הוא True",
          "כי האופרטור is אסור בפייתון",
          "כי == מוחק את העמודה",
          "אין הבדל, תמיד מתקבלת אותה תוצאה"
        ],
        "answer": 0,
        "hint": "זו בדיקת זהות האובייקט, לא שוויון מספרי.",
        "explanation": "בטבלה נוח יותר להשתמש ב-isnull/isna, שמיועדים בדיוק לזה.",
        "type": "mcq"
      },
      {
        "id": "pdm-3",
        "prompt": "מתי הגיוני למחוק עמודה שלמה בגלל חסרים, ומתי שורה?",
        "choices": [
          "מוחקים שורה כשרוב ערכיה חסרים, ועמודה כשברוב השורות היא ריקה; כדאי לבדוק קודם את אחוז המחיקה",
          "תמיד מוחקים את כל הטבלה ברגע שיש NaN אחד",
          "אסור למחוק שורות, רק עמודות",
          "מוחקים רק אם אין אף ערך חסר"
        ],
        "answer": 0,
        "hint": "שורה חסרה מול עמודה חסרה, ואחוז מהמקור.",
        "explanation": "אם האחוז גבוה, השיעור ממליץ לנסות לאסוף נתונים מחדש במקום למחוק.",
        "type": "mcq"
      },
      {
        "id": "pdm-4",
        "prompt": "מה יודפס?",
        "code": "import pandas as pd\ndf = pd.DataFrame({'first_name': ['Ana', None, 'Ben']})\nprint(df['first_name'].isnull().tolist())",
        "choices": [
          "[False, True, False]",
          "[True, False, True]",
          "[False, False, False]",
          "[None, True, None]"
        ],
        "answer": 0,
        "hint": "isnull מחזיר True רק במקום החסר.",
        "explanation": "Ana ו-Ben קיימים (False); הערך האמצעי חסר (True).",
        "type": "predict"
      },
      {
        "id": "pdm-5",
        "prompt": "ייבאו pandas כ-pd. צרו df עם first_name=['Ana', None, 'Ben'] ו-pre_movie_score=[8, None, 7]. שמרו ב-missing_name את isnull של first_name כרשימה, וב-has_score את השמות (first_name) של השורות שבהן pre_movie_score.notnull().",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "missing_name",
            "expected": [
              false,
              true,
              false
            ]
          },
          {
            "expr": "has_score",
            "expected": [
              "Ana",
              "Ben"
            ]
          }
        ],
        "hint": "isnull לזיהוי, ו-df[df['col'].notnull()] לסינון.",
        "explanation": "ל-Ana (8) ול-Ben (7) יש ציון; לשורה האמצעית אין ציון וגם השם חסר.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'first_name': ['Ana', None, 'Ben'], 'pre_movie_score': [8, None, 7]})\nmissing_name = df['first_name'].isnull().tolist()\nhas_score = df[df['pre_movie_score'].notnull()]['first_name'].tolist()",
        "type": "write"
      },
      {
        "id": "pdm-6",
        "prompt": "ייבאו pandas כ-pd. צרו df עם first_name=['Ana', 'Dan', 'Ben'] ו-pre_movie_score=[8, None, None]. שמרו ב-names את first_name של השורות שבהן השם קיים (notnull) והציון המקדים חסר (isnull).",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "names",
            "expected": [
              "Dan",
              "Ben"
            ]
          }
        ],
        "hint": "כמו בסיכום שיעור 21: שני התנאים עם &.",
        "explanation": "Ana יש לה ציון לכן לא נכנסת; ל-Dan ו-Ben יש שם ואין ציון מקדים.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'first_name': ['Ana', 'Dan', 'Ben'], 'pre_movie_score': [8, None, None]})\nnames = df[(df['first_name'].notnull()) & (df['pre_movie_score'].isnull())]['first_name'].tolist()",
        "type": "write"
      },
      {
        "id": "pdm-7",
        "prompt": "תרגיל כיתתי (חלק א): הטבלה כבר מוכנה בתיבת הקוד, ויש בה ערכים חסרים. מחקו כל שורה שיש בה לפחות ערך חסר אחד, ושמרו את התוצאה במשתנה complete כרשימת רשימות.",
        "starter": "import pandas as pd\ndf = pd.DataFrame({'A': [None, 2, 3, None, 5], 'B': [10, None, None, 40, 50], 'C': [100, None, 300, 400, None]})\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "complete",
            "expected": []
          },
          {
            "expr": "len(df.dropna())",
            "expected": 0
          }
        ],
        "hint": "dropna() בלי פרמטרים. בדקו אם נשארת שורה מלאה.",
        "explanation": "בטבלה מהתרגיל הכיתתי אין אף שורה מלאה, לכן התוצאה ריקה. זו בדיוק הנקודה של המשימה הראשונה.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'A': [None, 2, 3, None, 5], 'B': [10, None, None, 40, 50], 'C': [100, None, 300, 400, None]})\ncomplete = df.dropna().values.tolist()",
        "type": "write"
      },
      {
        "id": "pdm-8",
        "prompt": "תרגיל כיתתי (חלק ב): הטבלה כבר מוכנה בתיבת הקוד. שמרו במשתנה kept את מספר השורות שנשארות אחרי שמחיקים רק שורות שבהן כל הערכים חסרים.",
        "starter": "import pandas as pd\ndf = pd.DataFrame({'A': [None, 2, 3, None, 5], 'B': [10, None, None, 40, 50], 'C': [100, None, 300, 400, None]})\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "kept",
            "expected": 5
          }
        ],
        "hint": "אין כאן שורה שכולה חסרה, לכן כל 5 השורות נשארות.",
        "explanation": "how='all' או thresh=1 מוחקים רק שורות בלי אף ערך תקין. בשיעור זה הוסבר גם עם thresh.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'A': [None, 2, 3, None, 5], 'B': [10, None, None, 40, 50], 'C': [100, None, 300, 400, None]})\nkept = len(df.dropna(how='all'))",
        "type": "write"
      },
      {
        "id": "pdm-9",
        "prompt": "תרגיל כיתתי (חלק ג): הטבלה כבר מוכנה בתיבת הקוד. מחקו שורות שיש בהן ערך חסר באחת משתי העמודות שב-subset (הראשונה והשלישית). שמרו במשתנה rows את הערכים שנשארו בעמודה הראשונה, כמספרים שלמים.",
        "starter": "import pandas as pd\ndf = pd.DataFrame({'A': [None, 2, 3, None, 5], 'B': [10, None, None, 40, 50], 'C': [100, None, 300, 400, None]})\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "rows",
            "expected": [
              3
            ]
          },
          {
            "expr": "len(df.dropna(subset=['A', 'C']))",
            "expected": 1
          }
        ],
        "hint": "dropna(subset=['A', 'C']).",
        "explanation": "רק השורה עם A=3 ו-C=300 שלמה בשתיהן. B לא נכנס לבדיקה, גם אם הוא חסר.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'A': [None, 2, 3, None, 5], 'B': [10, None, None, 40, 50], 'C': [100, None, 300, 400, None]})\nrows = df.dropna(subset=['A', 'C'])['A'].astype(int).tolist()",
        "type": "write"
      },
      {
        "id": "pdm-10",
        "prompt": "תרגיל כיתתי (חלק ד): הטבלה כבר מוכנה בתיבת הקוד. מלאו את כל הערכים החסרים באפס, ושמרו במשתנה filled את הטבלה כרשימת רשימות של מספרים שלמים.",
        "starter": "import pandas as pd\ndf = pd.DataFrame({'A': [None, 2, 3, None, 5], 'B': [10, None, None, 40, 50], 'C': [100, None, 300, 400, None]})\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "filled",
            "expected": [
              [
                0,
                10,
                100
              ],
              [
                2,
                0,
                0
              ],
              [
                3,
                0,
                300
              ],
              [
                0,
                40,
                400
              ],
              [
                5,
                50,
                0
              ]
            ]
          }
        ],
        "hint": "fillna(0) ואז המרה ל-int כדי לקבל מספרים שלמים.",
        "explanation": "כל חסר הופך ל-0, וכל השורות נשמרות.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'A': [None, 2, 3, None, 5], 'B': [10, None, None, 40, 50], 'C': [100, None, 300, 400, None]})\nfilled = df.fillna(0).astype(int).values.tolist()",
        "type": "write"
      },
      {
        "id": "pdm-11",
        "prompt": "ייבאו pandas כ-pd. צרו df עם B=[10, None, None, 40, 50]. מלאו את החסרים בעמודה B בממוצע של הערכים שאינם חסרים, ושמרו את רשימת הערכים ב-filled_b.",
        "starter": "import pandas as pd\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "filled_b",
            "expected": [
              10.0,
              33.333333333333336,
              33.333333333333336,
              40.0,
              50.0
            ]
          }
        ],
        "hint": "df['B'].fillna(df['B'].mean()). הממוצע הוא (10+40+50)/3.",
        "explanation": "כמו מילוי post_movie_score בממוצע העמודה בשיעור 21.",
        "solution": "import pandas as pd\ndf = pd.DataFrame({'B': [10, None, None, 40, 50]})\nfilled_b = df['B'].fillna(df['B'].mean()).tolist()",
        "type": "write"
      },
      {
        "id": "pdm-12",
        "prompt": "ייבאו numpy כ-np. בדקו את הזהות של np.nan: שמרו ב-same_is את תוצאת (np.nan is np.nan) וב-same_eq את תוצאת (np.nan == np.nan).",
        "starter": "import numpy as np\n",
        "packages": [
          "numpy",
          "pandas"
        ],
        "tests": [
          {
            "expr": "same_is",
            "expected": true
          },
          {
            "expr": "same_eq",
            "expected": false
          }
        ],
        "hint": "is מול ==, כמו בשקף.",
        "explanation": "לכן לבדיקת nan בודדים משתמשים ב-is, ובטבלה ב-isnull/isna.",
        "solution": "import numpy as np\nsame_is = np.nan is np.nan\nsame_eq = np.nan == np.nan",
        "type": "write"
      }
    ]
  }
];

  root.DATA_TOPICS = DATA_TOPICS;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { DATA_TOPICS };
  }
})(typeof window !== "undefined" ? window : globalThis);
