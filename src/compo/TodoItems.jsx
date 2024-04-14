import { useContext } from "react";
import ContextStore from "../store/Context";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const { todoItems } = useContext(ContextStore);

  return (

    <>
      <div className=" items-container ">
        {todoItems.map((item) => (
          <TodoItem key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}>
          </TodoItem>
        ))}

      </div>
    </>
  );
};

export default TodoItems;