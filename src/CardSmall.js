import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./CardSmall.css";

export default function CardSmall({ title, genre, img, size, color, description }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail`, { state: { title, genre, description, img } });
    };

    return (
        <div className="card" onClick={handleClick}>
            <img src={img} alt={title} className="photo" />
            <div className="description">
                <div>
                    <p id="title">{title}</p>
                    <p id="genre">{genre}</p>
                </div>
                <div>
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
