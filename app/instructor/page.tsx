import Image from "next/image";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function InstructorPage() {
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
          講師紹介
        </h1>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-24">
          <div className="w-full md:w-1/3 relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg h-fit">
            <Image
              src="/images/instructor.png"
              alt="増本 藍"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 mb-6 tracking-wide border-b border-stone-200 pb-4">
              増本 藍 <span className="text-xl text-stone-500 ml-2 font-light">Ai Masumoto</span>
            </h2>
            
            <div className="text-stone-700 font-sans leading-loose text-sm md:text-base space-y-6">
              <p>
                福岡県小郡市出身。<br />
                久留米市立南筑高等学校入学後にバレエと声楽を始め、1998年10月に劇団四季へ入団。
                初舞台である『美女と野獣』をはじめ、退団する2015年までの17年間にわたり数多くの名作ミュージカルに出演し、主要キャストとして活躍。
              </p>
              
              <div className="bg-stone-100 p-6 rounded-sm mt-6 mb-8">
                <h3 className="font-serif text-stone-800 font-medium mb-4 tracking-widest">主な出演作品・役柄</h3>
                <ul className="list-disc list-inside space-y-2 text-stone-600">
                  <li>『キャッツ』 - ディミータ役、ボンバルリーナ役</li>
                  <li>『クレイジー・フォー・ユー』 - テス役、アイリーン役</li>
                  <li>『コーラスライン』 - シーラ役</li>
                  <li>『ウエストサイド物語』 - アニタ役</li>
                  <li>『マンマ・ミーア！』 - ターニャ役</li>
                  <li>『リトルマーメイド』 - アースラ役</li>
                  <li>『ユタと不思議な仲間たち』 - ダンジャ役</li>
                  <li>『鹿鳴館』</li>
                  <li>『ふたりのロッテ』</li>
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
