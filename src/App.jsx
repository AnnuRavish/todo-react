import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import AppName from "./compo/AppName";
import AddTodo from "./compo/AddTodo";
import WelcomeMessage from "./compo/Welcome";
import TodoItems from "./compo/TodoItems";
import { useState } from "react";
import Card from "./compo/Card";
import ContextStore from "./store/Context";



function App() {

  const [todoItems, setTodoItem] = useState([]);

  const HandleAdd = (itemName, itemDueDate) => {
    setTodoItem((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  // now complete add button

  // Create delete button functionality


  const HandleDelete = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItem(newTodoItems);
  }



  return (
    <ContextStore.Provider value={{
      todoItems,
      HandleAdd,
      HandleDelete,
    }}>
      <center className="todo-container">
        <Card>
          <AppName></AppName>
          <AddTodo ></AddTodo>
          <WelcomeMessage ></WelcomeMessage>
          <TodoItems></TodoItems>
        </Card>
      </center>
    </ContextStore.Provider >
  );
}

export default App;