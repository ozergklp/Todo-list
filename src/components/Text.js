import React from "react";
import './styles/Texts.css';

const Text = (props) => {
    return(
        <div>
            {props.pControl && <p className='todos-length'>There are {props.todos.length} todos</p>}
            {props.pControl && <p className='border'></p>}
        </div>
    );
};

export default Text;