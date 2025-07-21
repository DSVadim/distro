import './footer.scss'
import Logo1 from "../../assets/Layout/svg/logo1.svg";
import Logo2 from "../../assets/Layout/svg/logo2.svg";
import Logo3 from "../../assets/Layout/svg/logo3.svg";
import Sun from "../../assets/Layout/svg/sun.svg";
import Switch from "../../assets/Layout/svg/Switch.svg";
import Moon from "../../assets/Layout/svg/moon.svg";
import Arrow from "../../assets/Layout/svg/arrow.svg";
import Facebook from "../../assets/Layout/svg/facebook.svg";
import Google from "../../assets/Layout/svg/google.svg";
import Twitter from "../../assets/Layout/svg/twiter.svg"
import Apple from "../../assets/Layout/svg/apple.svg"
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container1">
                <div className="footer-container1-block1">
                    <div className="logo">
                        <img  src={Logo1} alt="logo" />
                        <img  src={Logo2} alt="logo" />
                        <img  src={Logo3} alt="logo" />
                    </div>
                    <h1 className='footer-container1-block1__title'>NFT Distro</h1>
                    <p className='footer-container1-block1__text'>Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</p>
                    <div className="footer-container1-block1-switch">
                        <img src={Sun} alt="sun"/>
                        <img src={Switch} alt='switch'/>
                        <img src={Moon} alt="moon"/>
                    </div>
                </div>
                <div className="footer-container1-block2">
                    <nav className="footer-container1-block2-nav">
                        <ul className='footer-container1-block2-nav__list'>
                            <p className='footer-container1-block2-nav__title'>Company</p>
                            <li className='footer-container1-block2-nav__item'><a className='footer-container1-block2-nav__link'>Explore</a></li>
                            <li className='footer-container1-block2-nav__item'><a className='footer-container1-block2-nav__link'>About</a></li>
                        </ul>
                        <ul className='footer-container1-block2-nav__list'>
                            <p className='footer-container1-block2-nav__title'>Cretor</p>
                            <li className='footer-container1-block2-nav__item'><a className='footer-container1-block2-nav__link'>FAQ</a></li>
                            <li className='footer-container1-block2-nav__item'><Link to={'/BecomeArtist'} className='footer-container1-block2-nav__link'>Become Artist</Link></li>
                        </ul>
                        <ul className='footer-container1-block2-nav__list'>
                            <p className='footer-container1-block2-nav__title'>Join our community</p>
                            <input className='footer-container1-block2-nav__input' type="email" placeholder="Enter your email address"/>
                            <button className='footer-container1-block2-nav__btn'><img src={Arrow} alt='arrow'/></button>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="footer-container2">
                <p className='footer-container2__text'>©Copyright NFT Distro 2023 </p>
                <div className="footer-container2-block">
                    <img src={Facebook} alt='facebook'/>
                    <img src={Google} alt='google'/>
                    <img src={Twitter} alt='twiter'/>
                    <img src={Apple} alt='apple'/>
                </div>
            </div>

        </footer>
    )
}

export default Footer
