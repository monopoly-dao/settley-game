'use client';

import {
  BookOpen,
  CircleDollarSign,
  HandCoins,
  HelpCircle,
  Home,
  Info,
  Trophy,
  Users,
  Wallet,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const properties = [
  {
    id: 1,
    name: 'Lexington Square',
    type: 'Apartment Complex',
    value: 12500,
    shares: 25,
    totalShares: 100,
    nextRent: '8h',
    rentAmount: 500,
    coOwners: 4,
    learningTip:
      'Rent is automatically collected when other players land here. More shares = more rent!',
  },
  {
    id: 2,
    name: 'Broadway Plaza',
    type: 'Commercial Space',
    value: 8800,
    shares: 15,
    totalShares: 100,
    nextRent: '2h',
    rentAmount: 350,
    coOwners: 6,
    learningTip:
      'Commercial properties often have higher traffic, increasing rent collection chances',
  },
  {
    id: 3,
    name: 'Howard Street',
    type: 'Mixed Use',
    value: 15200,
    shares: 40,
    totalShares: 100,
    nextRent: '5h',
    rentAmount: 650,
    coOwners: 3,
    learningTip:
      'Mixed-use properties combine residential and commercial, spreading your risk',
  },
];

export default function Page() {
  const router = useRouter();
  const [activeProperty, setActiveProperty] = useState<number | null>(null);
  const [showTip, setShowTip] = useState<number | null>(null);

  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-purple-100 to-purple-200/40 p-2 sm:p-4'>
        <div className='max-w-4xl mx-auto space-y-4 sm:space-y-6'>
          {/* Portfolio Overview */}
          <div className='bg-gradient-to-br from-white/90 to-purple-50/50 backdrop-blur-sm w-full'>
            <div className='p-6 md:p-8'>
              <div className='flex items-start justify-between mb-6'>
                <div>
                  <p className='text-sm md:text-base text-gray-600'>
                    My Portfolio
                  </p>
                  <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
                    $36,500
                  </h2>
                </div>
                <div className='text-right'>
                  <p className='text-sm md:text-base text-gray-600'>
                    Available
                  </p>
                  <div className='cursor-pointer'>
                    <p className='text-lg md:text-xl font-semibold text-gray-800 mb-1'>
                      $2,800
                    </p>
                    <div className='flex items-center justify-end gap-2'>
                      <p className='text-xs text-purple-500'>
                        Earn $10,000 per friend who joins
                      </p>
                      <button
                        className='bg-purple-100 hover:bg-purple-200 text-purple-600 px-3 py-1 rounded-lg text-xs flex items-center gap-1'
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator
                            .share({
                              title: 'Join me on Settley!',
                              text: "Join Settley and start with $10,000 in property investment tokens - I'll get a bonus too!",
                              url: 'https://settley.com/invite',
                            })
                            .catch((err) => console.log('Error sharing:', err));
                        }}
                      >
                        <Users className='w-3 h-3' />
                        Invite
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-3 gap-4 md:gap-6'>
                <div className='bg-white/60 rounded-lg p-3 md:p-4'>
                  <Wallet className='w-5 h-5 mx-auto mb-2 text-purple-400' />
                  <p className='text-xs md:text-sm text-gray-600'>Properties</p>
                  <p className='font-semibold md:text-lg'>3</p>
                </div>
                <div className='bg-white/60 rounded-lg p-3 md:p-4'>
                  <HandCoins className='w-5 h-5 mx-auto mb-2 text-green-500' />
                  <p className='text-xs md:text-sm text-gray-600'>Daily Rent</p>
                  <p className='font-semibold md:text-lg'>$1,500</p>
                </div>
                <div className='bg-white/60 rounded-lg p-3 md:p-4'>
                  <Users className='w-5 h-5 mx-auto mb-2 text-purple-400' />
                  <p className='text-xs md:text-sm text-gray-600'>Co-owners</p>
                  <p className='font-semibold md:text-lg'>13</p>
                </div>
              </div>
            </div>
          </div>

          {/* Property divs */}
          {properties.map((property) => (
            <div
              key={property.id}
              className='bg-gradient-to-br from-white/90 to-purple-50/40 backdrop-blur-sm 
                hover:shadow-md transition-all duration-200 w-full'
              onClick={() => setActiveProperty(property.id)}
            >
              <div className='p-6 md:p-8 relative'>
                {/* Learning Tip */}
                <button
                  className='absolute top-6 right-6 text-gray-400 hover:text-purple-400 transition-colors'
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTip(showTip === property.id ? null : property.id);
                  }}
                >
                  <HelpCircle className='w-5 h-5 md:w-6 md:h-6' />
                </button>

                {showTip === property.id && (
                  <div className='absolute right-0 top-16 bg-white p-4 rounded-lg shadow-lg z-10 w-72 text-sm md:text-base text-gray-600'>
                    {property.learningTip}
                  </div>
                )}

                <div className='mb-6'>
                  <h3 className='text-lg md:text-xl font-semibold text-gray-800'>
                    {property.name}
                  </h3>
                  <p className='text-sm md:text-base text-gray-500'>
                    {property.type}
                  </p>
                </div>

                <div className='grid grid-cols-2 gap-6 mb-6'>
                  <div>
                    <p className='text-sm md:text-base text-gray-500'>Value</p>
                    <p className='text-lg md:text-xl font-semibold text-gray-800'>
                      ${property.value.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className='text-sm md:text-base text-gray-500'>
                      Your Shares
                    </p>
                    <p className='text-lg md:text-xl font-semibold text-gray-800'>
                      {property.shares}/{property.totalShares}
                    </p>
                  </div>
                </div>

                <div className='bg-white/60 rounded-lg p-4 md:p-6 mb-6'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <p className='text-sm md:text-base text-gray-500'>
                        Next Rent
                      </p>
                      <p className='text-lg md:text-xl font-semibold text-gray-800'>
                        {property.nextRent}
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='text-sm md:text-base text-gray-500'>
                        Amount
                      </p>
                      <p className='text-lg md:text-xl font-semibold text-gray-800'>
                        ${property.rentAmount}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2 text-gray-500'>
                    <Users className='w-5 h-5' />
                    <span className='text-sm md:text-base'>
                      {property.coOwners} co-owners
                    </span>
                  </div>
                  <button
                    className='border-purple-200 hover:bg-purple-50 px-4 py-2 md:px-6 md:py-3'
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle trade
                    }}
                  >
                    <CircleDollarSign className='w-4 h-4 md:w-5 md:h-5 mr-2' />
                    <span className='text-sm md:text-base'>Trade</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Educational Footer */}
          <div className='bg-gradient-to-br from-purple-50/50 to-white/90 backdrop-blur-sm w-full'>
            <div className='p-6 md:p-8 text-sm md:text-base text-gray-600'>
              <div className='flex items-start gap-4'>
                <Info className='w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5' />
                <p className='leading-relaxed'>
                  Properties generate rent when other players land on them. The
                  more shares you own, the more rent you collect. Try to
                  diversify your portfolio across different property types!
                </p>
              </div>
            </div>
          </div>

          {/* Spacer div */}
          <div className='h-32'></div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className='fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t px-4 py-3'>
        <div className='max-w-4xl mx-auto flex justify-around items-center'>
          <button
            onClick={() => router.push('/')}
            className='flex flex-col items-center justify-center gap-1.5'
          >
            <div className='w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center'>
              <Home className='w-5 h-5 text-gray-400' />
            </div>
            <span className='text-xs text-gray-400'>Home</span>
          </button>
          <button className='flex flex-col items-center justify-center gap-1.5'>
            <div className='w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center'>
              <CircleDollarSign className='w-5 h-5 text-gray-700' />
            </div>
            <span className='text-xs text-gray-700'>Portfolio</span>
          </button>
          <button
            onClick={() => router.push('/watch')}
            className='flex flex-col items-center justify-center gap-1.5'
          >
            <div className='w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center'>
              <Trophy className='w-5 h-5 text-gray-400' />
            </div>
            <span className='text-xs text-gray-400'>Watch</span>
          </button>
          <button
            onClick={() => router.push('/help')}
            className='flex flex-col items-center justify-center gap-1.5'
          >
            <div className='w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center'>
              <BookOpen className='w-5 h-5 text-gray-400' />
            </div>
            <span className='text-xs text-gray-400'>Learn</span>
          </button>
        </div>
      </div>
    </>
  );
}
