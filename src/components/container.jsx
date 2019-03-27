import React, { Component } from 'react';
import Form1 from './form1'
import Form2 from './form2'


class Container extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <div className="formSelect">
          Which form shall I display?
          <div>
            <div className="formSelectButton">Form 1</div>
            <div className="formSelectButton">Form 2</div>
          </div>
        </div>
        <Form1 />
        <Form2 />
      </div>
     );
  }
}
 
export default Container;