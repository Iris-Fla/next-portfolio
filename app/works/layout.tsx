import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Works | Iris-Fla",
  description: "制作した作品一覧ページです。",
  path: "/works",
});

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}