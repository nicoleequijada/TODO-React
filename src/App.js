import React from "react";
import { TodoCounter} from "./TodoCounter";
// import './App.css';


const todos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'tomar el curso de react ', completed: false},
  {text: 'Llorar con la llorona', completed: false}
];
function App() {
  return (

   <React.Fragment> 
    <TodoCounter />
    
    {/* <TodoSearch /> */}
    <input placeholder="cebolla" />
    {/* <TodoList> */}
    
    {/* {todos.map(todo =>(
      <TodoItem />
      ))} */}
      {/* </TodoList> */}
      {/* <CreateTodoButton /> */}
      <button>+</button>
      
      </React.Fragment>
      
      );
    }
    
    export default App;
    