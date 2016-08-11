import React, { Component } from 'react'
import {NavItem, Nav } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export default class Menu extends Component {
  render () {

    return (
      <div>
        <Nav bsStyle='tabs' activeKey={0}>
          <IndexLinkContainer to='/'>
            <NavItem  eventKey={1}>List</NavItem>
          </IndexLinkContainer>
          <LinkContainer to='/Ball'>
            <NavItem eventKey={2}>Ball</NavItem>
          </LinkContainer>
          <LinkContainer to='/Graph'>
            <NavItem eventKey={3}>Graph</NavItem>
          </LinkContainer>
        </Nav>
        {this.props.children}
      </div>

    )
  }
}
