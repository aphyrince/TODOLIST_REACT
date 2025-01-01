import React, { Component } from 'react';
import Elem from './Elem';

class Todolist extends Component {
    state = {
        list: [{
            id: 1,
            todo: 'first',
            date: Date.now(),
        }],
    }

    handleAddBtn() {
        const newList = this.state.list.concat({
            id: this.state.list.length + 1,
            todo: 'new todo',
            date: Date.now(),
        });

        this.setState({ list: newList });
    };


    render() {
        return (
            <div className="todolist">
                <ul>
                    {
                        this.state.list.map((item, index) => (
                            <Elem
                                key={index}
                                id={item.id}
                                todo={item.todo}
                                date={item.date}
                                onClick={id => {}}
                            />
                        ))
                    }
                </ul>
                <button onClick={this.handleAddBtn.bind(this)}>추가</button>
            </div>
        )
    }
}

export default Todolist;