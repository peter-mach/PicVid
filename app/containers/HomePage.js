import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/Home'
import * as FolderPathActions from '../actions/folderPath'

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FolderPathActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
