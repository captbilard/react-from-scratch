import React from "react";
import ReactDom from "react-dom";



function Greeting() {
  return (
    <div>
      <h3 style={{ "color":"red"}}>
        This is how we roll, we ensure to always stand out from the crowd like
        stars
      </h3>
      <ul>
        <li>Benshima</li>
        <li>Rejoice</li>
        <li>Destiny</li>
      </ul>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
