import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

type Props = {
  show: boolean;
  onClose: () => void;
};

export default function OutcomeModal({ show, onClose }: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className='bg-white p-4 rounded-lg shadow-lg mb-4' //${
          // outcome.type === 'positive' ? 'border-green-500' : 'border-red-500'
          // } border-2`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {/* <p className='text-lg font-bold'>{outcome.message}</p> */}
          <p
            className='text-xl font-bold' // ${
            // outcome.type === 'positive' ? 'text-green-500' : 'text-red-500'
            // }`}
          >
            {/* {outcome.amount > 0 ? '+' : ''} */}
            {/* {outcome.amount} */}
          </p>
          <button
            onClick={onClose}
            className='mt-2 bg-gray-200 px-4 py-2 rounded'
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
