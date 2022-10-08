import './cardBasket.css'
import ButtonDelete from '../ui/ButtonDelete';

function CardBasket ({ img, name, price }) {
	return (
		<div className="card">
			<img src={img} alt="" />
			<h1 className="card__name">{name}</h1>
			<div className="card__right">
				<div className="card__price">{price} ₽ </div>
				<ButtonDelete />
			</div>
			
			</div>
	);
}

export default CardBasket