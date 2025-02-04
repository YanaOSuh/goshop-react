import Footer from "./Footer";
import Newsletter from "./Newsletter";

function Contact() {
    return(
        <div className="contactSection">
            <div className="contactCover">
                <div className="contactContent">
                    <p className="newsletter-header">NEWSLETTER</p>
                    <p className="newsletter-text">Subscribe newsletter & Join our list and get 15% off your first purchase!</p>
                    <Newsletter />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Contact;