import './section2.scss'
import ArrowDown from '../../../assets/Faq/svg/arrow-down.svg'
import ArrowRight from '../../../assets/Faq/svg/arrow-right.svg'
import {NavLink} from "react-router-dom";
function Section2() {
    return (
        <section className="section2-faq">
            <ul className="section2-faq__list">
                <li className="section2-faq__item"><NavLink className='section2-faq__link' to={'/'}>General</NavLink></li>
                <li className="section2-faq__item"><NavLink className='section2-faq__link' to={'/'}>NFT Product</NavLink></li>
                <li className="section2-faq__item"><NavLink className='section2-faq__link' to={'/'}>Payment</NavLink></li>
            </ul>
            <div className="section2-faq-container">
                <div className="section2-faq-container-block1">
                    <div className="section2-faq-container-block1-wrap">
                        <p className="section2-faq-container-block1-wrap__text">What is an NFT marketplace?</p>
                        <p className='section2-faq-container-block1-wrap__invisibletext'>An NFT marketplace is a platform that allows users to buy, sell, and
                            trade non-fungible tokens (NFTs). NFTs are unique digital assets that can represent anything from artwork and collectibles
                            to in-game items and virtual real estate.
                        </p>
                    </div>
                   <div className="section2-faq-container-block1-wrap">
                       <p className="section2-faq-container-block1-wrap__text">How does buying an NFT work?</p>
                   </div>
                    <div className="section2-faq-container-block1-wrap">
                        <p className="section2-faq-container-block1-wrap__text">What are the benefits of owning an NFT?</p>
                    </div>
                    <div className="section2-faq-container-block1-wrap">
                        <p className="section2-faq-container-block1-wrap__text">Are there any risks associated with buying NFTs?</p>
                    </div>
                </div>
                <div className="section2-faq-container-block2">
                    <img src={ArrowDown} alt="arrow"/>
                    <img src={ArrowRight} alt="arrow"/>
                    <img src={ArrowRight} alt="arrow"/>
                    <img src={ArrowRight} alt="arrow"/>
                </div>
            </div>
        </section>
    )
}

export default Section2
