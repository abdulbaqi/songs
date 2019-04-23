import React from "react";
import ChapterList from "./ChapterList";

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

export default App;
