import React, { Component } from 'react';
import List from './List';

export default class ListItems extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.items}</p>
                <List list={this.props.items} 
                        removeItem={this.props.removeItem}/>
            </div>

        )
    }
}