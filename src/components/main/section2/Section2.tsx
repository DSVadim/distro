import Acount1 from "../../../assets/Layout/svg/acount1.svg";
import Acount2 from "../../../assets/Layout/svg/acount2.svg";
import './section2.scss'
import Polygon from "../../../assets/Layout/png/polygon.png";
import Exnot1 from "../../../assets/Layout/png/exbot1.png"
import Exbot2 from "../../../assets/Layout/png/exbot2.png";
import Wave from "../../../assets/Layout/png/wave.png";
import Ethereum from "../../../assets/Layout/svg/ethereum.svg";

function Section2() {
    return (
        <section className="section2">
            <div className="section2-container1">
                <h1 className='section2-container1__title'>Trending Art 🔥</h1>
                <p className='section2-container1__description'>
                    Discover more
                </p>
            </div>
            <div className="section2-container2">
                <div className="section2-container2-card">
                    <img src={Exnot1} alt='robot'/>
                    <p className="section2-container2-card__text">ExBoot #1</p>
                    <div className='section2-container2-card-block'>
                        <div className="section2-container2-card-block-acount">
                            <img src={Acount1} alt='acount'/>
                            <p className="section2-container2-card-block-acount__text">Perperzon</p>
                        </div>
                        <div className="section2-container2-card-block-prices">
                            <p className='section2-container2-card-block-prices__bid'>Current Bid</p>
                            <label className='section2-container2-card-block-prices-price'>
                                <img src={Ethereum} alt='ethereum'/>
                                <p className='section2-container2-card-block-prices-price__text'>3.421 </p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="section2-container2-card">
                    <img src={Exbot2} alt='robot'/>
                    <p className="section2-container2-card__text">ExBoot #2</p>
                    <div className='section2-container2-card-block'>
                        <div className="section2-container2-card-block-acount">
                            <img src={Acount2} alt='acount'/>
                            <p className="section2-container2-card-block-acount__text">Richard </p>
                        </div>
                        <div className="section2-container2-card-block-prices">
                            <p className='section2-container2-card-block-prices__bid'>Current Bid</p>
                            <label className='section2-container2-card-block-prices-price'>
                                <img src={Ethereum} alt='ethereum'/>
                                <p className='section2-container2-card-block-prices-price__text'>3.421 </p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="section2-container2-card">
                    <img src={Polygon} alt='polygon'/>
                    <p className="section2-container2-card__text">Future of Polygon X</p>
                    <div className='section2-container2-card-block'>
                        <div className="section2-container2-card-block-acount">
                            <img src={Acount1} alt='acount'/>
                            <p className="section2-container2-card-block-acount__text">Perperzon</p>
                        </div>
                        <div className="section2-container2-card-block-prices">
                            <p className='section2-container2-card-block-prices__bid'>Current Bid</p>
                            <label className='section2-container2-card-block-prices-price'>
                                <img src={Ethereum} alt='ethereum'/>
                                <p className='section2-container2-card-block-prices-price__text'>3.421 </p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="section2-container2-card">
                    <img src={Wave} alt='wave'/>
                    <p className="section2-container2-card__text">Blue Wave #2</p>
                    <div className='section2-container2-card-block'>
                        <div className="section2-container2-card-block-acount">
                            <img src={Acount2} alt='acount'/>
                            <p className="section2-container2-card-block-acount__text">Richard </p>
                        </div>
                        <div className="section2-container2-card-block-prices">
                            <p className='section2-container2-card-block-prices__bid'>Current Bid</p>
                            <label className='section2-container2-card-block-prices-price'>
                                <img src={Ethereum} alt='ethereum'/>
                                <p className='section2-container2-card-block-prices-price__text'>3.421 </p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2
