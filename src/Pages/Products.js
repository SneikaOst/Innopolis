import Card from '../components/elements/card';
import './Products.css'
import BasketButton from '../components/ui/BasketButton';
import RectangleButton from '../components/ui/RectangleButton';
import { Link } from 'react-router-dom'

import { products } from '../menuList';


import { useSelector, useDispatch } from 'react-redux'
import { addToBasketAction } from '../store/basketStore'


function Products() {

	const basket = useSelector((state) => state.basket)
	const dispatch = useDispatch();
	const addToBasket = (product) => dispatch(addToBasketAction(product));

	const totalPrice = basket
	.map((product) => product.price)
    .reduce((sum, a) => sum + a, 0);

	
	const count = 0
	let totalCount

	function nameText (count) {
		if (count === 1) {
		return 'товар'
		} else if (count > 1 && count < 5) {
		return 'товара'
		} else {
		return 'товаров'
		}
	}

	return (
	<div className="Products">
		<div className="container">
		
		<header className="products__header">
			<h1 className="products__header-text">наша продукция</h1>
			<div className="products__cart">
				<div className="products__cart-text">
					{totalCount} {nameText(count)} <br>
				</br>на сумму {totalPrice} ₽
				</div>

				<Link to={'/basket'}  className="products__cart-icon">
					<BasketButton></BasketButton>
				</Link>

				<RectangleButton text={"Выйти"}></RectangleButton>
			

			</div>
		</header>

		<main className="products__cards">

			{products.map((product) => {
				const { id, img, name, description } = product
				const price = product.price?.toLocaleString('ru')
				const weight = product.weight?.toLocaleString('ru')

				return (
					
					<Card 
						key={id}
						img={img}
						name={name}
						description={description}
						price={price}
						weight={weight}
						onButtonClick={() => addToBasket(product)}
					/>	
				
				)
			})}

		</main>
		
		</div>

	</div>  
	);
}

export default Products;