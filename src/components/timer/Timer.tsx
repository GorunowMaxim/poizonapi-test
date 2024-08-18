import { useEffect } from 'react';

import useTypingStore from '../../app/store/store';

import './styles.scss';

const Timer = () => {
	const state = useTypingStore((state) => state);
	const { isPaused, timeRemaning, updateTimeRemaining, finishTyping } = state;

	useEffect(() => {
		let interval: number | null = null;

		if (!isPaused) {
			if (timeRemaning > 0) {
				interval = setInterval(() => {
					updateTimeRemaining(timeRemaning - 1);
				}, 1000);
			} else {
				finishTyping();
				clearInterval(interval!);
			}
		}

		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	}, [isPaused, timeRemaning]);
	return <div className='timer'>{timeRemaning}</div>;
};

export default Timer;
