import { AnimatePresence, motion } from 'framer-motion';

import LeaderboardEntry from './LeaderboardEntry';

type Props = {
  show: boolean;
  leaderboard: Array<{ name: string; score: number }>;
};

export default function Leaderboard({ show, leaderboard }: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className='bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 rounded-lg shadow-lg mb-4 w-full max-w-md'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <h2 className='text-3xl font-bold mb-4 text-center text-white'>
            Leaderboard
          </h2>
          <ul className='space-y-2'>
            {leaderboard.map((player, index) => (
              <motion.li
                key={index}
                className='flex justify-between items-center py-2 px-4 bg-white bg-opacity-20 rounded-lg'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className='font-semibold text-white'>{player.name}</span>
                <span className='text-yellow-200 font-bold text-xl'>
                  ${player.score.toLocaleString()}
                </span>
              </motion.li>
            ))}
          </ul>
          <div className='mt-4 text-center text-white'>
            <p className='font-bold'>Can you top the leaderboard?</p>
            <p className='text-sm'>Keep playing to increase your wealth!</p>
          </div>

          <LeaderboardEntry />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
