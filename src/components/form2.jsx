import React, { Component } from 'react';

class Form2 extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        FORM 2
        <form>
          <label>
          </label>
          <input className="inputText" type="text" placeholder="Text input for Form 2" />
          <input className="inputText" type="number" placeholder="Number input for Form 2" />
          <input className="inputText" type="email" placeholder="Email input for Form 2" />
          <input className="inputText" type="password" placeholder="Password input for Form 2" />
        </form>
      </div>
     );
  }
}
 
export default Form2;