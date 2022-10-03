import Card from '../components/elements/card';
import './Products.css'

import { products } from '../menuList';

function Products() {

	return (
	<div className="Products">
		<div className="container">
		
		<header className="products__header">
			<p className="products__header-text">наша продукция</p>
			<div className="products__cart">
			<div className="products__cart-text">3 товара <br></br>на сумму 3 500 ₽</div>
			<a  href="#" className="products__cart-icon"></a>
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