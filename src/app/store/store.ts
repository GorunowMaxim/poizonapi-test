import { create } from 'zustand';

type TypingState = {
	isFinished: boolean;
	isPaused: boolean;
	typedText: string[];
	stringIndex: number;
	timeLimit: number;
	timeRemaning: number;
	mistakes: number;
	wpm: number;
};

type ActionTyping = {
	updateCorrectTypedText: (text: string) => void;
	updateWrongTypedText: (text: string) => void;
	restartTyping: () => void;
	incrementStringIndex: () => void;
	incrementWpm: () => void;
	togglePause: () => void;
	setTimeLimit: (time: number) => void;
	updateTimeRemaining: (count: number) => void;
	finishTyping: () => void;
};

const useTypingStore = create<TypingState & ActionTyping>((set) => ({
	isFinished: false,
	isPaused: true,
	typedText: [''],
	stringIndex: 0,
	timeLimit: 60,
	timeRemaning: 60,
	mistakes: 0,
	wpm: 0,
	updateCorrectTypedText: (text: string) =>
		set((state) => ({
			typedText: [...state.typedText.slice(0, state.typedText.length - 1), text, ''],
		})),
	updateWrongTypedText: (text: string) =>
		set((state) => ({
			typedText: [...state.typedText.slice(0, state.typedText.length - 1), text],
			mistakes: state.mistakes + 1,
		})),
	restartTyping: () =>
		set((state) => ({
			isFinished: false,
			isPaused: true,
			typedText: [''],
			stringIndex: 0,
			timeRemaning: state.timeLimit,
			mistakes: 0,
			wpm: 0,
		})),
	incrementStringIndex: () => set((state) => ({ stringNumber: state.stringIndex + 1, typedText: [''] })),
	incrementWpm: () => set((state) => ({ wpm: state.wpm + 1 })),
	togglePause: () => set((state) => ({ isPaused: !state.isPaused })),
	setTimeLimit: (time: number) =>
		set(() => ({
			isFinished: false,
			isPaused: true,
			typedText: [''],
			stringIndex: 0,
			timeLimit: time,
			timeRemaning: time,
			mistakes: 0,
			wpm: 0,
		})),
	updateTimeRemaining: (count: number) => set(() => ({ timeRemaning: count })),
	finishTyping: () => set(() => ({ isFinished: true })),
}));

export default useTypingStore;
