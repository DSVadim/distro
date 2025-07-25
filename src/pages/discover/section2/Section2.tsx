import Card, {type Cards} from "../../../components/main/section5/card/Card.ts";
import Ethereum from "../../../assets/Layout/svg/ethereum.svg";
import './section2.scss'

function Section2() {
    return (
        <section className="section2-discover">
            <h1 className='section2-discover__title'>Explore</h1>
            <div className='section2-discover-container'>
                {Card.map((card: Cards) => (
                    <div key={card.id} className="section2-discover-container-card">
                        <img src={card.img} alt={card.title}/>
                        <p className="section2-discover-container-card__text">{card.title}</p>
                        <div className='section2-discover-container-card-block'>
                            <div className="section2-discover-container-card-block-acount">
                                <img src={card.account} alt={card.name}/>
                                <p className="section2-discover-container-card-block-acount__text">{card.name}</p>
                            </div>
                            <div className="section2-discover-container-card-block-prices">
                                <p className='section2-discover-container-card-block-prices__bid'>Current Bid</p>
                                <label className='section2-discover-container-card-block-prices-price'>
                                    <img src={Ethereum} alt='ethereum'/>
                                    <p className='section2-discover-container-card-block-prices-price__text'>3.421 </p>
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="section2-discover__btn">Load More</button>
        </section>
    )
}

export default Section2
