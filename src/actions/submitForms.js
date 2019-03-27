export const submitForm1 = (
  {
    form = 1,
    text = '',
    number = 0,
    email = '',
    password = ''
  } = {}
) => ({
  type: 'ADD_FORM1_ENTRY',
  data: {
    form,
    text,
    number,
    email,
    password
  }
})

export const submitForm2 = (
  {
    form = 2,
    text = '',
    number = 0,
    email = '',
    password = ''
  } = {}
) => ({
  type: 'ADD_FORM2_ENTRY',
  data: {
    form,
    text,
    number,
    email,
    password
  }
})