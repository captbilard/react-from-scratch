import React from "react";
import ReactDom from "react-dom";
import Book from './book'

//CSS
import './index.css'

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}


ReactDom.render(<BookList />, document.getElementById("root"));
