import React from "react";
import './styles/Form.css';

const Form = (props) => {
    return(
        <form className="form" onSubmit={props.submitHandler}>
            <input 
                className='form-input' 
                type="text" 
                placeholder="Enter new todo" 
                onChange={props.clickTodo}
                value={props.todo} ></input>
            <button className='form-button' type='submit'>Add</button>
        </form>
    );
};

export default Form;