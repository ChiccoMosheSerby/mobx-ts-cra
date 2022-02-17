import { action, computed, makeObservable, observable } from "mobx";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export class TodoStoreImpl {
  todos: TodoItem[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      toggleCompleted: action,
      removeTodo: action,
      status: computed,
    });
  }

  addTodo(title: string) {
    const item: TodoItem = {
      id: +Math.random().toFixed(4),
      title,
      completed: false,
    };

    this.todos.push(item);
  }
  toggleCompleted(item: TodoItem) {
    const index = this.todos.findIndex((t) => t.id === item.id);
    if (index > -1) {
      item.completed = !item.completed;
    }
  }

  removeTodo(id: number) {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index > -1) {
      this.todos = this.todos.filter((t) => t.id != id);
    }
  }

  get status() {
    let completed = 0;
    this.todos.forEach((t) => {
      if (t.completed) completed++;
    });

    return { completed, remaining: this.todos.length - completed };
  }
}

export const TodoStore = new TodoStoreImpl();
