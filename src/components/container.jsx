import React, { Component } from 'react';
import Form1 from './form1'
import Form2 from './form2'


class Container extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <div>
          Which form shall I display?
          <div className="formSelectButton">Form 1</div>
          <div className="formSelectButton">Form 2</div>
        </div>
        <Form1 />
        <Form2 />
      </div>
     );
  }
}
 
export default Container;