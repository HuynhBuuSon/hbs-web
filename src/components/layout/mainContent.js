import React from 'react'
import ListTopics from './listTopics'
import SingleTopic from './singleTopic'
import HomePage from './homePage'

class MainContent extends React.Component {
    constructor(props) {
        super(props)
        this.renderPage = this.renderPage.bind(this)
        this.renderHomePage = this.renderHomePage.bind(this)
        this.renderListTopicPage = this.renderListTopicPage.bind(this)
        this.renderSingleTopicPage = this.renderSingleTopicPage.bind(this)
        this.renderDocsPage = this.renderDocsPage.bind(this)
      }

    renderPage(route) {
        switch(route) {
            case 'index': {
                return this.renderHomePage ()
                }
            case 'topics': {
                return this.renderListTopicPage ()
                }
            case 'docs': {
                return this.renderDocsPage ()
                }    
            default : {
                return this.renderHomePage ()
            }
        }
            
    }

    renderHomePage () {
        return (
            <HomePage global={this.props.global}/>
        ) 
    }
    renderListTopicPage () {
        return (
            <ListTopics global={this.props.global} {...this.props}/>
        ) 
    }
    renderSingleTopicPage () {
        return (
            <SingleTopic global={this.props.global} {...this.props}/>
        ) 
    }

    renderDocsPage () {
        return (<div></div>)
    }

    render() {
        return (
        <div className="wrap">
            {this.renderPage(this.props.route)}
        </div>
        )
        }
    }

export default MainContent