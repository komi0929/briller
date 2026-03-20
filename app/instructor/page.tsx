import Image from "next/image";
import Link from "next/link";

export default function InstructorPage() {
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
            Instructor
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 tracking-wider">
            講師紹介
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24">
          <div className="w-full md:w-5/12 shrink-0">
            <div className="relative aspect-3/4 w-full rounded-sm overflow-hidden mb-8">
              <Image
                src="/images/instructor.jpg"
                alt="増本 藍"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-serif text-3xl font-medium text-stone-800 mb-2 tracking-wide">
                増本 藍
              </h2>
              <p className="font-sans text-stone-400 text-sm tracking-widest uppercase mb-8">
                Ai Masumoto
              </p>
            </div>
          </div>

          <div className="w-full md:w-7/12">
            
            <div className="text-stone-600 font-sans leading-loose text-sm md:text-base space-y-8">
              <p className="first-letter:text-3xl first-letter:font-serif first-letter:text-stone-800 first-letter:mr-2">
                福岡県小郡市出身。<br />
                久留米市立南筑高等学校入学後にバレエと声楽を始め、1998年10月に劇団四季へ入団。
                初舞台である『美女と野獣』をはじめ、退団する2015年までの17年間にわたり数多くの名作ミュージカルに出演し、主要キャストとして活躍。
              </p>
              
              <div className="py-8 my-8 border-y border-stone-200">
                <h3 className="font-sans text-stone-400 text-xs tracking-[0.2em] uppercase mb-6">Selected Works</h3>
                <ul className="space-y-4 text-stone-800 font-serif leading-relaxed">
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>『キャッツ』<br/><span className="text-stone-500 font-sans text-sm">ディミータ役 / ボンバルリーナ役</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>『クレイジー・フォー・ユー』<br/><span className="text-stone-500 font-sans text-sm">テス役 / アイリーン役</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>『コーラスライン』<span className="text-stone-500 font-sans text-sm ml-3">シーラ役</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>『ウエストサイド物語』<span className="text-stone-500 font-sans text-sm ml-3">アニタ役</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>『マンマ・ミーア！』<span className="text-stone-500 font-sans text-sm ml-3">ターニャ役</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>『リトルマーメイド』<span className="text-stone-500 font-sans text-sm ml-3">アースラ役</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>『ユタと不思議な仲間たち』<span className="text-stone-500 font-sans text-sm ml-3">ダンジャ役</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>『鹿鳴館』 / 『ふたりのロッテ』</span></li>
                </ul>
              </div>

              <p>
                退団後は地元である福岡県に拠点を移し、舞台活動を続けながら後進の育成に尽力。
                現在、九州大谷短期大学や福岡女学院大学にて非常勤講師も務める傍ら、Musical School brillerを主宰。
              </p>
              <p>
                「本物の舞台芸術に触れる経験を通じて、表現する喜びを深く知ってほしい」という想いのもと、長年の舞台経験で培われた確かな技術と表現力を、一人ひとりの生徒へ丁寧かつ本格的に指導している。
              </p>
            </div>
          </div>
        </div>

        {/* 特別講師セクション — 講師と同じ階層で表示 */}
        <div className="mb-20 text-center md:text-left">
          <div className="flex items-center gap-6 my-24">
            <div className="flex-1 h-px bg-stone-200" />
            <span className="font-sans text-stone-300 text-xs tracking-[0.3em] uppercase">✦</span>
            <div className="flex-1 h-px bg-stone-200" />
          </div>

          <p className="font-sans text-stone-400 text-xs tracking-[0.2em] mb-2 uppercase">
            Special Instructor
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 tracking-wider">
            特別講師
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24">
          <div className="w-full md:w-5/12 shrink-0">
            <div className="relative aspect-3/4 w-full rounded-sm overflow-hidden mb-8">
              <Image
                src="/images/special-instructor.png"
                alt="AMI（森亜沙美）"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-serif text-3xl font-medium text-stone-800 mb-2 tracking-wide">
                AMI
              </h2>
              <p className="font-sans text-stone-500 text-sm mb-1">森 亜沙美</p>
              <p className="font-sans text-stone-400 text-sm tracking-widest uppercase mb-8">
                Asami Mori
              </p>
            </div>
          </div>

          <div className="w-full md:w-7/12">
            <div className="text-stone-600 font-sans leading-loose text-sm md:text-base space-y-8">
              <p className="text-stone-700 font-serif text-base md:text-lg italic leading-relaxed border-l-2 border-stone-300 pl-6">
                「踊ることは、自分を知ること。<br className="hidden md:block"/>身体を通じた表現の楽しさを伝えたい」
              </p>
              <p className="first-letter:text-3xl first-letter:font-serif first-letter:text-stone-800 first-letter:mr-2">
                幼少よりクラシックバレエを始め、数々のコンクールで入賞を果たす。<br />
                その後、ジャズダンス・コンテンポラリーへと表現の幅を広げ、東京を拠点に国内外の舞台やイベントで第一線のダンサーとして活躍。
              </p>

              <div className="py-8 my-8 border-y border-stone-200">
                <h3 className="font-sans text-stone-400 text-xs tracking-[0.2em] uppercase mb-6">Selected Works</h3>
                <ul className="space-y-4 text-stone-800 font-serif leading-relaxed">
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>テーマパークダンサー<br/><span className="text-stone-500 font-sans text-sm">東京ディズニーリゾート等、多数のショーにレギュラー出演</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>アーティストバックダンサー<br/><span className="text-stone-500 font-sans text-sm">国内アーティストのライブツアー・MV出演、振付アシスタント</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>ミュージカル・舞台作品<br/><span className="text-stone-500 font-sans text-sm">商業ミュージカル・ストレートプレイへの出演多数</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>イベント振付・演出<br/><span className="text-stone-500 font-sans text-sm">企業イベント、ファッションショー等の振付・ステージング担当</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>コンクール入賞歴<br/><span className="text-stone-500 font-sans text-sm">全国規模のダンスコンクールにて複数回入賞</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>海外公演<br/><span className="text-stone-500 font-sans text-sm">アジア・ヨーロッパ圏でのダンスフェスティバル参加</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>ダンスインストラクター<br/><span className="text-stone-500 font-sans text-sm">10年以上の指導歴、ジャズ・バレエ・シアターダンスを専門に指導</span></span></li>
                  <li className="flex gap-4"><span className="text-stone-300">-</span><span>ワークショップ講師<br/><span className="text-stone-500 font-sans text-sm">全国各地のダンススタジオ・スクールにて特別ワークショップを開催</span></span></li>
                </ul>
              </div>

              <p>
                長年にわたりプロダンサーとして培った高い技術と豊富な舞台経験を活かし、現在は福岡を拠点にジャズダンス・バレエ・シアターダンスの指導に情熱を注ぐ。
                Musical School brillerでは特別講師として、主にダンステクニックと身体表現の指導を担当している。
              </p>
              <p>
                テクニックの正確さだけでなく、「踊りを通じて自分自身と向き合い、内面からの表現力を引き出す」ことを大切に、
                生徒一人ひとりの個性と可能性を見極めながら、基礎から丁寧に、そして熱く指導している。
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
