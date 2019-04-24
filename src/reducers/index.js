import { combineReducers } from "redux";
//static list of chapters

const chaptersReducer = () => {
 return [
  {
    "No": 1,
    "name_ar": "الفاتحة",
    "Name": "Al-Fatiha",
    "meaning": "The Opening",
    "no_of_verses": 7,
    "Place": "Meccan",
    "Chronology": 5
  },
  {
    "No": 2,
    "name_ar": "البقرة",
    "Name": "Al-Baqara",
    "meaning": "The Cow",
    "no_of_verses": 286,
    "Place": "Medinan",
    "Chronology": 87
  },
  {
    "No": 3,
    "name_ar": "آل عمران",
    "Name": "Al Imran",
    "meaning": "The House of Joachim",
    "no_of_verses": 200,
    "Place": "Medinan",
    "Chronology": 89
  },
  {
    "No": 4,
    "name_ar": "النساء",
    "Name": "An-Nisa'",
    "meaning": "Women",
    "no_of_verses": 176,
    "Place": "Medinan",
    "Chronology": 92
  },
  {
    "No": 5,
    "name_ar": "المائدة",
    "Name": "Al-Ma'ida",
    "meaning": "The Table Spread",
    "no_of_verses": 120,
    "Place": "Medinan",
    "Chronology": 112
  },
  {
    "No": 6,
    "name_ar": "الأنعام",
    "Name": "Al-An'am",
    "meaning": "Cattle",
    "no_of_verses": 165,
    "Place": "Meccan",
    "Chronology": 55
  },
  {
    "No": 7,
    "name_ar": "الأعراف",
    "Name": "Al-A'raf",
    "meaning": "The Heights",
    "no_of_verses": 206,
    "Place": "Meccan",
    "Chronology": 39
  },
  {
    "No": 8,
    "name_ar": "الأنفال",
    "Name": "Al-Anfal",
    "meaning": "Spoils of War",
    "no_of_verses": 75,
    "Place": "Medinan",
    "Chronology": 88
  },
  {
    "No": 9,
    "name_ar": "التوبة",
    "Name": "At-Tawba",
    "meaning": "Repentance",
    "no_of_verses": 129,
    "Place": "Medinan",
    "Chronology": 113
  },
  {
    "No": 10,
    "name_ar": "يونس",
    "Name": "Yunus",
    "meaning": "Jonah",
    "no_of_verses": 109,
    "Place": "Meccan",
    "Chronology": 51
  },
  {
    "No": 11,
    "name_ar": "هود",
    "Name": "Hud",
    "meaning": "Hud",
    "no_of_verses": 123,
    "Place": "Meccan",
    "Chronology": 52
  },
  {
    "No": 12,
    "name_ar": "يوسف",
    "Name": "Yusuf",
    "meaning": "Joseph",
    "no_of_verses": 111,
    "Place": "Meccan",
    "Chronology": 53
  },
  {
    "No": 13,
    "name_ar": "الرعد",
    "Name": "Ar-Ra'd",
    "meaning": "Thunder",
    "no_of_verses": 43,
    "Place": "Medinan",
    "Chronology": 96
  },
  {
    "No": 14,
    "name_ar": "إبراهيم",
    "Name": "Ibrahim",
    "meaning": "Abraham",
    "no_of_verses": 52,
    "Place": "Meccan",
    "Chronology": 72
  },
  {
    "No": 15,
    "name_ar": "الحجر",
    "Name": "Al-Hijr",
    "meaning": "The City of Stoneor The Rocky Plain",
    "no_of_verses": 99,
    "Place": "Meccan",
    "Chronology": 54
  },
  {
    "No": 16,
    "name_ar": "النحل",
    "Name": "An-Nahl",
    "meaning": "The Bee",
    "no_of_verses": 128,
    "Place": "Meccan",
    "Chronology": 70
  },
  {
    "No": 17,
    "name_ar": "الإسراء",
    "Name": "Al-Isra'",
    "meaning": "The Night Journey",
    "no_of_verses": 111,
    "Place": "Meccan",
    "Chronology": 50
  },
  {
    "No": 18,
    "name_ar": "الكهف",
    "Name": "Al-Kahf",
    "meaning": "The Cave",
    "no_of_verses": 110,
    "Place": "Meccan",
    "Chronology": 69
  },
  {
    "No": 19,
    "name_ar": "مريم",
    "Name": "Maryam",
    "meaning": "Mary",
    "no_of_verses": 98,
    "Place": "Meccan",
    "Chronology": 44
  },
  {
    "No": 20,
    "name_ar": "طه",
    "Name": "Ta-Ha",
    "meaning": "Ta-Ha",
    "no_of_verses": 135,
    "Place": "Meccan",
    "Chronology": 45
  },
  {
    "No": 21,
    "name_ar": "الأنبياء",
    "Name": "Al-Anbiya'",
    "meaning": "The Prophets",
    "no_of_verses": 112,
    "Place": "Meccan",
    "Chronology": 73
  },
  {
    "No": 22,
    "name_ar": "الحج",
    "Name": "Al-Hajj",
    "meaning": "The Pilgrimage",
    "no_of_verses": 78,
    "Place": "Medinan",
    "Chronology": 103
  },
  {
    "No": 23,
    "name_ar": "المؤمنون",
    "Name": "Al-Mu'minoon",
    "meaning": "The Believers",
    "no_of_verses": 118,
    "Place": "Meccan",
    "Chronology": 74
  },
  {
    "No": 24,
    "name_ar": "النور",
    "Name": "An-Nur",
    "meaning": "Light",
    "no_of_verses": 64,
    "Place": "Medinan",
    "Chronology": 102
  },
  {
    "No": 25,
    "name_ar": "الفرقان",
    "Name": "Al-Furqan",
    "meaning": "The Criterion",
    "no_of_verses": 77,
    "Place": "Meccan",
    "Chronology": 42
  },
  {
    "No": 26,
    "name_ar": "الشعراء",
    "Name": "Ash-Shu'ara",
    "meaning": "The Poets",
    "no_of_verses": 227,
    "Place": "Meccan",
    "Chronology": 47
  },
  {
    "No": 27,
    "name_ar": "النمل",
    "Name": "An-Naml",
    "meaning": "The Ants",
    "no_of_verses": 93,
    "Place": "Meccan",
    "Chronology": 48
  },
  {
    "No": 28,
    "name_ar": "القصص",
    "Name": "Al-Qasas",
    "meaning": "The Story",
    "no_of_verses": 88,
    "Place": "Meccan",
    "Chronology": 49
  },
  {
    "No": 29,
    "name_ar": "العنكبوت",
    "Name": "Al-Ankabut",
    "meaning": "The Spider",
    "no_of_verses": 69,
    "Place": "Meccan",
    "Chronology": 85
  },
  {
    "No": 30,
    "name_ar": "الروم",
    "Name": "Ar-Rum",
    "meaning": "Byzantium",
    "no_of_verses": 60,
    "Place": "Meccan",
    "Chronology": 84
  },
  {
    "No": 31,
    "name_ar": "لقمان",
    "Name": "Luqman",
    "meaning": "Luqman",
    "no_of_verses": 34,
    "Place": "Meccan",
    "Chronology": 57
  },
  {
    "No": 32,
    "name_ar": "السجدة",
    "Name": "As-Sajda",
    "meaning": "Prostration",
    "no_of_verses": 30,
    "Place": "Meccan",
    "Chronology": 75
  },
  {
    "No": 33,
    "name_ar": "الأحزاب",
    "Name": "Al-Ahzab",
    "meaning": "The Confederates",
    "no_of_verses": 73,
    "Place": "Medinan",
    "Chronology": 90
  },
  {
    "No": 34,
    "name_ar": "سبأ",
    "Name": "Saba'",
    "meaning": "Sheba",
    "no_of_verses": 54,
    "Place": "Meccan",
    "Chronology": 58
  },
  {
    "No": 35,
    "name_ar": "فاطر",
    "Name": "Fatir",
    "meaning": "The Originator",
    "no_of_verses": 45,
    "Place": "Meccan",
    "Chronology": 43
  },
  {
    "No": 36,
    "name_ar": "يس",
    "Name": "Ya Seen",
    "meaning": "Ya Seen",
    "no_of_verses": 83,
    "Place": "Meccan",
    "Chronology": 41
  },
  {
    "No": 37,
    "name_ar": "الصافات",
    "Name": "As-Saffat",
    "meaning": "Those Ranged in Ranks",
    "no_of_verses": 182,
    "Place": "Meccan",
    "Chronology": 56
  },
  {
    "No": 38,
    "name_ar": "ص",
    "Name": "Sad",
    "meaning": "Sad",
    "no_of_verses": 88,
    "Place": "Meccan",
    "Chronology": 38
  },
  {
    "No": 39,
    "name_ar": "الزمر",
    "Name": "Az-Zumar",
    "meaning": "The Crowds",
    "no_of_verses": 75,
    "Place": "Meccan",
    "Chronology": 59
  },
  {
    "No": 40,
    "name_ar": "غافر",
    "Name": "Ghafir",
    "meaning": "The Forgiver",
    "no_of_verses": 85,
    "Place": "Meccan",
    "Chronology": 60
  },
  {
    "No": 41,
    "name_ar": "فصلت",
    "Name": "Fussilat",
    "meaning": "Expounded",
    "no_of_verses": 54,
    "Place": "Meccan",
    "Chronology": 61
  },
  {
    "No": 42,
    "name_ar": "الشورى",
    "Name": "Ash-Shura",
    "meaning": "Counsel",
    "no_of_verses": 53,
    "Place": "Meccan",
    "Chronology": 62
  },
  {
    "No": 43,
    "name_ar": "الزخرف",
    "Name": "Az-Zukhruf",
    "meaning": "Gold Ornaments",
    "no_of_verses": 89,
    "Place": "Meccan",
    "Chronology": 63
  },
  {
    "No": 44,
    "name_ar": "الدخان",
    "Name": "Ad-Dukhan",
    "meaning": "Smoke",
    "no_of_verses": 59,
    "Place": "Meccan",
    "Chronology": 64
  },
  {
    "No": 45,
    "name_ar": "الجاثية",
    "Name": "Al-Jathiya",
    "meaning": "Kneeling",
    "no_of_verses": 37,
    "Place": "Meccan",
    "Chronology": 65
  },
  {
    "No": 46,
    "name_ar": "الأحقاف",
    "Name": "Al-Ahqaf",
    "meaning": "The Sand Dunes",
    "no_of_verses": 35,
    "Place": "Meccan",
    "Chronology": 66
  },
  {
    "No": 47,
    "name_ar": "محمد",
    "Name": "Muhammad",
    "meaning": "Muhammad",
    "no_of_verses": 38,
    "Place": "Medinan",
    "Chronology": 95
  },
  {
    "No": 48,
    "name_ar": "الفتح",
    "Name": "Al-Fath",
    "meaning": "Victory",
    "no_of_verses": 29,
    "Place": "Medinan",
    "Chronology": 111
  },
  {
    "No": 49,
    "name_ar": "الحجرات",
    "Name": "Al-Hujurat",
    "meaning": "The Private Chambers",
    "no_of_verses": 18,
    "Place": "Medinan",
    "Chronology": 106
  },
  {
    "No": 50,
    "name_ar": "ق",
    "Name": "Qaf",
    "meaning": "Qaf",
    "no_of_verses": 45,
    "Place": "Meccan",
    "Chronology": 34
  },
  {
    "No": 51,
    "name_ar": "الذاريات",
    "Name": "Adh-Dhariyat",
    "meaning": "The Scattering Winds",
    "no_of_verses": 60,
    "Place": "Meccan",
    "Chronology": 67
  },
  {
    "No": 52,
    "name_ar": "الطور",
    "Name": "At-Tur",
    "meaning": "The Mountain",
    "no_of_verses": 49,
    "Place": "Meccan",
    "Chronology": 76
  },
  {
    "No": 53,
    "name_ar": "النجم",
    "Name": "An-Najm",
    "meaning": "The Star",
    "no_of_verses": 62,
    "Place": "Meccan",
    "Chronology": 23
  },
  {
    "No": 54,
    "name_ar": "القمر",
    "Name": "Al-Qamar",
    "meaning": "The Moon",
    "no_of_verses": 55,
    "Place": "Meccan",
    "Chronology": 37
  },
  {
    "No": 55,
    "name_ar": "الرحمن",
    "Name": "Ar-Rahman",
    "meaning": "The Compassionate",
    "no_of_verses": 78,
    "Place": "Medinan",
    "Chronology": 97
  },
  {
    "No": 56,
    "name_ar": "الواقعة",
    "Name": "Al-Waqi'a",
    "meaning": "The Inevitable",
    "no_of_verses": 96,
    "Place": "Meccan",
    "Chronology": 46
  },
  {
    "No": 57,
    "name_ar": "الحديد",
    "Name": "Al-Hadid",
    "meaning": "Iron",
    "no_of_verses": 29,
    "Place": "Medinan",
    "Chronology": 94
  },
  {
    "No": 58,
    "name_ar": "المجادلة",
    "Name": "Al-Mujadila",
    "meaning": "She who Disputes",
    "no_of_verses": 22,
    "Place": "Medinan",
    "Chronology": 105
  },
  {
    "No": 59,
    "name_ar": "الحشر",
    "Name": "Al-Hashr",
    "meaning": "The Gathering",
    "no_of_verses": 24,
    "Place": "Medinan",
    "Chronology": 101
  },
  {
    "No": 60,
    "name_ar": "الممتحنة",
    "Name": "Al-Mumtahina",
    "meaning": "She who is Examined",
    "no_of_verses": 13,
    "Place": "Medinan",
    "Chronology": 91
  },
  {
    "No": 61,
    "name_ar": "الصف",
    "Name": "As-Saff",
    "meaning": "The Ranks",
    "no_of_verses": 14,
    "Place": "Medinan",
    "Chronology": 109
  },
  {
    "No": 62,
    "name_ar": "الجمعة",
    "Name": "Al-Jumu'a",
    "meaning": "The Congregation",
    "no_of_verses": 11,
    "Place": "Medinan",
    "Chronology": 110
  },
  {
    "No": 63,
    "name_ar": "المنافقون",
    "Name": "Al-Munafiqun",
    "meaning": "The Hypocrites",
    "no_of_verses": 11,
    "Place": "Medinan",
    "Chronology": 104
  },
  {
    "No": 64,
    "name_ar": "التغابن",
    "Name": "At-Taghabun",
    "meaning": "Mutual Disposession",
    "no_of_verses": 18,
    "Place": "Medinan",
    "Chronology": 108
  },
  {
    "No": 65,
    "name_ar": "الطلاق",
    "Name": "At-Talaq",
    "meaning": "Divorce",
    "no_of_verses": 12,
    "Place": "Medinan",
    "Chronology": 99
  },
  {
    "No": 66,
    "name_ar": "التحريم",
    "Name": "At-Tahrim",
    "meaning": "Forbiddance",
    "no_of_verses": 12,
    "Place": "Medinan",
    "Chronology": 107
  },
  {
    "No": 67,
    "name_ar": "الملك",
    "Name": "Al-Mulk",
    "meaning": "Dominion",
    "no_of_verses": 30,
    "Place": "Meccan",
    "Chronology": 77
  },
  {
    "No": 68,
    "name_ar": "القلم",
    "Name": "Al-Qalam",
    "meaning": "The Pen",
    "no_of_verses": 52,
    "Place": "Meccan",
    "Chronology": 2
  },
  {
    "No": 69,
    "name_ar": "الحاقة",
    "Name": "Al-Haqqa",
    "meaning": "The Undeniable Reality",
    "no_of_verses": 52,
    "Place": "Meccan",
    "Chronology": 78
  },
  {
    "No": 70,
    "name_ar": "المعارج",
    "Name": "Al-Ma'arij",
    "meaning": "The Ascending Ways",
    "no_of_verses": 44,
    "Place": "Meccan",
    "Chronology": 79
  },
  {
    "No": 71,
    "name_ar": "نوح",
    "Name": "Nuh",
    "meaning": "Noah",
    "no_of_verses": 28,
    "Place": "Meccan",
    "Chronology": 71
  },
  {
    "No": 72,
    "name_ar": "الجن",
    "Name": "Al-Jinn",
    "meaning": "The Jinn",
    "no_of_verses": 28,
    "Place": "Meccan",
    "Chronology": 40
  },
  {
    "No": 73,
    "name_ar": "المزمل",
    "Name": "Al-Muzzammil",
    "meaning": "The Enwrapped One",
    "no_of_verses": 20,
    "Place": "Meccan",
    "Chronology": 3
  },
  {
    "No": 74,
    "name_ar": "المدثر",
    "Name": "Al-Muddathir",
    "meaning": "The Covered One",
    "no_of_verses": 56,
    "Place": "Meccan",
    "Chronology": 4
  },
  {
    "No": 75,
    "name_ar": "القيامة",
    "Name": "Al-Qiyama",
    "meaning": "Resurrection",
    "no_of_verses": 40,
    "Place": "Meccan",
    "Chronology": 31
  },
  {
    "No": 76,
    "name_ar": "الإنسان",
    "Name": "Al-Insan",
    "meaning": "The Human",
    "no_of_verses": 31,
    "Place": "Medinan",
    "Chronology": 98
  },
  {
    "No": 77,
    "name_ar": "المرسلات",
    "Name": "Al-Mursalat",
    "meaning": "Those Sent Forth",
    "no_of_verses": 50,
    "Place": "Meccan",
    "Chronology": 33
  },
  {
    "No": 78,
    "name_ar": "النبأ",
    "Name": "An-Naba'",
    "meaning": "The Tiding",
    "no_of_verses": 40,
    "Place": "Meccan",
    "Chronology": 80
  },
  {
    "No": 79,
    "name_ar": "النازعات",
    "Name": "An-Nazi'at",
    "meaning": "The Snatchers",
    "no_of_verses": 46,
    "Place": "Meccan",
    "Chronology": 81
  },
  {
    "No": 80,
    "name_ar": "عبس",
    "Name": "Abasa",
    "meaning": "He Frowned",
    "no_of_verses": 42,
    "Place": "Meccan",
    "Chronology": 24
  },
  {
    "No": 81,
    "name_ar": "التكوير",
    "Name": "At-Takwir",
    "meaning": "The Enfolding",
    "no_of_verses": 29,
    "Place": "Meccan",
    "Chronology": 7
  },
  {
    "No": 82,
    "name_ar": "الإنفطار",
    "Name": "Al-Infitar",
    "meaning": "The Splitting",
    "no_of_verses": 19,
    "Place": "Meccan",
    "Chronology": 82
  },
  {
    "No": 83,
    "name_ar": "المطففين",
    "Name": "Al-Mutaffifeen",
    "meaning": "The Defrauders",
    "no_of_verses": 36,
    "Place": "Meccan",
    "Chronology": 86
  },
  {
    "No": 84,
    "name_ar": "الإنشقاق",
    "Name": "Al-Inshiqaq",
    "meaning": "The Bursting Open",
    "no_of_verses": 25,
    "Place": "Meccan",
    "Chronology": 83
  },
  {
    "No": 85,
    "name_ar": "البروج",
    "Name": "Al-Burooj",
    "meaning": "The Constellations",
    "no_of_verses": 22,
    "Place": "Meccan",
    "Chronology": 27
  },
  {
    "No": 86,
    "name_ar": "الطارق",
    "Name": "At-Tariq",
    "meaning": "The Night Visitantor The Morning Star",
    "no_of_verses": 17,
    "Place": "Meccan",
    "Chronology": 36
  },
  {
    "No": 87,
    "name_ar": "الأعلى",
    "Name": "Al-A'la",
    "meaning": "The Highest",
    "no_of_verses": 19,
    "Place": "Meccan",
    "Chronology": 8
  },
  {
    "No": 88,
    "name_ar": "الغاشية",
    "Name": "Al-Ghashiya",
    "meaning": "The Overwhelming Event",
    "no_of_verses": 26,
    "Place": "Meccan",
    "Chronology": 68
  },
  {
    "No": 89,
    "name_ar": "الفجر",
    "Name": "Al-Fajr",
    "meaning": "The Dawn",
    "no_of_verses": 30,
    "Place": "Meccan",
    "Chronology": 10
  },
  {
    "No": 90,
    "name_ar": "البلد",
    "Name": "Al-Balad",
    "meaning": "The City",
    "no_of_verses": 20,
    "Place": "Meccan",
    "Chronology": 35
  },
  {
    "No": 91,
    "name_ar": "الشمس",
    "Name": "Ash-Shams",
    "meaning": "The Sun",
    "no_of_verses": 15,
    "Place": "Meccan",
    "Chronology": 26
  },
  {
    "No": 92,
    "name_ar": "الليل",
    "Name": "Al-Lail",
    "meaning": "The Night",
    "no_of_verses": 21,
    "Place": "Meccan",
    "Chronology": 9
  },
  {
    "No": 93,
    "name_ar": "الضحى",
    "Name": "Ad-Dhuha",
    "meaning": "The Morning Brightness",
    "no_of_verses": 11,
    "Place": "Meccan",
    "Chronology": 11
  },
  {
    "No": 94,
    "name_ar": "الشرح",
    "Name": "Ash-Sharh",
    "meaning": "Expansion",
    "no_of_verses": 8,
    "Place": "Meccan",
    "Chronology": 12
  },
  {
    "No": 95,
    "name_ar": "التين",
    "Name": "At-Teen",
    "meaning": "The Fig",
    "no_of_verses": 8,
    "Place": "Meccan",
    "Chronology": 28
  },
  {
    "No": 96,
    "name_ar": "العلق",
    "Name": "Al-Alaq",
    "meaning": "The Blood Clot",
    "no_of_verses": 19,
    "Place": "Meccan",
    "Chronology": 1
  },
  {
    "No": 97,
    "name_ar": "القدر",
    "Name": "Al-Qadr",
    "meaning": "The Night of Power",
    "no_of_verses": 5,
    "Place": "Meccan",
    "Chronology": 25
  },
  {
    "No": 98,
    "name_ar": "البينة",
    "Name": "Al-Bayyina",
    "meaning": "The Clear Proof",
    "no_of_verses": 8,
    "Place": "Medinan",
    "Chronology": 100
  },
  {
    "No": 99,
    "name_ar": "الزلزلة",
    "Name": "Az-Zalzala",
    "meaning": "The Earthquake",
    "no_of_verses": 8,
    "Place": "Medinan",
    "Chronology": 93
  },
  {
    "No": 100,
    "name_ar": "العاديات",
    "Name": "Al-'Adiyat",
    "meaning": "The Chargers",
    "no_of_verses": 11,
    "Place": "Meccan",
    "Chronology": 14
  },
  {
    "No": 101,
    "name_ar": "القارعة",
    "Name": "Al-Qari'a",
    "meaning": "The Catastrophe",
    "no_of_verses": 11,
    "Place": "Meccan",
    "Chronology": 30
  },
  {
    "No": 102,
    "name_ar": "التكاثر",
    "Name": "At-Takathur",
    "meaning": "Vying for Increase",
    "no_of_verses": 8,
    "Place": "Meccan",
    "Chronology": 16
  },
  {
    "No": 103,
    "name_ar": "العصر",
    "Name": "Al-'Asr",
    "meaning": "Time",
    "no_of_verses": 3,
    "Place": "Meccan",
    "Chronology": 13
  },
  {
    "No": 104,
    "name_ar": "الهمزة",
    "Name": "Al-Humaza",
    "meaning": "The Slanderer",
    "no_of_verses": 9,
    "Place": "Meccan",
    "Chronology": 32
  },
  {
    "No": 105,
    "name_ar": "الفيل",
    "Name": "Al-Feel",
    "meaning": "The Elephant",
    "no_of_verses": 5,
    "Place": "Meccan",
    "Chronology": 19
  },
  {
    "No": 106,
    "name_ar": "قريش",
    "Name": "Quraysh",
    "meaning": "Quraysh",
    "no_of_verses": 4,
    "Place": "Meccan",
    "Chronology": 29
  },
  {
    "No": 107,
    "name_ar": "الماعون",
    "Name": "Al-Ma'oon",
    "meaning": "Assistance",
    "no_of_verses": 7,
    "Place": "Meccan",
    "Chronology": 17
  },
  {
    "No": 108,
    "name_ar": "الكوثر",
    "Name": "Al-Kawthar",
    "meaning": "Abundance",
    "no_of_verses": 3,
    "Place": "Meccan",
    "Chronology": 15
  },
  {
    "No": 109,
    "name_ar": "الكافرون",
    "Name": "Al-Kafiroon",
    "meaning": "Disbelievers",
    "no_of_verses": 6,
    "Place": "Meccan",
    "Chronology": 18
  },
  {
    "No": 110,
    "name_ar": "النصر",
    "Name": "An-Nasr",
    "meaning": "Help",
    "no_of_verses": 3,
    "Place": "Medinan",
    "Chronology": 114
  },
  {
    "No": 111,
    "name_ar": "المسد",
    "Name": "Al-Masad",
    "meaning": "Palm Fiber",
    "no_of_verses": 5,
    "Place": "Meccan",
    "Chronology": 6
  },
  {
    "No": 112,
    "name_ar": "الإخلاص",
    "Name": "Al-Ikhlas",
    "meaning": "Sincerity",
    "no_of_verses": 4,
    "Place": "Meccan",
    "Chronology": 22
  },
  {
    "No": 113,
    "name_ar": "الفلق",
    "Name": "Al-Falaq",
    "meaning": "Daybreak",
    "no_of_verses": 5,
    "Place": "Meccan",
    "Chronology": 20
  },
  {
    "No": 114,
    "name_ar": "الناس",
    "Name": "An-Nas",
    "meaning": "Mankind",
    "no_of_verses": 6,
    "Place": "Meccan",
    "Chronology": 21
  }
]

 
};

// selecting a surah
const selectedChapterReducer = (selectedChapter = null, action) => {
  if (action.type === "CHAPTER_SELECTED") {
    return action.payload;
  }

  return selectedChapter;
};

export default combineReducers({
  chapters: chaptersReducer,
  selectedChapter: selectedChapterReducer
});
