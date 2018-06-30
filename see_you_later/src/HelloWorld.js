import React, { PureComponent } from 'react';

// extend is like inheritance
class HelloWorld extends PureComponent {
  // must always have the render function
  // using ES6 same as const render = function(){}
  render(){
    // using JSX so we don't need this to be in a string.
    return (<h1>Hello World!</h1>);
  }
}
export default HelloWorld;
