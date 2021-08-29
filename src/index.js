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
const testArr = ["babra", "dobie", "sodiq"]

const mappedArr = testArr.map((elem) => {
  return <h4>{ elem }</h4>
})

function BookList() {
  return (
    <section>
      {mappedArr}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
