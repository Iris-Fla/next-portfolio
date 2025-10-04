"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import PageMotion from "@/components/pagemotion/page";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = [
    "にゃんはろ～",
    "ここのテキストってランダムじゃないんですよ",
    "ここのテキストってランダムじゃないんですよ(二回目)",
    "ね...!",
    "ちなみに...",
    "ここまでのテキストしか用意していません",
    "みてくれてありがとう～",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      // 現在のインデックスのメッセージを使用
      const message = messages[currentIndex];

      // トーストを表示
      toast(message, {
        duration: 7000,
        position: "bottom-center",
        icon: "💚",
      });

      // 次のインデックスに更新（循環させる）
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 10000);

    // クリーンアップ関数でintervalをクリア
    return () => clearInterval(interval);
  }, [currentIndex, messages]);

  return (
    <div className="flex flex-col items-center justify-center min-h-205 text-center px-4 relative">
      {/* 上部SVG装飾 */}
      <div className="absolute top-0 left-0 w-full flex justify-center md:justify-between pointer-events-none z-0">
        {/* 左側（md以上で表示） */}
        <img
          src="/lamp.svg"
          alt=""
          className="h-auto hidden lg:block lg:w-[50%]"
          aria-hidden="true"
        />
        {/* 中央（sm以下で表示） */}
        <img
          src="/lamp.svg"
          alt=""
          className="h-auto mt-6 block lg:hidden"
          aria-hidden="true"
        />
        {/* 右側（md以上で表示） */}
        <img
          src="/lamp.svg"
          alt=""
          className="h-auto hidden lg:block lg:w-[50%] scale-x-[-1]"
          aria-hidden="true"
        />
      </div>
      <PageMotion>
        <Link href="/profile">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative group"
          >
            <div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap 
                       font-bold text-lime-800 opacity-0 group-hover:opacity-100
                       transition-opacity duration-1000 ease-in-out"
            >
              \ うわ～ ! /
            </div>
            <Image src="/icon.png" alt="Icon" width={200} height={200} className="rounded-full mb-4 mx-auto" />
          </motion.div>
        </Link>
        <motion.div
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-lime-900">
            める
          </h1>
          <p className="mt-2 text-gray-600">
            プログラミング＆デザイン
          </p>
        </motion.div>
      </PageMotion>
    </div>
  );
}
