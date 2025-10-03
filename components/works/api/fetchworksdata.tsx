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
  return data.works;
};