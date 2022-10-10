import "./card.css";
import CardButton from "../ui/CardButton";
import { Link } from "react-router-dom";

function Card({ img, name, description, price, weight, onClick, url }) {
  return (
    <div className="card">
      <Link to={url} className="card__link">
        <img src={img} alt={name} />
        <h1 className="card__name">{name}</h1>
        <p className="card__description">{description}</p>
      </Link>

      <div className="card__bottom">
        <div className="card__price">
          {price} ₽ <span> / {weight}</span>
        </div>

        <CardButton onClick={onClick} />
      </div>
    </div>
  );
}

export default Card;
