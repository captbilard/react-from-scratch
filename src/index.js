import React from "react";
import ReactDom from "react-dom";
import Book from './book'



function BookList() {
  return (
    <article>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </article>
  );
}


ReactDom.render(<BookList />, document.getElementById("root"));
