import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-200 flex flex-col items-center justify-center">
            <div className="px-8 py-10 flex flex-col items-center">
                <h2 className="text-4xl font-bold text-lime-800 mb-4">ページが見つかりません</h2>
                <p className="text-gray-700 mb-6">お探しのページは存在しないか、移動した可能性があります。</p>
                <Link
                    href="/"
                    className="inline-block px-6 py-2 bg-lime-700 text-white rounded-full shadow hover:bg-lime-800 transition-colors font-semibold"
                >
                    ホームに戻る
                </Link>
            </div>
        </div>
    )
}