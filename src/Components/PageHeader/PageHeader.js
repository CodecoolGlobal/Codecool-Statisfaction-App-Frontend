import React from "react";
import "./PageHeader.css";

function PageHeader(props) {
  return (
    <div className="pageheader">
      <h2>{props.title}</h2>
    </div>
  );
}

export default PageHeader;
