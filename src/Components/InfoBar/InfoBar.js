import React from "react";
import "./InfoBar.css";

export default function InfoBar() {
  return (
    <div className="infobar">
      <link
        href="https://fonts.googleapis.com/css2?family=Exo&display=swap"
        rel="stylesheet"
      />
      <p className="text">Codecool website:</p>
      <p className="sub-stext">
        <a href="https://codecool.com/">https://codecool.com</a>
      </p>
      <br></br>
      <p className="sub-stext">©Codecool 2020</p>
    </div>
  );
}
