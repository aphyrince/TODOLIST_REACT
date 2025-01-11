import React, { useState } from 'react';

function AddForm(props) {
    return (
        <form className="add_form" onSubmit={(e) => {
            props.onEx(e.target.d_day.value, e.target.task.value);
            e.preventDefault();
        }}>
            <input name="d_day" type="number" placeholder='0' className='d_day'></input>
            <input name="task" type="text" placeholder='add new task' className='task'></input>
            <input name="submit" type="submit" className='btn btn-primary' ></input>
        </form>
    )
}

export default AddForm;