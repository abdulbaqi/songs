import React from "react";
import { connect } from "react-redux";
import "./style.css";

// import mecca from '../img/kaaba-mecca.png';

const ChapterDetail = ({ chapter }) => {
  if (!chapter) {
    return (
      <div className="ui icon message">
        <i className="notched circle loading icon" />
        <div className="content">
          <p>Click on a Surah to reveal some information here.</p>
        </div>
      </div>
    );
  }
  let place = () => {
    return chapter.Place === "Meccan" ? "kaaba.png" : "medina.jpg";
  };

  let placeName = () => {
    return chapter.Place === "Meccan" ? "Makkah" : "Medinah";
  };

  let hrefSura = `https://quran.com/${chapter.No}`;

  return (
    <div className="ui card">
      <div className="image">
        <img src={window.location.origin + "/" + place()} alt="place" />
      </div>
      <div className="center aligned content">
        <a
          className="ui teal circular label huge"
          href={hrefSura}
          target="_blank"
          rel="noopener noreferrer"
        >
          {chapter.No}
        </a>
      </div>

      <div className="content">
        <div className="item right floated ar">{chapter.name_ar}</div>
        <div className="header">{chapter.Name}</div>
      </div>

      <div className="content">
        <p>
          This Chapter was revealed in {placeName()}. In terms of chronology,
          this chapter is number{" "}
          <a className="ui orange circular label tiny">{chapter.Chronology}</a>{" "}
          in the order of revelation.
        </p>
        <p>
          The meaning of {chapter.Name} in Arabic is "{chapter.meaning}". This
          chapter has a total of{" "}
          <a className="ui brown circular label tiny">{chapter.no_of_verses}</a>{" "}
          verses.
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { chapter: state.selectedChapter };
};

export default connect(mapStateToProps)(ChapterDetail);
