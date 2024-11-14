import { motion } from 'framer-motion';

type Props = {
  onRoll: () => void;
  rolling: boolean;
  value: number;
};

export default function Dice({ onRoll, rolling, value }: Props) {
  return (
    <motion.button
      className='bg-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg flex items-center'
      onClick={onRoll}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={rolling}
    >
      <motion.div
        className='w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-2 text-blue-500'
        animate={rolling ? { rotate: 360 } : {}}
        transition={{ repeat: Infinity, duration: 0.5 }}
      >
        {value}
      </motion.div>
      Roll Dice
    </motion.button>
  );
}
