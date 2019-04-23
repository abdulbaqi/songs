# Chapter Listings of the Quran

This app illustrates the working of `Redux` with `React` following from Stephen Grider tutorials in Udacity.

The app lists chapters of the Quran with a select button against each chapter. When clicking on each chapter a detail is presented on a panel or card next to it.

## install redux and react-redux library

```
yarn add redux react-redux
```

All data will be inside redux now, so we can make our App as functional component. For this app, we will have two reducers: a) chapter list reducer, and b) selected chapter reducer, and we will have one action creator: select chapter.

Using `react-redux` we will create two components: `Provider` and `Connect`. The provider will get as prop the store of reducers from redux. The hierarcy goes as follows: Provider --> App --> Connect --> ChapterList, ChapterDetail.

The `Connect` component is a special component that communicates with the Provider through a system other than props (i.e., context system)

### structure of files

Here is the structure

```
/src
  /actions
    index.js (we name it so to reduce the need to name it - just a shortcut)
  /components
  /reducers
    index.js
  index.js (will setup both the react and redux stuff)
```

Here is the `src/actions/index.js` file:

```javascript
//Action creator

export const selectChapter = chapter => {
  // return an action
  return {
    type: "CHAPTER_SELECTED",
    payload: chapter
  };
};
```
and here is the reducer file in `src/reducers/index.js`

```javascript
//static list of chapters

const chapterReducer = () => {
    return [
        { title: 'Fatiha', place: 'Makkah'},
        { title: 'Baqarah', place: 'Medina'},
        { title: 'Aal-Imran', place: 'Medinah'},
        { title: 'An-Nisaa', place: 'Medinah'},
        { title: 'Al-Maedah', place: 'Medinah'},
        { title: 'Al-Anaam', place: 'Makkah'}
    ];
};

// selecting a surah
const selectedChapterReducer = (selectedChapter=null, action) =>{
  if (action.type==='CHAPTER_SELECTED') {
      return action.payload;
  }

  return selectedChapter;
}
```