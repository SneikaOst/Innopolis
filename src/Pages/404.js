import "./404.css";
import { Link } from "react-router-dom";
import RectangleButton from "../components/ui/RectangleButton";

function NotFound() {
  return (
    <div className="NotFound">
			<div className="container">
			<h1 className="error__title">404</h1>
      <p className="error__text">Данной страницы не существует</p>
      <Link to="/">
				<RectangleButton text={'На главную'} />
			</Link>
			</div>
      
    </div>
  );
}

export default NotFound;
