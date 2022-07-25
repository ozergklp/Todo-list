import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import EmptyValue from './components/EmptyValue';
import Text from './components/Text';
import List from './components/List';

function App() {  

  const toDo_array = ['Buying a milk', 'Going to school'];
  const[todos, setTodos] = useState(toDo_array);
  const [todo, setTodo] = useState("");
  const [pControl,setpControl] = useState(true);
  const[pAlert, setpAlert] = useState(false);

  const clickTodo = (e) => {
      setTodo(e.target.value);
  }

  const submitHandler = (e) =>{
      e.preventDefault();
      console.log(todo);
      console.log(todos);
      

      setTodos((prevTodos) =>{
          return[todo, ...prevTodos]
      })
      if(!todo){
        setpAlert(true)
      }else{
        setpAlert(false)
      }
      
      setTodos(prev => prev.filter(fruit =>fruit !== ''));

      console.log(todos);

      setTodo("");
      setpControl(true);
  }

  const removeAllHandler = () => {
    setTodos([]);
    setpControl(false);
  }

  const removeHandler = (e) => {
    const name = e.target.getAttribute("name");
    setTodos(todos.filter(item => item !== name));
    if(todos.length === 1){
      setpControl(false);
    }
  }

  const removeAlertHandler = () => {
    setpAlert(false);
  }
  return (
    <div className='App'>
      <h3>Todo list</h3>
      <Form 
        submitHandler={submitHandler}
        todo={todo}
        clickTodo={clickTodo}
      />
      <EmptyValue 
        pAlert={pAlert}
        removeAlertHandler={removeAlertHandler}
      />
      <Text 
        pControl={pControl}
        todos={todos}
      />
      <List 
        todos={todos}
        removeHandler={removeHandler}
        pControl={pControl}
        removeAllHandler={removeAllHandler}
      />
    </div>
  );
}

export default App;
