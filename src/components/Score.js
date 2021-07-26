import { sendEmoji } from '../helpers';

const Score = ({ score, gameOver }) => {
	const emoji = gameOver && sendEmoji(score);
	const cheerUp = !gameOver && score ? '🤩' : '';
	return (
		<h2>
			Your Score : {score} {emoji} {cheerUp}
		</h2>
	);
};
export default Score;
