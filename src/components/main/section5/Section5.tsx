import './section5.scss'
import Card from './card/Card.ts'
import type { Cards } from './card/Card.ts'
import Ethereum from "../../../assets/Layout/svg/ethereum.svg";

function Section5() {
    return (
        <section className="section5">
            <h1 className='section5__title'>Explore</h1>
            <div className='section5-container'>
                {Card.map((card: Cards) => (
                    <div key={card.id} className="section5-container-card">
                        <img src={card.img} alt={card.title}/>
                        <p className="section5-container-card__text">{card.title}</p>
                        <div className='section5-container-card-block'>
                            <div className="section5-container-card-block-acount">
                                <img src={card.account} alt={card.name}/>
                                <p className="section5-container-card-block-acount__text">{card.name}</p>
                            </div>
                            <div className="section5-container-card-block-prices">
                                <p className='section5-container-card-block-prices__bid'>Current Bid</p>
                                <label className='section5-container-card-block-prices-price'>
                                    <img src={Ethereum} alt='ethereum'/>
                                    <p className='section5-container-card-block-prices-price__text'>3.421 </p>
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="section5__btn">Discover More</button>
        </section>
    )
}

export default Section5

