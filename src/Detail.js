import { useLocation } from "react-router-dom";
import "./Detail.css";

export default function Detail() {
    const { state } = useLocation();
    const { title, genre, description, img } = state || {};  // Destructure the passed state

    return (
        <div className="detail-container">
            <img src={img} alt={title} className="detail-img" />
            <div className="detail-content">
                <h1 className="detail-title">{title}</h1>
                <p className="detail-genre">{genre}</p>
                <p className="detail-description">{description}</p>
            </div>
        </div>
    );
}
