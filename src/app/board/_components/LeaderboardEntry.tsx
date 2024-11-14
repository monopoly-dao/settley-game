import Image from 'next/image';

export default function LeaderboardEntry() {
  return (
    <div className='flex items-center justify-between gap-6'>
      <div className='flex items-center gap-2'>
        <Image
          alt='username'
          width={40}
          height={40}
          src='https://discussions.apple.com/content/attachment/0a3a6d4e-cb45-4265-af94-5d4400ea6926'
          className='border h-10 w-10 overflow-hidden rounded-full border-teal-600'
        />
        <div className='text-sm font-medium'>@user</div>
      </div>

      <div className='flex flex-col items-end text-right'>
        <div className='mb-1 text-sm font-medium'>50 points</div>
        <div className='text-success flex items-center gap-1 text-xs font-medium'>
          1st
        </div>
      </div>
    </div>
  );
}
