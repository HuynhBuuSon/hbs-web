import React from 'react'
import { Nav } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);

      }
    render() {

        let tocs = this.props.global.mainData.toc
        let headline = this.props.global.mainData.headline
        headline = headline?headline[0]:''
        return (
            <div>
            <Nav className="site-header sticky-top py-1">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                 {tocs.map(function(item, idx){
                    return (<Nav.Item>
                        <Nav.Link href={item[1]}>{item[2]}</Nav.Link>
                    </Nav.Item>)
                })}
                </div>
            </Nav>
            <div class="position-relative overflow-hidden text-center bg-light">
            <div class="col-md-5 p-lg-1 mx-auto my-4" dangerouslySetInnerHTML={{__html: headline} } >
            </div>
          </div>
          </div>
        )
    }
}

export default Header