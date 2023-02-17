import React, { useState } from "react";

type Todo = {
  id: number;
  title: string;
  status: boolean;
};

export const Todos = () => {
  const [text, setText] = useState<string>(""); //string is showing that the type of text is using is string.
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
      <div>Hello Welcome to the Todos</div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Text"
        type="text"
      />
      <button
        className="button"
        onClick={() =>
          setTodos([
            ...todos,
            { id:Math.random(), status: true, title: text },
          ]) 
        //  Math.floor means lower value and Math.ceil means the upper value
        }
      >
        Add Todo
      </button>
      <div>
        {todos.map((t) => (
          <div key={t.id}>
            {t.title}-{t.status ? "Done" : "Not Done"}
          </div>
        ))}
      </div>
    </div>
  );
};
