import "./card.css";
import CardButton from "../ui/CardButton";

function Card({ img, name, description, price, weight, onButtonClick }) {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h1 className="card__name">{name}</h1>
      <p className="card__description">{description}</p>
      <div className="card__bottom">
        <div className="card__price">
          {price} ₽ <span> / {weight}</span>
        </div>

        <CardButton onClick={onButtonClick} />
      </div>
    </div>
  );
}

export default Card;
