import classes from './RectangleButton.module.css'

export default function RectangleButton({ text, onClick, submit }) {
	return (
		<button	
		className={classes.button}
		onClick={onClick}
		type={submit}>
			{text}
		</button>
	)
}
