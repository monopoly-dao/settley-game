'use client';

import { CircleDollarSign, Home, Trophy } from 'lucide-react';
import { ReactNode } from 'react';

export default function Page() {
  // const router = useRouter();

  const PropertyCard = ({
    icon,
    title,
    children,
  }: {
    icon: ReactNode;
    title: string;
    children: ReactNode;
  }) => (
    <div className='bg-white/90 backdrop-blur mb-6'>
      <div className='p-6'>
        <div className='flex items-center gap-3 mb-4'>
          {icon}
          <h2 className='text-lg font-bold'>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );

  return (
    <>
      <div className='bg-[#f2eeff] p-4 sm:p-8 !pb-24 overflow-y-auto'>
        <div className='max-w-3xl mx-auto'>
          <div className='mb-8'>
            <h1 className='text-2xl font-bold'>How to Play Settley</h1>
          </div>

          <div className='bg-white/90 backdrop-blur mb-8'>
            <div className='p-6'>
              <h2 className='text-xl font-bold mb-4'>Welcome to Settley</h2>
              <div className='grid md:grid-cols-2 gap-4 mb-4'>
                <div className='bg-purple-50 rounded-lg p-4'>
                  <h3 className='font-medium mb-2'>Starting Bonus</h3>
                  <p className='text-2xl font-bold text-purple-600 mb-1'>
                    10,000
                  </p>
                  <p className='text-sm text-gray-600'>Test tokens to start</p>
                </div>
                <div className='bg-purple-50 rounded-lg p-4'>
                  <h3 className='font-medium mb-2'>Refer Friends</h3>
                  <p className='text-2xl font-bold text-purple-600 mb-1'>
                    +10,000
                  </p>
                  <p className='text-sm text-gray-600'>For you & each friend</p>
                </div>
              </div>
              <p className='text-sm text-gray-600'>
                Settley reimagines asset ownership through blockchain
                technology. Practice property trading and smart contract
                management in a risk-free environment.
              </p>
            </div>
          </div>

          <PropertyCard
            icon={<Home className='w-5 h-5 text-purple-600' />}
            title='Property Trading'
          >
            <div className='space-y-4'>
              <p className='text-gray-600'>
                Experience blockchain-based property trading:
              </p>
              <ul className='list-disc pl-5 space-y-2 text-sm text-gray-600'>
                <li>
                  Buy fractions of premium properties like Lexington Square and
                  Broadway Plaza
                </li>
                <li>
                  Learn how smart contracts handle ownership and transactions
                </li>
                <li>Watch property values change in real-time</li>
                <li>Earn rent from other players landing on your properties</li>
                <li>
                  Multiple players can co-own properties through the share
                  system
                </li>
              </ul>
            </div>
          </PropertyCard>

          <PropertyCard
            icon={<CircleDollarSign className='w-5 h-5 text-purple-600' />}
            title='Game Mechanics'
          >
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-purple-50 rounded-lg p-4'>
                <h3 className='font-medium mb-2'>What You Can Do</h3>
                <ul className='list-disc pl-4 space-y-2 text-sm text-gray-600'>
                  <li>
                    <span className='font-medium'>Buy Properties:</span> Click
                    on any colored square to see what's available
                  </li>
                  <li>
                    <span className='font-medium'>Watch the Market:</span>{' '}
                    Property values go up and down just like real life
                  </li>
                  <li>
                    <span className='font-medium'>Make Money:</span> Collect
                    rent when others land on your properties
                  </li>
                  <li>
                    <span className='font-medium'>Trade & Deal:</span> Connect
                    with other players to buy and sell
                  </li>
                  <li>
                    <span className='font-medium'>Track Progress:</span> See how
                    your empire grows over time
                  </li>
                </ul>
              </div>
              <div className='bg-purple-50 rounded-lg p-4'>
                <h3 className='font-medium mb-2'>How Things Work</h3>
                <ul className='list-disc pl-4 space-y-2 text-sm text-gray-600'>
                  <li>
                    <span className='font-medium'>Game Rounds:</span> Each
                    session has a time limit - make it count!
                  </li>
                  <li>
                    <span className='font-medium'>Rent Collection:</span> After
                    10 moves, you can collect rent - don't forget!
                  </li>
                  <li>
                    <span className='font-medium'>Your Money:</span> Keep an eye
                    on your balance for opportunities
                  </li>
                  <li>
                    <span className='font-medium'>Random Events:</span> Just
                    like real property ownership, expect surprises
                  </li>
                  <li>
                    <span className='font-medium'>Live Updates:</span>{' '}
                    Everything happens in real-time
                  </li>
                </ul>
              </div>
            </div>
          </PropertyCard>

          <PropertyCard
            icon={<CircleDollarSign className='w-5 h-5 text-purple-600' />}
            title='Events & Challenges'
          >
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='bg-purple-50 rounded-lg p-4'>
                <h3 className='font-medium mb-2'>Negative Events</h3>
                <ul className='list-disc pl-5 space-y-1 text-sm text-gray-600'>
                  <li>Maintenance costs</li>
                  <li>HOA levies</li>
                  <li>Property value drops</li>
                  <li>Emergency repairs</li>
                </ul>
              </div>
              <div className='bg-purple-50 rounded-lg p-4'>
                <h3 className='font-medium mb-2'>Positive Events</h3>
                <ul className='list-disc pl-5 space-y-1 text-sm text-gray-600'>
                  <li>Property appreciation</li>
                  <li>Bonus rent collection</li>
                  <li>Market booms</li>
                  <li>Special opportunities</li>
                </ul>
              </div>
            </div>
          </PropertyCard>

          <PropertyCard
            icon={<Trophy className='w-5 h-5 text-purple-600' />}
            title='Tips for Success'
          >
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-purple-50 rounded-lg p-4'>
                <h3 className='font-medium mb-2'>Getting Started Right</h3>
                <ul className='list-disc pl-4 space-y-2 text-sm text-gray-600'>
                  <li>
                    <span className='font-medium'>Start Small:</span> Don't
                    spend all your tokens at once - test the waters!
                  </li>
                  <li>
                    <span className='font-medium'>Mix It Up:</span> Buy
                    different types of properties to spread your risk
                  </li>
                  <li>
                    <span className='font-medium'>Save Some Cash:</span> Keep
                    some tokens ready for unexpected opportunities
                  </li>
                  <li>
                    <span className='font-medium'>Watch & Learn:</span> See what
                    successful players are buying
                  </li>
                  <li>
                    <span className='font-medium'>Make Friends:</span> Invite
                    others to earn bonus tokens together
                  </li>
                </ul>
              </div>
              <div className='bg-purple-50 rounded-lg p-4'>
                <h3 className='font-medium mb-2'>Smart Moves</h3>
                <ul className='list-disc pl-4 space-y-2 text-sm text-gray-600'>
                  <li>
                    <span className='font-medium'>Stay Active:</span> Regular
                    players spot the best opportunities
                  </li>
                  <li>
                    <span className='font-medium'>Be Patient:</span> Don't panic
                    if property values drop temporarily
                  </li>
                  <li>
                    <span className='font-medium'>Think Ahead:</span> Plan your
                    moves based on your token balance
                  </li>
                  <li>
                    <span className='font-medium'>Time It Right:</span> Collect
                    rent when your balance is low
                  </li>
                  <li>
                    <span className='font-medium'>Have Fun:</span> It's a game -
                    try different strategies!
                  </li>
                </ul>
              </div>
            </div>
          </PropertyCard>
        </div>
      </div>

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
          <button
            onClick={() => router.push('/watch')}
            className='flex flex-col items-center justify-center gap-1.5'
          >
            <div className='w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center'>
              <Trophy className='w-5 h-5 text-gray-400' />
            </div>
            <span className='text-xs text-gray-400'>Watch</span>
          </button>
          <button className='flex flex-col items-center justify-center gap-1.5'>
            <div className='w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center'>
              <BookOpen className='w-5 h-5 text-gray-700' />
            </div>
            <span className='text-xs text-gray-700'>Learn</span>
          </button>
        </div>
      </div> */}
    </>
  );
}
