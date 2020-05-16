import React from 'react'
import logo from './logo.svg'
import { mainConfig } from './config'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/layout'
import firebase from 'firebase'

class App extends React.Component {
  constructor(props) {
    super(props);    
    if (!firebase.apps.length) {
      firebase.initializeApp(mainConfig.firebaseConfig)
    }
    firebase.analytics();
    var database = firebase.database()  
    this.state = {
      global : {
        mainData : {
          toc : [],
          topic : []
        }
      }
    }
    var toc = database.ref('main/')
      toc.on('value', snapshot => {
        let mainData = snapshot.val()
        if(mainData) {
          let global = {
            mainData
          }
          this.setState({global})
        }
        
    });
  }

  render() {
    return (
      <Layout mainConfig global={this.state.global} route={this.props.route}/>
    )
  }
}

export default App
