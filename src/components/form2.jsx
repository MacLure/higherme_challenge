import React, { Component } from 'react';

class Form2 extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h2>FORM 2</h2>
        <form>
          <div  className="formInputs">
            <input type="text" placeholder="Text input for Form 2" />
            <input type="number" placeholder="Number input for Form 2" />
            <input type="email" placeholder="Email input for Form 2" autoComplete="username" />
            <input type="password" placeholder="Password input for Form 2" autoComplete="current-password"/>
            <input type="submit" value="Submit Form 2" />

          </div>
        </form>
      </div>
     );
  }
}
 
export default Form2;