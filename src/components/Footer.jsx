import "../style/Footer.css"

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="copyright">
                <span>Sudhir © 2025</span>
            </div>
            <div className="policy">
                <span>Privacy Policy | Terms of Service</span>
            </div>
            <div className="social">
                <a href="https://www.instagram.com/sudhirchaudhary03/" target="_blank" className="icon"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/sudhir-chaudhary-1b968a2bb/" target="_blank" className="icon"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Sudhir302" target="_blank" className="icon"><i className="fa-brands fa-github"></i></a>
                <a href="https://twitter.com/explore" target="_blank" className="icon"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
        </footer>
    )
}

export default Footer;