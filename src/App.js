import React, { useState } from 'react';
import './App.css';

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

function TodoForm({addTodo}){
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return(
    <form onSubmit = {handleSubmit}>
      <input className='input' type='text' value={value} placeholder='create your own to do list...' onChange={e => setValue(e.target.value)}/>      
      <input type="submit" value="Add To List" className='btn'/>  
    </form>   
  )
}


// * add the is-completed css class to todo text
function Todo({todo, index, toggleTodo, deleteTodo }){
  return(
   <div className={`todo ${todo.isCompleted && 'is-completed'}`} >          
   <div onClick={() => toggleTodo(index)}>
      {todo.text}
   </div>
    <div>      
      <button className='delete-btn' onClick={() => deleteTodo(index)}>X</button>
    </div>  
    </div>
  );
};

export default App;