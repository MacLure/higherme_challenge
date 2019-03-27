const formsDataDefaultState = []

export default (state = formsDataDefaultState, action) => {
  switch (action.type) {
    case 'ADD_FORM1_ENTRY':
      return [
        ...state,
        action.data
      ]
    case 'ADD_FORM2_ENTRY':
      return [
        ...state,
        action.data
      ]
    default:
      return state;
  }
}