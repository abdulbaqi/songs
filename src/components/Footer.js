import React from "react";

const Footer = props => {
  return (
    <div className="ui center aligned container">
      Made with <i className="red heart icon" /> in Jeddah | {" "}
      <a href={props.url}>Documentation</a>
    </div>
  );
};

export default Footer;
