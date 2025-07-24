"use client";

import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold mt-3"></h1>
      <h2>TODOリスト</h2>
      <button className="border">追加</button>
      <ul></ul>
    </div>
  );
}
