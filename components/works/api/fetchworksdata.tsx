// Foriioの作品データの型定義
export interface ForiioImage {
  id: number;
  urls: {
    list: string;
    list2x: string;
    detail: string;
    detail2x: string;
  };
  srcset: string;
  width: number;
  height: number;
  is_mistified: boolean;
}

export interface ForiioWork {
  id: number;
  title: string;
  thumbnail: string;
  thumbnail_id: number | null;
  notes_count: number;
  description: string;
  published_at: string;
  is_nsfw: boolean;
  type: string;
  author_id: number;
  category_list: string[];
  images: ForiioImage[];
}

interface ForiioResponse {
  works: ForiioWork[];
}

/**
 * descriptionから制作時期を抽出する関数
 * "制作時期:YYYY/MM" の形式から日付を抽出
 */
function extractProductionDate(description: string): Date | null {
  const match = description.match(/制作時期[:\s]*(\d{4})\/(\d{1,2})/);
  if (match) {
    const year = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    return new Date(year, month - 1); // 月は0から始まるため-1
  }
  return null;
}

/**
 * 制作時期でソートする関数（新しい順）
 */
function sortByProductionDate(works: ForiioWork[]): ForiioWork[] {
  return [...works].sort((a, b) => {
    const dateA = extractProductionDate(a.description);
    const dateB = extractProductionDate(b.description);
    
    // 両方とも制作時期がある場合
    if (dateA && dateB) {
      return dateB.getTime() - dateA.getTime(); // 新しい順
    }
    
    // 片方だけ制作時期がある場合は、制作時期があるものを先に
    if (dateA && !dateB) return -1;
    if (!dateA && dateB) return 1;
    
    // 両方とも制作時期がない場合は、published_atでソート
    return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
  });
}

export const fetchWorksData = async (): Promise<ForiioWork[]> => {
  const token = process.env.FORIIO_API_KEY;
  
  if (!token) {
    throw new Error('FORIIO_API_KEY is not set in environment variables');
  }

  const response = await fetch('https://api.foriio.com/api/v1/developer/works', {
    method: 'GET',
    headers: {
      'token': token,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 }, // 1時間ごとに再検証
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch works: ${response.status} ${response.statusText}`);
  }

  const data: ForiioResponse = await response.json();
  
  // 制作時期でソートして返す
  return sortByProductionDate(data.works);
};

/**
 * 個別の作品データを取得する関数
 */
export const fetchWorkById = async (id: string): Promise<ForiioWork | null> => {
  const works = await fetchWorksData();
  return works.find(work => work.id.toString() === id) || null;
};