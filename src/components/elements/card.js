import './card.css'
import CardButton from '../ui/CardButton';

// import { useDispatch } from 'react-redux'
// import { addProductInBasket } from '../../store/reducers/basket'
// import { v4 as uuidv4 } from 'uuid'

function Card ({ img, name, description, price, weight, onButtonClick }) {

// function Card ({ id=0, img, name, description, price, weight }) {

// 	const dispatch = useDispatch()

// 	const addProduct = () => {
// 		const item = {
// 			id: id,
// 			idx: uuidv4(),
// 			name: name,
// 			img: img,
// 			price: price
// 		}
// 		dispatch(addProductInBasket(item))
// 	}

	return (
		<div className="card">
			<img src={img} alt={name} />
			<h1 className="card__name">{name}</h1>
			<p className="card__description">{description}</p>
			<div className="card__bottom">
				<div className="card__price">{price} ₽ <span> / {weight}</span>
				</div>
				
				<CardButton onClick={onButtonClick}/>

			</div>
		</div>
	);
}

export default Card