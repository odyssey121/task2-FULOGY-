import React, { useState } from "react";
import { bottomData } from "../../data";
import './bottom.css';

const Bottom = (props) => {

    const [selected, setSelected] = useState(null);
    
    return (
        <div id='bottom'>
            {bottomData.map((record, index) => (
                <div
                    key={index}
                    className={selected === index && 'bottomBlock selected' || 'bottomBlock'}
                    onClick={() => setSelected(index)}
                >
                    <span>{record}</span>
                </div>
            ))}
        </div>
    )
}

export default Bottom;