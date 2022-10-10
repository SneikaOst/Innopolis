import "./Basket.css";
import CardBasket from "../components/elements/cardBasket";
import ButtonBack from "../components/ui/ButtonBack";
import Button from "../components/ui/Button";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeFromBasketAction } from "../store/basketStore";



import { v4 as uuidv4 } from 'uuid'

function Basket() {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const removeFromBasket = (product) => dispatch(removeFromBasketAction(product));

  const totalPrice = basket
    .map((product) => product.price)
    .reduce((sum, a) => sum + a, 0);

  console.log("basket", basket);

  return (
    <div className="Cart">
      <header className="cart__header">
        <div className="wrapper">
          <Link to="/">
            <ButtonBack />
          </Link>

          <h1 className="cart__header-text">Корзина с выбранными товарами</h1>

          <Link to="/form">
            <Button>Выйти</Button>
          </Link>
        </div>
      </header>

      <div className="container-cart">
        <main className="cart__cards">

          {basket.map((product) => {
            return (
              <CardBasket
                // idx={uuidv4(product.id)}
								key={uuidv4(product.id)}
                img={product.img}
                name={product.name}
                price={product.price}
                url={`/details/${product.id}`}
                onClick={() => removeFromBasket(product)}

              />
            );
          })}
        </main>
      </div>
      <footer className="cart__footer">
        <div className="container-cart footer">
          <p className="footer__text">
            Заказ на сумму: <span className="card__price">{totalPrice} ₽</span>
          </p>
          <Button>Оформить заказ</Button>
        </div>
      </footer>
    </div>
  );
}

export default Basket;