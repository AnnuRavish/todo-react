import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import ContextStore from "../store/Context";

function TodoItem({ todoName, todoDate }) {
  const { HandleDelete } = useContext(ContextStore)
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" onClick={() => HandleDelete(todoName)}>
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
