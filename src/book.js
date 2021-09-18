import React from "react";

const Book = (props) => {
  //Using object destructuring
  console.log(props);
  const {img,title,author} = props.book
  return (
    <article>
      <img src={img} style={{ marginTop: "0.8rem" }} alt="" />
      <h3>{title}</h3>
      <p style={{ fontWeight: "bold", fontSize: "0.75rem" }}>{author}</p>
    </article>
  );
};

export default Book;
