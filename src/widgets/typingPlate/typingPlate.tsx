import { useCallback, useEffect } from 'react';

import useTypingStore from '../../app/store/store';

import { text } from '../../assets/text/text';
import './styles.scss';

const TypingBoard = ({ currentString, typedText }: { currentString: string; typedText: string[] }) => {
	return (
		<div className='typing-plate'>
			<div className='typing-plate__text'>
				{currentString.split('').map((sign: string, index) => {
					let cls = '';
					if (typedText[index]) {
						cls = typedText[index] === sign ? 'letter_correct' : 'letter_wrong';
					}
					return (
						<div key={index} className={`letter ${cls}`}>
							{sign === ' ' ? '_' : sign}
						</div>
					);
				})}
			</div>
		</div>
	);
};

const TypingPlate = () => {
	const state = useTypingStore((state) => state);
	const {
		wpm,
		mistakes,
		isFinished,
		isPaused,
		stringIndex,
		typedText,
		updateCorrectTypedText,
		updateWrongTypedText,
		incrementStringIndex,
		incrementWpm,
	} = state;

	const currentString = text[stringIndex];

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (isPaused) return;

			const resultString = typedText.join('');
			if (currentString === resultString) {
				incrementStringIndex();
			}

			const currentKey = currentString[typedText.length - 1];
			if (e.key === currentKey) {
				updateCorrectTypedText(e.key);
				if (currentString[typedText.length] === ' ' || currentString[typedText.length] === null) {
					incrementWpm();
				}
			} else {
				updateWrongTypedText(e.key);
			}
		},
		[typedText, isPaused]
	);

	useEffect(() => {
		if (!isFinished) {
			window.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleKeyDown, isFinished]);

	return !isFinished ? (
		<TypingBoard currentString={currentString} typedText={typedText} />
	) : (
		<div className='result-panel'>
			wpm: {wpm} mistakes: {mistakes}
		</div>
	);
};

export default TypingPlate;
