// @flow
import { remote } from 'electron'
import { readdirSync } from 'fs'
import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import ReactList from 'react-list'
import styles from './Viewer.css'
import Media from './Media'

export default withRouter(class Viewer extends Component {
  static propTypes = {
    router: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    folderPath: PropTypes.string.isRequired,
  }

  state = {
    files: []
  }

  componentWillMount = () => {
    this.getAllMediaPaths()
  }

  goBack = () => {
    this.props.router.push('/')
  }

  toggleFullScreen = () => {
    const win = remote.getCurrentWindow()
    win.setFullScreen(!win.isFullScreen())
  }

  getAllMediaPaths = () => {
    const path = this.props.folderPath
    const files = readdirSync(path)
      .filter((n: string) => (/\.(jpe?g|png|mov)$/i).test(n))
      .map((p: string) => `${path}/${p}`)
    this.setState({ files })
  }

  renderItem = (idx: number, key: number) => <Media key={key} path={this.state.files[idx]} />

  render = () => {
    return (
      <div>
        <a className={styles.toggleFullScreen} onClick={this.toggleFullScreen}>F</a>
        <a className={styles.back} onClick={this.goBack}>B</a>
        <h2 className={styles.header}>viewing: {this.props.folderPath.match(/([^\/]*)\/*$/)[1]}</h2>

        <ReactList
          itemRenderer={this.renderItem}
          length={this.state.files.length}
          useTranslate3d
          pageSize={5}
          type="variable"
        />
      </div>
    )
  }
})
