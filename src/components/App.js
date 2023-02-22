import React, { Component, useState } from "react";
import "../styles/App.css";
import Projectname from "./Projectname";
import Projectdescription from "./Projectdescription";

const App = () => {
  return (
    <div id="main">
      <Projectname />
      <Projectdescription />
    </div>
  );
};

export default App;
