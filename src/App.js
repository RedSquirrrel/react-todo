import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import TodoForm from './components/TodoForm/TodoForm'
/*
? CRUD => Creating to-do items, 
?         Reading to-do items, 
?         Updating to-do items, 
?         Deleting to-do items.
*/


function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React faster !!!',
      isCompleted: false,
    },
    {
      text: "Finish the projects you've started",
      isCompleted: false,
    },  
    {
      text: 'Read a book',
      isCompleted: false,
    },  
  ]);

const addTodo = text => {
  const newTodos = [...todos,{text}];
  setTodos(newTodos);
}

const toggleTodo = index =>{
 const newTodos = [...todos];
 newTodos[index].isCompleted = !newTodos[index].isCompleted; 
 setTodos(newTodos) ;
}

const deleteTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1); //! splice() => remove 1 element from todo index
  setTodos(newTodos);
}
  
   return (
    <div className="App">      
     <TodoForm addTodo={addTodo}/>
     <div className='todo-list'>
     {todos.map((todo, index) => (
       <Todo key={index} 
             index={index} 
             todo={todo}             
             toggleTodo = {toggleTodo}
             deleteTodo = {deleteTodo}
             />       
     ))}     
     </div>
    </div>
  ); 
}

export default App;