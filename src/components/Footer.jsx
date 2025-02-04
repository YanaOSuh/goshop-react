function Footer() {
    return(
        <div className="aboutSection">
            <div className="aboutContainer">
                <div className="aboutSection-blockOne">
                    <p className="shopNameText"><span className='shopName'>GO</span>SHOP</p>
                    <p className="shopSlogan">Complete your style with awesome <br /> clothes from us.</p>
                </div>
                <div className="aboutSection-blockTwo">
                    <div className="aboutSection-blockTwo-section">
                        <p className="blockTwo-heading">Company</p>
                        <p>About</p>
                        <p>Contact us</p>
                        <p>Support</p>
                        <p>Careers</p>
                    </div>
                    <div className="aboutSection-blockTwo-section">
                        <p className="blockTwo-heading">Quick Link</p>
                        <p>Share Location</p>
                        <p>Orders Tracking</p>
                        <p>Size Guide</p>
                        <p>FAQs</p>
                    </div>
                    <div className="aboutSection-blockTwo-section">
                        <p className="blockTwo-heading">Legal</p>
                        <p>Terms & conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div className="myInfoContainer">
                <a className="myInfo" href="https://yanaos-portfolio.glitch.me/" target="_blank" rel="noreferrer">Developed by <span className="myName">YanaOS</span></a>
            </div>
        </div>
    )
}
export default Footer;