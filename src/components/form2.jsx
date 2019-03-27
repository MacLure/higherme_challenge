import React, { Component } from 'react';
import { connect } from 'react-redux';
import {submitForm2} from '../actions/submitForms';

class Form2 extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      text: '',
      number: 0,
      email: '',
      password: '',
     }
  }

   onTextChange = (e) => {
    this.setState({text: e.target.value})
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
   this.props.dispatch(submitForm2(this.state))
 }

 render() { 
  return ( 
    <div style={styles.form2}>
    <h1>Form 2</h1>
      <form onSubmit ={ this.onSubmit}>
        <div style={styles.formInputs}>
          <input type="text" value={this.state.text} onChange={this.onTextChange} placeholder="Name" style={styles.input} autoFocus />
          <input type="number" value={this.state.number} onChange={this.onNumChange} placeholder="Number" style={styles.input} />
          <input type="email" value={this.state.email} onChange={this.onEmailChange} placeholder="Email" autoComplete="username" style={styles.input} />
          <input type="password" value={this.state.password} onChange={this.onPasswordChange} placeholder="Secret phrase" autoComplete="current-password" style={styles.input}/>
          <input type="submit" value="Submit Form 2" style={styles.submitButton} />
        </div>
      </form>
    </div>
   );
}
}

export default connect()(Form2)

const styles = {}

styles.form2 = {
margin: '10px',
padding: '10px',
backgroundColor: 'skyblue',
borderRadius: '5px',
}

styles.formInputs = {
display: 'flex',
flexFlow: 'row wrap',
justifyContent: 'space-evenly',
}

styles.input = {
border: '1px solid black',
margin: '10px auto',
padding: '5px',
borderRadius: '3px',
}

styles.submitButton = {
display: 'inline-block',
color: 'black',
backgroundColor: 'rgba(255,255,255,0.4)',
border: '1px solid black',
fontSize: '1em',
padding: '8px',
borderRadius: '5px',
}