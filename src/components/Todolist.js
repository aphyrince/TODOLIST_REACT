import React, { Component } from 'react';
import Elem from './Elem';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    handleAddBtn() {
        const newList = this.state.list.concat({
            id: this.state.list.length + 1,
            todo: 'new todo',
            date: Date.now(),
        });

        this.setState({ list: newList });
    };

    componentDidMount() {
        console.log("component Did Mount");
        let newList = [];

        this.setState({ list: newList });
        fetch('todolist.json')
            .then(result => result.json())
            .then(json => this.setState({ list: json.list }));
    }

    render() {
        return (
            <div className="todolist">
                <ul>
                    {
                        console.log(this.state.list)
                    }
                    {
                        this.state.list.map((item, index) => (
                            <Elem
                                key={index}
                                id={item.id}
                                todo={item.todo}
                                d_day={item.d_day}
                                onClick={id => { }}
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