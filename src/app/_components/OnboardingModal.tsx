import { CircleDollarSign, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();

  const handleViewRules = () => {
    onClose();
    router.push('/help');
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/30 backdrop-blur-sm' />

      <div className='w-[480px] bg-white/95 relative z-10'>
        <div className='p-6'>
          <button
            onClick={onClose}
            className='absolute right-4 top-4 text-gray-500 hover:text-gray-700'
          >
            <X className='w-5 h-5' />
          </button>

          <div className='space-y-6'>
            <div>
              <h2 className='text-xl font-bold mb-2'>Welcome to Settley!</h2>
              <div className='bg-purple-50 p-4 rounded-lg mb-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <CircleDollarSign className='w-5 h-5 text-purple-600' />
                  <p className='font-medium'>Starting Bonus</p>
                </div>
                <p className='text-sm text-gray-600'>
                  You've received 10,000 test tokens to start your property
                  empire!
                </p>
                <p className='text-sm text-gray-600 mt-2'>
                  <span className='font-medium'>
                    Refer friends to earn more:
                  </span>{' '}
                  Both you and your friend get 10,000 tokens each when they
                  join!
                </p>
              </div>
            </div>

            <div className='space-y-3'>
              <p className='text-sm font-medium text-gray-600'>
                Here's how to get started:
              </p>
              <ol className='space-y-3 text-sm'>
                <li className='flex gap-2'>
                  <span className='text-purple-600 font-bold'>1.</span>
                  <p>
                    <span className='font-medium'>
                      Click colored properties
                    </span>{' '}
                    around the board to view and buy shares
                  </p>
                </li>
                <li className='flex gap-2'>
                  <span className='text-purple-600 font-bold'>2.</span>
                  <p>
                    <span className='font-medium'>Collect rent</span> when other
                    players land on your properties
                  </p>
                </li>
                <li className='flex gap-2'>
                  <span className='text-purple-600 font-bold'>3.</span>
                  <p>
                    <span className='font-medium'>Watch for events</span> that
                    can affect your property values
                  </p>
                </li>
                <li className='flex gap-2'>
                  <span className='text-purple-600 font-bold'>4.</span>
                  <p>
                    <span className='font-medium'>Grow your empire</span> to
                    climb the leaderboard and win prizes!
                  </p>
                </li>
              </ol>
            </div>

            <div className='flex gap-3'>
              <button
                className='flex-1 bg-purple-600 hover:bg-purple-700 text-white'
                onClick={onClose}
              >
                Start Playing
              </button>
              <button
                className='flex-1 border-2 border-gray-200 hover:bg-gray-50'
                onClick={handleViewRules}
              >
                View Full Rules
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
