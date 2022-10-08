import Card from '../components/elements/card';
import './Products.css'
import BasketButton from '../components/ui/BasketButton';
import RectangleButton from '../components/ui/RectangleButton';
import { Link } from 'react-router-dom'

import { products } from '../menuList';

function Products() {

  const count = 1

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
			<p className="products__header-text">наша продукция</p>
			<div className="products__cart">
				<div className="products__cart-text">
					3 {nameText(count)} <br>
				</br>на сумму 3 500 ₽
				</div>
				<Link to={'/basket'}  className="products__cart-icon">
					<BasketButton></BasketButton>
				</Link>

				<RectangleButton text={"Выйти"}></RectangleButton>
			

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


// import Card from '../components/elements/card';
// import './Products.css'

// import { products } from '../menuList';

// import { Link } from 'react-router-dom'

// function Products() {
//   const count = 1

//   function nameText (count) {
//     if (count === 1) {
//       return 'товар'
//     } else if (count > 1 && count < 5) {
//       return 'товара'
//     } else {
//       return 'товаров'
//     }
//   }

//   return (
//     <div className="products">
//       <div className="container">
//         <header className="products__header">
//           наша продукция

//           / 3 {nameText(count)}

//           <Link to={'/basket'}>Корзина</Link>
//         </header>

//         <main className="products__cards">
//           {
//             products.map((item) => {
//               return (
//                 <Card
//                   key={item.id}
//                   id={item.id}
//                   url={item.url}
//                   title={item.title}
//                   description={item.description}
//                   price={item.price}
//                   width={item.weight}
//                   shownSale={item.sale}
//                 />
//               )
//             })
//           }
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Products;
