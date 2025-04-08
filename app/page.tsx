"use client";
import { useEffect , useState} from "react";
import { toast } from "sonner";
import PageMotion from "@/components/pagemotion/page";
import Link from "next/link";
import Image from "next/image";
import icon from "@/public/icon.png";
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
        icon:"💚",
      });
      
      // 次のインデックスに更新（循環させる）
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 10000);
    
    // クリーンアップ関数でintervalをクリア
    return () => clearInterval(interval);
  }, [currentIndex, messages]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
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
            <Image src={icon.src} alt="Icon" width={200} height={200} className="rounded-full mb-4 mx-auto" />
          </motion.div>
        </Link>
        <motion.div 
          animate={{ 
            opacity: [0, 1,0],
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
