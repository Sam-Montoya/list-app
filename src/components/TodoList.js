import React, { Component } from 'react';
import ListItems from './ListItems'


export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: '',
            items: [],
            title: 'To-do List'
        }
        // this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(item) {
        this.setState({
            items: this.state.items.concat([item]),
            newItem: ''
        })
        console.log(this.state);
    }

    handleChange(e) {
        this.setState({newItem: e.target.value})
    }
    removeItem(index) {
        let newArray = this.state.items
        newArray.splice(index, 1);
        this.setState({
            items: newArray
        })
        
    }

    render() {
        return (
            <div>
                <h1>Enter a new task: </h1>
                <input value={this.state.newItem} onChange={this.handleChange}/>
                <button onClick={() => this.addItem(this.state.newItem)}>Add</button>
                <ListItems title={this.state.title}
                            items={this.state.items}
                            removeItem={this.removeItem}/>
                

            </div>
        )
    }
}