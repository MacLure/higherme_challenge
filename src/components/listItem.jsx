import React from 'react';

const ListItem = (props) => {
  const {text, number, email, password} = props.entry
  return ( 
    <div style={styles.entry}>
      <div><strong>Name:</strong> {text}</div>
      <div><strong>Number:</strong> {number}</div>
      <div><strong>email:</strong> {email}</div>
      <div><strong>Secret phrase:</strong> {password}</div>
    </div>
   );
}
 
export default ListItem;

const styles = {}

styles.entry = {
  margin: '10px auto',
  backgroundColor: 'rgba(255,255,255,0.4)',
  borderRadius: '5px',
  padding: '5px',
}