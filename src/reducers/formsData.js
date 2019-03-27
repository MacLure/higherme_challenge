const formsDataDefaultState = [
  {
    form: 1,
    text: "example 1",
    number: 123,
    email: 'example@email.com',
    password: 'examplePhrase'
  },
  {
    form: 2,
    text: "example 2",
    number: 456,
    email: 'example2@email.com',
    password: 'example2Phrase'
  }
]

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