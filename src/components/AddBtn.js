import React, { useState } from 'react';

function AddBtn(props) {
    return (
        <button className='btn btn-primary'
            onClick={(e) => {
                props.onEx();
            }}>+</button>
    )
}

export default AddBtn;