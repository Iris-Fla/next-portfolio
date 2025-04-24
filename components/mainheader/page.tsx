"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MainHeader() {

    return (
        <header className="w-full bg-transparent transition-colors duration-300">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* サイト名 */}
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold hover:text-gray-800 text-lime-900 transition-colors duration-300">
                            Iris-Fla
                        </Link>
                    </div>

                    {/* デスクトップナビゲーション - md以上で表示 */}
                    <nav className="flex items-center space-x-6">
                        <motion.div className="relative inline-block" whileHover="hover" initial="rest" animate="rest">
                            <Link href="/profile" className="font-medium text-lime-900 hover:text-gray-800 transition-colors duration-300">
                                Profile
                            </Link>
                            <motion.span
                                variants={{
                                    rest: { opacity: 0, width: 0 },
                                    hover: { opacity: 1, width: "100%" }
                                }}
                                transition={{ duration: 0.3 }}
                                className="block h-1 bg-lime-900 rounded absolute left-0 -bottom-1"
                                style={{ pointerEvents: "none" }}
                            />
                        </motion.div>
                        <motion.div className="relative inline-block" whileHover="hover" initial="rest" animate="rest">
                            <span className="font-medium text-lime-900 hover:text-gray-800 transition-colors duration-300">
                                Blog(Creating...)
                            </span>
                            <motion.span
                                variants={{
                                    rest: { opacity: 0, width: 0 },
                                    hover: { opacity: 1, width: "100%" }
                                }}
                                transition={{ duration: 0.3 }}
                                className="block h-1 bg-lime-900 rounded absolute left-0 -bottom-1"
                                style={{ pointerEvents: "none" }}
                            />
                        </motion.div>
                    </nav>
                </div>
            </div>
        </header>
    );
}