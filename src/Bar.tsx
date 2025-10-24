import { BookOpen, Circle, RotateCw, X } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
	handleRestartGame: () => void;
	player: 'x' | 'o';
	currentStep: number;
	
}
export default function Bar({ handleRestartGame, player, currentStep }: Props) {
	return (
		<div className='my-5 flex gap-2'>
			<div className='flex items-center gap-1 rounded p-2 shadow shadow-neutral-400 transition-colors'>
				Step now player: {player === 'x' ? <X size={28} /> : <Circle size={28} />}
			</div>
			<div className='flex items-center gap-1 rounded p-2 shadow shadow-neutral-400 transition-colors'>
				Current step:
				<b className='text-2xl'>{currentStep}</b>
			</div>
			<motion.button
				whileTap={{ scale: 0.8 }}
				transition={{ type: 'spring', stiffness: 400, damping: 25 }}
				type='button'
				className='flex items-center gap-2 rounded p-2 shadow shadow-neutral-400 transition-colors hover:bg-gray-100'
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
				className='flex items-center gap-2 rounded p-2 shadow shadow-neutral-400 transition-colors hover:bg-gray-100'
			>
				History <BookOpen size={28} />
			</motion.button>
		</div>
	);
}
