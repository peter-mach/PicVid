import { connect } from 'react-redux'
import Viewer from '../components/Viewer'

function mapStateToProps(store) {
  return {
    folderPath: store.folderPath
  }
}

function mapDispatchToProps() {
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Viewer)
