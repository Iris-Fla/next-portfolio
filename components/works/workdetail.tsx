"use client";
import { ForiioWork } from "./api/fetchworksdata";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface WorkDetailProps {
  work: ForiioWork;
}

export default function WorkDetail({ work }: WorkDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMainImageLoading, setIsMainImageLoading] = useState(true);
  const [loadedThumbnails, setLoadedThumbnails] = useState<Record<number, boolean>>({});

  // 画像が存在しない場合はサムネイルのみを表示
  const images = work.images && work.images.length > 0 
    ? work.images 
    : [{ 
        id: 0, 
        urls: { 
          detail: work.thumbnail,
          detail2x: work.thumbnail,
          list: work.thumbnail,
          list2x: work.thumbnail
        },
        srcset: '',
        width: 1920,
        height: 1080,
        is_mistified: false
      }];

  // 現在選択されている画像のアスペクト比を計算
  const currentImage = images[selectedImageIndex];
  const aspectRatio = useMemo(() => {
    if (!currentImage.width || !currentImage.height) return 16 / 9;
    return currentImage.width / currentImage.height;
  }, [currentImage]);

  // 画像の向きを判定
  const imageOrientation = useMemo(() => {
    if (aspectRatio > 1.2) return 'landscape'; // 横長
    if (aspectRatio < 0.8) return 'portrait'; // 縦長
    return 'square'; // 正方形に近い
  }, [aspectRatio]);

  useEffect(() => {
    setIsMainImageLoading(true);
  }, [selectedImageIndex]);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 戻るボタン */}
        <Link 
          href="/works" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-lime-800 mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>作品一覧に戻る</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左側: 画像ギャラリー */}
          <div className="space-y-4">
            {/* メイン画像 */}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full min-h-[280px]"
                  style={{
                    maxHeight: imageOrientation === 'portrait' ? '1200px' : 'none',
                  }}
                >
                  {isMainImageLoading && (
                    <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-br from-lime-100 via-lime-50 to-amber-100" />
                  )}

                  {imageOrientation === 'portrait' ? (
                    // 縦長画像: 高さ優先で表示
                    <div className="flex justify-center">
                      <div className="relative" style={{ maxHeight: '1200px' }}>
                        <Image
                          src={images[selectedImageIndex].urls.detail}
                          alt={`${work.title} - ${selectedImageIndex + 1}`}
                          width={currentImage.width}
                          height={currentImage.height}
                          className={`h-auto max-h-[1200px] w-auto object-contain transition-opacity duration-300 ${
                            isMainImageLoading ? "opacity-0" : "opacity-100"
                          }`}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={selectedImageIndex === 0}
                          onLoad={() => setIsMainImageLoading(false)}
                        />
                      </div>
                    </div>
                  ) : (
                    // 横長・正方形: 通常表示
                    <div className={imageOrientation === 'landscape' ? 'aspect-[16/9]' : 'aspect-square'}>
                      <Image
                        src={images[selectedImageIndex].urls.detail}
                        alt={`${work.title} - ${selectedImageIndex + 1}`}
                        fill
                        className={`object-contain transition-opacity duration-300 ${
                          isMainImageLoading ? "opacity-0" : "opacity-100"
                        }`}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={selectedImageIndex === 0}
                        onLoad={() => setIsMainImageLoading(false)}
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* サムネイル一覧 */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={image.id || index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative flex-shrink-0 w-24 h-16 overflow-hidden rounded border-2 transition-all ${
                      selectedImageIndex === index
                        ? "border-lime-800"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <Image
                      src={image.urls.list}
                      alt={`${work.title} サムネイル ${index + 1}`}
                      fill
                      className={`object-cover transition-opacity duration-300 ${
                        loadedThumbnails[index] ? "opacity-100" : "opacity-0"
                      }`}
                      sizes="96px"
                      onLoad={() =>
                        setLoadedThumbnails((prev) => ({ ...prev, [index]: true }))
                      }
                    />
                    {!loadedThumbnails[index] && (
                      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-lime-100 via-lime-50 to-amber-100" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 右側: 作品情報 */}
          <div className="space-y-6">
            {/* タイトル */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {work.title}
              </h1>

              {/* カテゴリー */}
              {work.category_list && work.category_list.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.category_list.map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-lime-100 text-lime-800 rounded-full text-sm font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 説明文 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                作品について
              </h2>
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {work.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
