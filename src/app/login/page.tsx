'use client';

import { motion } from 'framer-motion';
import { Dice1, Dice5, Hotel, Twitter, Wallet } from 'lucide-react';
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
    <div className='min-h-screen bg-gradient-to-br from-[#E8E5FF] to-[#C7A2FF] flex items-center justify-center p-4 overflow-hidden'>
      <motion.div
        className='w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden relative'
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className='absolute -top-16 -left-16 w-32 h-32 bg-yellow-400 rounded-full'
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className='absolute -bottom-16 -right-16 w-32 h-32 bg-green-400 rounded-full'
          animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className='p-6 relative z-10'>
          <motion.div
            className='flex items-center justify-center mb-6'
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Hotel className='w-12 h-12 text-[#6B46C1] mr-2' />
            <h1 className='text-4xl font-bold text-[#6B46C1]'>Settley</h1>
          </motion.div>

          <form onSubmit={handleLogin} className='space-y-4'>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full p-3 border-2 border-[#6B46C1] rounded-md focus:ring-2 focus:ring-[#6B46C1] bg-white bg-opacity-75'
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-3 border-2 border-[#6B46C1] rounded-md focus:ring-2 focus:ring-[#6B46C1] bg-white bg-opacity-75'
            />
            <button
              type='submit'
              className='w-full p-3 bg-[#6B46C1] text-white hover:bg-[#553C9A] flex items-center justify-center text-lg font-semibold transition-all duration-300 transform hover:scale-105'
              disabled={isRolling}
            >
              {isRolling ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Dice5 className='w-8 h-8' />
                </motion.div>
              ) : (
                <>
                  <Dice1 className='w-8 h-8 mr-2' />
                  Roll to Start Your Adventure!
                </>
              )}
            </button>
          </form>

          <div className='mt-6 text-center'>
            <p className='text-sm text-gray-600 mb-3'>Or sign in with</p>
            <div className='flex justify-center space-x-4'>
              <button className='w-12 h-12 border-2 border-[#6B46C1] hover:bg-[#E8E5FF] transition-all duration-300'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24'
                  viewBox='0 0 24 24'
                  width='24'
                >
                  <path
                    d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                    fill='#4285F4'
                  />
                  <path
                    d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                    fill='#34A853'
                  />
                  <path
                    d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                    fill='#FBBC05'
                  />
                  <path
                    d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                    fill='#EA4335'
                  />
                  <path d='M1 1h22v22H1z' fill='none' />
                </svg>
              </button>
              <button className='w-12 h-12 border-2 border-[#6B46C1] hover:bg-[#E8E5FF] transition-all duration-300'>
                <Wallet className='w-6 h-6 text-[#6B46C1]' />
              </button>
              <button className='w-12 h-12 border-2 border-[#6B46C1] hover:bg-[#E8E5FF] transition-all duration-300'>
                <Twitter className='w-6 h-6 text-[#6B46C1]' />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className='bg-[#6B46C1] p-4 text-white text-center text-lg font-semibold'
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
        >
          Ready to build your empire and become a property tycoon?
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
