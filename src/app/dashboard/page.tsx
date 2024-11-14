'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Bell,
  DollarSign,
  Globe,
  Trophy,
  User,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import Leaderboard from '@/app/board/_components/Leaderboard';

export type LeaderboardData = { name: string; score: number };
export type Notification = { message: string; timestamp: string };
export type DashboardPlayerData = {
  name: string;
  cashBalance: number;
  pendingReferrals: number;
};

// Mock API calls (replace with actual fetch requests)
const fetchPlayerData = async () => {
  // Simulate API call with mock data
  return {
    name: 'John Doe',
    cashBalance: 1000000,
    pendingReferrals: 3,
  };
};

const fetchGlobalEvents = async () => {
  return [
    { message: 'Alice bought Boardwalk', timestamp: '2 minutes ago' },
    { message: 'Bob upgraded Park Place', timestamp: '5 minutes ago' },
    { message: 'Charlie went bankrupt', timestamp: '10 minutes ago' },
  ];
};

const fetchNotifications = async () => {
  return [
    { message: 'You received $200 for passing GO', timestamp: '1 minute ago' },
    { message: 'Your property was upgraded', timestamp: '30 minutes ago' },
  ];
};

const fetchLeaderboardData = async () => {
  return [
    { name: 'Alice', score: 5000000 },
    { name: 'Bob', score: 3000000 },
    { name: 'Charlie', score: 1000000 },
  ];
};

const Dashboard = () => {
  const [playerData, setPlayerData] = useState<DashboardPlayerData | null>(
    null
  );
  const [globalEvents, setGlobalEvents] = useState<Notification[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardData[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false); // Leaderboard toggle

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPlayerData = await fetchPlayerData();
        const fetchedGlobalEvents = await fetchGlobalEvents();
        const fetchedNotifications = await fetchNotifications();
        const fetchedLeaderboard = await fetchLeaderboardData(); // Fetch leaderboard data

        setPlayerData(fetchedPlayerData);
        setGlobalEvents(fetchedGlobalEvents);
        setNotifications(fetchedNotifications);
        setLeaderboard(fetchedLeaderboard); // Set leaderboard data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!playerData) return <div>Loading...</div>; // Loading state

  return (
    <div className='bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen text-white p-6'>
      <Link
        href='/board'
        className='flex items-center text-white mb-6 hover:text-yellow-300 transition-colors'
      >
        <ArrowLeft className='mr-2' />
        Back to Game Board
      </Link>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-white bg-opacity-20 rounded-lg p-6 shadow-lg'
        >
          <h2 className='text-2xl font-bold mb-4'>Player Assets</h2>
          <div className='flex items-center mb-2'>
            <DollarSign className='mr-2' />
            <span>
              Cash Balance: ${playerData.cashBalance.toLocaleString()}
            </span>
          </div>
          <div className='flex items-center mb-2'>
            <Users className='mr-2' />
            <span>Pending Referrals: {playerData.pendingReferrals}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-white bg-opacity-20 rounded-lg p-6 shadow-lg'
        >
          <h2 className='text-2xl font-bold mb-4'>Player Information</h2>
          <div className='flex items-center mb-2'>
            <User className='mr-2' />
            <span>{playerData.name}</span>
          </div>
        </motion.div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-white bg-opacity-20 rounded-lg p-6 shadow-lg'
        >
          <h2 className='text-2xl font-bold mb-4 flex items-center'>
            <Globe className='mr-2' />
            Global Events
          </h2>
          <div className='space-y-4'>
            {globalEvents.map((event, index) => (
              <div
                key={index}
                className='border-b border-white border-opacity-20 pb-2'
              >
                <p>{event.message}</p>
                <small className='text-gray-300'>{event.timestamp}</small>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-white bg-opacity-20 rounded-lg p-6 shadow-lg'
        >
          <h2
            className='text-2xl font-bold mb-4 flex items-center cursor-pointer'
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className='mr-2' />
            Notifications
          </h2>
          {showNotifications && (
            <div className='space-y-4'>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className='border-b border-white border-opacity-20 pb-2'
                >
                  <p>{notification.message}</p>
                  <small className='text-gray-300'>
                    {notification.timestamp}
                  </small>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Leaderboard Section */}
      <div className='mt-8'>
        <button
          onClick={() => setShowLeaderboard(!showLeaderboard)}
          className='bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center'
        >
          <Trophy className='mr-2' />
          {showLeaderboard ? 'Hide' : 'Show'} Leaderboard
        </button>
        <Leaderboard show={showLeaderboard} leaderboard={leaderboard} />
      </div>
    </div>
  );
};

export default Dashboard;
