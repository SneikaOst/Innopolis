import classes from './Button.module.css'

export default function Button({ onClick, submit, children }) {
	return (
		<button	
		className={classes.button}
		onClick={onClick}
		type={submit}>
			{children}
		</button>
	)
}
