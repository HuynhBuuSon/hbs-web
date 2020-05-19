import React from 'react'

class Footer extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    let footerLink = this.props.global.mainData.footerLink
    let rootLinks =[]
    if(footerLink)
    {
      rootLinks = footerLink.filter(link => link.link===0)
      rootLinks = rootLinks.map(item => {
        let rootId = item.group
        let children = footerLink.filter(link => link.link!==0 && link.group===rootId)
        children = children.map(childitem => {
          return {link: childitem.link, title: childitem.title}
        })
        return {title: item.title, children: children}
        })
    }
    return (
        <footer className="navbar fixed-bottom" >
        <div className="row col-12">
          <div className="col-4 col-md">
            <small className="d-block mb-3 text-muted">&copy; 2020</small>
          </div>
          {rootLinks.map(item => {
                    return (
                    <div className="col-4 col-md">
                    <h5>{item.title}</h5>
                    <ul className="list-unstyled text-small">
                    {item.children.map(childitem => {
                      return (
                      <li>
                        <a className="text-muted" href={childitem.link}>{childitem.title}</a>
                      </li>)
                    })}
                    </ul>
                  </div>)
                    })}
        </div>
      </footer>
  
    )
  }
}

export default Footer