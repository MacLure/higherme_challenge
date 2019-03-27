import { createStore, combineReducers } from 'redux'
import formsData from '../reducers/formsData'

export default () => {
  const store = createStore(
    combineReducers({
      formsData: formsData
    })
  )
  return store
}