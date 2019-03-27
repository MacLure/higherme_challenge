const form2DefaultState = {
  text: '',
  number: 0,
  email: '',
  password: ''
}

export default (state = form2DefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
    return [
      ...state,
      action.text
    ];
    default:
      return state;
  }
}