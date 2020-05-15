import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer class="container py-5">
            <div class="row">
              <div class="col-12 col-md">
                <small class="d-block mb-3 text-muted">&copy; 2020</small>
              </div>
              <div class="col-6 col-md">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                    <li>
                      <a class="text-muted" href="#">Test 1</a>
                    </li>
                  <li><a class="text-muted" href="#">Test 2</a></li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                  <li><a class="text-muted" href="#">Test 3</a></li>
                  <li><a class="text-muted" href="#">Test 3</a></li>
                </ul>
              </div>
            </div>
          </footer>
      
        )
    }
    }

export default Footer