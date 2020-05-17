import React from 'react'
import Topics from './../topics'
import Paginate from './../paginate'
import { mainConfig } from './../../config'
import firebase from 'firebase'

class ListTopics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listTopics : [],
            numberChild: 5
          }
        this.getTopicData = this.getTopicData.bind(this)
        this.page = this.props.match.params.page?this.props.match.params.page : 0 
        
    }

    componentDidMount() {
        this.getTopicData()
    }

    
    getTopicData() {
        if (!firebase.apps.length) {
            firebase.initializeApp(mainConfig.firebaseConfig)
            }
        firebase.analytics();

        var database = firebase.database()
        let startAt = this.page * mainConfig.pagination.pageSize
        let endAt = (this.page + 1) * mainConfig.pagination.pageSize
        let topicSummary = database.ref('topic/summary')
        topicSummary.on('value', summary => {
            let value = summary.val()
            let numberChild = value.length > 0 ? value[0].count : 0
            this.setState({numberChild})
         })
        var topicDbSelected = database.ref('topic/topic').orderByChild('id').startAt(startAt).endAt(endAt)       
        topicDbSelected.on('value', snapshot => {
            let listTopics = snapshot.val()
            if(listTopics && listTopics.length > 0)
                this.setState({listTopics})
        })
    }
    render() {
        return (
        <div className="main-body">
            <Topics listTopics={this.state.listTopics}/>
            <Paginate baseLink={'#/topics/'} currentPage={this.page} totalPage={this.state.numberChild}/>
        </div>
        )
    }
    }

export default ListTopics