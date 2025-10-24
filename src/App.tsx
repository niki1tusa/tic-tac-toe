import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

import Bar from './Bar';
import Title from './Title';

// TODO: победа по диагонали
function App() {
	const [cellCondition, setCellCondition] = useState(
		Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ''))
	);
	const [player, setPlayer] = useState<'x' | 'o'>('x');
	const [currentStep, setCurrentStep] = useState<number>(1);
	const [gameResult, setGameResult] = useState<null | 'draw' | 'x' | 'o'>(null);
	const handleClick = (i: number, j: number) => {
		setCellCondition(prev => {
			const instance = prev.map(item => [...item]);
			console.log(instance[i]);
			// step
			if (!instance[i][j]) {
				if (player === 'o') {
					instance[i][j] = 'o';
				} else {
					instance[i][j] = 'x';
				}
			}
			// condition win
			if (currentStep === 9 && instance.flat().every(cell => cell !== '')) {
				setGameResult('draw');
			}
			if (instance[i].every(item => item === 'x')) {
				setGameResult(player);
			}
			if (
				i > 0 &&
				instance[0][j] === player &&
				instance[1][j] === player &&
				instance[2][j] === player
			) {
				setGameResult(player);
			}
			if (
				(instance[0][0] === player && instance[1][1] === player && instance[2][2] === player) ||
				(instance[2][0] === player && instance[1][1] === player && instance[0][2] === player)
			) {
				setGameResult(player);
			}
			setPlayer(player === 'x' ? 'o' : 'x');
			setCurrentStep(prev => prev + 1);
			return instance;
		});
	};
	const handleRestartGame = () => {
		setCellCondition(prev => {
			return prev.map(item => item.map(() => ''));
		});
		setPlayer('x');
		// TODO: setCurrentStep - срабытывает два раза!
		setCurrentStep(1);
		setGameResult(null);
	};

	// reset game setting before result
	useEffect(() => {
		if (!gameResult) return;
		const timer = setTimeout(() => {
			handleRestartGame();
		}, 3000);
		return () => clearTimeout(timer);
	}, [gameResult]);
	return (
		<div className='flex h-screen w-full flex-col items-center justify-center gap-3'>
			<Title>Tic Tac Toe</Title>
			{/* tools */}
			<Bar handleRestartGame={handleRestartGame} player={player} currentStep={currentStep} />
			{/* result */}
			<b>
				{currentStep > 5 && gameResult
					? gameResult === 'draw'
						? 'Game is a draw'
						: gameResult === 'x'
							? 'Game win is "x" player!'
							: 'Game win is "o" player!'
					: ''}
			</b>
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
