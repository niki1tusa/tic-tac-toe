import { create } from 'zustand';

interface IHistoryStore {
	history: string[];
	addGameResult: (result: string) => void;
}
export const useHistoryStore = create<IHistoryStore>(set => ({
	history: [],
	addGameResult: result =>
		set(state => ({
			history: [...state.history, result],
		})),
}));
