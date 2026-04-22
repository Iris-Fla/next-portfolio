import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadataBase = new URL(siteUrl);
export const defaultOgImage = "/icon.png";

type BuildMetadataParams = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = defaultOgImage,
}: BuildMetadataParams): Metadata {
  return {
    metadataBase,
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: path,
      title,
      description,
      siteName: "Iris-Fla",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}