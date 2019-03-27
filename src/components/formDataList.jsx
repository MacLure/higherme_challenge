import React from 'react';
import { connect } from 'react-redux';
import ListItem from './listItem';


const FormDataList = (props) => {
  console.log(props.data)
  const form1Data = props.data.filter(entry => entry.form === 1)

  const form2Data = props.data.filter(entry => entry.form === 2)

  return ( 
    <div>
      <h1>Form Data List</h1>
      <h2>Form 1:</h2>
      <p>{form1Data.length} {form1Data.length === 1 ? 'entry' : 'entries'}</p>
      {form1Data.map((entry, index) =>
        <ListItem key={index} entry={entry} />
      )}
      <h2>Form 2:</h2>
      <p>{form2Data.length} {form2Data.length === 1 ? 'entry' : 'entries'}</p>
      {form2Data.map((entry, index) =>
        <ListItem key={index} entry={entry} />
      )}
    </div>
   );
}

const mapStateToProps = (state) => {
  return { data: state.formsData }
}

export default connect(mapStateToProps)(FormDataList)