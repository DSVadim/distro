import './section2.scss'
import Back2 from "../../../assets/About/png/back2.png"
import Card1 from "../../../assets/About/svg/card1.svg"
import Card2 from "../../../assets/About/svg/card2.svg"
import Card3 from "../../../assets/About/svg/card3.svg"
import Card4 from "../../../assets/About/svg/card4.svg"
function Section2() {
    return (
        <section className='section2-about'>
            <div className='section2-about-container1'>
                <img className='section2-about-container1__back1' src={Back2} alt='back2'/>
                <div className='section2-about-container1-texts'>
                    <h1 className='section2-about-container1-texts__title'>NFT Represent the future</h1>
                    <p className='section2-about-container1-texts__description'>We believe that NFTs represent the future of digital ownership and are excited to provide our customers with access to this revolutionary new market. Our platform is user-friendly and easy to navigate, making it simple for creators to upload and sell their NFTs and for buyers to discover and purchase unique digital assets.</p>
                </div>
            </div>
            <div className='section2-about-container2'>
                <div className='section2-about-container2-card'>
                    <img src= {Card1} alt='card1'/>
                    <p className='section2-about-container2-card__number'>23.400</p>
                    <p className='section2-about-container2-card__text'>NFTs</p>
                </div>
                <div className='section2-about-container2-card'>
                    <img src= {Card2} alt='card2'/>
                    <p className='section2-about-container2-card__number'>8.000</p>
                    <p className='section2-about-container2-card__text'>Collections</p>
                </div>
                <div className='section2-about-container2-card'>
                    <img src= {Card3} alt='card3'/>
                    <p className='section2-about-container2-card__number'>3,400</p>
                    <p className='section2-about-container2-card__text'>Creators</p>
                </div>
                <div className='section2-about-container2-card'>
                    <img src= {Card4} alt='card4'/>
                    <p className='section2-about-container2-card__number'>$21B+</p>
                    <p className='section2-about-container2-card__text'>Volurme</p>
                </div>
            </div>
        </section>
    )
}

export default Section2
