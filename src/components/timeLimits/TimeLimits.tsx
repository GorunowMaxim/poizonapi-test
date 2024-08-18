import useTypingStore from '../../app/store/store';

import './styles.scss';

const timeLimits: number[] = [15, 30, 60, 120];

const TimeLimits = () => {
	const state = useTypingStore((state) => state);
	const { timeLimit, setTimeLimit, updateTimeRemaining } = state;

	return (
		<div className='time-limits'>
			{timeLimits.map((time, index) => {
				const modifcator = time === timeLimit ? 'time-limit_active' : '';
				return (
					<button
						onClick={() => {
							setTimeLimit(time), updateTimeRemaining(time);
						}}
						key={index}
						className={`time-limit ${modifcator}`}
					>
						{time}
					</button>
				);
			})}
		</div>
	);
};

export default TimeLimits;
