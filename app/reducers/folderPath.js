// @flow
import { UPDATE_PATH, RESET_PATH } from '../actions/folderPath'

export default function location(state: string = '/Users/Julia/Desktop/domm', action: Object) {
  switch (action.type) {
    case UPDATE_PATH:
      return action.folderPath
    case RESET_PATH:
      return ''
    default:
      return state
  }
}
