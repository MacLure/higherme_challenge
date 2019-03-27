import React, { Component } from 'react';

class Form2 extends Component {
  state = { 
    text: '',
    number: 0,
    email: '',
    password: '',
   }

  render() { 
    return ( 
      <div>
        <h1>Form 2</h1>
        <form>
          <div  className="formInputs">
          <input type="text" value={this.state.text} placeholder="Name" autoFocus />
          <input type="number" value={this.state.number} placeholder="Number" />
          <input type="email" value={this.state.email} placeholder="Email" autoComplete="username" />
          <input type="password" value={this.state.password} placeholder="Secret phrase" autoComplete="current-password"/>
          <input type="submit" value="Submit Form 2" />

          </div>
        </form>
      </div>
     );
  }
}
 
export default Form2;