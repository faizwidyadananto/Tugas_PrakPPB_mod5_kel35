import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./CardBig.css";

export default function CardBig({ title, genre, img, size, color, description }) {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the detail page, passing title, genre, description, and img as state
        navigate(`/detail`, { state: { title, genre, description, img } });
    };

    return (
        <div className="containerBig" onClick={handleClick} style={{ cursor: "pointer" }}>
            <img src={img} alt={title} className="posterBig" />
            <div className="descriptionBig">
                <div>
                    <p id="title">{title}</p>
                    <p id="genre">{genre}</p>
                </div>
                <div className="stars">
                    <AiFillStar color={color} size={size} />
                    <AiFillStar color={color} size={size} />
                    <AiFillStar color={color} size={size} />
                    <AiFillStar color={color} size={size} />
                    <AiFillStar color={color} size={size} />
                </div>
            </div>
        </div>
    );
}
