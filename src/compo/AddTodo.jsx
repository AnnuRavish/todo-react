import { useRef } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import ContextStore from "../store/Context";
import { useContext } from "react";

function AddTodo() {
  const refItem = useRef();
  const refDate = useRef();
  const { HandleAdd } = useContext(ContextStore);




  const handleClickButton = (event) => {
    event.preventDefault()
    const TodoName = refItem.current.value;
    const TodoDate = refDate.current.value;
    refItem.current.value = "";
    refDate.current.value = "";

    HandleAdd(TodoName, TodoDate);

  };

  return (
    <div className="container text-center">
      <form className="row kg-row"
        onSubmit={handleClickButton}>
        <div className="col-6">
          <input type="text"
            ref={refItem}
            placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date"
            ref={refDate}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button" >
            <BiMessageSquareAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;