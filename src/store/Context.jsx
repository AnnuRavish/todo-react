import { createContext } from "react";

const ContextStore = createContext({
  todoItems: [],
  HandleAdd: () => { },
  HandleDelete: () => { },
});

export default ContextStore;