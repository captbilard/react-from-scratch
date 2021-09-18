import React from "react";
import ReactDom from "react-dom";
import Book from "./book";

//CSS
import "./index.css";

//Data Objects
const books = [

  {
    title: "The seven Husbands of Evelyn Hugo: A Novel",
    author: "Taylor Jenkins Reid",
    img: "https://images-na.ssl-images-amazon.com/images/I/71WAr4M5NlS._AC_UL200_SR200,200_.jpg",
  },
  
  {
    title: "The 48 Laws of Power",
    img: "https://images-na.ssl-images-amazon.com/images/I/71951W96oWL._AC_UL200_SR200,200_.jpg",
    author: "Robert Greene",
  },
]




function BookList() {
  return (
    <section>
      {books.map((item) => {
        return <Book book={item}/>
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
