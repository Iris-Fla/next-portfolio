import type { Metadata } from "next";
import { Kiwi_Maru } from "next/font/google";
import MainHeader from "@/components/mainheader/page";
import MainFooter from "@/components/mainfooter/page";
import { Toaster }from "@/components/ui/sonner";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

const kiwiMaru = Kiwi_Maru({
  weight: ["300", "400", "500"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Iris-Fla",
    description: "ふわふわとしたサイト...の予定",
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={kiwiMaru.className}
      >
        <MainHeader />
        <main>
        {children}
        </main>
        <Toaster />
        <MainFooter />
      </body>
    </html>
  );
}
