import React from 'react';
import { connect } from 'react-redux';


const FormDataList = (props) => {
  return ( 
    <div>
      <h1>Form Data List</h1>
      {props.data.length}
    </div>
   );
}

const mapStateToProps = (state) => {
  return { data: state.formsData }
}

export default connect(mapStateToProps)(FormDataList)