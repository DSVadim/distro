import './section3.scss'
import Acount1 from "../../../assets/Layout/svg/acount1.svg";
import Exbot1 from "../../../assets/Layout/png/exbot1.png"
import Exbot2 from "../../../assets/Layout/png/exbot2.png";
import Ethereum from "../../../assets/Layout/svg/ethereum.svg";
import Wallet from "../../../assets/Layout/svg/wallet.svg";
function Section3() {
    return (
        <section className="section3">
            <h1 className='section3__title'>Featured Collections</h1>
            <div className='cards'>
                <div className='cards-card'>
                    <img src={Exbot2} alt='exbot'/>
                    <div className='cards-card-texts'>
                        <div className="cards-card-texts-acount">
                            <img src={Acount1} alt='acount'/>
                            <p className="cards-card-texts-acount__text">Perperzon</p>
                        </div>
                        <p className='cards-card-texts__title'>ExBoot #1</p>
                        <p className='cards-card-texts__description'>Description</p>
                        <p className='cards-card-texts__text'>We would like to present you The Exboot 3D - Watching you~</p>
                        <div className='cards-card-texts-block'>
                            <div className='cards-card-texts-block-prices'>
                                <p className='cards-card-texts-block-prices__bid'>Current Bid</p>
                                <label className='cards-card-texts-block-prices-price'>
                                    <img src={Ethereum} alt='ethereum'/>
                                    <p className='cards-card-texts-block-prices-price__text'>3.421 </p>
                                </label>
                            </div>
                            <div className='cards-card-texts-block-times'>
                                <p className='cards-card-texts-block-times__end'>Ends in</p>
                                <p className='cards-card-texts-block-times__time'>1h 12m 14s</p>
                            </div>
                        </div>
                        <button className="cards-card-texts__btn"><img src={Wallet} alt='wallet'/> Place Bid</button>
                    </div>
                </div>
                <div className='cards-card'>
                    <img src={Exbot1} alt='exbot'/>
                    <div className='cards-card-texts'>
                        <div className="cards-card-texts-acount">
                            <img src={Acount1} alt='acount'/>
                            <p className="cards-card-texts-acount__text">Perperzon</p>
                        </div>
                        <p className='cards-card-texts__title'>ExBoot #2</p>
                        <p className='cards-card-texts__description'>Description</p>
                        <p className='cards-card-texts__text'>We would like to present you The Exboot 3D - Watching you~</p>
                        <div className='cards-card-texts-block'>
                            <div className='cards-card-texts-block-prices'>
                                <p className='cards-card-texts-block-prices__bid'>Current Bid</p>
                                <label className='cards-card-texts-block-prices-price'>
                                    <img src={Ethereum} alt='ethereum'/>
                                    <p className='cards-card-texts-block-prices-price__text'>3.421 </p>
                                </label>
                            </div>
                            <div className='cards-card-texts-block-times'>
                                <p className='cards-card-texts-block-times__end'>Ends in</p>
                                <p className='cards-card-texts-block-times__time'>1h 12m 14s</p>
                            </div>
                        </div>
                        <button className="cards-card-texts__btn"><img src={Wallet} alt='wallet'/> Place Bid</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3
