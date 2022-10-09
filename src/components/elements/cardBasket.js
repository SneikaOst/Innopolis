import "./cardBasket.css";
import ButtonDelete from "../ui/ButtonDelete";
import { Link } from "react-router-dom";

function CardBasket({ img, name, price }) {
  return (
    <div className="card-basket cards">
      <Link to="/details" className="card__link">
        <div className="card-basket">
          <img src={img} alt="" />
          <h1 className="card-basket__name">{name}</h1>
        </div>
      </Link>
      <div className="card-basket__right">
        <div className="card-basket__price">{price} ₽ </div>
        <ButtonDelete />
      </div>
    </div>
  );
}

export default CardBasket;
