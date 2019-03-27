import React, { Component } from 'react';
import Form1 from './form1'
import Form2 from './form2'
import FormDataList from './formDataList'


class Container extends Component {
  state = { 
    selectedForm: 1
   }

   switchForm = (form) => {
    this.setState({selectedForm: form})
   }

  render() { 

    return ( 
      <div>
        <div style={styles.formSelect}>
          <h1>Select Form:</h1>
          <div>
            <div
              style={this.state.selectedForm === 1 ? styles.formSelectButtonActive : styles.formSelectButtonPassive}
              onClick={e=>{this.switchForm(1)}}
            >
              Form 1
            </div>
            <div
            style={this.state.selectedForm === 2 ? styles.formSelectButtonActive : styles.formSelectButtonPassive}
            onClick={e=>{this.switchForm(2)}}
            >
              Form 2
            </div>
          </div>
        </div>
        {this.state.selectedForm === 1 ? <Form1 /> : null}
        {this.state.selectedForm === 2 ? <Form2 /> : null}
        <FormDataList />
      </div>
     );
  }
}
 
export default Container;


const styles = {}
styles.formSelect = {
  textAlign: 'center',
}

styles.formSelectButtonPassive = {
  display: 'inline-block',
  color: 'white',
  backgroundColor: 'grey',
  margin: '5px',
  padding: '5px',
  borderRadius: '2px',
}

styles.formSelectButtonActive = {
  display: 'inline-block',
  color: 'white',
  backgroundColor: 'black',
  margin: '5px',
  padding: '5px',
  borderRadius: '2px',
}