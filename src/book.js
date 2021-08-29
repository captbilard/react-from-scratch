import React from 'react'

//variables 
const title = "The seven Husbands of Evelyn Hugo: A Novel"
const author = "Taylor Jenkins Reid"
const img = "https://images-na.ssl-images-amazon.com/images/I/71WAr4M5NlS._AC_UL200_SR200,200_.jpg"


const Book = () => {
  return (
    <article>
      <img src={img} style={{ marginTop: "0.8rem" }} alt="" />
      <h3>{title}</h3>
      <p style={{fontWeight:"bold", fontSize:"0.75rem"}}>{ author}</p>
    </article>
  );
}


export default Book