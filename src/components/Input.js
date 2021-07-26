import { forwardRef } from 'react';

const Input = forwardRef(({ typeChecker }, ref) => {
	return (
		<input ref={ref} onKeyUp={(e) => typeChecker(e.target.value, e.key)} />
	);
});
export default Input;
