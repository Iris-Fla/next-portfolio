"use client";

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
                        <Link href="/profile" className="font-medium text-lime-900 hover:text-gray-800 transition-colors duration-300 hover:underline hover:decoration-4 decoration-lime-900 underline-offset-8">
                            Profile
                        </Link>
                        <p className="font-medium text-lime-900 hover:text-gray-800 transition-colors duration-300">
                            Blog(Creating...)
                        </p>
                    </nav>
                </div>
            </div>
        </header>
    );
}