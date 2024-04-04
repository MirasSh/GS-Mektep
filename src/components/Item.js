import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <>
        <div className='item'>
          <div className='tov'>
            <img src={this.props.item.image} onClick={() => this.props.onShowItem(this.props.item)} />
          </div>
          <div className='item-discription'>
            <h3>{this.props.item.title}</h3>
            <p className='small5'>{this.props.item.desc}</p>
          </div>
        </div>
      </>

    )
  }
}

export default Item



