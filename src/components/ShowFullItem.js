import React, { Component } from 'react';
import logo2 from '../images/free-icon-multiply-399274.png'

class ShowFullItem extends Component {
    render() {
        return (
            <div className='full-item'>
                <div className='tovar-flex'>
                    <div className='tovar-widht '>
                        <img className='tovar-widht' src={this.props.item.image} alt='' onClick={() => this.props.onShowItem(this.props.item)} />
                    </div>
                    <img className='x exit' onClick={() => this.props.onShowItem(this.props.item)} src={logo2}/>
                    <div className='text-pozition tovar-widht'>
                        <h2>{this.props.item.title}</h2>
                        <p>{this.props.item.desc}</p>
                        <br />
                        <p className='rem07'>{this.props.item.more}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowFullItem;
