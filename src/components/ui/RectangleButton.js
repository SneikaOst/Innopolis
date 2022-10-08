import classes from './RectangleButton.module.css'

export default function RectangleButton({ text }) {
	return (
		<button	className={classes.button}>{text}</button>
	)
}
