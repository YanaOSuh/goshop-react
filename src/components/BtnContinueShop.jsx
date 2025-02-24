import { Link } from 'react-router-dom';

const BtnContinueShop = () => {
    return(
            <Link to={`/catalog`} className="cart-backBtn">
                Continue shopping
            </Link>
    )
}

export default BtnContinueShop;