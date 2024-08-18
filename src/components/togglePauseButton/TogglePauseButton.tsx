import useTypingStore from '../../app/store/store';

import './styles.scss';

import stopIcon from '/src/assets/images/stop.svg';
import playIcon from '/src/assets/images/play.svg';

const TooglePauseButton = () => {
	const state = useTypingStore((state) => state);
	const { togglePause, isPaused, isFinished } = state;

	const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === ' ' || e.key === 'Enter') {
			e.preventDefault();
		}
	};
	return (
		<button onClick={() => !isFinished && togglePause()} onKeyDown={handleKeyDown} className='stop-button'>
			{isPaused || isFinished ? <img src={playIcon} alt='play' /> : <img src={stopIcon} alt='stop' />}
		</button>
	);
};

export default TooglePauseButton;
