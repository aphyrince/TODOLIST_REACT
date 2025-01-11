import React, { useState } from 'react';
import Elem from './components/Elem';
import AddForm from './components/AddForm';

import './App.css';
import AddBtn from './components/AddBtn';

function App(props) {
    const [list, setList] = useState([]);
    const [add_toggle, setAdd_toggle] = useState(false);

    let adder;

    if (add_toggle) {
        adder = <AddForm onEx={(d_day, task) => {
            setAdd_toggle(false);
            const newList = Object.assign([], list);
            newList.push(<Elem d_day={d_day} task={task}></Elem>);
            setList(newList);
            console.log(list);
        }
        }></AddForm >;
    }
    else {
        adder = <AddBtn onEx={() => {
            setAdd_toggle(true);
        }}></AddBtn>
    }

    return (
        <div className="todoapp">
            <h1>ToDoApp</h1>
            <div className="list">
                <Elem d_day={1} task={"도서관 가기"}></Elem>
                {list}
            </div>
            {adder}
        </div >
    )
}

export default App;