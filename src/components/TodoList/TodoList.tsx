import { observer } from "mobx-react";
import React, { useState } from "react";
import { TodoStoreImpl } from "../../TodoStore/TodoStore";
import { Main, Ul, Div, Span } from "./TodoList.style";

interface TodoListProps {
  todoStore: TodoStoreImpl;
}

const TodoList: React.FC<TodoListProps> = observer(({ todoStore }) => {
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
      {todoStore.todos.length > 0 && (
        <Ul>
          {todoStore.todos.map((t, idx) => {
            return (<>
              <li key={t.id}>
                <span
                  className="xBtn"
                  onClick={() => todoStore.removeTodo(t.id)}
                >
                  X
                </span>
                <Div done={t.completed}>{t.title}</Div>
                <Span
                  done={t.completed}
                  onClick={() => todoStore.toggleCompleted(t)}
                >
                  {t.completed ? "re-Open" : "Done"}
                </Span>
              </li>
              <hr style={{width:'100%'}}/>
              </>
            );
          })}
        </Ul>
      )}
      <div>Completed : {todoStore.status.completed}</div>
      <div>Remaining : {todoStore.status.remaining}</div>
    </Main>
  );
});

export default TodoList;
