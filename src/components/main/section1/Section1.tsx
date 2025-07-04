import './section1.scss'
import Wallet from '../../../assets/Layout/svg/wallet.svg'
import Robot from '../../../assets/Layout/png/robot.png'
import Acount from '../../../assets/Layout/svg/acount.svg'
import Ball   from '../../../assets/Layout/png/Ball.png'
import Ball1   from '../../../assets/Layout/png/Ball1.png'
function Section1() {
    return (
        <section className="section1">
            <div className="section1-container1">
                <div className="section1-container1-texts">
                    <p className="section1-container1-texts__subtitle">
                        WEB 3 NON-FUNGIBLE TOKENS
                    </p>
                    <h1 className="section1-container1-texts__title">
                        Unlock Unique Digital Ownership with NFTs
                    </h1>
                    <p className="section1-container1-texts__description">
                        Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace
                    </p>
                </div>
                <button className="section1-container1__btn"><img src={Wallet} alt='wallet'/> Connect Wallet</button>
            </div>
            <div className="section1-container2">
                <img className='section1-container2__img' src={Robot} alt='robot'/>
                <img className='Ball' src={Ball} alt='ball'/>
                <img className='Ball1' src={Ball1} alt='ball'/>
                <div className="section1-container2-card">
                    <img src={Acount} alt='acount'/>
                    <p className="section1-container2-card__text">Perperzon</p>
                </div>
            </div>
        </section>
    )
}

export default Section1
