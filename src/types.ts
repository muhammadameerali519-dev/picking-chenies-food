export interface MenuItem {
  id: string;
  name: string;
  price: number;
  halfPrice?: number;
  fullPrice?: number;
  description: string;
  category: string;
  image: string;
  isBestSeller?: boolean;
  isChefRecommended?: boolean;
  quantityInfo?: string; // e.g. "8 Pcs"
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export type MenuCategoryType = 
  | 'starters'
  | 'soups'
  | 'chicken-gravy'
  | 'prawn-gravy'
  | 'noodles'
  | 'rice'
  | 'seafood';
