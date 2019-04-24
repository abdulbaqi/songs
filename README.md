# Chapter Listings of the Quran

This app illustrates the working of `Redux` with `React` following from Stephen Grider tutorials in Udacity.

The app lists chapters of the Quran with a select button against each chapter. When clicking on each chapter a detail is presented on a panel or card next to it.

The purpose of this app is to illustrate how Redux works with React and provide a boiler plate for other more complex apps. 

The entire repo is available in my [github](https://github.com/abdulbaqi/songs), and you can see the finished app [here](http://playquran.com/chapterInfo).


## install redux and react-redux library

After installed the normal `react` app, we need two more packages as follows. (I am using `yarn`, you can use `npm` as well).

```
yarn add redux react-redux
```
Redux will take over the task of handling states and data for us, so we can have our `App` component as a functional component rather than a class. For this app, we will have two reducers: a) chapter list reducer, and b) selected chapter reducer, and we will have one action creator: *select chapter*.

Using `react-redux` we will create two components: `Provider` and `Connect`. The provider will get as prop the store of reducers from redux. The hierarcy goes as follows: Provider --> App --> Connect --> ChapterList, ChapterDetail.

The `Connect` component is a special component that communicates with the Provider through a system other than props (i.e., context system)

### structure of files

Here is the structure

```linux
/src
  /actions
    index.js (we name it so to reduce the need to name it - just a shortcut)
  /components
    App.js 
    ChapterDetail.js
    ChapterList.js
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

and here is the reducer file in `src/reducers/index.js`. This will hold the data and maintain the state of which chapter is selected. 

```javascript
//static list of chapters

const chapterReducer = () => {
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
      //next chapter and so on
  }
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

Now we need to use the connector to somehow magically hookuo redux with react's prop system. In order to understand the workings of this `connect` method which we import from `react-redux` we need to understand the way it does so in javascript.

To test that run the following snippet in any js playground. Stephen Grider provides on [here](https://stephengrider.github.io/playgrounds/).

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
That means our `connect` here makes the react prompt through `mapStateToProps` have all list of chapters from the reducer file in `/reducer/injex.js`, and second it will also have a hookup between the `onClick` chapter and the action defined as `selectChapter` in the `/actions/index.js`.

## Chapter Detail

Here is the first attempt with the boiler plate.

```javascript
import React from "react";
import { connect } from "react-redux";

const ChapterDetail = props => {
  console.log(props);
  return <div>Chapter Detail</div>;
};

const mapStateToProps = state => {
  return { chapter: state.selectedChapter };
};

export default connect(mapStateToProps)(ChapterDetail);
```
Here again the `connect` brought to the props system the chapter it needs to display, so `props.chapter` will have all details. What will remain is to display using proper Semantic UI CSS classes, which you can investigate on your own. 

# Conclusion

Redux makes the management of states very convenient inside react. It has an initial cost of setting up things properly, but then the complexity does not gain over time if you do not mind the initial cost.