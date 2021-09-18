import React from "react";

//events, eventhandler
//onDoubleClick, onMouseEnter


const doubleClick = (title) => {
  console.log(title);
}

const mouseEnter = (title, author) => {
  console.log(`Title is ${title}, Author is ${author}`);
}

const Book = (props) => {
  //Using object destructuring
  console.log(props);
  const {img,title,author} = props.book
  return (
    <article onMouseEnter={()=>{mouseEnter(title, author)}}>
      <img src={img} style={{ marginTop: "0.8rem" }} alt="" />
      <h3>{title}</h3>
      <p style={{ fontWeight: "bold", fontSize: "0.75rem" }}>{author}</p>
      <button type="button" onDoubleClick={()=>doubleClick(title)}>Double Click Me</button>

    </article>
  );
};

export default Book;
