import React from 'react'

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
    return (
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71WAr4M5NlS._AC_UL200_SR200,200_.jpg"
        alt="" style={{marginTop:"0.8rem"}}
      />
    );
}

const title = "The seven Husbands of Evelyn Hugo: A Novel"

const Title = () => {
  return <h3>{title}</h3>;
}

const author = "Taylor Jenkins Reid"

const Author = () => {
  return <p style={{ fontWeight: "bold", fontSize: "0.75rem" }}>{ author.toUpperCase()}</p>;
}

export default Book