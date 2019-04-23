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
  return {
    chapters: state.chapters
  };
};

export default connect(
  mapStateToProps,
  { selectChapter }
)(ChapterList);
