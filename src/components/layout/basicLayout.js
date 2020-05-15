import React from 'react'
import Header from './header'
import MainContent from './mainContent'
import Footer from './footer'

class BasicLayout extends React.Component {
    render() {
        return (
        <div className="main-body">
            <Header />
            <MainContent />
            <Footer />
        </div>
        )
    }
    }

export default BasicLayout