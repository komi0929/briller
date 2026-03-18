import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ミュージカルスクール briller（ブリエ）",
  description: "本物志向の教育を求める方のための、洗練されたミュージカルスクール「briller（ブリエ）」。増本藍主宰。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased bg-stone-50 text-stone-900 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
