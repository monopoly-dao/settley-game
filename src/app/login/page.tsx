'use client';

import { motion } from 'framer-motion';
import { Chrome, Dice1, Dice5 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FormEventHandler, useState } from 'react';

// import ThemeToggle from './ThemeToggle';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRolling, setIsRolling] = useState(false);
  const router = useRouter();

  const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsRolling(true);
      setTimeout(() => {
        setIsRolling(false);
        router.push('/');
      }, 2000);
    }
  };

  return (
    <div className='min-h-screen bg-[#EDE9FF] flex items-center justify-center p-4 transition-colors'>
      <div className='w-full max-w-md'>
        <div className='relative bg-white rounded-3xl shadow-lg p-8 transition-all'>
          {/* <ThemeToggle /> */}

          {/* Animated corners - adjusted for dark mode */}
          <motion.div
            className='absolute -top-2 -right-2 w-24 h-24 bg-[#FFD700] rounded-full blur-xl opacity-60'
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className='absolute -bottom-2 -left-2 w-24 h-24 bg-[#4ADE80] rounded-full blur-xl opacity-60'
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Logo */}
          <motion.div
            className='flex items-center justify-center mb-8'
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', bounce: 0.5 }}
          >
            <Image
              src='/images/settley-Icon.png'
              alt='Settley'
              className='h-12'
              width={48}
              height={48}
            />
          </motion.div>

          {/* Form */}
          <form onSubmit={handleLogin} className='space-y-4'>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <input
                type='email'
                placeholder='Email'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='w-full p-4 rounded-xl border border-purple-100  bg-white  text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-gray-400'
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-4 rounded-xl border border-purple-100  bg-white  text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-gray-400'
              />
            </motion.div>

            {/* button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button
                type='submit'
                className='w-full p-4 bg-[#6B46C1] text-white rounded-xl flex items-center justify-center text-lg font-medium hover:bg-[#5B3AA6] transition-all hover:scale-105'
                disabled={isRolling}
              >
                {isRolling ? (
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Dice5 className='w-6 h-6' />
                  </motion.div>
                ) : (
                  <motion.div
                    className='flex items-center'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Dice1 className='w-6 h-6 mr-2' />
                    Roll to Start Your Adventure!
                  </motion.div>
                )}
              </button>
            </motion.div>

            {/* Social Login */}
            <div className='mt-8 text-center'>
              <p className='text-sm text-gray-500 dark:text-gray-300 mb-4'>
                Or sign in with
              </p>
              <motion.button
                type='button'
                className='p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Chrome className='w-5 h-5 text-gray-60' />
              </motion.button>
            </div>

            {/* Bottom Text */}
            <motion.div
              className='mt-8'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className='text-center text-purple-60 font-medium bg-purple-50  py-4 rounded-xl hover:bg-purple-100 transition-colors'>
                Ready to build your empire and become a property tycoon?
              </p>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
