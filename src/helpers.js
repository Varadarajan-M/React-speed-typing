import { Easywords, Mediumwords, Hardwords } from './words';

export const focus = (ref) => {
	setTimeout(() => {
		ref.current && ref.current.focus();
	}, 800);
};
export const doValidation = (typedWord, key, score) => {
	if (
		(key === 'Backspace' || key === 'Delete' || key === 'Control') &&
		score !== 0 &&
		typedWord.trim().length >= 0
	) {
		return true;
	}
};
export const getRandomWord = (score) => {
	if (score < 30) {
		return Easywords[Math.floor(Math.random() * Easywords.length)];
	} else if (score >= 30 && score < 60) {
		return Mediumwords[Math.floor(Math.random() * Mediumwords.length)];
	} else return Hardwords[Math.floor(Math.random() * Hardwords.length)];
};
export const levelUpCheck = (score) =>
	score > 0 && (score === 31 || score === 61);

export const sendEmoji = (score) => {
	if (score === 0) return '😐';
	else if (score < 50) return '🤝🤩';
	else if (score > 50 && score < 80) return '💪🤙🤩';
	else return '🔥💪🤩';
};
