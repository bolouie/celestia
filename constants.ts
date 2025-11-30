import { ZodiacSign } from './types';

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Aries',
    dateRange: 'Mar 21 - Apr 19',
    element: 'Fire',
    imageSeed: 'aries-fire',
    keywords: ['Courage', 'Initiative', 'Passion']
  },
  {
    id: 'taurus',
    name: 'Taurus',
    dateRange: 'Apr 20 - May 20',
    element: 'Earth',
    imageSeed: 'taurus-earth',
    keywords: ['Stability', 'Comfort', 'Growth']
  },
  {
    id: 'gemini',
    name: 'Gemini',
    dateRange: 'May 21 - Jun 20',
    element: 'Air',
    imageSeed: 'gemini-air',
    keywords: ['Curiosity', 'Connection', 'Adaptability']
  },
  {
    id: 'cancer',
    name: 'Cancer',
    dateRange: 'Jun 21 - Jul 22',
    element: 'Water',
    imageSeed: 'cancer-water',
    keywords: ['Intuition', 'Protection', 'Emotion']
  },
  {
    id: 'leo',
    name: 'Leo',
    dateRange: 'Jul 23 - Aug 22',
    element: 'Fire',
    imageSeed: 'leo-sun',
    keywords: ['Creativity', 'Confidence', 'Vitality']
  },
  {
    id: 'virgo',
    name: 'Virgo',
    dateRange: 'Aug 23 - Sep 22',
    element: 'Earth',
    imageSeed: 'virgo-earth',
    keywords: ['Clarity', 'Service', 'Refinement']
  },
  {
    id: 'libra',
    name: 'Libra',
    dateRange: 'Sep 23 - Oct 22',
    element: 'Air',
    imageSeed: 'libra-balance',
    keywords: ['Harmony', 'Balance', 'Relationship']
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    dateRange: 'Oct 23 - Nov 21',
    element: 'Water',
    imageSeed: 'scorpio-mystic',
    keywords: ['Transformation', 'Depth', 'Power']
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    dateRange: 'Nov 22 - Dec 21',
    element: 'Fire',
    imageSeed: 'sagittarius-arrow',
    keywords: ['Adventure', 'Wisdom', 'Expansion']
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    dateRange: 'Dec 22 - Jan 19',
    element: 'Earth',
    imageSeed: 'capricorn-mountain',
    keywords: ['Ambition', 'Structure', 'Success']
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    dateRange: 'Jan 20 - Feb 18',
    element: 'Air',
    imageSeed: 'aquarius-star',
    keywords: ['Innovation', 'Community', 'Vision']
  },
  {
    id: 'pisces',
    name: 'Pisces',
    dateRange: 'Feb 19 - Mar 20',
    element: 'Water',
    imageSeed: 'pisces-dream',
    keywords: ['Dreams', 'Healing', 'Imagination']
  },
];

export const REGULAR_PRICE = 44.00;
export const SALE_PRICE = 30.00;
