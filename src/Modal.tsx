export default function Modal({gameResult}:{game}) {
	return (
		<b>
			{currentStep > 5 && gameResult
				? gameResult === 'draw'
					? 'Game is a draw'
					: gameResult === 'x'
						? 'Game win is "x" player!'
						: 'Game win is "o" player!'
				: ''}
		</b>
	);
}
