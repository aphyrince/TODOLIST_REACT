import React, { useState } from 'react';
import '../Elem.css';

function Elem(props) {
    const [d_day, setD_day] = useState(props.d_day);
    return (
        <p className="elem">
            <span className='d_day'>D-{d_day}</span>
            <span className="task">{props.task}</span>
        </p>
    )
}

export default Elem;