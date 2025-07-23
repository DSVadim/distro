import './section1.scss'
import Antonosov from '../../../assets/BecomeArtist/svg/antonosov.svg'
import Ethereum from "../../../assets/Layout/svg/ethereum.svg";
import Ex1 from "../../../assets/BecomeArtist/png/ex1.png";
import Ex2 from "../../../assets/BecomeArtist/png/ex2.png";
import Ex3 from "../../../assets/BecomeArtist/png/ex3.png";
import Ex4 from "../../../assets/BecomeArtist/png/ex4.png";
import {Link} from "react-router-dom";

function Section1() {
    return (
        <section className='section1-becomeArtist'>
            <div className='section1-becomeArtist-conatiner1'>
                <h1 className='section1-becomeArtist-conatiner1__title'>Become an Artist</h1>
                <p className='section1-becomeArtist-conatiner1__description'>Welcome to the world of NFTs, Creator! We're excited to see your unique digital assets come to life. Create, share, and let your imagination run wild.</p>
                <Link to={'/Upload'}><button className='section1-becomeArtist-conatiner1__btn'>Upload</button></Link>
            </div>
            <div className='section1-becomeArtist-container2'>
                <div className='section1-becomeArtist-container2-card1'>
                    <img src={Ex1} alt='ExBoot'/>
                    <p className="section1-becomeArtist-container2-card__text">ExBoot #2</p>
                    <div className='section1-becomeArtist-container2-card-block'>
                        <div className="section1-becomeArtist-container2-card-block-acount">
                            <img src={Antonosov} alt='Antonson'/>
                            <p className="section1-becomeArtist-container2-card-block-acount__text">Antonson</p>
                        </div>
                        <div className="section1-becomeArtist-container2-card-block-prices">
                            <p className='section1-becomeArtist-container2-card-block-prices__bid'>Current Bid</p>
                            <label className='section1-becomeArtist-container2-card-block-prices-price'>
                                <img src={Ethereum} alt='ethereum'/>
                                <p className='section1-becomeArtist-container2-card-block-prices-price__text'>3.421 </p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='section1-becomeArtist-container2-card2'>
                    <img src={Ex2} alt='ExBoot'/>
                    <p className="section1-becomeArtist-container2-card__text">ExBoot #2</p>
                    <div className='section1-becomeArtist-container2-card-block'>
                        <div className="section1-becomeArtist-container2-card-block-acount">
                            <img src={Antonosov} alt='Antonson'/>
                            <p className="section1-becomeArtist-container2-card-block-acount__text">Antonson</p>
                        </div>
                        <div className="section1-becomeArtist-container2-card2-block-prices">
                            <p className='section1-becomeArtist-container2-card-block-prices__bid'>Current Bid</p>
                            <label className='section1-becomeArtist-container2-card-block-prices-price'>
                                <img src={Ethereum} alt='ethereum'/>
                                <p className='section1-becomeArtist-container2-card-block-prices-price__text'>3.421 </p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='section1-becomeArtist-container2-card3'>
                    <img src={Ex3} alt='ExBoot'/>
                    <p className="section1-becomeArtist-container2-card__text">ExBoot #2</p>
                    <div className='section1-becomeArtist-container2-card-block'>
                        <div className="section1-becomeArtist-container2-card-block-acount">
                            <img src={Antonosov} alt='Antonson'/>
                            <p className="section1-becomeArtist-container2-card-block-acount__text">Antonson</p>
                        </div>
                        <div className="section1-becomeArtist-container2-card-block-prices">
                            <p className='section1-becomeArtist-container2-card-block-prices__bid'>Current Bid</p>
                            <label className='section1-becomeArtist-container2-card-block-prices-price'>
                                <img src={Ethereum} alt='ethereum'/>
                                <p className='section1-becomeArtist-container2-card-block-prices-price__text'>3.421 </p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='section1-becomeArtist-container2-card4'>
                    <img src={Ex4} alt='ExBoot'/>
                    <p className="section1-becomeArtist-container2-card__text">ExBoot #2</p>
                    <div className='section1-becomeArtist-container2-card-block'>
                        <div className="section1-becomeArtist-container2-card-block-acount">
                            <img src={Antonosov} alt='Antonson'/>
                            <p className="section1-becomeArtist-container2-card-block-acount__text">Antonson</p>
                        </div>
                        <div className="section1-becomeArtist-container2-card-block-prices">
                            <p className='section1-becomeArtist-container2-card-block-prices__bid'>Current Bid</p>
                            <label className='section1-becomeArtist-container2-card-block-prices-price'>
                                <img src={Ethereum} alt='ethereum'/>
                                <p className='section1-becomeArtist-container2-card-block-prices-price__text'>3.421 </p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1
