import { motion } from 'motion/react';

export default function Modal({ children }: { children: React.ReactNode }) {
	return (
		<>
			<motion.div
				key='overlay'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className='absolute top-0 z-20 h-screen w-full bg-black/50'
			/>
			<motion.div
				key='modal'
				initial={{ opacity: 0, scale: 0.5, y: 100 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.5, y: 100 }}
				transition={{ type: 'spring', stiffness: 400, damping: 25 }}
				className='absolute top-1/2 left-1/2 z-40 flex min-h-[100px] min-w-[300px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded bg-white shadow shadow-neutral-400'
			>
				{children}
			</motion.div>
		</>
	);
}
