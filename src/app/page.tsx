"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

type Todo = {
  task: string;
};

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    setTodos((prevTodo) => [...prevTodo, { task }]);
    setTask("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold mt-3"></h1>
      <h2 className="text-red-50">TODOリスト</h2>
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        className="border"
        type="text"
      />
      <Button onClick={addTodo} className="border">
        追加
      </Button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
