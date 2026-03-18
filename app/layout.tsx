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
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3001'),
  title: "ミュージカルスクール briller（ブリエ）",
  description: "本物志向の教育を求める方のための、洗練されたミュージカルスクール「briller（ブリエ）」。増本藍主宰。",
  openGraph: {
    title: "ミュージカルスクール briller（ブリエ）",
    description: "本物志向の教育を求める方のための、洗練されたミュージカルスクール「briller（ブリエ）」。増本藍主宰。",
    url: "/",
    siteName: "briller",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "briller musical school",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ミュージカルスクール briller（ブリエ）",
    description: "本物志向の教育を求める方のための、洗練されたミュージカルスクール「briller（ブリエ）」。",
    images: ["/ogp.png"],
  },
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
