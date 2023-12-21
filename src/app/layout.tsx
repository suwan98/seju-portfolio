import type {Metadata} from "next";
import "@/style/globals.css";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Seju Portfolio",
  description: "프론트엔드 주니어 고수완입니다.",
  icons: {
    icon: "/assets/favicon/favicon.ico",
  },
  keywords: "프론트엔드 고수완 포트폴리오",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body className="relative">
        <Header />
        <main className="text-neutral-200">{children}</main>
      </body>
    </html>
  );
}
