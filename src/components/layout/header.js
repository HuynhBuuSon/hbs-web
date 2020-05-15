import React from 'react'
import { Nav } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);

      }
    render() {

        let tocs = this.props.global.mainData.toc
        return (
            <Nav className="site-header sticky-top py-1">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                 {tocs.map(function(item, idx){
                    return (<Nav.Item>
                        <Nav.Link href={item[1]}>{item[2]}</Nav.Link>
                    </Nav.Item>)
                })}
                </div>
            </Nav>
        )
    }
}

export default Header