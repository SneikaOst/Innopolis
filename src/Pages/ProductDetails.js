import {
  useNavigate,
  useParams,
} from "react-router-dom";
import "./ProductDetails.css";

import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";

import { addProductInBasket } from "../store/reducers/basketStore";


import ButtonBack from "../components/ui/ButtonBack";
import Button from "../components/ui/Button";
import BasketButton from "../components/ui/BasketButton";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();


  // const basket = useSelector((state) => state.basket)
  const dispatch = useDispatch();


  const addToBasket = (product) => dispatch(addProductInBasket(product));

  // const totalPrice = basket
  // .map((product) => product.price)
  // .reduce((sum, a) => sum + a, 0);

    const prices = useSelector(state => state.basket.pricesbasket)
  const count = useSelector(state => state.basket.countProducts);

  function nameText(count) {
    if (count === 1) {
      return "товар";
    } else if (count > 1 && count < 5) {
      return "товара";
    } else {
      return "товаров";
    }
  }



  const productList = useSelector((state) => state.product);
  const product = productList.find((e) => e.id === Number(productId));

  const navigate = useNavigate();

  if (!product) {
    return "";
  }

  const price = product.price?.toLocaleString("ru");
  const weight = product.weight?.toLocaleString("ru");
  const { img, name, description } = product;


  return (
    <div className="ProductDetails">
      <header className="details__header">
        <div className="wrapper">
          <ButtonBack onClick={() => navigate(-1)} />

          <div className="products__cart">
            <div className="products__cart-text">
              {count} {nameText(count)} <br></br>на сумму {prices} ₽
            </div>

            <Link to={"/basket"} className="products__cart-icon">
              <BasketButton></BasketButton>
            </Link>

            <Link to="/form">
              <Button>Выйти</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="details__card">
        <div className="card-details">
          <div>
            <img src={img} alt={name} className="card-details__img" />
          </div>
          <div className="card-details__content">
            <div className="card-details__text">
              <h1 className="card-details__name">{name}</h1>
              <p className="card-details__description">{description}</p>
            </div>

            <div className="card-details__bottom">
              <div className="card-details__price">
                {price} ₽ <span> / {weight}</span>
              </div>
              <Button onClick={() => addToBasket(product)}>В корзину</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
