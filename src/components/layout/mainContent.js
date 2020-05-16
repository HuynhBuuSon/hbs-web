import React from 'react'

class MainContent extends React.Component {
    constructor(props) {
        super(props);

      }
    render() {
        let mainContent = this.props.global.mainData.mainContent
        return (
            <div>
                {mainContent.map(content => {
                    return <div className="col-md-5 p-lg-1 mx-auto my-4" dangerouslySetInnerHTML={{__html: content.data}} ></div>
                })}                
            </div>
      
        )
    }
    }

export default MainContent