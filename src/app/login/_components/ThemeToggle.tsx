import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

// import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  // const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      // onClick={toggleTheme}
      type='button'
      className='p-2 rounded-lg bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400 cursor-pointer z-10 hover:bg-purple-200 dark:hover:bg-gray-600'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />} */}
    </motion.button>
  );
};

export default ThemeToggle;
