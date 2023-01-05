import React from "react";
import { Link } from "react-router-dom";

function BackToHome() {
  return (
    <div className="back">
      <Link to="/">
        <p className="close-search"></p>
        <p>back to home page</p>
      </Link>
    </div>
  );
}

export default BackToHome;
