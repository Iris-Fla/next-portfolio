"use client";
import { motion, AnimatePresence } from "framer-motion";
import PageMotion from "../pagemotion/page";
import Image from "next/image";
import Link from "next/link";
import type { ForiioWork } from "./api/fetchworksdata";
import { useState, useMemo } from "react";

interface WorksGridProps {
  works: ForiioWork[];
}

export default function WorksGrid({ works }: WorksGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // 全てのカテゴリーを抽出
  const allCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    works.forEach((work) => {
      work.category_list?.forEach((category) => {
        categoriesSet.add(category);
      });
    });
    return ["All", ...Array.from(categoriesSet).sort()];
  }, [works]);

  // 選択されたカテゴリーでフィルタリング
  const filteredWorks = useMemo(() => {
    if (selectedCategory === "All") {
      return works;
    }
    return works.filter((work) =>
      work.category_list?.includes(selectedCategory)
    );
  }, [works, selectedCategory]);

  return (
    <PageMotion>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* カテゴリーフィルター */}
        <div className="mb-8">
          <div className="flex gap-2 justify-center flex-wrap">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-lime-800 text-white shadow-lg"
                    : "text-gray-700 hover:text-lime-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 作品グリッド */}
        <div className="min-h-[600px] sm:min-h-[800px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredWorks.map((work, index) => (
                <Link
                  key={work.id}
                  href={`/works/${work.id}`}
                  className="group"
                >
                  <div
                    className="overflow-hidden transition-all cursor-pointer flex flex-col h-full"
                  >
                    {work.thumbnail && (
                      <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <Image
                          src={work.thumbnail}
                          alt={work.title}
                          fill
                          priority={index < 4}
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                    )}
                    <div className="my-3 flex-1 flex flex-col justify-between">
                      <h2 className="font-semibold mb-2 line-clamp-2">
                        {work.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* 作品が見つからない場合 */}
          <AnimatePresence mode="wait">
            {filteredWorks.length === 0 && (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center text-gray-500"
              >
                該当する作品がありません
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageMotion>
  );
}