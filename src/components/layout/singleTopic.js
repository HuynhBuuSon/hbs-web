import React from 'react'
import { mainConfig } from './../../config'
import firebase from 'firebase'

class SingleTopic extends React.Component {
    constructor(props) {
        super(props)
        if (!firebase.apps.length) {
            firebase.initializeApp(mainConfig.firebaseConfig)
          }
        firebase.analytics()
        var database = firebase.database()
        var topicDb = database.ref('topic/topic')
        var userQuery = topicDb.orderByKey('order').orderByChild('active').equalTo(1)
        userQuery.once("value", function(snapshot) {
        snapshot.forEach(function(child) {
            console.log(child.key, child.val())
          })
        })
      }
    render() {
        return (
        <div className="main-body">
            
        </div>
        )
    }
    }

export default SingleTopic