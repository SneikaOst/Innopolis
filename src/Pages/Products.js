import Card from '../components/elements/card';
import './Products.css'
import BasketButton from '../components/ui/BasketButton';
import RectangleButton from '../components/ui/RectangleButton';
import { Link } from 'react-router-dom'

import { products } from '../menuList';


import { useSelector, useDispatch } from 'react-redux'
import { addToBasketAction } from '../store/basketStore'


// export default function Products () {
// 	const basket = useSelector((state) => state.basket)
// 	const dispatch = useDispatch();
  
// 	const addToBasket = (product) => dispatch(addToBasketAction(product));
	
	
// 	const totalPrice = basket
// 	  .map((product) => product.price)
// 	  .reduce((sum, a) => sum + a, 0);
	  
// 	return (
// 	  <>
// 		<header className="products__header">
// 		  <h1 className="products__header-text">Наша продукция</h1>
// 		  <div style={{color: "white"}}>
// 			Всего: {totalPrice}
// 			<Link to="/basket">
// 			  <BasketButton />
// 			</Link>
// 		  </div>
// 		</header>
// 		<div className="cards">
// 		  {products
// 			// .map(({ price, amount, weigth, ...card }) => ({
// 			//   price: price && price.toLocaleString('ru'),
// 			//   amount: amount && amount.toLocaleString('ru'),
// 			//   weigth: weigth && weigth.toLocaleString('ru'),
// 			//   ...card,
// 			// }))
// 			.map((product) => {
// 			  const { id, img, title, text } = product
// 			  const price = product.price?.toLocaleString('ru')
// 			  const amount = product.amount?.toLocaleString('ru')
// 			  const weigth = product.weigth?.toLocaleString('ru')
// 			  return (
// 				<div key={id} className="cards__wrapper">
// 				  <Card
// 					title={title}
// 					img={img}
// 					text={text}
// 					price={price}
// 					amount={amount}
// 					weigth={weigth}
// 					onButtonClick={() => addToBasket(product)}
// 				  />
// 				</div>
// 			  )
// 			})}
// 		</div>
// 	  </>
// 	)
//   }

function Products() {

	const basket = useSelector((state) => state.basket)
	const dispatch = useDispatch();
	const addToBasket = (product) => dispatch(addToBasketAction(product));

	const totalPrice = basket
    .map((product) => product.price)
    .reduce((sum, a) => sum + a, 0);

	const count = 0

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
				{/* <div className="products__cart-text">
					3 {nameText(count)} <br>
				</br>на сумму 3 500 ₽
				</div> */}
				<div className="products__cart-text">
					{count} {nameText(count)} <br>
				</br>на сумму {totalPrice} ₽
				</div>

				<Link to={'/basket'}  className="products__cart-icon">
					<BasketButton></BasketButton>
				</Link>

				<RectangleButton text={"Выйти"}></RectangleButton>
			

			</div>
		</header>

		<main className="products__cards">

			{/* {products.map(item => {
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
			})} */}

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