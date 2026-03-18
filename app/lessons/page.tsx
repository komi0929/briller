import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function LessonsPage() {
  return (
    <div className="relative min-h-screen bg-stone-50 pb-24">
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-stone-500 font-sans text-sm tracking-widest hover:text-stone-800 transition-colors mb-12"
        >
          <MoveLeft size={16} /> トップページへ戻る
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
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-lg text-stone-800 mb-3 border-b border-stone-100 pb-2">キッズ・ジュニアクラス</h3>
                <p className="text-stone-600 font-sans text-sm leading-relaxed">
                  歌・ダンス・お芝居の基礎を通して、表現する楽しさと豊かな感性を育みます。初めて舞台に触れるお子様も安心して参加できるアットホームなクラスです。
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-stone-800 mb-3 border-b border-stone-100 pb-2">一般・大人クラス</h3>
                <p className="text-stone-600 font-sans text-sm leading-relaxed">
                  趣味でミュージカルを楽しみたい方から、本格的に技術を磨きたい方まで幅広く対応します。基礎の発声や身体の使い方の見直しから丁寧に行います。
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-stone-800 mb-3 border-b border-stone-100 pb-2">プロフェッショナル・受験対策</h3>
                <p className="text-stone-600 font-sans text-sm leading-relaxed">
                  劇団四季などをはじめとするプロの舞台を目指す方や、音楽大学・テーマパークオーディションに向けた個別指導・実践的なテクニック指導を重点的に行います。（詳細はお問い合わせください）
                </p>
              </div>
            </div>
          </section>

          {/* 頻度・スケジュール */}
          <section className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-stone-100">
            <div className="mb-8 border-l-2 border-stone-800 pl-4">
              <p className="text-stone-400 font-sans text-xs tracking-[0.2em] mb-1 uppercase">Schedule</p>
              <h2 className="font-serif text-2xl font-medium text-stone-800 tracking-wider">スケジュール</h2>
            </div>
            <div className="text-stone-600 font-sans space-y-4 text-sm leading-relaxed">
              <p><strong>頻度:</strong> 月4回（週1回コース）を中心にご案内しています。</p>
              <div className="bg-stone-50 p-4 rounded mt-4">
                <p className="text-stone-500 italic text-xs mb-2">※ 以下はスケジュールの目安です</p>
                <ul className="space-y-2">
                  <li><span className="inline-block w-16 text-stone-800 font-medium">木曜日</span> 17:00 - 18:30 (キッズ)</li>
                  <li><span className="inline-block w-16 text-stone-800 font-medium">土曜日</span> 10:00 - 11:30 (一般)</li>
                  <li><span className="inline-block w-16 text-stone-800 font-medium">日曜日</span> 13:00 - 15:00 (特別クラス)</li>
                </ul>
              </div>
              <p className="text-xs text-stone-400 mt-4">具体的な曜日や時間帯については、お問い合わせ時または体験レッスン時に直接ご相談ください。</p>
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
