import classes from './RectangleButton.module.css'

export default function RectangleButton({ text, handleClick }) {
	return (
		<button	
		className={classes.button}
		onClick={handleClick}
		>{text}
		</button>
	)
}
