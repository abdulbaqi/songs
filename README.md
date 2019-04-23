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
```

The last bit is in the same file (reducers/index.js) hook up the redux bit as follows

```javascript
import { combineReducers } from "redux";

//static list of chapters

//... same as above....

export default combineReducers({
  chapters: chapterReducer,
  selectedChapter: selectedChapterReducer
});
```

Finally hookup the provider in the main src/index.js as follows:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
```

### connecting ChapterList.js

BTW, there is a good playground at: https://stephengrider.github.io/playgrounds/

we can test the following file to call a function within a function

```javascript
function connect() {
  return function() {
    return "hi there";
  };
}

connect()();
```

with that in mind here is the connection happening inside our `ChapterList` component

```javascript
import React from "react";
import { connect } from "react-redux";

class ChapterList extends React.Component {
  render() {
    return <div>Chapter List</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(ChapterList);
```

### producing list with Semantic UI

Lets us render a list leveraging on semantic UI classes as follows: (in the `ChapterList.js` file)

```javascript
class ChapterList extends React.Component {
  renderList() {
    return this.props.chapters.map(chapter => {
      return (
        <div className="item" key={chapter.title}>
          <div className="right floated cotent">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{chapter.title}</div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
```

Also, some elements of styling and class names goes into the `App` file:

```javascript
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <ChapterList />
        </div>
      </div>
    </div>
  );
};
```

### Connection and action

Here is the rendering of `ChapterList` one more time after inserting the action and hooking it up with the connector

```javascript
import React from "react";
import { connect } from "react-redux";
import { selectChapter } from "../actions";

class ChapterList extends React.Component {
  renderList() {
    return this.props.chapters.map(chapter => {
      return (
        <div className="item" key={chapter.title}>
          <div className="right floated cotent">
            <button
              className="ui button primary"
              onClick={() => this.props.selectChapter(chapter)}
            >
              Select
            </button>
          </div>
          <div className="content">{chapter.title}</div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    chapters: state.chapters
  };
};

export default connect(
  mapStateToProps,
  { selectChapter }
)(ChapterList);
```
