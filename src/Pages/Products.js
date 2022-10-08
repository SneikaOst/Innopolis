import Card from '../components/elements/card';
import './Products.css'
import BasketButton from '../components/ui/BasketButton';
// import RectangleButton from '../components/ui/RectangleButton';
// import { Link } from 'react-router-dom'

import { products } from '../menuList';

function Products() {

	return (
	<div className="Products">
		<div className="container">
		
		<header className="products__header">
			<p className="products__header-text">наша продукция</p>
			<div className="products__cart">
			<div className="products__cart-text">3 товара <br></br>на сумму 3 500 ₽</div>
			<div className="products__cart-icon">
				<BasketButton></BasketButton>
			</div>
			{/* <a href="/basket" className="products__cart-icon">
					<BasketButton />
				</a>
				
				<RectangleButton 
				text={"Выйти"}
				/> */}

			</div>
		</header>

		<main className="products__cards">

			{products.map(item => {
			return (
				<Card 
				key={item.id}
				img={item.img}
				name={item.name}
				description={item.description}
				price={item.price}
				weight={item.weight}
			/>
			)
			})}

		</main>
		
		</div>

	</div>  
	);
}

export default Products;