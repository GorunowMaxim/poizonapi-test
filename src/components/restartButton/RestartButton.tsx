import useTypingStore from '../../app/store/store';

import './styles.scss';

import restartIcon from '/src/assets/images/restart.svg';

const RestartButton = () => {
	const restartTyping = useTypingStore((state) => state.restartTyping);
	return (
		<button onClick={restartTyping} className='restart-button'>
			<img src={restartIcon} alt='restart' />
		</button>
	);
};

export default RestartButton;
