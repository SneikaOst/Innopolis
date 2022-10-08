import './Basket.css'
import CardBasket from '../components/elements/cardBasket';
import ButtonBack from '../components/ui/ButtonBack';
import RectangleButton from '../components/ui/RectangleButton';

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

// import { products } from '../menuList';


function Basket() {

  const basket = useSelector(state => state.basket.basket)
  console.log('basket', basket)


	return (
	<div className="Cart">

		<header className="cart__header">
			<div className="wrapper">
			
			<Link to="/"><ButtonBack /></Link>
			
			<p className="cart__header-text">Корзина с выбранными товарами</p>  

			<RectangleButton 
					text={'Выйти'}
			/>     
			</div>
			
		</header>

		<div className="container-cart">
			
			<main className="cart__cards">
        
      {/* {products.map(item => {
				return (
				<CardBasket 
					key={item.id}
					img={item.img}
					name={item.name}
					price={item.price}
				/>
				)
      })} */}

        {basket.map(item => {
          return (
            <CardBasket
              img={item.img}
              name={item.name}
              price={item.price}
            />
            )
          })}
			</main>
			
			</div>
			<footer className="cart__footer">
				<div className="container-cart footer">
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


// import './Basket.css'

// import { useSelector } from 'react-redux'

// import CardBasket from '../components/elements/cardBasket'

// function Basket () {
//   const basket = useSelector(state => state.basket.basket)
//   console.log('basket', basket)

//   return (
//     <div className="basket">
//       <div className="basket-wrapper">
//         <header className='basket-header'>
//           Корзина с выбранными товарами
//         </header>

//         <div className="basket-products">
//           {basket.map(item => {
//             return (
//               <CardBasket
//                 img={item.url}
//                 title={item.title}
//                 price={item.price}
//               />
//             )
//           })}
//         </div>
//       </div>

//       <footer className="basket-footer">
//         <div className="basket-wrapper">
//           Заказ на сумму:
//         </div>
//         </footer>
//     </div>
//   )
// }

// export default Basket