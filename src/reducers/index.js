import { combineReducers } from "redux";

//static list of chapters

const chaptersReducer = () => {
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

export default combineReducers({
  chapters: chaptersReducer,
  selectedChapter: selectedChapterReducer
});
