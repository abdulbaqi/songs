//static list of chapters

const chapterReducer = () => {
  return [
    { title: "Fatiha", place: "Makkah" },
    { title: "Baqarah", place: "Medina" },
    { title: "Aal-Imran", place: "Medinah" },
    { title: "An-Nisaa", place: "Medinah" },
    { title: "Al-Maedah", place: "Medinah" },
    { title: "Al-Anaam", place: "Makkah" }
  ];
};

// selecting a surah
const selectedChapterReducer = (selectedChapter = null, action) => {
  if (action.type === "CHAPTER_SELECTED") {
    return action.payload;
  }

  return selectedChapter;
};
