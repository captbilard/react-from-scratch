import React from "react";
import ReactDom from "react-dom";
import Book from "./book";

//CSS
import "./index.css";

//Variables
const bookTitle = "The seven Husbands of Evelyn Hugo: A Novel";
const bookAuthor = "Taylor Jenkins Reid";
const bookImg =
  "https://images-na.ssl-images-amazon.com/images/I/71WAr4M5NlS._AC_UL200_SR200,200_.jpg";

function BookList() {
  return (
    <section>
      <Book title={bookTitle} author={bookAuthor} img={bookImg} />
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
