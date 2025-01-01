import React, { Component } from 'react';

class Elem extends Component {
    state = {
        id: '',
        todo: '',
        date: '',
        isComplete: false,
        isSetting: false,
    }

    constructor(props) {
        super(props);
        this.state.id = props.id;
        this.state.todo = props.todo;
        this.state.date = props.date;
    }

    checkboxOnChange(e) {
        this.setState({
            isComplete: e.target.checked
        });
    }

    settingOnClick(e) {

    }

    render() {
        return (
            <li
                className={`elem ${this.state.isComplete ? 'complete' : ''}`}
                onClick={(() => { this.props.onClick(this.state.id); }).bind(this)}>
                <span className="isComplete"><input type="checkbox" className="checkbox" onChange={this.checkboxOnChange.bind(this)}></input></span>
                <span className="id">{this.state.id}</span>
                <span className="todo">{this.state.todo}</span>
                <span className="date">{new Date(this.state.date).getFullYear() + '.' + new Date(this.state.date).getMonth() + '.' + new Date(this.state.date).getDay()}</span>
                <span className="setting"><button onClick={this.settingOnClick.bind(this)}>...</button></span>
            </li>
        )
    }
}

export default Elem