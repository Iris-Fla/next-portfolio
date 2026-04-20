"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import PageMotion from "@/components/pagemotion/page";
import AchievementsSection from "@/components/profile/achievements-section";
import {
  Heart,
  Github,
  Twitter,
  House,
} from "lucide-react";
import { motion } from "framer-motion";

// アニメーションのバリアントを追加
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function Profile() {
  const profilemessages = [
    "にゃんはろ～",
    "いろいろなことをやっていたり～",
    "プログラミングは好き?",
    "見てくれてありがとう～",
  ];

  useEffect(() => {
    // ページロード時にトースト表示
    const randomMessage =
      profilemessages[Math.floor(Math.random() * profilemessages.length)];
    toast.success(randomMessage, {
      position: "bottom-center",
      duration: 7000,
      icon: "🙌",
    });
  }, []);

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* 背景SVG */}
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-50 -right-70 w-[800px] h-[800px] pointer-events-none -z-1000 opacity-80"
        aria-hidden="true"
      >
        <path
          fill="#35530E"
          d="M43.4,-63.5C55,-60,62.3,-45.9,70.2,-31.3C78.1,-16.6,86.6,-1.5,85.4,12.8C84.2,27.1,73.2,40.5,60.5,49C47.8,57.5,33.4,61.1,18.8,66.5C4.2,71.8,-10.5,79,-24.3,77.4C-38,75.7,-50.8,65.4,-62.1,53.3C-73.3,41.1,-83.2,27.3,-83.5,13.1C-83.8,-1,-74.6,-15.4,-66.3,-28.9C-58.1,-42.5,-50.8,-55.1,-39.9,-58.8C-29,-62.6,-14.5,-57.6,0.7,-58.7C15.9,-59.7,31.8,-67,43.4,-63.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-100 -left-80 w-[800px] h-[800px] pointer-events-none -z-1000 opacity-80"
        aria-hidden="true"
      >
        <path
          fill="#35530E"
          d="M47.5,-47.6C63.5,-31.4,79.9,-15.7,82.8,2.9C85.7,21.4,75,42.9,58.9,57.4C42.9,71.9,21.4,79.5,0.6,79C-20.3,78.4,-40.5,69.6,-56.4,55C-72.3,40.5,-83.9,20.3,-82.6,1.3C-81.4,-17.7,-67.3,-35.4,-51.3,-51.6C-35.4,-67.9,-17.7,-82.6,-1,-81.6C15.7,-80.6,31.4,-63.9,47.5,-47.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-250 -right-100 w-[800px] h-[800px] pointer-events-none -z-1000 opacity-80"
        aria-hidden="true"
      >
        <path
          fill="#35530E"
          d="M47.5,-47.6C63.5,-31.4,79.9,-15.7,82.8,2.9C85.7,21.4,75,42.9,58.9,57.4C42.9,71.9,21.4,79.5,0.6,79C-20.3,78.4,-40.5,69.6,-56.4,55C-72.3,40.5,-83.9,20.3,-82.6,1.3C-81.4,-17.7,-67.3,-35.4,-51.3,-51.6C-35.4,-67.9,-17.7,-82.6,-1,-81.6C15.7,-80.6,31.4,-63.9,47.5,-47.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-400 -left-70 w-[800px] h-[800px] pointer-events-none -z-1000 opacity-80"
        aria-hidden="true"
      >
        <path
          fill="#35530E"
          d="M43.4,-63.5C55,-60,62.3,-45.9,70.2,-31.3C78.1,-16.6,86.6,-1.5,85.4,12.8C84.2,27.1,73.2,40.5,60.5,49C47.8,57.5,33.4,61.1,18.8,66.5C4.2,71.8,-10.5,79,-24.3,77.4C-38,75.7,-50.8,65.4,-62.1,53.3C-73.3,41.1,-83.2,27.3,-83.5,13.1C-83.8,-1,-74.6,-15.4,-66.3,-28.9C-58.1,-42.5,-50.8,-55.1,-39.9,-58.8C-29,-62.6,-14.5,-57.6,0.7,-58.7C15.9,-59.7,31.8,-67,43.4,-63.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <PageMotion>
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          custom={0}
        >
          {/* ヘッダー部分 */}
          <div className="bg-lime-800 h-32 relative">
            <div className="absolute -bottom-16 left-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="rounded-full border-4 border-white shadow-xl overflow-hidden w-[128px] h-[128px]"
              >
                <Image
                  src="/ithiku_icon.jpg"
                  alt="Profile Icon"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* プロフィール情報 */}
          <div className="pt-20 px-8 pb-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              custom={1}
            >
              <h1 className="text-2xl font-bold text-gray-800 mb-1">
                める（Iris-Fla）
              </h1>
              <p className="text-lime-700 font-medium mb-4">
                イラスト:
                <Link
                  href="https://x.com/ithiku_u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-700 hover:text-gray-800 transition-colors decoration-lime-700 underline-offset-4 underline decoration-2"
                  aria-label="X (Twitter)"
                >
                  @ithiku_u
                </Link>
              </p>

              {/* 趣味セクション */}
              <div className="my-5">
                <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-3">
                  <Heart className="mr-2 h-5 w-5 text-lime-700" />
                  こんなことができる...!
                </h2>
                <ul className="text-gray-700 list-disc pl-5 ml-1">
                  {["Web制作", "デザイン", "バックエンド", "動画編集"].map(
                    (item, i) => (
                      <motion.li
                        key={item}
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                        className={i > 1 ? "text-gray-300" : ""}
                      >
                        {item}
                      </motion.li>
                    ),
                  )}
                </ul>
              </div>

              {/* 趣味・好きなもの */}
              <div className="mb-4">
                <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-3">
                  <Heart className="mr-2 h-5 w-5 text-lime-700" />
                  趣味・好きなもの
                </h2>
                <ul className="text-gray-700 list-disc pl-5 ml-1">
                  {[
                    <>
                      ラーメン<span className="text-lime-700">(とんこつ)</span>
                    </>,
                    "ゲーム全般",
                    "散策",
                    "雑談",
                    <>
                      イラスト<span className="text-lime-700">(見る方)</span>
                    </>,
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 下のセクションも同様にアニメーション追加 */}
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mt-10"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          custom={2}
        >
          <div className="pt-10 px-8 pb-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              custom={3}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                活動記録
              </h2>
              <p className="text-lime-700 font-medium mb-4 underline decoration-lime-700 underline-offset-4 decoration-2">
                <Link
                  href="https://github.com/Iris-Fla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-700 hover:text-gray-800 transition-colors"
                  aria-label="GitHub"
                >
                  Github!
                </Link>
              </p>

              {/* お仕事セクション */}
              <div className="mb-10">
                <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                  <House className="mr-2 h-5 w-5 text-lime-700" />
                  お仕事(アルバイト含む)一覧
                </h2>

                <div className="relative border-l-2 border-lime-200 pl-8 ml-2 space-y-10">
                  <div className="relative">
                    {/* 左側のマーカー */}
                    <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-lime-500 border-4 border-white"></div>

                    <h3 className="text-lg font-medium text-gray-900">
                      Webエンジニア
                    </h3>
                    <p className="text-sm text-lime-700 mb-2">
                      2026年4月～
                    </p>
                  </div>
                  <div className="relative">
                    {/* 左側のマーカー */}
                    <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-lime-500 border-4 border-white"></div>

                    <h3 className="text-lg font-medium text-gray-900">
                      秋田くりひろげ株式会社
                    </h3>
                    <p className="text-sm text-lime-700 mb-2">
                      2025年1月 - 2026年3月
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>
                       Figma作成,Next.jsでのフロントエンド実装等
                      </li>
                    </ul>
                  </div>

                  {/* 職歴アイテム 2 */}
                  <div className="relative">
                    {/* 左側のマーカー */}
                    <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-lime-300 border-4 border-white"></div>

                    <h3 className="text-lg font-medium text-gray-900">
                      Simplise株式会社
                    </h3>
                    <p className="text-sm text-lime-700 mb-2">
                      2023年11月 - 2024年
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Nuxt3向けのUIライブラリの開発</li>
                    </ul>
                  </div>

                  {/* 職歴アイテム 3 - 最古 */}
                  <div className="relative">
                    {/* 左側のマーカー */}
                    <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-lime-200 border-4 border-white"></div>

                    <h3 className="text-lg font-medium text-gray-900">
                      非公開
                    </h3>
                    <p className="text-sm text-lime-700 mb-2">
                      2022年11月 - 2024年
                    </p>
                    <p className="text-gray-600 font-medium mb-2">
                      ※動画編集案件
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Youtube用の施工動画,サムネイルの作成</li>
                    </ul>
                  </div>
                </div>
              </div>

              <AchievementsSection />
            </motion.div>
          </div>
        </motion.div>
      </PageMotion>
    </div>
  );
}
