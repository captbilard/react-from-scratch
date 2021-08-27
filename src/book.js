import React from 'react'

const Book = () => {
  return (
    <div>
      <Image />
      <Title />
      <Author />
    </div>
  )
}

const Image = () => {
    return (
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71WAr4M5NlS._AC_UL200_SR200,200_.jpg"
        alt=""
      />
    );
}

const Title = () => {
  return <h3>The Seven Husbands of Evelyn Hugo: A Novel</h3>;
}

const Author = () => {
  return <p style={{"fontWeight":"bold"}}>Taylor Jenkins Reid</p>;
}

export default Book