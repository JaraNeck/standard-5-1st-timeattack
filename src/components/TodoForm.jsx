import { useState } from "react";

export default function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    alert("제목과 내용을 입력하세요");

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    setTodos((prevTodos) => [nextTodo, ...prevTodos]);
    setTitle("");
    setContent("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="제목"
        setTitle={setTitle}
        value={e.target.value}
      />
      <input
        type="text"
        placeholder="내용"
        setContent={setContent}
        value={e.target.value}
      />
      <button type="submit">추가</button>
    </form>
  );
}
