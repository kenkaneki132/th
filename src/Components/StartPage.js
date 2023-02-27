import React from "react";
import { Link } from "react-router-dom";
import "./startPage.css";

function StartPage() {
  return (
    <body className="startpage">
      <Link to="/Game" className="startpagelink">
        Play Game
      </Link>
    </body>
  );
}

export default StartPage;
