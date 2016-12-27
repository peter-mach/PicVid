// @flow
import { remote } from 'electron'
import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import styles from './Home.css'

export default withRouter(class Home extends Component {
  static propTypes = {
    router: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    update: PropTypes.func.isRequired
  }

  openAlbum = () => {
    remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
      properties: ['openDirectory']
    }, (folderPath?: string[]) => {
      if (folderPath) {
        this.props.update(folderPath[0])
        this.props.router.push('/viewer')
      }
    })
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>PicVid</h2>
          <button onClick={this.openAlbum}>Open Album</button>
        </div>
      </div>
    )
  }
})
