export interface ZodiacSign {
  id: string;
  name: string;
  dateRange: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  imageSeed: string; // For picsum
  keywords: string[];
}

export interface CartItem extends ZodiacSign {
  quantity: number;
}
