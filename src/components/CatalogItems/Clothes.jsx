import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/clothingSlice";
import { data } from "../../data/data";
import './catalogItems.css';

const Clothes = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    const filteredItems = data.filter((elem) => 
        selectedCategory === "ALL" || elem.searchTerm.includes(selectedCategory)
    );

    return(
        <div className="productsSection">
            <div className="products">
                {filteredItems.map(({ id, name, price, image }) => (
                    <div key={id} className="product-card">
                        <Link to={`/product/${id}`}>
                            <img src={image} width="350px" height="500px" alt={name} />
                        </Link>
                        <div className="product-info">
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clothes;