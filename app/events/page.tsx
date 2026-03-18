import Link from "next/link";
import { MoveLeft, Calendar, MapPin } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="relative min-h-screen bg-stone-50 pb-24">
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-stone-500 font-sans text-sm tracking-widest hover:text-stone-800 transition-colors mb-12"
        >
          <MoveLeft size={16} /> トップページへ戻る
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 mb-6 tracking-wider text-center">
          今後のイベント出演予定
        </h1>
        <p className="font-sans text-center text-stone-500 text-sm tracking-widest mb-16">
          UPCOMING EVENTS
        </p>

        <div className="space-y-8">
          
          {/* イベントアイテム1 (プレースホルダー) */}
          <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-stone-100 flex flex-col md:flex-row gap-6 md:gap-8 items-start hover:border-stone-200 transition-colors">
            <div className="shrink-0 md:w-48">
              <div className="bg-stone-100 rounded-sm p-4 text-center border border-stone-200">
                <p className="text-stone-500 font-serif text-sm uppercase tracking-widest">2026</p>
                <p className="text-stone-800 font-serif text-3xl font-medium mt-1">10<span className="text-lg">月</span>25<span className="text-lg">日</span></p>
                <p className="text-stone-500 text-xs font-sans mt-2">(予定)</p>
              </div>
            </div>
            <div className="flex-1 w-full">
              <h2 className="font-serif text-xl md:text-2xl font-medium text-stone-800 mb-3 tracking-wide">
                秋の公開レッスンダンスパフォーマンス
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-stone-500 font-sans text-sm mb-4">
                <span className="flex items-center gap-1.5"><Calendar size={14}/> 開演 14:00</span>
                <span className="flex items-center gap-1.5"><MapPin size={14}/> 福岡市内・某ホール</span>
              </div>
              <p className="text-stone-600 font-sans text-sm leading-relaxed">
                スクール生による日頃の練習の成果を披露する秋の公開イベントです。キッズクラスからプロフェッショナルクラスまで、幅広い年代の生徒たちが参加します。観覧は無料、または事前予約制を予定しております。詳細が決まり次第、こちらでお知らせいたします。
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-stone-100 text-stone-500 text-xs tracking-wider rounded-full font-serif border border-stone-200">発表会</span>
                <span className="px-3 py-1 bg-stone-100 text-stone-500 text-xs tracking-wider rounded-full font-serif border border-stone-200">観覧無料</span>
              </div>
            </div>
          </div>

          {/* イベントアイテム2 (プレースホルダー) */}
          <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-stone-100 flex flex-col md:flex-row gap-6 md:gap-8 items-start hover:border-stone-200 transition-colors">
            <div className="shrink-0 md:w-48">
              <div className="bg-stone-100 rounded-sm p-4 text-center border border-stone-200">
                <p className="text-stone-500 font-serif text-sm uppercase tracking-widest">2026</p>
                <p className="text-stone-800 font-serif text-3xl font-medium mt-1">12<span className="text-lg">月</span>15<span className="text-lg">日</span></p>
                <p className="text-stone-500 text-xs font-sans mt-2">(予定)</p>
              </div>
            </div>
            <div className="flex-1 w-full">
              <h2 className="font-serif text-xl md:text-2xl font-medium text-stone-800 mb-3 tracking-wide">
                クリスマス特別ミュージカルコンサート
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-stone-500 font-sans text-sm mb-4">
                <span className="flex items-center gap-1.5"><Calendar size={14}/> 開場 17:30 / 開演 18:00</span>
                <span className="flex items-center gap-1.5"><MapPin size={14}/> 未定</span>
              </div>
              <p className="text-stone-600 font-sans text-sm leading-relaxed">
                特別ゲストを交え、有名なミュージカルナンバーやクリスマスソングを披露する一大イベントです。主宰・増本藍によるパフォーマンスも予定されています。チケットの販売情報等は晩秋頃に公開予定です。
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-stone-800 text-stone-100 text-xs tracking-wider rounded-full font-serif shadow-sm">特別コンサート</span>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-stone-200 mt-12">
            <p className="font-sans text-stone-500 text-sm">
              ※ イベントの詳細は予告なく変更または中止になる場合がございます。<br/>
              最新情報は、公式LINEでも随時配信しておりますので、ぜひご登録ください。
            </p>
            <a 
              href="#"
              className="inline-flex items-center justify-center bg-[#06C755] text-white px-8 py-3 rounded-full mt-6 shadow-md hover:bg-[#05b04b] transition-colors font-medium tracking-wider text-sm gap-2"
            >
              公式LINEを登録する
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
