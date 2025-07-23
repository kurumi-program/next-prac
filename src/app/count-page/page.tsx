"use client";

import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold mt-3">カウントボタン</h1>
      <h2>{count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="border w-[100px] mt-3"
      >
        ➕
      </button>
    </div>
  );
}
