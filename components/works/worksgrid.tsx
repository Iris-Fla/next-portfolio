"use client";
import { motion } from "framer-motion";
import PageMotion from "../pagemotion/page";
import Image from "next/image";

export default function WorksGrid({ data }: { data: any[] }) {
    return (
        <PageMotion >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {data.map((work: any) => (
                    <motion.div
                        key={work.id}
                        className="bg-white rounded-xl overflow-hidden shadow transition-all cursor-pointer flex flex-col border-2 border-gray-700"
                        whileHover={{
                            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                            borderColor: "#3f6212",
                            rotate: 5,
                        }}
                        transition={{ ease: "easeInOut", duration: 0.1 }}
                    >
                        {work.eyecatch && (
                            <div className="relative w-full aspect-[16/9]">
                                <Image
                                    src={work.eyecatch.url}
                                    alt={work.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                />
                            </div>
                        )}
                        <hr className="border-gray-200" />
                        <div className="p-3 flex-1 flex flex-col justify-end items-start text-xs bg-white">
                            <h2 className="font-semibold mb-1">{work.title}</h2>
                            <p className="text-gray-500">
                                {Array.isArray(work.category)
                                    ? work.category.map((cat: any) => cat.name).join("　")
                                    : work.category?.name ?? "未分類"}
                            </p>
                        </div>
                    </motion.div>
                ))}

            </div>
        </PageMotion>
    );
}