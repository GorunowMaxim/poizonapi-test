import RestartButton from '../../components/restartButton/RestartButton';
import TooglePauseButton from '../../components/togglePauseButton/TogglePauseButton';
import TimeLimits from '../../components/timeLimits/TimeLimits';
import Timer from '../../components/timer/Timer';

import './styles.scss';

const ControlPanel = () => {
	return (
		<div className='control-panel'>
			<Timer />
			<RestartButton />
			<TooglePauseButton />
			<TimeLimits />
		</div>
	);
};

export default ControlPanel;
