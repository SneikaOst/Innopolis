import "./Basket.css";
import CardBasket from "../components/elements/cardBasket";
import ButtonBack from "../components/ui/ButtonBack";
import Button from "../components/ui/Button";

// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

// import { removeFromBasketAction } from "../store/basketStore";

// import { addToBasketAction } from "../store/basketStore";

// import { removeProductBasket } from "../store/reducers/basketStore";

// import { v4 as uuidv4 } from 'uuid'

function Basket() {
  const basket = useSelector((state) => state.basket.basket);
  // const dispatch = useDispatch();

  // const removeProductBasket = (product) => dispatch(removeProductBasket(product));


  const totalPrice = basket
    .map((item) => item.price)
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

          {basket.map((item) => {
            return (
              <CardBasket
              
              key={item.idx}
              id={item.id}
              idx={item.idx}
              // idx={uuidv4(item.id)}
                // id={item.id}
                // idx={item.idx}
                // key={uuidv4(item.id)}
                // key={item.idx}
                img={item.img}
                name={item.name}
                price={item.price}
                url={`/details/${item.id}`}
                // onClick={() => removeProductBasket(product)}


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