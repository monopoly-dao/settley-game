'use client';

import {
  Activity,
  ArrowUpRight,
  Flame,
  HandCoins,
  Sparkles,
  ThumbsUp,
  Trophy,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const activities = [
  {
    id: 1,
    type: 'market_insight',
    title: "Market's Heating Up! 🚀",
    description:
      'Highest trading volume this week. 150+ transactions in the last hour!',
    timeAgo: '1m ago',
  },
  {
    id: 2,
    type: 'hot_property',
    property: 'Sunset Boulevard',
    priceChange: 12.5,
    timeAgo: '2m ago',
    trades: 23,
    heatLevel: 'very_hot',
    players: ['Alex', 'Sarah', '+3'],
    description: '🔥 Heating up! 23 trades in the last hour',
  },
  {
    id: 3,
    type: 'achievement',
    player: 'Jessica K.',
    achievement: 'Property Mogul',
    description: 'First to own shares in all premium properties!',
    timeAgo: '4m ago',
    reward: '2,000 bonus tokens',
  },
  {
    id: 4,
    type: 'smart_trade',
    player: 'Michael R.',
    property: 'Tech Hub',
    amount: 5000,
    shares: 50,
    timing: 'perfect',
    timeAgo: '5m ago',
    priceChange: 8.2,
    badge: '🎯 Perfect Timing',
  },
  {
    id: 5,
    type: 'rent_party',
    property: 'Marina Heights',
    amount: 1200,
    players: ['Alex', 'Jason', '+3'],
    timeAgo: '8m ago',
    streak: 3,
    description: '💫 Rent party! 5 owners just collected',
  },
];

export default function WatchScreen() {
  // const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const filters = ['all', 'hot', 'trades', 'rent', 'achievements'];

  const renderActivity = (activity: (typeof activities)[number]) => {
    switch (activity.type) {
      case 'market_insight':
        return (
          <div className='bg-gradient-to-br from-blue-50 to-indigo-50 border-none hover:shadow-lg transition-all'>
            <div className='p-4'>
              <div className='flex items-center gap-2 mb-2'>
                <Activity className='w-5 h-5 text-blue-500' />
                <h3 className='font-semibold'>{activity.title}</h3>
              </div>
              <p className='text-sm text-gray-600'>{activity.description}</p>
            </div>
          </div>
        );

      case 'hot_property':
        return (
          <div className='bg-gradient-to-br from-orange-50 to-red-50 border-none hover:shadow-lg transition-all'>
            <div className='p-4'>
              <div className='flex items-start justify-between mb-2'>
                <div className='flex items-center gap-2'>
                  <Flame className='w-5 h-5 text-orange-500' />
                  <h3 className='font-semibold'>{activity.property}</h3>
                </div>
                <div className='flex items-center gap-1 text-emerald-600 font-medium'>
                  <ArrowUpRight className='w-4 h-4' />
                  {activity.priceChange}%
                </div>
              </div>
              <p className='text-sm text-gray-600 mb-3'>
                {activity.description}
              </p>
              <div className='flex items-center justify-between'>
                <div className='flex -space-x-2'>
                  {activity.players?.map((player, i) => (
                    <div
                      key={i}
                      className='w-6 h-6 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs'
                    >
                      {player.startsWith('+') ? player : player[0]}
                    </div>
                  ))}
                </div>
                <button className='text-xs'>View Property</button>
              </div>
            </div>
          </div>
        );

      case 'achievement':
        return (
          <div className='bg-gradient-to-br from-yellow-50 to-amber-50 border-none hover:shadow-lg transition-all'>
            <div className='p-4'>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center'>
                  <Trophy className='w-4 h-4 text-yellow-600' />
                </div>
                <div>
                  <h3 className='font-semibold'>{activity.player}</h3>
                  <p className='text-sm text-gray-600'>
                    {activity.description}
                  </p>
                  {activity.reward && (
                    <div className='mt-2 text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full inline-block'>
                      🎁 {activity.reward}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 'smart_trade':
        return (
          <div className='bg-gradient-to-br from-blue-50 to-purple-50 border-none hover:shadow-lg transition-all'>
            <div className='p-4'>
              <div className='flex items-start justify-between mb-2'>
                <div>
                  <div className='flex items-center gap-2 mb-1'>
                    <Zap className='w-5 h-5 text-yellow-500' />
                    <h3 className='font-semibold'>{activity.property}</h3>
                  </div>
                  <p className='text-sm text-gray-600'>
                    {activity.player} bought {activity.shares} shares
                  </p>
                </div>
                <span className='text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full'>
                  {activity.badge}
                </span>
              </div>
              <div className='flex items-center justify-between mt-3'>
                <span className='text-gray-600'>${activity.amount}</span>
                <div className='flex items-center gap-2'>
                  <ThumbsUp className='w-4 h-4 text-purple-400' />
                  <button className='text-xs'>Similar Trade</button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'rent_party':
        return (
          <div className='bg-gradient-to-br from-green-50 to-emerald-50 border-none hover:shadow-lg transition-all'>
            <div className='p-4'>
              <div className='flex items-center justify-between mb-2'>
                <div className='flex items-center gap-2'>
                  <HandCoins className='w-5 h-5 text-emerald-500' />
                  <h3 className='font-semibold'>{activity.property}</h3>
                </div>
                <span className='text-emerald-600 font-medium'>
                  +${activity.amount}
                </span>
              </div>
              <p className='text-sm text-gray-600 mb-3'>
                {activity.description}
              </p>
              {activity.streak && activity.streak > 1 && (
                <div className='flex items-center gap-2 text-sm'>
                  <Sparkles className='w-4 h-4 text-yellow-500' />
                  <span className='text-gray-600'>
                    {activity.streak}x Collection Streak!
                  </span>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className='bg-gradient-to-b from-purple-100 to-purple-200/40 p-2 sm:p-4 !pb-32'>
        <div className='max-w-4xl mx-auto'>
          {/* Filters */}
          <div className='flex gap-2 mb-4 overflow-x-auto pb-2'>
            {filters.map((filter) => (
              <button
                key={filter}
                // variant={selectedFilter === filter ? 'default' : 'outline'}
                className={`text-sm ${
                  selectedFilter === filter
                    ? 'bg-purple-500 hover:bg-purple-600'
                    : 'hover:bg-purple-50'
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Activity Feed */}
          <div className='space-y-4'>
            {activities.map((activity) => (
              <div key={activity.id} className='relative'>
                <span className='absolute -left-4 top-1/2 w-2 h-2 bg-purple-400 rounded-full'></span>
                <div className='mb-1 pl-4'>
                  <span className='text-xs text-gray-500'>
                    {activity.timeAgo}
                  </span>
                </div>
                {renderActivity(activity)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      {/* <div className='fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t px-4 py-3'>
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
          <button
            onClick={() => router.push('/portfolio')}
            className='flex flex-col items-center justify-center gap-1.5'
          >
            <div className='w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center'>
              <CircleDollarSign className='w-5 h-5 text-gray-400' />
            </div>
            <span className='text-xs text-gray-400'>Portfolio</span>
          </button>
          <button className='flex flex-col items-center justify-center gap-1.5'>
            <div className='w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center'>
              <Trophy className='w-5 h-5 text-gray-700' />
            </div>
            <span className='text-xs text-gray-700'>Watch</span>
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
    </>
  );
}
