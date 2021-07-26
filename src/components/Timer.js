import { useEffect, useState } from 'react';

const Timer = ({ reset, getTimerValue }) => {
	const [timer, setTimer] = useState(+7);
	const runTimer = () => {
		setTimer((prevTime) => prevTime - 1);
		getTimerValue(timer);
	};
	useEffect(() => {
		const timerId = setInterval(() => runTimer(), 1000);
		reset && setTimer(+7);
		return () => clearInterval(timerId);
	});

	return <div>{timer > 0 && <h2> {timer}s </h2>}</div>;
};
export default Timer;
