//Action creator

export const selectChapter = chapter => {
  // return an action
  return {
    type: "CHAPTER_SELECTED",
    payload: chapter
  };
};
