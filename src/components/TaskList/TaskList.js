import React from "react";
import PropTypes from "prop-types";
import "./tasklist.css";

export default function TaskList({ title }) {
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content"></div>
    </div>
  );
}

TaskList.PropTypes = {
  title: PropTypes.string.isRequired
};
