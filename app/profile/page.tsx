"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import icon from "@/public/ithiku_icon.jpg";
import PageMotion from "@/components/pagemotion/page";
import { User, Code, Heart, Mail, Github, Twitter, House } from "lucide-react";
import { motion } from "framer-motion";

export default function Profile() {
    const profilemessages = ["にゃんはろ～", "いろいろなことをやっていたり～", "プログラミングは好き?", "見てくれてありがとう～"]

    useEffect(() => {
        // ページロード時にトースト表示
        const randomMessage = profilemessages[Math.floor(Math.random() * profilemessages.length)];
        toast.success(randomMessage, {
            position: "bottom-center",
            duration: 7000,
            icon: "🙌",
        });
    }, []);

    return (
        <div className="min-h-screen py-20 px-4">
            <PageMotion>
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* ヘッダー部分 */}
                    <div className="bg-gradient-to-r from-lime-700 to-lime-900 h-32 relative">
                        <div className="absolute -bottom-16 left-8">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="rounded-full border-4 border-white shadow-xl overflow-hidden"
                            >
                                <Image src={icon} alt="Profile Icon" width={120} height={120} />
                            </motion.div>
                        </div>
                    </div>

                    {/* プロフィール情報 */}
                    <div className="pt-20 px-8 pb-8">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <h1 className="text-2xl font-bold text-gray-800 mb-1">める（Iris-Fla）</h1>
                            <p className="text-lime-700 font-medium mb-4">イラスト:<Link href="https://x.com/ithiku_u" target="_blank"
                                rel="noopener noreferrer"
                                className="text-lime-700 hover:text-gray-800 transition-colors decoration-lime-700 underline-offset-4 underline decoration-2"
                                aria-label="X (Twitter)">@ithiku_u</Link></p>

                            <div className="bg-gray-50 p-4 rounded-lg mb-8">
                                <p className="text-gray-700 leading-relaxed">
                                    Webを中心に、フロントエンドからバックエンドまで幅広く手がけるエンジニアです。<br />
                                    UI/UXにも興味があり、デザインと技術の両方を活かして、ユーザーに求められるWebサービスを作ることを目指しています。<br />
                                </p>
                            </div>

                            {/* 趣味セクション */}
                            <div className="mb-4">
                                <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                                    <Heart className="mr-2 h-5 w-5 text-lime-700" />
                                    趣味・好きなもの
                                </h2>
                                <ul className="text-gray-700 list-disc pl-5">
                                    <li>ラーメン<span className="text-lime-700">(とんこつ)</span></li>
                                    <li>ゲーム全般</li>
                                    <li>散策</li>
                                    <li>雑談</li>
                                    <li>イラスト<span className="text-lime-700">(見る方)</span></li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mt-10">

                    <div className="pt-10 px-8 pb-8">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-1">活動記録</h2>
                            <p className="text-lime-700 font-medium mb-4"><Link
                                href="https://github.com/Iris-Fla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lime-700 hover:text-gray-800 transition-colors"
                                aria-label="GitHub"
                            >GithubProfile</Link></p>
                            {/* スキルセクション */}
                            <div className="mb-8 mt-10">
                                <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                                    <Code className="mr-2 h-5 w-5 text-lime-700" />
                                    スキルとツール
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {["TypeScript", "React", "Next.js", "Figma", "Adobe PremirePro", "Adobe Illustrator"].map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-lime-100 text-lime-800 text-xs px-3 py-1 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 実績セクション */}
                            <div className="mb-10">
                                <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                                    <House className="mr-2 h-5 w-5 text-lime-700" />
                                    活動履歴
                                </h2>

                                <div className="relative border-l-2 border-lime-200 pl-8 ml-4 space-y-10">
                                    <div className="relative">
                                        {/* 左側のマーカー */}
                                        <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-lime-500 border-4 border-white"></div>

                                        <h3 className="text-lg font-medium text-gray-900">受託開発企業</h3>
                                        <p className="text-sm text-lime-700 mb-2">2025年1月 - 現在</p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                            <li>会員制レストランのFigma作成,Next.jsでのフロントエンド実装</li>
                                        </ul>
                                    </div>

                                    {/* 職歴アイテム 2 */}
                                    <div className="relative">
                                        {/* 左側のマーカー */}
                                        <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-lime-300 border-4 border-white"></div>

                                        <h3 className="text-lg font-medium text-gray-900">自社開発企業</h3>
                                        <p className="text-sm text-lime-700 mb-2">2023年11月 - 現在</p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                            <li>Nuxt向けのUIライブラリの開発</li>
                                        </ul>
                                    </div>

                                    {/* 職歴アイテム 3 - 最古 */}
                                    <div className="relative">
                                        {/* 左側のマーカー */}
                                        <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-lime-200 border-4 border-white"></div>

                                        <h3 className="text-lg font-medium text-gray-900">非公開</h3>
                                        <p className="text-sm text-lime-700 mb-2">2022年11月 - 現在</p>
                                        <p className="text-gray-600 font-medium mb-2">動画編集案件</p>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                            <li>Youtube用の施工動画の作成(10本以上)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </PageMotion>
        </div>
    );
}