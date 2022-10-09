import "./Basket.css";
import CardBasket from "../components/elements/cardBasket";
import ButtonBack from "../components/ui/ButtonBack";
import RectangleButton from "../components/ui/RectangleButton";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid'

function Basket() {
  const basket = useSelector((state) => state.basket);

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

          <p className="cart__header-text">Корзина с выбранными товарами</p>

          <RectangleButton text={"Выйти"} />
        </div>
      </header>

      <div className="container-cart">
        <main className="cart__cards">

          {basket.map((product) => {
            return (
              <CardBasket
								key={uuidv4()}
								// key={product.id}
                img={product.img}
                name={product.name}
                price={product.price}
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
          <RectangleButton text={"Оформить заказ"} />
        </div>
      </footer>
    </div>
  );
}

export default Basket;