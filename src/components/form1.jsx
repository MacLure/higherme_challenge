import React, { Component } from 'react';

class Form1 extends Component {
  state = { 
    name: '',
    number: 0,
    email: '',
    password: '',
   }

   onTextChange = (e) => {
     this.setState({name: e.target.value})
   }

   onNumChange = (e) => {
    this.setState({number: e.target.value})
  }

  onEmailChange = (e) => {
    this.setState({email: e.target.value})
  }

  onPasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  render() { 
    return ( 
      <div>
      <h1>Form 1</h1>
        <form>
          <div  className="formInputs">
            <input type="text" value={this.state.text} onChange={this.onTextChange} placeholder="Name" autoFocus />
            <input type="number" value={this.state.number} onChange={this.onNumChange} placeholder="Number" />
            <input type="email" value={this.state.email} onChange={this.onEmailChange} placeholder="Email" autoComplete="username" />
            <input type="password" value={this.state.password} onChange={this.onPasswordChange} placeholder="Secret phrase" autoComplete="current-password"/>
            <input type="submit" value="Submit Form 1" />

          </div>
        </form>
      </div>
     );
  }
}
 
export default Form1;