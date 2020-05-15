import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer className="container py-5">
            <div className="row">
              <div className="col-12 col-md">
                <small className="d-block mb-3 text-muted">&copy; 2020</small>
              </div>
              <div className="col-6 col-md">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                    <li>
                      <a className="text-muted" href="#">Test 1</a>
                    </li>
                  <li><a className="text-muted" href="#">Test 2</a></li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="#">Test 3</a></li>
                  <li><a className="text-muted" href="#">Test 3</a></li>
                </ul>
              </div>
            </div>
          </footer>
      
        )
    }
    }

export default Footer