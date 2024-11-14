'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Gamepad2, Home, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  FaBuilding,
  FaDice,
  FaDollarSign,
  FaExclamationTriangle,
  FaHome,
  FaMoneyBillWave,
  FaWarehouse,
} from 'react-icons/fa';

import './GameBoard.css';

import useMediaQuery from '@/hooks/useMediaQuery';

import Dice from '@/app/board/_components/Dice';
import Leaderboard from '@/app/board/_components/Leaderboard';
import OutcomeModal from '@/app/board/_components/OutcomeModal';
import {
  boardSpaces,
  getCoordinates,
  Property,
  Space,
} from '@/app/board/_utils/boardSpaces';

export type Player = {
  id: number;
  name: string;
  position: number;
  cashBalance: number;
  debtBalance: number;
  ownedAssets: Record<string | number, number>;
};
export default function Page() {
  const [players, setPlayers] = useState<Player[]>([
    {
      id: 1,
      name: 'Player 1',
      position: 1,
      cashBalance: 10000,
      debtBalance: 0,
      ownedAssets: {},
    },
    // Add more players as needed
  ]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [diceValue, setDiceValue] = useState(1);
  const [diceRolling, setDiceRolling] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [showOutcome, setShowOutcome] = useState(false);
  const [currentOutcome, setCurrentOutcome] = useState(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentPage, setCurrentPage] = useState('game');

  const isLgScreenLowerBound = useMediaQuery('(min-width: 1024px)');
  const isLgScreenUpperBound = useMediaQuery('(max-width: 1280px)');

  const isXlScreen = useMediaQuery('(min-width: 1280px)');
  const isSmScreen = useMediaQuery('(max-width: 600px)');

  const boardSize =
    // isSmScreen
    //   ? 360
    //   : isLgScreenLowerBound && isLgScreenUpperBound
    //   ? 600
    //   :
    isLgScreenLowerBound ? 960 : 720;

  const router = useRouter();

  const rollDice = () => {
    if (diceRolling) return;
    setDiceRolling(true);
    const newDiceValue = Math.floor(Math.random() * 6) + 1;
    setTimeout(() => {
      setDiceValue(newDiceValue);
      setDiceRolling(false);
      movePlayer(newDiceValue);
    }, 1000);
  };

  const movePlayer = (steps: number) => {
    const updatedPlayers = [...players];
    const currentPlayer = updatedPlayers[currentPlayerIndex];
    currentPlayer.position =
      (currentPlayer.position + steps) % boardSpaces.length;
    setPlayers(updatedPlayers);

    const landedSpace = boardSpaces.find(
      (space) => space.id === currentPlayer.position
    );
    if (landedSpace) {
      handleSpaceEffect(landedSpace);
    } else {
      console.error(`No space found for position: ${currentPlayer.position}`);
    }
  };

  const calculateRent = (property: Property) => {
    return Math.floor((property.price || 0) * 0.06);
  };

  const distributeRent = (property: Property, rentAmount: number) => {
    let totalOwnedUnits = 0;
    Object.values(property.ownedBy || {}).forEach((units) => {
      totalOwnedUnits += units as number;
    });

    if (totalOwnedUnits === 0) return;

    const updatedPlayers = [...players];
    if (property.ownedBy) {
      Object.keys(property.ownedBy).forEach((playerId) => {
        const unitsOwned = property.ownedBy[playerId];
        const player = updatedPlayers.find((p) => p.id === parseInt(playerId));
        if (player) {
          const share = (unitsOwned / totalOwnedUnits) * rentAmount;
          player.cashBalance += Math.floor(share);
        }
      });
    }
    setPlayers(updatedPlayers);
  };

  const handleSpaceEffect = (space: Space) => {
    const currentPlayer = players[currentPlayerIndex];
    if (space.type === 'property') {
      const propertySpace = space as Property;
      if (
        propertySpace.ownedBy &&
        Object.keys(propertySpace.ownedBy).length > 0
      ) {
        if (propertySpace.ownedBy[currentPlayer.id]) {
          // Update this to use the new notification system in Dashboard
          // We'll pass this information to Dashboard instead
        } else {
          const rent = calculateRent(propertySpace);
          currentPlayer.cashBalance -= rent;
          setPlayers([...players]);
          distributeRent(propertySpace, rent);
          // Update this to use the new notification system in Dashboard
        }
      } else {
        setSelectedProperty(propertySpace);
      }
    } else if (space.type === 'tax') {
      const taxAmount = 100000;
      currentPlayer.cashBalance -= taxAmount;
      setPlayers([...players]);
      // Update this to use the new notification system in Dashboard
    }
  };

  const handlePropertyClick = (property: Property) => {
    console.log(`Clicked on: ${property.name || property.type}`);
    setSelectedProperty(property);
  };

  const buyProperty = () => {
    if (!selectedProperty) return;
    const updatedPlayers = [...players];
    const currentPlayer = updatedPlayers[currentPlayerIndex];

    const maxAffordableUnits = Math.floor(
      currentPlayer.cashBalance / selectedProperty.unitCost
    );
    const unitsToBuy = Math.min(
      maxAffordableUnits,
      selectedProperty.unitsAvailable
    );

    if (unitsToBuy > 0) {
      const totalCost = unitsToBuy * selectedProperty.unitCost;
      currentPlayer.cashBalance -= totalCost;
      currentPlayer.ownedAssets[selectedProperty.id] = currentPlayer
        .ownedAssets[selectedProperty.id]
        ? currentPlayer.ownedAssets[selectedProperty.id] + unitsToBuy
        : unitsToBuy;

      if (!selectedProperty.ownedBy) {
        selectedProperty.ownedBy = {};
      }
      selectedProperty.ownedBy[currentPlayer.id] = selectedProperty.ownedBy[
        currentPlayer.id
      ]
        ? selectedProperty.ownedBy[currentPlayer.id] + unitsToBuy
        : unitsToBuy;

      selectedProperty.unitsAvailable -= unitsToBuy;

      setPlayers(updatedPlayers);
      // Update this to use the new notification system in Dashboard
      setSelectedProperty(null);
    } else {
      alert('Not enough cash to buy any units!');
    }
  };

  const renderBoard = () => {
    // w-[360px] h-[2040px] sm:w-[600px] sm:h-[1800px] xl:w-[1200px] xl:h-[1200px]
    return (
      <>
        <div className='relative -mt-[270px] scale-[0.5] sm:-mt-[50px] sm:scale-[1] lg:-mt-0 !w-[720px] !h-[960px] lg:!w-[960px] lg:!h-[720px] bg-gradient-to-br from-blue-100 to-purple-200 rounded-2xl shadow-2xl overflow-hidden mb-8'>
          {boardSpaces.map((space) => {
            const { left, top } = getCoordinates(space.id, boardSize);
            return (
              <motion.div
                key={space.id}
                className={`absolute !w-[120px] !h-[120px] ${space.color} border border-gray-300 flex flex-col items-center justify-center rounded-lg cursor-pointer`}
                style={{ left: `${left}px`, top: `${top}px` }}
                onClick={() => handleSpaceEffect(space)}
              >
                <div className='flex flex-col items-center justify-center'>
                  {space.icon}
                  {space.type === 'property' ? (
                    <button
                      className='mt-1 text-xs font-extrabold text-gray-700 underline focus:outline-none'
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePropertyClick(space as Property);
                      }}
                      aria-label={`View details for ${space.name}`}
                    >
                      {space.name}
                    </button>
                  ) : (
                    <span className='text-xs mt-1 font-extrabold text-gray-700'>
                      {space.name || space.type}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}

          {players.map((player, index) => {
            const playerSpace = boardSpaces.find(
              (space) => space.id === player.position
            );
            if (!playerSpace) {
              console.error(
                `No space found for player position: ${player.position}`
              );
              return null;
            }
            const { left, top } = getCoordinates(playerSpace.id, boardSize);
            return (
              <motion.div
                key={player.id}
                className={`absolute w-14 h-14 bg-${
                  index === 0 ? 'blue' : 'red'
                }-500 rounded-full shadow-lg z-10 flex items-center justify-center`}
                animate={{
                  left: left + 30,
                  top: top + 30,
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                aria-label={`${player.name} token`}
              >
                <Home className='w-7 h-7 text-white' />
              </motion.div>
            );
          })}

          {/* Center area with informational cards */}
          {!selectedProperty && (
            <div className='absolute top-1/3 lg:top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[150px] lg:w-[600px] z-[100]'>
              <div className='grid grid-cols-2 gap-6 w-full h-full'>
                <motion.div
                  className='bg-blue-100 text-gray-800  p-6 rounded-lg shadow-xl flex flex-col items-center justify-center cursor-pointer'
                  whileHover={{ scale: 1.05 }}
                >
                  <FaHome className='text-4xl mb-2' />
                  <h3 className='font-extrabold text-xl mb-2'>Properties</h3>
                  <p className='text-center'>Buy and collect rent</p>
                </motion.div>
                <motion.div
                  className='bg-yellow-100 text-gray-800  p-6 rounded-lg shadow-xl flex flex-col items-center justify-center cursor-pointer'
                  whileHover={{ scale: 1.05 }}
                >
                  <FaDice className='text-4xl mb-2' />
                  <h3 className='font-extrabold text-xl mb-2'>Chance</h3>
                  <p className='text-center'>Take risks for rewards</p>
                </motion.div>
                <motion.div
                  className='bg-green-100 text-gray-800  p-6 rounded-lg shadow-xl flex flex-col items-center justify-center cursor-pointer'
                  whileHover={{ scale: 1.05 }}
                >
                  <FaMoneyBillWave className='text-4xl mb-2' />
                  <h3 className='font-extrabold text-xl mb-2'>Investments</h3>
                  <p className='text-center'>Grow your wealth</p>
                </motion.div>
                <motion.div
                  className='bg-red-100 text-gray-800  p-6 rounded-lg shadow-xl flex flex-col items-center justify-center cursor-pointer'
                  whileHover={{ scale: 1.05 }}
                >
                  <FaExclamationTriangle className='text-4xl mb-2' />
                  <h3 className='font-extrabold text-xl mb-2'>Taxes</h3>
                  <p className='text-center'>Navigate financial challenges</p>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className='flex flex-col overflow-x-hidden items-center gap-10 lg:gap-0 justify-start min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 px-1 py-8 sm:px-8 relative'>
      <h1 className='text-5xl font-extrabold mb-8 text-gray-800'>Settley</h1>

      <div className='flex flex-col xl:flex-row w-auto xl:gap-[50px] xl:items-center'>
        <div>{renderBoard()}</div>

        <div className='w-fit mx-auto -mt-[200px] flex flex-col gap-5 sm:-mt-0'>
          <Dice onRoll={rollDice} rolling={diceRolling} value={diceValue} />

          <div className='flex justify-center space-x-8'>
            <button
              onClick={() => router.push('/profile')}
              className={`p-2 rounded-full ${
                currentPage === 'profile'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              <User size={24} />
            </button>
            <button
              onClick={() => router.push('/dashboard')}
              className={`p-2 rounded-full ${
                currentPage === 'dashboard'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              <Gamepad2 size={24} />
            </button>
          </div>

          {diceRolling && (
            <div className='text-2xl font-bold text-gray-800 mb-4 animate-bounce'>
              Rolling...
            </div>
          )}
          {!diceRolling && diceValue > 0 && (
            <div className='text-3xl font-bold text-gray-800 mb-4'>
              You rolled a {diceValue}!
            </div>
          )}
        </div>
      </div>

      {selectedProperty && selectedProperty.type === 'property' && (
        <div className='fixed inset-0 flex items-center justify-center p-6 bg-black bg-opacity-50'>
          <div
            className={`p-6 rounded-lg shadow-xl w-full max-w-md ${selectedProperty.color} text-black`}
          >
            <h3 className='text-2xl font-bold mb-2'>{selectedProperty.name}</h3>
            <p className='italic mb-2'>{selectedProperty.twoLiner}</p>
            <p className='mb-2'>{selectedProperty.lore}</p>
            <div className='flex items-center mb-2'>
              <FaDollarSign className='mr-2' />
              <p>Unit Cost: ${selectedProperty.unitCost.toLocaleString()}</p>
            </div>
            <div className='flex items-center mb-2'>
              <FaWarehouse className='mr-2' />
              <p>
                Units Left: {selectedProperty.unitsAvailable.toLocaleString()}
              </p>
            </div>
            <div className='flex items-center mb-2'>
              <FaBuilding className='mr-2' />
              <p>Total Price: ${selectedProperty.price.toLocaleString()}</p>
            </div>
            <div className='mt-4 flex justify-end'>
              <button
                onClick={buyProperty}
                className={`bg-green-500 text-white px-4 py-2 rounded mr-2 ${
                  players[currentPlayerIndex].cashBalance <
                  selectedProperty.unitCost
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                disabled={
                  players[currentPlayerIndex].cashBalance <
                  selectedProperty.unitCost
                }
              >
                Buy Property
              </button>
              <button
                onClick={() => setSelectedProperty(null)}
                className='bg-red-500 text-white px-4 py-2 rounded'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <AnimatePresence>
        {showOutcome && (
          <OutcomeModal
            show={showOutcome}
            onClose={() => setShowOutcome(false)}
          />
        )}
      </AnimatePresence>

      <button
        onClick={() => setShowLeaderboard(!showLeaderboard)}
        className='bg-yellow-500 text-white px-4 py-2 rounded-lg mt-4'
      >
        Toggle Leaderboard
      </button>
      <AnimatePresence>
        {showLeaderboard && (
          <Leaderboard show={showLeaderboard} leaderboard={leaderboard} />
        )}
      </AnimatePresence>
    </div>
  );
}
