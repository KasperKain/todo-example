import { useState } from "react";
import Todo from "./Todo";

export default () => {
  const [todos, setTodos] = useState([{}]);
  const [name, setName] = useState("null");
  const [content, setContent] = useState("null");

  function addTodo() {
    let newId = todos.length;
    const newTodo = {
      id: newId,
      name: name,
      content: content,
    };

    setTodos([newTodo, ...todos]);
  }

  function deleteTodo(id) {
    let oldTodos = todos;
    console.log(oldTodos);
    oldTodos.splice(
      todos.findIndex((i) => i.id === id),
      1
    );
    setTodos([...oldTodos]);
  }

  return (
    <div className='todo-list'>
      <h2>Name: {name}</h2>
      <h2>Content: {content}</h2>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add Item</button>
      {todos.map((item) => (
        <div className='todo' key={item.id || 0}>
          <Todo name={item.name} content={item.content} />
          <button
            onClick={() => {
              deleteTodo(item.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
