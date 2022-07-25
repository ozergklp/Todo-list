import React from "react";
import './styles/EmptyValue.css';

const EmptyValue = (props) => {
    return(
        <div>
            {
                props.pAlert && <div className='alert'>
                                <p className='alert-p'>You cant add empty value!!</p>
                                <button onClick={props.removeAlertHandler} 
                                        className='alert-button'>x</button>
                                </div>
            }
        </div>
    )
}

export default EmptyValue;