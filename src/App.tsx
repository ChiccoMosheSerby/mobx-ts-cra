import "./App.css";
import Todos from "./components/Todos/Todos";
import { TodoStore } from "./TodoStore/TodoStore";

function App() {
  return (
      <Todos todoStore={TodoStore} />
  );
}

export default App;
