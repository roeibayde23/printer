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
            "expected": 4.0
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
              0.0,
              0.0,
              0.0,
              0.0,
              0.0
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
              0.0,
              5.0,
              10.0
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
              64.0,
              57.6,
              51.8,
              42.8,
              45.6
            ]
          },
          {
            "expr": "row_median.tolist()",
            "expected": [
              70.0,
              75.0,
              60.0,
              40.0,
              49.0
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
  }
];

  root.DATA_TOPICS = DATA_TOPICS;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { DATA_TOPICS };
  }
})(typeof window !== "undefined" ? window : globalThis);
