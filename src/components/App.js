import React from "react";
import ChapterList from "./ChapterList";
import ChapterDetial from "./ChapterDetail";

import Footer from './Footer';

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
    <div  className="ui section divider"></div>
    <Footer url="http://abdulbaqi.io/2019/04/24/react-redux/" />
    </div>
  );
};

export default App;
