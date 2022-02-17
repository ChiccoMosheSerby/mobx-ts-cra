import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { TodoStore } from "./TodoStore/TodoStore";

function App() {
  return (
      <TodoList todoStore={TodoStore} />
  );
}

export default App;
