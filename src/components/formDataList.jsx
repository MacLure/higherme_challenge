import React from 'react';
import { connect } from 'react-redux';
import ListItem from './listItem';


const FormDataList = (props) => {
  const form1Data = props.data.filter(entry => entry.form === 1)

  const form2Data = props.data.filter(entry => entry.form === 2)

  return ( 
    <div style={styles.list}>
      <h1>Form Data List</h1>
      <div style={styles.list1}>
        <h2 style={styles.subHeading}>Form 1:</h2>
        {form1Data.length} {form1Data.length === 1 ? 'entry' : 'entries'}
        <div style={styles.listFlex}>
        {form1Data.map((entry, index) =>
          <ListItem key={index} entry={entry} />
        )}
        </div>
      </div>
      <div style={styles.list2}>
      <h2 style={styles.subHeading}>Form 2:</h2>
      {form2Data.length} {form2Data.length === 1 ? 'entry' : 'entries'}
      <div style={styles.listFlex}>
      {form2Data.map((entry, index) =>
        <ListItem key={index} entry={entry} />
      )}
      </div>
      </div>
    </div>
   );
}

const mapStateToProps = (state) => {
  return { data: state.formsData }
}

export default connect(mapStateToProps)(FormDataList)

const styles = {}

styles.list = {
}

styles.subHeading = {
  margin: 0,
}

styles.list1 = {
  margin: '10px',
  padding: '10px',
  backgroundColor: 'lightcoral',
  borderRadius: '5px',
}

styles.list2 = {
  margin: '10px',
  padding: '10px',
  backgroundColor: 'skyblue',
  borderRadius: '5px',

}

styles.listFlex = {
display: 'flex',
flexFlow: 'row wrap',
justifyContent: 'space-evenly',
}