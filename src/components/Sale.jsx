import { Link } from 'react-router-dom';
import iconSupport from '/src/images/iocn-support.png';
import iconDelivery from '/src/images/icon-delivery.png';
import iconMoney from '/src/images/icon-money.png';
import Footer from './Footer';

function Sale() {
    return(
    <div>
        <div className='saleSection'>
            <div className='saleSection-block'>
                <p className='saleSection-saleText'>Limited edition</p>
                <p className='saleSection-saleOff'>50% off</p>
                <Link to={`/catalog`}>
                    <button className='saleSection-btn'>see all collection</button>
                </Link>
            </div>
        </div>
        <div className='advantagesContainer'>
            <div className='advantage-block'>
                <img className='advantage-icon' src={iconDelivery} />
                <div>
                    <h5>Free Delivery</h5>
                    <p className='advantages-text'>fast, reliable delivery on prders over $99.00</p>
                </div>
            </div>
            <div className='advantage-block'>
                <img className='advantage-icon' src={iconSupport} />
                <div>
                    <h5>24/7 Help Center</h5>
                    <p className='advantages-text'>contact us anytime for expert support</p>
                </div>
            </div>
            <div className='advantage-block'>
                <img className='advantage-icon' src={iconMoney} />
                <div>
                    <h5>14-Days money back</h5>
                    <p className='advantages-text'>easy returns within 14 days, strees free</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}
export default Sale;