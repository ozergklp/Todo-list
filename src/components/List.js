import React from "react";
import './styles/List.css';

const List = (props) => {
    return(
        <div>
            {
                React.Children.toArray(props.todos.map((todo,index) =>(
                    <li className='list'>
                        <button name={todo} 
                                onClick={props.removeHandler} 
                                className='delete-button'>Delete</button>
                        <p className='list-p'>{todo}</p>
                        <input type="checkbox" className="checkbox-button" />
                    </li>
                )))
            }
            {props.pControl && <button  onClick={props.removeAllHandler} 
                                        className='clear-button'>Clear All</button>}
        </div>
    );
};

export default List;