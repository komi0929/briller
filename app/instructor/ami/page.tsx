import Image from "next/image";
import Link from "next/link";

export default function AmiInstructorPage() {
  return (
    <div className="relative min-h-screen bg-stone-50 pb-24">
      <div className="max-w-5xl mx-auto px-6 pt-12 md:pt-24">
        <div className="mb-20 text-center md:text-left">
          <Link 
            href="/" 
            className="inline-flex items-center gap-4 text-stone-400 font-sans text-xs tracking-[0.2em] uppercase hover:text-stone-800 transition-colors mb-12"
          >
            <span className="text-lg leading-none mb-[2px]">←</span> Back to Home
          </Link>
          
          <p className="font-sans text-stone-400 text-xs tracking-[0.2em] mb-2 uppercase">
            Special Instructor
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 tracking-wider">
            特別講師紹介
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24">
          <div className="w-full md:w-5/12 shrink-0">
            <div className="relative aspect-3/4 w-full rounded-sm overflow-hidden mb-8">
              <Image
                src="/images/ami.jpg"
                alt="AMI"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-serif text-3xl font-medium text-stone-800 mb-2 tracking-wide">
                AMI
              </h2>
              <p className="font-sans text-stone-400 text-sm tracking-widest uppercase mb-8">
                Asami Mori
              </p>
            </div>
          </div>

          <div className="w-full md:w-7/12">
            
            <div className="text-stone-600 font-sans leading-loose text-sm md:text-base space-y-8">
              <p className="font-serif text-stone-800 text-lg md:text-xl border-l-2 border-stone-300 pl-6 leading-relaxed italic">
                【月1回限定✨スペシャルダンスレッスン】<br className="hidden md:block" />
                パワフルさと繊細さをあわせ持ち、エネルギー溢れる表現が魅力
              </p>
              
              <p>
                ミュージカルクラスのために、歌やお芝居へとつながる“表現としてのダンス”を大切にしたレッスンを行ってくださいます。
              </p>
              
              <div className="py-8 my-8 border-y border-stone-200">
                <h3 className="font-sans text-stone-400 text-xs tracking-[0.2em] uppercase mb-6">Career Highlights</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-serif text-stone-700 text-sm md:text-base mb-3 bg-stone-100 inline-block px-3 py-1 rounded-sm">≪バトントワリング≫</h4>
                    <ul className="space-y-2 text-stone-800 font-serif leading-relaxed text-sm">
                      <li className="flex gap-4"><span className="text-stone-300">-</span><span>15年連続九州代表全国大会出場 九州大会優勝11回<br/><span className="text-stone-500 font-sans text-xs">（全国大会優勝2回 入賞9回）</span></span></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-serif text-stone-700 text-sm md:text-base mb-3 bg-stone-100 inline-block px-3 py-1 rounded-sm">≪舞台・ステージ≫</h4>
                    <ul className="space-y-2 text-stone-800 font-serif leading-relaxed text-sm">
                      <li className="flex gap-4"><span className="text-stone-300">-</span><span>ロミオとジュリエット</span></li>
                      <li className="flex gap-4"><span className="text-stone-300">-</span><span>マイフェアレディ 東宝ミュージカル出演</span></li>
                      <li className="flex gap-4"><span className="text-stone-300">-</span><span>SMAP 、BTS(防弾少年団）福岡ドームツアーバックアップダンサー</span></li>
                      <li className="flex gap-4"><span className="text-stone-300">-</span><span>ナムコ XBOX ゲーム『アイドルマスター』 振付・出演</span></li>
                      <li className="flex gap-4"><span className="text-stone-300">-</span><span>DRAGON GATE プロレス B×Bハルク レギュラーダンサー</span></li>
                      <li className="flex gap-4"><span className="text-stone-300">-</span><span>スペースワールド レギュラー ショーキャスト</span></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-serif text-stone-700 text-sm md:text-base mb-3 bg-stone-100 inline-block px-3 py-1 rounded-sm">≪振付≫</h4>
                    <ul className="space-y-2 text-stone-800 font-serif leading-relaxed text-sm">
                      <li className="flex gap-4"><span className="text-stone-300">-</span><span>『Nataly』(R&Bシンガー) 全米デビュー曲 振付 出演</span></li>
                      <li className="flex gap-4"><span className="text-stone-300">-</span><span>ホリプロ大阪『Pixy chiks』デビュー曲 振付</span></li>
                      <li className="flex gap-4"><span className="text-stone-300">-</span><span>ミスユニバース・ジャパン 福岡県、大分県公認ダンス講師<br/><span className="text-stone-500 font-sans text-xs">ファイナリスト最終審査大会ダンス振付</span></span></li>
                      <li className="flex gap-4"><span className="text-stone-300">-</span><span>ミュージカルミーツウインドオーケストラ振付</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                その他数多くのバックダンサーや、出演経験を持つ。<br />
                ダンサーだけでなく、MCやモデルとしての経験も数多い。
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
