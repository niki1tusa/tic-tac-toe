import { BookOpen, Circle, RotateCw, SquareX, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import ListHistoryGame from './ListHistoryGame';
import Modal from './Modal';

interface Props {
	handleRestartGame: () => void;
	player: 'x' | 'o';
	doneSteps: number;
}
export default function Bar({ handleRestartGame, player, doneSteps }: Props) {
	const [isShowRules, setIsShowRules] = useState<boolean>(false);
	const [isShowHistory, setIsShowHistory] = useState<boolean>(false);
	return (
		<>
			<AnimatePresence>
				{isShowRules && (
					<Modal>
						<div className='flex flex-col gap-3 p-3'>
							<div className='flex w-full items-center justify-between text-2xl'>
								Rules game: <SquareX onClick={() => setIsShowRules(false)} color='red' />
							</div>
							<ul>
								<li>1. The first step is for the player who chooses the symbol "X"</li>
								<li>2. If you want to win, then put your symbol three in a row</li>
								<li>3. It can be collected horizontally, vertically and diagonally.</li>
							</ul>
						</div>
					</Modal>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{isShowHistory && (
					<Modal>
						<ListHistoryGame setIsShow={setIsShowHistory}/>
					</Modal>
				)}
			</AnimatePresence>
			<div className='my-5 flex gap-2'>
				<div className='flex items-center gap-1 rounded p-2 shadow shadow-neutral-400 transition-colors'>
					Step now player: {player === 'x' ? <X size={28} /> : <Circle size={28} />}
				</div>
				<div className='flex items-center gap-1 rounded p-2 shadow shadow-neutral-400 transition-colors'>
					Done steps:
					<b className='text-2xl'>{doneSteps}</b>
				</div>
				<motion.button
					whileTap={{ scale: 0.8 }}
					transition={{ type: 'spring', stiffness: 400, damping: 25 }}
					type='button'
					className='flex items-center gap-2 rounded p-2 shadow shadow-neutral-400 transition-colors hover:bg-gray-100'
					onClick={() => setIsShowRules(true)}
				>
					Rules <BookOpen size={28} />
				</motion.button>
				<motion.button
					whileTap={{ scale: 0.8 }}
					transition={{ type: 'spring', stiffness: 400, damping: 25 }}
					type='button'
					onClick={handleRestartGame}
					className='flex items-center gap-2 rounded p-2 shadow shadow-neutral-400 transition-colors hover:bg-gray-100'
				>
					Restart
					<RotateCw
						size={28}
						className='transition-transform duration-300 ease-in-out hover:rotate-90'
					/>
				</motion.button>
				<motion.button
					whileTap={{ scale: 0.8 }}
					transition={{ type: 'spring', stiffness: 400, damping: 25 }}
					type='button'
					onClick={() => setIsShowHistory(true)}
					className='flex items-center gap-2 rounded p-2 shadow shadow-neutral-400 transition-colors hover:bg-gray-100'
				>
					History <BookOpen size={28} />
				</motion.button>
			</div>
		</>
	);
}
