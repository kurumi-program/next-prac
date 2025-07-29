import { Button } from "@/components/ui/button";

export default function TestPage() {
  // printWidth: 80（デフォルト）の場合
  const greeting = "これは非常に長い文字列で、プリント幅が80に設定されていると途中で改行されます";

  // printWidth: 100 にした場合、もう少し長くても改行されない

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>テストだよーーー</h1>
      <Button>shadcn/ui</Button>
    </div>
  );
}
