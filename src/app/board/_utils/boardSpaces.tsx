import {
  Building,
  Car,
  Castle,
  CreditCard,
  DollarSign,
  Home,
  Lock,
  Package,
  Plane,
  Train as TrainIcon,
  Zap,
} from 'lucide-react';
import React, { ReactNode } from 'react';

// Function to map space id to coordinates
const getCoordinates = (id: number, boardSize = 600) => {
  const size = 120; // Size of each board space in pixels
  // const boardSize = 1200; // Total board size (10 spaces * 120 pixels)
  let x = 0;
  let y = 0;

  const topBottomSize = boardSize / size;
  const sideSize = (boardSpaces.length - 2 * topBottomSize) / 2;

  console.log({ topBottomSize, sideSize, boardSize });

  if (id >= 1 && id <= topBottomSize) {
    // Bottom row (left to right)

    x = (id - 1) * size;
    y = sideSize * size - size;
  } else if (id >= topBottomSize + 1 && id <= topBottomSize + sideSize) {
    // Right column (bottom to top)
    x = boardSize - size;
    y = sideSize * size - (id - topBottomSize) * size;

    console.log({
      id,
      bound1: topBottomSize + 1,
      bound2: sideSize + topBottomSize,
      x,
      y,
    });
  } else if (
    id >= topBottomSize + sideSize + 1 &&
    id <= sideSize + 2 * topBottomSize
  ) {
    // Top row (right to left)
    x = boardSize - (id - (topBottomSize + sideSize)) * size;
    y = 0;
  } else if (
    id >= sideSize + 2 * topBottomSize + 1 &&
    id <= 2 * topBottomSize + 2 * sideSize
  ) {
    // Left column (top to bottom)
    x = 0;
    y = (id - (sideSize + 2 * topBottomSize)) * size;
  }

  // if (id >= 1 && id <= 10) {
  //   // Bottom row (left to right)
  //   x = (id - 1) * size;
  //   y = boardSize - size;
  // } else if (id >= 11 && id <= 20) {
  //   // Right column (bottom to top)
  //   x = boardSize - size;
  //   y = boardSize - (id - 10) * size;
  // } else if (id >= 21 && id <= 30) {
  //   // Top row (right to left)
  //   x = boardSize - (id - 20) * size;
  //   y = 0;
  // } else if (id >= 31 && id <= 40) {
  //   // Left column (top to bottom)
  //   x = 0;
  //   y = (id - 30) * size;
  // }

  return { left: x, top: y };
};

const generateRandomPrice = () => {
  const minPrice = 1000000; // Minimum price for properties
  const maxPrice = 5000000; // Maximum price for properties
  return Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
};

export type Space = Property | (typeof boardSpaces)[number];
export type Property = {
  id: number;
  type: 'property';
  name: string;
  twoLiner: string;
  icon: ReactNode;
  color: string;
  rent: number; // 6% of 1,000,000
  price: number; // Static price
  unitCost: number;
  unitsAvailable: number; // price / unitCost
  lore: string;
  ownedBy: Record<string | number, number>;
};

