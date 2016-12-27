// @flow
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import folderPath from './folderPath'

const rootReducer = combineReducers({
  folderPath,
  routing
})

export default rootReducer
