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
      </div>
    </div>
  );
}
