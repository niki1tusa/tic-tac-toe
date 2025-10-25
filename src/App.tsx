import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';

import Bar from './components/Bar';
import Modal from './components/Modal';
import Title from './components/Title';
import { useGameLogic } from './hooks/useGameLogic';

function App() {
	const { player, doneSteps, cellCondition, gameResult, handleClick, handleRestartGame } =
		useGameLogic();

	useEffect(() => {
		if (!gameResult) return;
		const timer = setTimeout(() => {
			handleRestartGame();
		}, 2000);
		return () => clearTimeout(timer);
	}, [gameResult, handleRestartGame]);
	return (
		<div className='flex h-screen w-full flex-col items-center justify-center gap-3'>
			<Title>Tic Tac Toe</Title>
			{/* tools */}
			<Bar handleRestartGame={handleRestartGame} player={player} doneSteps={doneSteps} />
			{/* result */}
			<AnimatePresence>
				{gameResult && (
					<Modal>
						<b>
							{gameResult === 'draw'
								? 'Game is a draw'
								: gameResult === 'x'
									? 'Game win is "x" player!'
									: 'Game win is "o" player!'}
						</b>
					</Modal>
				)}
			</AnimatePresence>
			{/* cells */}
			<div className='flex border'>
				{cellCondition.map((rows, i) => (
					<div className='flex flex-col' key={i}>
						{rows.map((item, j) => (
							<button
								type='button'
								disabled={!!gameResult}
								className='h-24 w-24 cursor-pointer border text-center text-6xl transition-colors hover:bg-gray-100'
								onClick={() => handleClick(i, j)}
								key={j}
							>
								<AnimatePresence>
									{item && (
										<motion.span
											key={`${i}-${j}-${item}`}
											initial={{ opacity: 0, scale: 0.5 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.5 }}
											transition={{ type: 'spring', stiffness: 400, damping: 25 }}
										>
											{item}
										</motion.span>
									)}
								</AnimatePresence>
							</button>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
