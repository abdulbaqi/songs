import React from "react";
import ChapterList from "./ChapterList";
import ChapterDetial from "./ChapterDetail";

const App = () => {
  return (
    <div>
    <h1 className="ui header container" style={{marginTop:'20px'}}>Quranic Chapters</h1>
    <div className="ui container grid">
      
        <div className="column ten wide">
          <ChapterList />
        </div>
        <div className="column six wide">
          <ChapterDetial />
        </div>
   
    </div>
    </div>
  );
};

export default App;
