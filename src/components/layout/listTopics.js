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
        this.changePage = this.changePage.bind(this)
        this.page = this.props.match.params.page?this.props.match.params.page : 1        
    }

    componentDidMount() {
        this.getTopicData()
    }

    componentWillUpdate(prevProps) {
        if (this.props.match.params.page !== prevProps.match.params.page) {
            this.getTopicData()
          }
        
    }

    changePage(number) {
        this.page = this.props.match.params.page?this.props.match.params.page : 1    
        this.getTopicData()
        console.log(this.props.location.search)
        this.props.history.push("/topics/"+number)
    }    
    getTopicData() {
        if (!firebase.apps.length) {
            firebase.initializeApp(mainConfig.firebaseConfig)
            }
        firebase.analytics();
        this.page = this.props.match.params.page?this.props.match.params.page : 1
        var database = firebase.database()
        let startAt = (this.page - 1) * mainConfig.pagination.pageSize + 1 
        let endAt = this.page * mainConfig.pagination.pageSize
        console.log(mainConfig.pagination.pageSize)
        let topicSummary = database.ref('topic/summary')
        topicSummary.on('value', summary => {
            let value = summary.val()
            let numberChild = value.length > 0 ? value[0].count : 0
            this.setState({numberChild})
         })
        var topicDbSelected = database.ref('topic/topic').orderByChild('id').startAt(startAt).endAt(endAt)       
        topicDbSelected.on('value', snapshot => {
            let listTopics = []
            snapshot.forEach(function(childSnapshot) {
                listTopics.push(childSnapshot.val())
              })
            this.setState({listTopics})
        })
    }
    render() {
        return (
        <div className="main-body">
            <Topics listTopics={this.state.listTopics}/>
            <Paginate baseLink={'#/topics/'} currentPage={this.page} numberChild={this.state.numberChild} changePage={this.changePage}/>
        </div>
        )
    }
    }

export default ListTopics