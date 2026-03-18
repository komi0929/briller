import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-5xl md:text-7xl font-medium text-stone-800 mb-6 tracking-widest">
        404
      </h1>
      <h2 className="font-serif text-xl md:text-2xl font-medium text-stone-600 mb-8 tracking-wider">
        ページが見つかりません
      </h2>
      <p className="font-sans text-stone-500 mb-12 max-w-md leading-relaxed">
        お探しのページは、移動または削除された可能性があります。URLに間違いがないかご確認ください。
      </p>
      <Link 
        href="/"
        className="inline-flex items-center gap-2 bg-stone-800 text-stone-50 px-8 py-4 rounded-sm hover:bg-stone-700 transition-colors font-sans text-sm tracking-widest uppercase"
      >
        <MoveLeft size={16} /> トップページへ戻る
      </Link>
    </div>
  );
}
