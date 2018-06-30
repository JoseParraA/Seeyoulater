import React, { PureComponent } from 'react'; // destructuring

class HelloUser extends PureComponent {
  render(){
    //you can interpolate with {}
    return (<h2>Hello { this.props.name }</h2>)
  }
}

export default HelloUser;
