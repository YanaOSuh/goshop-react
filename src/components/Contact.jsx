import Footer from "./Footer/Footer";
import Newsletter from "./Form/Newsletter";

function Contact() {
    return(
        <section className="contactSection">
            <div className="contactCover">
                <div className="contactContent">
                    <p className="newsletter-header">NEWSLETTER</p>
                    <p className="newsletter-text">Subscribe newsletter & Join our list and get 15% off your first purchase!</p>
                    <Newsletter />
                </div>
            </div>
            <Footer />
        </section>
    )
}
export default Contact;