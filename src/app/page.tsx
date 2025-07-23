"use client";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold mt-3"></h1>
      <h2>TODOリスト</h2>
      <input className="border" type="text" />
      <button className="border">追加</button>
    </div>
  );
}
