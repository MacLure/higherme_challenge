import React, { Component } from 'react';

class Form1 extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
      <h2>FORM 1</h2>
        <form>
          <div  className="formInputs">
            <input type="text" placeholder="Text input for Form 1" />
            <input type="number" placeholder="Number input for Form 1" />
            <input type="email" placeholder="Email input for Form 1" />
            <input type="password" placeholder="Password input for Form 1" />
            <input type="submit" value="Submit Form 1" />

          </div>
        </form>
      </div>
     );
  }
}
 
export default Form1;