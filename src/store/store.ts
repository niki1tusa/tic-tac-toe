import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TResult } from '../types/global.types';
interface IHistoryStore {
	history: TResult[];
	addGameResult: (result: TResult) => void;
}
export const useHistoryStore = create<IHistoryStore>()(persist(set => ({
	history: [],
	addGameResult: result =>
		set(state => ({
			history: [...state.history, result],
		})),
}), {
	 name: 'history-game-storage'
}));
