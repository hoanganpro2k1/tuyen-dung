import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tuyển Dụng | GO GROUP - Công Ty Cổ Phần Công Nghệ GOG Việt Nam",
  description:
    "GO GROUP tuyển dụng nhân sự chất lượng cao. Khám phá cơ hội nghề nghiệp hấp dẫn với môi trường làm việc năng động, chuyên nghiệp và chế độ đãi ngộ cạnh tranh.",
  keywords:
    "tuyển dụng, nhân sự, GO GROUP, GOG Việt Nam, việc làm, cơ hội nghề nghiệp, telesales, marketing",
  openGraph: {
    title: "Tuyển Dụng | GO GROUP - Công Ty Cổ Phần Công Nghệ GOG Việt Nam",
    description:
      "Khám phá cơ hội nghề nghiệp tại GO GROUP với môi trường làm việc chuyên nghiệp, năng động và chế độ đãi ngộ cạnh tranh.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${beVietnamPro.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
