import React, { Component } from 'react';
import { connect } from 'react-redux';
import {submitForm1} from '../actions/submitForms';

class Form1 extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      name: '',
      number: 0,
      email: '',
      password: '',
     }
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

  onSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(submitForm1(this.state))
  }

  render() { 
    return ( 
      <div>
      <h1>Form 1</h1>
        <form onSubmit ={ this.onSubmit}>
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
 
export default connect()(Form1)