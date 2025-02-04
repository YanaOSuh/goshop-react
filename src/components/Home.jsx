import heroPic from '../images/hero-pic.png';
import { Link } from 'react-router-dom';
import CarouselHome from './CarouselHome';

function Home() {
    return(<div className='heroSection'>
        <div className='heroContainer'>
            <div className='heroTextBox'>
                <p className='upHeadingText'>2025 COLLECTION</p>
                <h1 className='heroHeading'>New Arrivals</h1>
                <p className='heroText'>Discover the latest trends in clothing from top fashion brands - elevate your wardrobe today!</p>
                <Link to={`/catalog`}>
                    <button className='heroBtn'>SHOP NOW</button>
                </Link>
            </div>
            <div className='heroPicBox'>
                <img src={heroPic} className='heroPic' alt='fashion lady'/>
            </div>
        </div>
    
        <div className="running-line-wrapper">
            <div className="running-line">
                <span>● Customer support ● Free Standard Shipping ● Customer support ● Free Standard Shipping ● Customer support ● Free Standard Shipping ● Customer support ● Free Standard Shipping</span>
                <span>● Customer support ● Free Standard Shipping ● Customer support ● Free Standard Shipping ● Customer support ● Free Standard Shipping ● Customer support ● Free Standard Shipping</span>
            </div>
        </div>
        <CarouselHome />
        </div>
    )
}
export default Home;