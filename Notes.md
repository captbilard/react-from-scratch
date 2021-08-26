# Notes
### `npx create-react-app appName`
This bootstraps and creates an app using create-react-app

### React Components
React component is basically a function whose first letter of the name must be capitalized \
for react to recognize it as a component. It must also return a single JSX element

The official name for a component in react is **stateless functional component** this is when the component doesn't have a state.

### `ReactDom.render()`
This takes two arguments, the components to render, and where to render the component.\
Most likely the 'root' div

### Steps to Create a Component
  - `import React from 'react'`
  - `import ReactDom from 'react-dom'`
  - setup the components using regular functions or arrow functions
  - then render the js using ReactDom render method

### JSX Rules
 - Always return just one element
 - Always use proper html semantics when returning HTML
 - HTML attributes must be in **camelCase**
 - For a HTML class, you use **className** instead of the regular 'class'
 - Close every element