import './Basket.css'
import CardBasket from '../components/elements/cardBasket';
import ButtonBack from '../components/ui/ButtonBack';
import RectangleButton from '../components/ui/RectangleButton';


// import { Link } from 'react-router-dom';

import { products } from '../menuList';


function Basket() {

	return (
	<div className="Cart">

		<header className="cart__header">
			<div className="wrapper">
			
			{/* <Link to="/">Назад</Link> */}

			<ButtonBack />
			<p className="cart__header-text">Корзина с выбранными товарами</p>  

			<RectangleButton 
					text={'Выйти'}
			/>     
			</div>
			
		</header>

		<div className="container">
			
			<main className="cart__cards">
				{products.map(item => {
				return (
				<CardBasket 
					key={item.id}
					img={item.img}
					name={item.name}
					price={item.price}
				/>
				)
			})
			}
			</main>
			
			</div>
			<footer className="cart__footer">
				<div className="container footer">
					<p className="footer__text">Заказ на сумму: <span className='card__price'>6 220 ₽</span></p>
					<RectangleButton 
						text={'Оформить заказ'}
					/>
				</div>
			</footer>
		</div>  
	);
}

export default Basket;