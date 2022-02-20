import { observer } from "mobx-react";
import React, { useState } from "react";
import { TodoStore } from "../../TodoStore/TodoStore";
import { Ul, Div, Span } from "./TodoList.style";

const List = observer(() => {
  return (
    TodoStore.todos.length > 0 && (
      <Ul>
        {TodoStore.todos.map((t, idx) => {
          return (
            <>
              <li key={t.id}>
                <span
                  className="xBtn"
                  onClick={() => TodoStore.removeTodo(t.id)}
                >
                  X
                </span>
                <Div done={t.completed}>{t.title}</Div>
                <Span
                  done={t.completed}
                  onClick={() => TodoStore.toggleCompleted(t)}
                >
                  {t.completed ? "re-Open" : "Done"}
                </Span>
              </li>
              <hr style={{ width: "100%" }} />
            </>
          );
        })}
      </Ul>
    )
  );
});

export default List;
