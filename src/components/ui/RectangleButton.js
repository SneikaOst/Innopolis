import classes from './RectangleButton.module.css'

export default function RectangleButton({ text, handleClick, submit }) {
	return (
		<button	
		className={classes.button}
		onClick={handleClick}
		type={submit}>
			{text}
		</button>
	)
}
