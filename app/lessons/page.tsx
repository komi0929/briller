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
                <p className="text-stone-600 font-sans text-sm leading-loose">
                  基礎から身体づくりを行い、柔軟性・持久力・リズム感を育てます。<br/>
                  初心者から経験者まで、技術と表現力をしっかり伸ばします。
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-stone-800 mb-1 border-b border-stone-100 pb-2">歌・演技レッスン</h3>
                <p className="text-stone-400 font-sans text-xs tracking-widest mb-3">木曜　18:00〜19:30</p>
                <p className="text-stone-700 font-serif text-sm italic mb-3 leading-relaxed">感じて、考えて、表現する。</p>
                <p className="text-stone-600 font-sans text-sm leading-loose">
                  基礎を大切にしながら、想像力と表現力を育てます。<br/>
                  自ら発想し、行動する力を養い、自己表現へと繋げていきます。
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-stone-800 mb-1 border-b border-stone-100 pb-2">Song＆Danceレッスン<span className="text-stone-400 font-sans text-xs ml-2">小学5年生以上</span></h3>
                <p className="text-stone-400 font-sans text-xs tracking-widest mb-3">日曜　11:00〜12:30</p>
                <p className="text-stone-700 font-serif text-sm italic mb-3 leading-relaxed">歌って、踊って、魅せる。</p>
                <p className="text-stone-600 font-sans text-sm leading-loose">
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
            <div className="text-stone-600 font-sans space-y-6 text-sm leading-relaxed">
              {/* 入会金 */}
              <div className="border-b border-stone-100 pb-4">
                <h3 className="font-medium text-stone-800 mb-2">◾ 入会金</h3>
                <p className="pl-4">5,500円</p>
              </div>
              {/* 月謝 */}
              <div className="border-b border-stone-100 pb-4">
                <h3 className="font-medium text-stone-800 mb-2">◾ 月謝</h3>
                <ul className="pl-4 space-y-2">
                  <li className="flex justify-between"><span>週1回</span><span>11,000円</span></li>
                  <li>
                    <div className="flex justify-between"><span>週2回</span></div>
                    <ul className="pl-4 mt-1 space-y-1 text-stone-500">
                      <li className="flex justify-between"><span>小学1年〜3年</span><span>16,000円</span></li>
                      <li className="flex justify-between"><span>小学4年生以上</span><span>18,000円</span></li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* 体験レッスン */}
              <div className="border-b border-stone-100 pb-4">
                <h3 className="font-medium text-stone-800 mb-2">◾ 体験レッスン</h3>
                <ul className="pl-4 space-y-2">
                  <li className="flex justify-between"><span>小学生</span><span>1,000円</span></li>
                  <li className="flex justify-between"><span>中学生以上</span><span>1,500円</span></li>
                </ul>
              </div>
              <p className="text-xs text-stone-400">※ 全て税込価格です。<br/>※ 発表会等の出演にあたっては、別途参加費・衣装代がかかる場合がございます。</p>
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

        {/* Spring Campaign */}
        <section className="mb-20 py-16 px-6 bg-linear-to-b from-pink-50/60 via-stone-50 to-stone-50 rounded-sm text-center">
          <p className="font-serif text-pink-400/80 text-xs tracking-[0.3em] mb-3 uppercase">Spring Campaign</p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-800 mb-3 tracking-wider">
            春の入会キャンペーン
          </h2>
          <p className="text-stone-400 font-sans text-sm mb-10 tracking-wide">3月の期間限定特典</p>
          <div className="space-y-5 mb-12">
            {[
              "体験レッスン無料",
              "入会金無料",
              "初月月謝半額",
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-4">
                <span className="text-pink-300 text-lg">♪</span>
                <span className="font-serif text-stone-700 text-base md:text-lg tracking-wider">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-400 font-sans text-xs leading-relaxed mb-12">
            この春、新しい一歩を踏み出すお子さまを応援します。<br/>
            お気軽にお問い合わせください。
          </p>
          <a 
            href="https://line.me/R/ti/p/@351lwjgj?oat_content=url&ts=02242144"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#06C755] text-white px-10 py-4 rounded-full hover:opacity-90 transition-opacity font-sans font-medium tracking-wide text-sm"
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .348-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .349-.281.63-.63.63h-2.386a.63.63 0 0 1-.63-.63V8.108a.63.63 0 0 1 .63-.63h2.386c.349 0 .63.282.63.63 0 .349-.281.631-.63.631H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 0 1-.63.63.629.629 0 0 1-.51-.262l-2.397-3.282v2.913a.63.63 0 0 1-1.26 0V8.108a.63.63 0 0 1 .63-.63c.2 0 .385.095.51.262l2.397 3.282V8.108a.63.63 0 0 1 1.26 0v4.771zm-5.741 0a.63.63 0 0 1-1.26 0V8.108a.63.63 0 0 1 1.26 0v4.771zm-2.462.63H4.921a.63.63 0 0 1-.63-.63V8.108a.63.63 0 0 1 1.261 0v4.14h1.756c.348 0 .629.283.629.631 0 .348-.281.63-.629.63zM24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.084.923.258 1.058.593.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967C23.309 14.09 24 12.315 24 10.314z" /></svg>
            公式LINEで相談する
          </a>
        </section>

      </div>
    </div>
  );
}
