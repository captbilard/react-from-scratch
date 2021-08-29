import React from "react";

const Book = (props) => {
  return (
    <article>
      <img src={props.img} style={{ marginTop: "0.8rem" }} alt="" />
      <h3>{props.title}</h3>
      <p style={{ fontWeight: "bold", fontSize: "0.75rem" }}>{props.author}</p>
    </article>
  );
};

export default Book;
