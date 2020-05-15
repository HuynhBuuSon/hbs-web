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
            <MainContent  route={this.props.route} />
            <Footer />
        </div>
        )
    }
    }

export default BasicLayout