export const boardSpaces = [
  // Bottom row (left to right)
  {
    id: 1,
    type: 'start',
    name: 'Start',
    icon: <DollarSign className='w-6 h-6 text-yellow-300' />,
    color: 'bg-yellow-200',
    lore: 'Begin your journey to empire-building.',
  },
  {
    id: 2,
    type: 'property',
    name: 'Baker Street',
    twoLiner: 'The iconic avenue in London.',
    icon: <Home className='w-6 h-6 text-blue-400' />,
    color: 'bg-blue-200',
    rent: 60000, // 6% of 1,000,000
    price: 1000000, // Static price
    unitCost: 1,
    unitsAvailable: 1000000, // price / unitCost
    lore: 'An old, charming street known for its historic homes and the famous detective, Sherlock Holmes.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 3,
    type: 'chance',
    name: 'Chance',
    icon: <Package className='w-6 h-6 text-yellow-500' />,
    color: 'bg-yellow-300',
    lore: 'Draw a Chance card and execute its instructions.',
  },
  {
    id: 4,
    type: 'property',
    name: 'Times Square',
    twoLiner: 'The bustling heart of New York City.',
    icon: <Building className='w-6 h-6 text-blue-500' />,
    color: 'bg-blue-300',
    rent: 72000, // 6% of 1,200,000
    price: 1200000, // Static price
    unitCost: 1,
    unitsAvailable: 1200000, // price / unitCost
    lore: 'A vibrant commercial hub famous for its towering billboards and annual events.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 5,
    type: 'community',
    name: 'Community Chest',
    icon: <CreditCard className='w-6 h-6 text-red-400' />,
    color: 'bg-red-200',
    lore: 'Draw a Community Chest card and follow its instructions.',
  },

  // Right column (bottom to top)

  {
    id: 6,
    type: 'tax',
    name: 'Income Tax',
    icon: <CreditCard className='w-6 h-6 text-blue-600' />,
    color: 'bg-blue-400',
    lore: 'Premium taxes for the affluent properties.',
    taxAmount: 100000, // Fixed tax amount
  },
  {
    id: 7,
    type: 'property',
    name: 'Park Avenue',
    twoLiner: 'Luxury living at its finest.',
    icon: <Castle className='w-6 h-6 text-blue-600' />,
    color: 'bg-blue-400',
    rent: 84000, // 6% of 1,400,000
    price: 1400000, // Static price
    unitCost: 1,
    unitsAvailable: 1400000, // price / unitCost
    lore: 'An upscale area known for its grand estates and exclusive boutiques.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 8,
    type: 'chance',
    name: 'Chance',
    icon: <Package className='w-6 h-6 text-green-400' />,
    color: 'bg-green-200',
    lore: 'Draw a Chance card and execute its instructions.',
  },
  {
    id: 9,
    type: 'property',
    name: 'Fifth Avenue',
    twoLiner: "The gateway to New York's elegance.",
    icon: <Home className='w-6 h-6 text-blue-400' />,
    color: 'bg-blue-200',
    rent: 96000, // 6% of 1,600,000
    price: 1600000, // Static price
    unitCost: 1,
    unitsAvailable: 1600000, // price / unitCost
    lore: 'Fifth Avenue is renowned for its luxury stores and elite residences.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 10,
    type: 'jail',
    name: 'Jail',
    icon: <Lock className='w-6 h-6 text-gray-600' />,
    color: 'bg-gray-300',
    lore: 'Just visiting.',
  },

  {
    id: 11,
    type: 'property',
    name: 'Broadway',
    twoLiner: 'Lights, camera, action!',
    icon: <Building className='w-6 h-6 text-blue-500' />,
    color: 'bg-blue-300',
    rent: 108000, // 6% of 1,800,000
    price: 1800000, // Static price
    unitCost: 1,
    unitsAvailable: 1800000, // price / unitCost
    lore: 'Broadway is the epicenter of theater and entertainment.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 12,
    type: 'property',
    name: 'Madison Avenue',
    twoLiner: 'Where advertising dreams come true.',
    icon: <Zap className='w-6 h-6 text-yellow-400' />,
    color: 'bg-yellow-200',
    rent: 120000, // 6% of 2,000,000
    price: 2000000, // Static price
    unitCost: 1,
    unitsAvailable: 2000000, // price / unitCost
    lore: 'Madison Avenue is synonymous with high-end advertising firms and luxury boutiques.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 13,
    type: 'chance',
    name: 'Chance',
    icon: <Package className='w-6 h-6 text-blue-400' />,
    color: 'bg-blue-400',
    lore: 'Draw a Chance card and execute its instructions.',
  },
  {
    id: 14,
    type: 'property',
    name: 'Lexington Avenue',
    twoLiner: 'The shopping paradise of New York.',
    icon: <Car className='w-6 h-6 text-green-400' />,
    color: 'bg-green-200',
    rent: 132000, // 6% of 2,200,000
    price: 2200000, // Static price
    unitCost: 1,
    unitsAvailable: 2200000, // price / unitCost
    lore: 'Lexington Avenue boasts some of the most exclusive shopping destinations.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 15,
    type: 'property',
    name: 'Fifth Street',
    twoLiner: 'Innovation meets tradition.',
    icon: <Home className='w-6 h-6 text-pink-400' />,
    color: 'bg-pink-200',
    rent: 144000, // 6% of 2,400,000
    price: 2400000, // Static price
    unitCost: 1,
    unitsAvailable: 2400000, // price / unitCost
    lore: 'Fifth Street is a blend of iconic landmarks and modern enterprises.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 16,
    type: 'community',
    name: 'Community Chest',
    icon: <CreditCard className='w-6 h-6 text-purple-400' />,
    color: 'bg-purple-200',
    lore: 'Draw a Community Chest card and follow its instructions.',
  },
  {
    id: 17,
    type: 'property',
    name: 'Wall Street',
    twoLiner: 'The financial nerve center.',
    icon: <DollarSign className='w-6 h-6 text-yellow-500' />,
    color: 'bg-yellow-300',
    rent: 156000, // 6% of 2,600,000
    price: 2600000, // Static price
    unitCost: 1,
    unitsAvailable: 2600000, // price / unitCost
    lore: 'Wall Street is the symbol of American financial markets and prosperity.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 18,
    type: 'property',
    name: 'Madison Street',
    twoLiner: 'Elegance in every step.',
    icon: <Castle className='w-6 h-6 text-purple-500' />,
    color: 'bg-purple-300',
    rent: 168000, // 6% of 2,800,000
    price: 2800000, // Static price
    unitCost: 1,
    unitsAvailable: 2800000, // price / unitCost
    lore: 'Madison Street is known for its sophisticated dining and exquisite architecture.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 19,
    type: 'tax',
    name: 'Luxury Tax',
    icon: <CreditCard className='w-6 h-6 text-purple-600' />,
    color: 'bg-purple-400',
    lore: 'Premium taxes for luxury properties.',
    taxAmount: 150000, // Fixed tax amount
  },
  {
    id: 30,
    type: 'start',
    icon: <DollarSign className='w-6 h-6 text-yellow-300' />,
    color: 'bg-yellow-200',
    lore: 'The starting point of your empire-building adventure.',
  },

  {
    id: 21,
    type: 'property',
    name: 'Howard Street',
    twoLiner: 'A blend of culture and commerce.',
    icon: <Plane className='w-6 h-6 text-purple-700' />,
    color: 'bg-purple-500',
    rent: 192000, // 6% of 3,200,000
    price: 3200000, // Static price
    unitCost: 1,
    unitsAvailable: 3200000, // price / unitCost
    lore: 'Howard Street is a cultural melting pot with diverse culinary offerings.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 22,
    type: 'property',
    name: 'Lexington Square',
    twoLiner: 'Green spaces in the urban jungle.',
    icon: <Home className='w-6 h-6 text-green-500' />,
    color: 'bg-green-300',
    rent: 204000, // 6% of 3,400,000
    price: 3400000, // Static price
    unitCost: 1,
    unitsAvailable: 3400000, // price / unitCost
    lore: 'Lexington Square offers serene parks amidst the bustling city life.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 23,
    type: 'chance',
    name: 'Chance',
    icon: <Package className='w-6 h-6 text-blue-400' />,
    color: 'bg-blue-200',
    lore: 'Draw a Chance card and execute its instructions.',
  },
  {
    id: 24,
    type: 'property',
    name: 'Central Park West',
    twoLiner: "Nature's oasis in Manhattan.",
    icon: <Building className='w-6 h-6 text-blue-500' />,
    color: 'bg-blue-300',
    rent: 216000, // 6% of 3,600,000
    price: 3600000, // Static price
    unitCost: 1,
    unitsAvailable: 3600000, // price / unitCost
    lore: 'Central Park West is renowned for its picturesque landscapes and recreational areas.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 25,
    type: 'property',
    name: 'Madison Boulevard',
    twoLiner: 'Elegance meets innovation.',
    icon: <TrainIcon className='w-6 h-6 text-gray-200' />,
    color: 'bg-gray-200',
    rent: 228000, // 6% of 3,800,000
    price: 3800000, // Static price
    unitCost: 1,
    unitsAvailable: 3800000, // price / unitCost
    lore: 'Madison Boulevard is a hub for creative industries and high-end fashion.',
    ownedBy: {}, // Initially unowned
  },
  {
    id: 26,
    type: 'community',
    name: 'Community Chest',
    icon: <CreditCard className='w-6 h-6 text-green-700' />,
    color: 'bg-green-400',
    lore: 'Draw a Community Chest card and follow its instructions.',
  },
  {
    id: 27,
    type: 'property',
    name: 'Broadway Heights',
    twoLiner: 'Sky-high living and offices.',
    icon: <Home className='w-6 h-6 text-yellow-400' />,
    color: 'bg-yellow-200',
    rent: 240000, // 6% of 4,000,000
    price: 4000000, // Static price
    unitCost: 1,
    unitsAvailable: 4000000, // price / unitCost
    lore: 'Broadway Heights offers unparalleled views and state-of-the-art facilities.',
    ownedBy: {}, // Initially unowned
  },
  // {
  //   id: 28,
  //   type: "property",
  //   name: "Fifth Avenue East",
  //   twoLiner: "Luxury redefined.",
  //   icon: <Building className="w-6 h-6 text-blue-400" />,
  //   color: "bg-blue-200",
  //   rent: 252000, // 6% of 4,200,000
  //   price: 4200000, // Static price
  //   unitCost: 1,
  //   unitsAvailable: 4200000, // price / unitCost
  //   lore: "Fifth Avenue East is synonymous with opulent living and prestigious institutions.",
  //   ownedBy: {}, // Initially unowned
  // },
  // {
  //   id: 29,
  //   type: "tax",
  //   name: "Luxury Tax",
  //   icon: <CreditCard className="w-6 h-6 text-orange-500" />,
  //   color: "bg-orange-200",
  //   lore: "Premium taxes for the most luxurious properties.",
  //   taxAmount: 200000, // Fixed tax amount
  // },
  {
    id: 20,
    type: 'property',
    name: 'Broadway Plaza',
    twoLiner: 'The hub of nightlife and entertainment.',
    icon: <Car className='w-6 h-6 text-red-500' />,
    color: 'bg-red-200',
    rent: 180000, // 6% of 3,000,000
    price: 3000000, // Static price
    unitCost: 1,
    unitsAvailable: 3000000, // price / unitCost
    lore: "Broadway Plaza is the epicenter of New York's vibrant nightlife.",
    ownedBy: {}, // Initially unowned
  },
];

export { getCoordinates };
