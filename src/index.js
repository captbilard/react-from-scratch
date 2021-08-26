import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){
  return <h3>This is how we roll, we ensure to always stand out from the crowd like stars</h3>
}

ReactDom.render(<Greeting/>, document.getElementById('root'))
