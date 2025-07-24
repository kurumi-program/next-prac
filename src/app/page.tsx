"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold mt-3"></h1>
      <h2>TODOリスト</h2>
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        className="border"
        type="text"
      />
      <button onClick={() => console.log(task)} className="border">
        追加
      </button>
      <ul></ul>
    </div>
  );
}
