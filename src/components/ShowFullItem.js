import React, { Component } from 'react';

class ShowFullItem extends Component {
    render() {
        return (
            <div className='full-item'>
                <div>
                    <img src={this.props.item.image} onClick={() => this.props.onShowItem(this.props.item)} alt='' />
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                </div>
            </div>
        );
    }
}

export default ShowFullItem;
