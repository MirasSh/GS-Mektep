import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main className='bloc-80'>
        {this.props.item.map(el =>(
          <Item onShowItem={this.props.onShowItem} key={el.id} item={el}/>
        )
        )}
      </main>
    )
  }
}

export default Items


