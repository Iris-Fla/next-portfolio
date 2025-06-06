"use client";
import NavItem from "./navitems";
import Link from "next/link";

export default function MainHeader() {

    return (
        <header className="w-full bg-transparent transition-colors duration-300">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* サイト名 */}
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold hover:text-[#3e3a39] text-lime-900 transition-colors duration-300">
                            Iris-Fla
                        </Link>
                    </div>

                    {/* デスクトップナビゲーション - md以上で表示 */}
                    <nav className="flex items-center space-x-6">
                        <NavItem href="/profile" label="Profile" />
                        <NavItem href="/works" label="Works"/>
                        <NavItem href="/contact" label="Contact(工事中)" disabled/>
                    </nav>
                </div>
            </div>
        </header>
    );
}