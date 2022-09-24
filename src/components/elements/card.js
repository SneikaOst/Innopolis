import './card.css'
import CardButton from '../ui/buttonCard';

function Card ({ url, title, description, price, weight }) {
	return (
		<div className="card">
			<img src={url} alt="" />
			<h1 className="card__title">{title}</h1>
			<p className="card__description">{description}</p>
			<div className="card__bottom">
				<div className="card__price">{price} ₽ <span>/ {weight} г</span>
				</div>
				
				<CardButton />
				
			</div>
		</div>
	);
}

export default Card