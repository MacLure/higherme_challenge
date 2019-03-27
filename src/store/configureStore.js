import { createStore, combineReducers } from 'redux'
// import form1Reducer from '../reducers/form1'
// import form2Reducer from '../reducers/form2'
import formsData from '../reducers/formsData'

export default () => {
  const store = createStore(
    combineReducers({
      formsData: formsData
    })
  )
  return store
}