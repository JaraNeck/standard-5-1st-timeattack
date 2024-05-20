import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "할일",
      content: "내용",
      isDone: false,
    },
    {
      id: 2,
      title: "할일2",
      content: "내용",
      isDone: true,
    },
  ]);
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);
  return (
    <>
      <div>
        <h1>투두리스트 타임어택</h1>
        <TodoForm setTodos={setTodos} />
        <TodoList todos={workingTodos} setTodos={setTodos} />
        <TodoList todos={doneTodos} setTodos={setTodos} />
      </div>
    </>
  );
}
