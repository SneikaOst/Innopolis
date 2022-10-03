import './Cart.css'
import CardCart from '../components/elements/cardCart';
import ButtonBack from '../components/ui/buttonBack';
import { products } from '../menuList';


function Cart() {

	return (
	<div className="Cart">
		<div className="container">
			
			<header className="cart__header">
				<a href=''><ButtonBack /></a>
				<p className="cart__header-text">Корзина с выбранными товарами</p>           
			</header>

			<main className="cart__cards">
				{products.map(item => {
				return (
				<CardCart 
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
					<button className='footer__button'>Оформить заказ</button>
				</div>
			</footer>
		</div>  
	);
}

export default Cart;