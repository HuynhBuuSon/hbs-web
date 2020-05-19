import React from 'react'
import { Pagination } from 'react-bootstrap'
import { mainConfig } from './../../config'

class Topic extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidUpdate() {
    this.baseLink = this.props.baseLink
    this.currentPage = this.props.currentPage
    this.totalPage = this.props.numberChild/mainConfig.pagination.pageSize
    this.items = []
    for (let number = 1; number <= this.totalPage; number++) {
        let pageLink = {active: false, number: number, type: false}
        if(this.totalPage > 10) {
            if(number === 1) {
                this.items.push(
                        <Pagination.Item key={number} active={number === this.currentPage} onClick={this.props.changePage} href={`${this.baseLink}${number}`}>
                        {number}
                        </Pagination.Item>
                    )
                this.items.push(
                    <Pagination.Ellipsis />
                    )
            } else if(number === this.totalPage) {
                this.items.push(
                    <Pagination.Ellipsis />
                    )
                    this.items.push(
                        <Pagination.Item key={number} active={number === this.currentPage} href={`${this.baseLink}${number}`}>
                        {number}
                        </Pagination.Item>
                    )
            } else if ((this.currentPage - 3) <= number &&  number <= (this.currentPage + 3))
            {
                this.items.push(
                    <Pagination.Item key={number} active={number === this.currentPage}  href={`${this.baseLink}${number}`}>
                    {number}
                    </Pagination.Item>
                )
            }
        } else {
            this.items.push(
                <Pagination.Item key={number} active={number === this.currentPage} href={`${this.baseLink}${number}`} >
                {number}
                </Pagination.Item>
            )
        }
        
    }
  }
  render() {
    return (
        <Pagination>{this.items}</Pagination>  
    )
  }
}

export default Topic