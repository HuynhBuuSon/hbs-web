import React from 'react'
import Header from './header'
import MainContent from './mainContent'
import Footer from './footer'

class BasicLayout extends React.Component {
    constructor(props) {
        super(props)
      }
    render() {
        return (
        <div className="main-body">
            <Header global={this.props.global}/>
            <MainContent global={this.props.global} route={this.props.route} />
            <Footer  global={this.props.global}/>
        </div>
        )
    }
    }

export default BasicLayout