import React, { Component } from 'react'
import SortableList from './ListPolly'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pageActions from '../actions/PageActions'



export default class List extends Component {
  BtnClick(e) {
    // const { getColors }  = this.props.pageActions
    this.getColors(+e.target.innerText)
  }
  render () {
    // const {colors} = this.props
    const { list } = this.props

    return (
      <div>
        <SortableList data={list.colors} />
      </div>
    )
  }
}

// List.propTypes = {
//   colors: PropTypes.array.isRequired,
//   getColors: PropTypes.func.isRequired
// }

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

export default connect(mapStateToProps, mapDispatchToProps)(List)
