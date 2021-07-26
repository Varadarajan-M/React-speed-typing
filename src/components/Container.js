import { useEffect, useState, useRef } from 'react';
import Button from './Button';
import Input from './Input';
import Score from './Score';
import Timer from './Timer';
import Title from './Title';
import Words from './Words';
import { focus, doValidation, getRandomWord, levelUpCheck } from '../helpers';

const Container = () => {
	const [word, setWord] = useState(getRandomWord(0));
	const [resetStatus, setResetStatus] = useState(false);
	const [showState, setShowState] = useState(true);
	const [score, setScore] = useState(0);
	const inputRef = useRef();

	useEffect(() => focus(inputRef), []);

	const resetTimer = () => {
		setResetStatus(true);
		setTimeout(() => {
			setResetStatus(false);
		}, 500);
	};
	const resetBtnHandler = () => {
		setScore(0);
		setWord(getRandomWord(score));
		setShowState(true);
		focus(inputRef);
		resetTimer();
	};
	const typeChecker = (typedWord, key) => {
		if (typedWord.toLowerCase() === word.toLowerCase()) {
			setScore((prevScore) => prevScore + 1);
			resetTimer();
			setWord(getRandomWord(score));
			inputRef.current.value = '';
			focus(inputRef);
		}
		doValidation(typedWord, key, score) &&
			setScore((prevScore) => prevScore - 1);
	};
	const getTimerValue = (time) => time === 1 && setShowState(false);

	return (
		<div className='container'>
			<Title text='Speed Typing💻⌨' />
			<Title
				text={showState ? 'Type the word shown below 👇' : 'Timeout⌛'}
			/>
			{levelUpCheck(score) && <Title text='Level Up 🚀' />}
			<Timer getTimerValue={getTimerValue} reset={resetStatus} />
			<Score gameOver={!showState} score={score} />
			{showState && <Words word={word} />}
			{showState && <Input ref={inputRef} typeChecker={typeChecker} />}
			<Button reset={resetBtnHandler} />
		</div>
	);
};

export default Container;
