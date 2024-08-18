import ControlPanel from '../widgets/controlPanel/ControlPanel';
import TypingPlate from '../widgets/typingPlate/typingPlate';
import './App.scss';

function App() {
	return (
		<div className='wrapper'>
			<main className='main'>
				<ControlPanel />
				<TypingPlate />
			</main>
		</div>
	);
}

export default App;
