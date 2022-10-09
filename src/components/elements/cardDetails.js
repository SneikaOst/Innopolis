import "./cardDetails.css";
import RectangleButton from "../ui/RectangleButton";

function CardDetails({ img, name, description, price, weight, onButtonClick }) {
  return (
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
            {price} ₽ <span> / {weight} г</span>
          </div>
          <RectangleButton onClick={onButtonClick} text="В корзину" />
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
