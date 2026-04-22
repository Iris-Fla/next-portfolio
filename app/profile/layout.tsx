import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "プロフィール | Iris-Fla",
  description: "ふわふわとしたサイトかもしれない...",
  path: "/profile",
});

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}