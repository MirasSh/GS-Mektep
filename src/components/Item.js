import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <>
        <div className='item'>
          <img src={this.props.item.image} onClick={() => this.props.onShowItem(this.props.item)} />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
        </div>
      </>

    )
  }
}

export default Item



