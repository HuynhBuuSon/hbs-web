import React from 'react'
import { Nav } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);

      }
    render() {
        let tocs = this.props.global.mainData.toc
        let headline = this.props.global.mainData.headline
        headline = headline[0]?headline[0]:''
        return (
            <div>
            <Nav className="site-header sticky-top py-1">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                    {tocs.map(function(item, idx){
                    return (<Nav.Item>
                        <Nav.Link href={item.link}>{item.title}</Nav.Link>
                    </Nav.Item>)
                    })}
                </div>
            </Nav>
            <div className="position-relative overflow-hidden text-center bg-light">
            <div className="col-md-5 p-lg-1 mx-auto my-4" dangerouslySetInnerHTML={{__html: headline.data} } >
            </div>
            </div>
            </div>
        )
    }
}

export default Header