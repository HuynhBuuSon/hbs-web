import React from 'react'
import BasicLayout from './basicLayout'

class Layout extends React.Component {
    render() {
      return <BasicLayout global={this.props.global} route={this.props.route}/>
    }
  }

export default Layout