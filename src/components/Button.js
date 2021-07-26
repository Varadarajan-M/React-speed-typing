const Button = ({ reset }) => (
	<button
		onClick={() => {
			reset();
		}}
	>
		Reset
	</button>
);
export default Button;
