import { observer } from "mobx-react";
import React, { useState } from "react";
import { TodoStoreImpl } from "../../TodoStore/TodoStore";
import List from "./List";
import { Main } from "./TodoList.style";

interface TodoListProps {
  todoStore: TodoStoreImpl;
}

const Todos: React.FC<TodoListProps> = observer(({ todoStore }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = () => {
    todoStore.addTodo(inputValue);
    setInputValue("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode == 13) {
      onSubmit();
    }
  };
  return (
    <Main>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>Add</button>
      <List />
      <div>Completed : {todoStore.status.completed}</div>
      <div>Remaining : {todoStore.status.remaining}</div>
    </Main>
  );
});

export default Todos;
