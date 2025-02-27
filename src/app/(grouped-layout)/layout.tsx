'use client';

import { PluralitySocialConnect } from '@plurality-network/smart-profile-wallet';
import { BookOpen, CircleDollarSign, Home, Trophy } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

export default function GroupedLayout({ children }: PropsWithChildren) {
  const options = {
    clientId: '0ee0e972-0b52-4154-9ca3-2f837969f1d3',
    theme: 'light',
    text: 'Connect Profile',
  };

  const router = useRouter();
  const path = usePathname();

  return (
    <section className='relative pb-10'>
      <div className='absolute top-2 right-1 flex justify-end'>
        <PluralitySocialConnect
          options={options}
          // onDataReturned={handleDataReturned}
        />
      </div>

      <div className=''>{children}</div>

      <div className='fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t px-4 py-3'>
        <div className='max-w-4xl mx-auto flex justify-around items-center'>
          <button
            onClick={() => router.push('/')}
            className='flex flex-col items-center justify-center gap-1.5'
          >
            <div
              className={cn(
                'w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center',
                [path === '/' && 'bg-purple-100']
              )}
            >
              <Home
                className={cn('w-5 h-5 text-gray-400', [
                  path === '/' && 'text-gray-700',
                ])}
              />
            </div>
            <span
              className={cn('text-xs text-gray-400', [
                path === '/' && 'text-gray-700',
              ])}
            >
              Home
            </span>
          </button>
          <button
            onClick={() => router.push('/portfolio')}
            className='flex flex-col items-center justify-center gap-1.5'
          >
            <div
              className={cn(
                'w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center',
                [path === '/portfolio' && 'bg-purple-100']
              )}
            >
              <CircleDollarSign
                className={cn('w-5 h-5 text-gray-400', [
                  path === '/portfolio' && 'text-gray-700',
                ])}
              />
            </div>
            <span
              className={cn('text-xs text-gray-400', [
                path === '/portfolio' && 'text-gray-700',
              ])}
            >
              Portfolio
            </span>
          </button>
          <button
            onClick={() => router.push('/watch')}
            className='flex flex-col items-center justify-center gap-1.5'
          >
            <div
              className={cn(
                'w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center',
                [path === '/watch' && 'bg-purple-100']
              )}
            >
              <Trophy
                className={cn('w-5 h-5 text-gray-400', [
                  path === '/watch' && 'text-gray-700',
                ])}
              />
            </div>
            <span
              className={cn('text-xs text-gray-400', [
                path === '/watch' && 'text-gray-700',
              ])}
            >
              Watch
            </span>
          </button>
          <button
            onClick={() => router.push('/help')}
            className='flex flex-col items-center justify-center gap-1.5'
          >
            <div
              className={cn(
                'w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center',
                [path === '/help' && 'bg-purple-100']
              )}
            >
              <BookOpen
                className={cn('w-5 h-5 text-gray-400', [
                  path === '/help' && 'text-gray-700',
                ])}
              />
            </div>
            <span
              className={cn('text-xs text-gray-400', [
                path === '/help' && 'text-gray-700',
              ])}
            >
              Learn
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
