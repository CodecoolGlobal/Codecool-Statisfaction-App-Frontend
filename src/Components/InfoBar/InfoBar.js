import React from "react";
import "./InfoBar.css";

export default function InfoBar() {
  return (
    <div className="infobar">
      <p className="text">Codecool website:</p>
      <p className="sub-stext">
        <a href="https://codecool.com/">
          https://codecool.com
        </a>
      </p>
      <br></br>
      <p className="sub-stext">©Codecool 2020</p>
    </div>
  );
}
