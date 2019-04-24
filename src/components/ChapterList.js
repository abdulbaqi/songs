import React from "react";
import { connect } from "react-redux";
import { selectChapter } from "../actions";
import "./style.css";

class ChapterList extends React.Component {
  renderList() {
    return this.props.chapters.map(chapter => {
      return (
        <div className="item" key={chapter.No}>
          <div className="content">
            <button
              className="ui button tiny basic"
              onClick={() => this.props.selectChapter(chapter)}
            >
              {chapter.No}. {chapter.Name}
            </button>
          </div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props);
    return <div className="ui horizontal list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    chapters: state.chapters
  };
};

export default connect(
  mapStateToProps,
  { selectChapter }
)(ChapterList);
