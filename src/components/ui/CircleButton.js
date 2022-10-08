import classes from './CircleButton.module.css'

export default function CircleButton({ handleClick, size = 30, color = '#ffffff', children }) {
	return (
		<button
			className={classes.button}
			onClick={handleClick}
			style={{ width: size, height: size, color: color }}
		>
			{children}
		</button>
	)
}
