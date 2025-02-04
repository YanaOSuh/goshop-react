import { data } from "../data";
import { useParams, useNavigate } from "react-router-dom";

function ClothesItem() {
    const navigate = useNavigate();
    const { title } = useParams();

    return (
        <div className="aboutProductSection">
            {data.filter((item) => item.title === title).map((elem, index) => {
                return (
                    <div key={index} className="aboutProductContainer">
                        <h3>{elem.name}</h3>
                        <img 
                            src={elem.image}
                            alt="item"
                            width="350px"
                        />
                        <div className="aboutProduct-price-btn">
                            <h4 className="abotProductPrice">$ {elem.price}</h4>
                            <button className="addToCart-btn">Add to cart</button>
                        </div>
                        <button className="goBack-btn" onClick={() => navigate(-1)}>
                        🢨 Go back
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
export default ClothesItem;