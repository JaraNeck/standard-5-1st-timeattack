import TodoItem from "./TodoItem";
export default function TodoList({ title, setTodos }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        <li key={todo.id}>
          <TodoItem setTodos={setTodos} />
        </li>
      </ul>
    </div>
  );
}
