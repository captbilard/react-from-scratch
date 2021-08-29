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

### Nesting Components
You can nest multiple components and then render just the parent component making your work easier.
Also when exporting use `export default app` & the apps should all be in the `src/` folder

### CSS in React
To import css inside react, all you do is `import './index.css'`. 
Note we didn't put a name for the import, this is the convention and how it works.
 Another method is by using "style" in your jsx/html. Style takes in two curly braces & that's because, the first one let's React know we're going into JavaScript mode then the second one is to let JS know it's an object.

 ### JavaScript in JSX
 Like it was mentioned in the "CSS in React" section above. To use JavaScript in JSX you start with curly braces `{}`. Note that the expression must return something for it to work. If you just pass in a statement it would throw an error. For example `{ let x= 6 }` would throw up an error but the expression `{ 6+6 }` would work perfectly.

 ### Props 
 Props are object like arguments you pass in to your react components, with "props" you can access the various object properties that were passed in when your component is rendered. You can also use ES6 object destructuring for your props

 ### Props Children
 This is a very unique property that must bear the name "children". It is placed between the components being rendered.
 For example if we're to render `Book` component, then we would place the children prop in `<Book> <p>Lorem ipsum dior </p> </Book>`. The entire p tag and it's property are the children prop.
 You can access them by using props.children or other destructuring method