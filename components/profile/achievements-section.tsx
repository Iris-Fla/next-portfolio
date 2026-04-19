"use client";

import Image from "next/image";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring" },
  },
};

const achievements = [
  {
    title: "Intel® AI Global Impact Festival 2025 Country Recognition Award",
    link: "https://impact.indiaai.gov.in/",
    description:
      "インドで開催された国際的なAIサミットで現地の方々にアプリケーションの紹介を行いました。英語が出来ないので生きてる心地がしませんでした(笑)",
    detail: "国際コンテスト受賞・展示",
    markerClassName: "bg-lime-500",
    imageSrc: "/intel_india.jpg",
    imageAlt: "現地での表彰状の受け渡し",
  },
  {
    title: "Intel® AI Global Impact Festival 2024 Country Award",
    link: "https://www.intel.com/content/www/us/en/corporate/artificial-intelligence/winners2024.html#tab-blade-1-1",
    description:
      "日本の子供に向けた英語学習アプリを開発し、Intelの世界コンテストで受賞しました！審査会が英語だったので非常に緊張しました。(ありがとう、通訳の人...)",
    detail: "国際コンテスト受賞",
    markerClassName: "bg-lime-500",
    imageSrc: "/countrywinner.jpg",
    imageAlt: "表彰状",
  },
  {
    title: "OpenVino™ 学生向けAIコンテスト 最優秀賞",
    link: "https://forest.watch.impress.co.jp/docs/special/1598339.html",
    description:
      "東京で行われたIntel AI Summit Japan 2025で展示・登壇し、制作したアプリケーションのプレゼンテーションを行いました！",
    detail: "コンテスト受賞・登壇",
    markerClassName: "bg-lime-300",
    imageSrc: "/intel_japan.jpg",
    imageAlt: "AI Summit Japanでの登壇画像",
  },
];

function AchievementItem({
  title,
  link,
  description,
  detail,
  markerClassName,
  imageSrc,
  imageAlt,
}: (typeof achievements)[number]) {
  return (
    <div className="relative rounded-3xl border border-lime-100 bg-white/80 p-4 shadow-sm md:p-5">
      <div
        className={`absolute left-5 top-5 h-4 w-4 rounded-full border-4 border-white ${markerClassName}`}
      />
      <div className="grid gap-4 md:grid-cols-[1fr_0.95fr] md:items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-lime-700 mb-2">{detail}</p>
          {link ? (
            <p className="text-sm text-lime-700 mb-2">
              <a
                href={link}
                className="underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                (リンク)
              </a>
            </p>
          ) : null}
          <p className="text-gray-800 leading-relaxed">{description}</p>
        </div>

        {imageSrc ? (
          <div className="order-1 md:order-2">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-lime-50">
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 38vw"
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function AchievementsSection() {
  return (
    <motion.section
      className="mb-10"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div>
        <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
          <Trophy className="mr-2 h-5 w-5 text-lime-700" />
          受賞とか...?
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
            これまでに受賞したコンテストや、展示・登壇したイベントなどを紹介します。
        </p>

        <div className="space-y-4">
          {achievements.map((achievement) => (
            <AchievementItem
              key={achievement.title}
              title={achievement.title}
              link={achievement.link}
              description={achievement.description}
              detail={achievement.detail}
              markerClassName={achievement.markerClassName}
              imageSrc={achievement.imageSrc}
              imageAlt={achievement.imageAlt}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
