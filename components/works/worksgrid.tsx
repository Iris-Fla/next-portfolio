"use client";
import { motion } from "framer-motion";
import PageMotion from "../pagemotion/page";
import Image from "next/image";
import Link from "next/link";
import type { ForiioWork } from "./api/fetchworksdata";

interface WorksGridProps {
  works: ForiioWork[];
}

export default function WorksGrid({ works }: WorksGridProps) {
  return (
    <PageMotion>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-10">
        {works.map((work) => (
          <Link
            key={work.id}
            href={`/works/${work.id}`}
            className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow transition-all cursor-pointer flex flex-col border-2 border-gray-700"
              whileHover={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                borderColor: "#3f6212",
                rotate: 5,
              }}
              transition={{ ease: "easeInOut", duration: 0.1 }}
            >
              {work.thumbnail && (
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={work.thumbnail}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
              )}
              <hr className="border-gray-200" />
              <div className="p-3 flex-1 flex flex-col justify-end items-start text-xs bg-white">
                <h2 className="font-semibold mb-1 line-clamp-2">{work.title}</h2>
                {work.category_list && work.category_list.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {work.category_list.map((category, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-200 px-2 py-1 rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-sm text-gray-600 line-clamp-3">
                  {work.description}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(work.published_at).toLocaleDateString("ja-JP")}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </PageMotion>
  );
}