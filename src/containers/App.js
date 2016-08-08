import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import List from '../components/List'
// import Page from '../components/Page'
import Menu from '../components/Menu'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    // const { page, list } = this.props
    // const { getPhotos, getColors, setColors } = this.props.pageActions

    return <div className='row'>
      <Menu/>
      {/* <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/> */}
      {/* <List colors={list.colors} local={list.local} getColors={getColors} setColors={setColors}/> */}
      {/* </Menu> */}
      {this.props.children}
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
