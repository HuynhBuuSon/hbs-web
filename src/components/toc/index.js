import React from 'react'
import firebase from 'firebase'

class TOC extends React.Component {
    constructor(props) {
        super(props)
      }
    componentWillMount() {

    }
    componentDidMount() {
        this.getTOCData();
      }
    getTOCData = () => {
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot => {
          const state = snapshot.val();
          this.setState(state);
        });
    }
    render() {
        return (            
      
        )
    }
}

export default TOC