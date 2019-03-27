import React, { Component } from 'react';

class Form1 extends Component {
  state = { 
    name: '',
    number: 0,
    email: '',
    password: '',
   }
  render() { 
    return ( 
      <div>
      <h1>Form 1</h1>
        <form>
          <div  className="formInputs">
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Number" />
            <input type="email" placeholder="Email" autoComplete="username" />
            <input type="password" placeholder="Secret phrase" autoComplete="current-password"/>
            <input type="submit" value="Submit Form 1" />

          </div>
        </form>
      </div>
     );
  }
}
 
export default Form1;