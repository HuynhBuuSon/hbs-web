import React from 'react'

class Topic extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    let list = this.props.listTopics
    return (
        <div >
          {this.props.listTopics.map(topic => {
            return ( <div className="row col-12">
            <h2 class="display-4 font-weight-normal">{topic.title}</h2>
            <p class="lead font-weight-normal">{topic.desc}</p>
            </div>
            )
          })}
          list topic
        </div>
  
    )
  }
}

export default Topic