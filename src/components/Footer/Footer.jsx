import './footer.css';

function Footer() {
    return(
        <footer className="footer">
            <div className="footerContainer">
                <div className="footer-blockOne">
                    <p className="shopNameText"><span className='shopName'>GO</span>SHOP</p>
                    <p className="shopSlogan">Complete your style with awesome <br /> clothes from us.</p>
                </div>
                <div className="footer-blockTwo">
                    <div className="footer-blockTwo-section">
                        <p className="footer-blockTwo-heading">Company</p>
                        <p>About</p>
                        <p>Contact us</p>
                        <p>Support</p>
                        <p>Careers</p>
                    </div>
                    <div className="footer-blockTwo-section">
                        <p className="footer-blockTwo-heading">Quick Link</p>
                        <p>Share Location</p>
                        <p>Orders Tracking</p>
                        <p>Size Guide</p>
                        <p>FAQs</p>
                    </div>
                    <div className="footer-blockTwo-section">
                        <p className="footer-blockTwo-heading">Legal</p>
                        <p>Terms & conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div className="myInfoContainer">
                <a className="myInfo" href="https://yanaos-portfolio.glitch.me/" target="_blank" rel="noreferrer">Developed by <span className="myName">YanaOS</span></a>
            </div>
        </footer>
    )
}
export default Footer;