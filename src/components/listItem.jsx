import React from 'react';

const ListItem = (props) => {
  const {text, number, email, password} = props.entry
  return ( 
    <div>
      <div>{text}</div>
      <div>{number}</div>
      <div>{email}</div>
      <div>{password}</div>
    </div>
   );
}
 
export default ListItem;