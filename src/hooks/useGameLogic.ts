import { useMemo, useState } from 'react';

export const useGameLogic = () => {
	const [cellCondition, setCellCondition] = useState(
		Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ''))
	);
	const doneSteps = useMemo(() => cellCondition.flat().filter(Boolean).length, [cellCondition]);
	const [player, setPlayer] = useState<'x' | 'o'>('x');
	const [gameResult, setGameResult] = useState<null | 'draw' | 'x' | 'o'>(null);

	const handleClick = (i: number, j: number) => {
		if (gameResult || cellCondition[i][j]) {
			return;
		}
		const instance = cellCondition.map(item => [...item]);

		if (player === 'o') {
			instance[i][j] = 'o';
		} else {
			instance[i][j] = 'x';
		}

		// condition win
		if (instance.flat().every(cell => cell !== '')) {
			setGameResult('draw');
		}
		if (instance[i].every(item => item === player)) {
			setGameResult(player);
		}
		if (instance[0][j] === player && instance[1][j] === player && instance[2][j] === player) {
			setGameResult(player);
		}
		if (
			(instance[0][0] === player && instance[1][1] === player && instance[2][2] === player) ||
			(instance[2][0] === player && instance[1][1] === player && instance[0][2] === player)
		) {
			setGameResult(player);
		}
		setPlayer(player === 'x' ? 'o' : 'x');
		setCellCondition(instance);
	};
	const handleRestartGame = () => {
		setCellCondition(prev => {
			return prev.map(item => item.map(() => ''));
		});
		setPlayer('x');
		setGameResult(null);
	};

	return {
		cellCondition,
		setCellCondition,
		player,
		setPlayer,
		doneSteps,
		gameResult,
		setGameResult,
		handleClick,
		handleRestartGame,
	};
};
