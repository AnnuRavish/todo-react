import { useContext } from "react";
import ContextStore from "../store/Context";

const WelcomeMessage = () => {
  const { todoItems } = useContext(ContextStore);


  return (
    todoItems.length === 0 && <p className="enjoy-your">Enjoy your day....</p>
  )
}

export default WelcomeMessage;