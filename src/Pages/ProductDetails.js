import CardDetails from "../components/elements/cardDetails";
import "./ProductDetails.css"
import RectangleButton from "../components/ui/RectangleButton";
import BasketButton from "../components/ui/BasketButton";
import ButtonBack from "../components/ui/ButtonBack";


import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToBasketAction } from "../store/basketStore";

import { v4 as uuidv4 } from 'uuid'



function ProductDetails() {
	const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const addToBasket = (product) => dispatch(addToBasketAction(product));

  const totalPrice = basket
    .map((product) => product.price)
    .reduce((sum, a) => sum + a, 0);

  const count = 0;
  let totalCount;

  function nameText(count) {
    if (count === 1) {
      return "товар";
    } else if (count > 1 && count < 5) {
      return "товара";
    } else {
      return "товаров";
    }
  }

	return (
    <div className="ProductDetails">
      <header className="details__header">
				<div className="wrapper">
						<Link to="/">
							<ButtonBack />
						</Link>

						<div className="products__cart">
            <div className="products__cart-text">
              {totalCount} {nameText(count)} <br></br>на сумму {totalPrice} ₽
            </div>

            <Link to={"/basket"} className="products__cart-icon">
              <BasketButton></BasketButton>
            </Link>

            <RectangleButton text={"Выйти"}></RectangleButton>
          </div>
					</div>
			</header>
			<main className="details__card">
				<CardDetails 
					img={'/images/mussels.png'}
					name={'Мидии в винном соусе'}
					description={'Это очень полезное и вкусное блюдо. Мидии богаты белком, железом, фосфором и различными витаминами.Это очень полезное и вкусное блюдо. Мидии богаты белком, железом, фосфором и различными витаминами.Это очень полезное и вкусное блюдо. Мидии богаты белком, железом, фосфором и различными витаминами.'}
					price={2700}
					weight={500}
        />
				
				
			</main>
    </div>
  );
}

export default ProductDetails;