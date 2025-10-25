import { SquareX } from 'lucide-react';

import { useHistoryStore } from '../store/store';

export default function ListHistoryGame({ setIsShow }: { setIsShow: (arg: boolean) => void }) {
	const history = useHistoryStore(s => s.history);
	const showResult = history.length > 10 ? history.slice(history.length - 10): history
	return (
		<div className='flex flex-col gap-3 p-3'>
			<div className='flex w-full items-center justify-between gap-3 text-2xl'>
				History game: <SquareX onClick={() => setIsShow(false)} color='red' />
			</div>
			<ul className='flex flex-col gap-1'>
				{showResult.map((result, i) => (
					<li key={i}>
						{i + 1}&#41; Game result: {result}
					</li>
				))}
			</ul>
		</div>
	);
}
