import Link from "next/link";

export default function LessonsPage() {
  return (
    <div className="relative min-h-screen bg-stone-50 pb-24">
      <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-24 text-center md:text-left">
        <Link 
          href="/" 
          className="inline-flex items-center gap-4 text-stone-400 font-sans text-xs tracking-[0.2em] uppercase hover:text-stone-800 transition-colors mb-20"
        >
          <span className="text-lg leading-none mb-[2px]">←</span> Back to Home
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 mb-16 tracking-wider text-center">
          レッスン詳細
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full mb-20">
          
          {/* コース案内 */}
          <section className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-stone-100 col-span-1 md:col-span-2">
            <div className="mb-8 border-l-2 border-stone-800 pl-4">
              <p className="text-stone-400 font-sans text-xs tracking-[0.2em] mb-1 uppercase">Courses</p>
              <h2 className="font-serif text-2xl font-medium text-stone-800 tracking-wider">コース案内</h2>
            </div>
            <div className="space-y-10">
              <div>
                <h3 className="font-serif text-lg text-stone-800 mb-1 border-b border-stone-100 pb-2">ダンスレッスン</h3>
                <p className="text-stone-400 font-sans text-xs tracking-widest mb-3">火曜　17:40〜19:10</p>
                <p className="text-stone-700 font-serif text-sm italic mb-3 leading-relaxed">本気で楽しむ、ミュージカルダンス。</p>
                <p className="text-stone-600 font-sans text-sm leading-[2]">
                  基礎から身体づくりを行い、柔軟性・持久力・リズム感を育てます。<br/>
                  初心者から経験者まで、技術と表現力をしっかり伸ばします。
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-stone-800 mb-1 border-b border-stone-100 pb-2">歌・演技レッスン</h3>
                <p className="text-stone-400 font-sans text-xs tracking-widest mb-3">木曜　18:00〜19:30</p>
                <p className="text-stone-700 font-serif text-sm italic mb-3 leading-relaxed">感じて、考えて、表現する。</p>
                <p className="text-stone-600 font-sans text-sm leading-[2]">
                  基礎を大切にしながら、想像力と表現力を育てます。<br/>
                  自ら発想し、行動する力を養い、自己表現へと繋げていきます。
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-stone-800 mb-1 border-b border-stone-100 pb-2">Song＆Danceレッスン<span className="text-stone-400 font-sans text-xs ml-2">小学5年生以上</span></h3>
                <p className="text-stone-400 font-sans text-xs tracking-widest mb-3">日曜　11:00〜12:30</p>
                <p className="text-stone-700 font-serif text-sm italic mb-3 leading-relaxed">歌って、踊って、魅せる。</p>
                <p className="text-stone-600 font-sans text-sm leading-[2]">
                  ミュージカル曲を用い、歌とダンスを総合的に学びます。<br/>
                  舞台で通用する身体づくりと表現力を身につけていきます。
                </p>
              </div>
            </div>
          </section>

          {/* 費用・料金 */}
          <section className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-stone-100">
            <div className="mb-8 border-l-2 border-stone-800 pl-4">
              <p className="text-stone-400 font-sans text-xs tracking-[0.2em] mb-1 uppercase">Pricing</p>
              <h2 className="font-serif text-2xl font-medium text-stone-800 tracking-wider">費用のご案内</h2>
            </div>
            <div className="text-stone-600 font-sans space-y-4 text-sm leading-relaxed">
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="font-medium text-stone-800">入会金</span>
                  <span>10,000円</span>
                </li>
                <li className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="font-medium text-stone-800">キッズクラス (月謝)</span>
                  <span>8,000円 / 月</span>
                </li>
                <li className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="font-medium text-stone-800">一般クラス (月謝)</span>
                  <span>10,000円 / 月</span>
                </li>
                <li className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="font-medium text-stone-800">体験レッスン</span>
                  <span>2,000円 (1回限り)</span>
                </li>
              </ul>
              <p className="text-xs text-stone-400 mt-6">※ 発表会等の出演にあたっては、別途参加費・衣装代がかかる場合がございます。<br/>※ 料金はすべて税込価格の目安です。</p>
            </div>
          </section>

          {/* 場所・アクセス */}
          <section className="bg-stone-800 text-stone-50 p-8 md:p-10 rounded-sm shadow-md col-span-1 md:col-span-2">
            <div className="mb-8 border-l-2 border-stone-400 pl-4">
              <p className="text-stone-400 font-sans text-xs tracking-[0.2em] mb-1 uppercase">Access</p>
              <h2 className="font-serif text-2xl font-medium tracking-wider">スタジオ・アクセス</h2>
            </div>
            <div className="font-sans space-y-4 text-sm leading-relaxed text-stone-300">
              <p className="text-base text-stone-100 mb-2"><strong>福岡県内の専用スタジオ</strong></p>
              <p>現在、福岡市内・および近郊のスタジオを中心にレッスンを行っております。</p>
              <p className="pt-4 border-t border-stone-700">詳細な住所やアクセス方法（最寄り駅・駐車場の有無など）につきましては、防犯・プライバシーの観点から、体験レッスンお申し込み時に個別にご案内させていただいております。</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
