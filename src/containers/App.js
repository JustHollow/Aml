import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Menu from '../components/Menu'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    return <div className='container'>
      <Menu/>
      <div className='row'>
        {this.props.children}
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    list: state.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
