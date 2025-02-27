'use client';

import { BookOpen, CircleDollarSign, Home, Trophy, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import OnboardingModal from '@/app/_components/OnboardingModal';

export default function Page() {
  const router = useRouter();
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');

    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
      localStorage.setItem('hasSeenOnboarding', 'true');
    }
  }, []);

  const handleCloseOnboarding = () => {
    setShowOnboarding(false);
  };

  return (
    <>
      {showOnboarding && <OnboardingModal onClose={handleCloseOnboarding} />}
      <div style={{ backgroundColor: '#EDE9FF' }} className=''>
        <div className='max-w-4xl mx-auto p-4 md:p-8'>
          {/* Header + Balance */}
          <div className='flex items-center justify-between mb-8'>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center shadow-sm'>
                <Home className='w-5 h-5 text-gray-700' />
              </div>
              <span className='text-xl font-bold text-gray-700'>Settley</span>
            </div>
          </div>

          {/* About div */}
          <div className='bg-white/90 backdrop-blur rounded-xl border-none shadow-lg mb-6'>
            <div className='pt-8 px-6 pb-8 md:px-8'>
              <div className='flex items-start gap-4 md:gap-6'>
                <div className='w-12 h-12 md:w-16 md:h-16 rounded-xl bg-blue-100 flex items-center justify-center'>
                  <BookOpen className='w-6 h-6 md:w-8 md:h-8 text-gray-700' />
                </div>
                <div className='flex-1'>
                  <h2 className='text-xl md:text-2xl font-bold text-gray-700 mb-4'>
                    About Settley
                  </h2>
                  <p className='text-sm md:text-base text-gray-600 mb-4 leading-relaxed'>
                    Settley is reimagining asset ownership through blockchain
                    technology, starting with real estate. Our platform enables
                    direct ownership, instant transactions, and transparent
                    management of assets through smart contracts.
                  </p>
                  <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                    This game is a risk-free environment to explore being a
                    homeowner whilst having fun at it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome div */}
          <div className='bg-white/90 backdrop-blur rounded-xl border-none shadow-lg mb-6'>
            <div className='pt-8 px-6 pb-8 md:px-8'>
              <div className='flex items-start gap-4 md:gap-6'>
                <div className='w-12 h-12 md:w-16 md:h-16 rounded-xl bg-purple-100 flex items-center justify-center'>
                  <CircleDollarSign className='w-6 h-6 md:w-8 md:h-8 text-gray-700' />
                </div>
                <div className='flex-1'>
                  <h2 className='text-xl md:text-2xl font-bold text-gray-700'>
                    Ready to Start?
                  </h2>
                  <p className='text-sm md:text-base text-gray-600 mb-6'>
                    Build your property empire
                  </p>
                  <button
                    className='w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-6 rounded-xl shadow-sm'
                    onClick={() => router.push('/board')}
                  >
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Stats */}
          <div className='bg-white/90 backdrop-blur rounded-xl border-none shadow-lg mb-6'>
            <div className='pt-8 px-6 pb-8 md:px-8'>
              <div className='flex items-start gap-4 md:gap-6'>
                <div className='w-12 h-12 md:w-16 md:h-16 rounded-xl bg-yellow-100 flex items-center justify-center'>
                  <Trophy className='w-6 h-6 md:w-8 md:h-8 text-gray-700' />
                </div>
                <div className='flex-1'>
                  <h2 className='text-xl md:text-2xl font-bold text-gray-700'>
                    Today's Activity
                  </h2>
                  <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div className='bg-gray-50/50 rounded-xl p-4 md:p-6'>
                      <p className='text-2xl md:text-3xl font-bold text-gray-700'>
                        238
                      </p>
                      <p className='text-sm md:text-base text-gray-600'>
                        Active Players
                      </p>
                    </div>
                    <div className='bg-gray-50/50 rounded-xl p-4 md:p-6'>
                      <p className='text-2xl md:text-3xl font-bold text-gray-700'>
                        $1.2M
                      </p>
                      <p className='text-sm md:text-base text-gray-600'>
                        Total Trading
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Referral div */}
          <div className='bg-white/90 backdrop-blur rounded-xl border-none shadow-lg mb-6'>
            <div className='pt-8 px-6 pb-8 md:px-8'>
              <div className='flex items-start gap-4 md:gap-6'>
                <div className='w-12 h-12 md:w-16 md:h-16 rounded-xl bg-green-100 flex items-center justify-center'>
                  <Users className='w-6 h-6 md:w-8 md:h-8 text-gray-700' />
                </div>
                <div className='flex-1'>
                  <h2 className='text-xl md:text-2xl font-bold text-gray-700'>
                    Double Your Power
                  </h2>
                  <p className='text-sm md:text-base text-gray-600 mb-2'>
                    Invite friends to play and you'll both receive
                  </p>
                  <p className='text-2xl md:text-3xl font-bold text-purple-600 mb-6'>
                    10,000 Tokens Each
                  </p>
                  <button className='w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 rounded-xl shadow-sm'>
                    Invite Friends
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          {/* <div className='fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t px-4 py-3'>
            <div className='max-w-4xl mx-auto flex justify-around items-center'>
              <button className='flex flex-col items-center justify-center gap-1.5'>
                <div className='w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center'>
                  <Home className='w-5 h-5 text-gray-700' />
                </div>
                <span className='text-xs text-gray-700'>Home</span>
              </button>
              <button
                onClick={() => router.push('/portfolio')}
                className='flex flex-col items-center justify-center gap-1.5'
              >
                <div className='w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center'>
                  <CircleDollarSign className='w-5 h-5 text-gray-400' />
                </div>
                <span className='text-xs text-gray-400'>Portfolio</span>
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
          </div> */}
        </div>
      </div>
    </>
  );
}
