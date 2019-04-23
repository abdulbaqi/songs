import React from "react";
import { connect } from "react-redux";

class ChapterList extends React.Component {
  render() {
      console.log(this.props)
    return <div>Chapter List</div>;
  }
}

const mapStateToProps = state => {
  return {
    chapters: state.chapters
  };
};

export default connect(mapStateToProps)(ChapterList);
