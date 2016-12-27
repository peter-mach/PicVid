// @flow
export const UPDATE_PATH = 'UPDATE_PATH'
export const RESET_PATH = 'RESET_PATH'

export function update(folderPath: string) {
  return {
    type: UPDATE_PATH,
    folderPath
  }
}

export function reset() {
  return {
    type: RESET_PATH
  }
}
