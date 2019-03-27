import React, { Component } from 'react';
import Form1 from './form1'
import Form2 from './form2'


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
        <div className="formSelect">
          Which form shall I display?
          <div>
            <div
              className="formSelectButton"
              onClick={e=>{this.switchForm(1)}}
            >
              Form 1
            </div>
            <div
              className="formSelectButton"
              onClick={e=>{this.switchForm(2)}}
            >
              Form 2
            </div>
          </div>
        </div>
        {this.state.selectedForm === 1 ? <Form1 /> : null}
        {this.state.selectedForm === 2 ? <Form2 /> : null}
      </div>
     );
  }
}
 
export default Container;