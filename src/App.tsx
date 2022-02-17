import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { TodoStore } from "./TodoStore/TodoStore";

function App() {
  return (
    <div className="App">
      <TodoList todoStore={TodoStore} />
    </div>
  );
}

export default App;
