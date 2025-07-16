import './section6.scss'
import Download from '../../../assets/Layout/svg/download.svg';
import Phone from '../../../assets/Layout/png/phone.png';
import Ball from '../../../assets/Layout/png/Ball2.png';

function Section6() {
    return (
        <section className="section6">
            <div className="section6-container">
                <img className="section6-container__img" src={Ball} alt='ball'/>
                <div className="section6-container-block1">
                    <h1 className='section6-container-block1__title'>Try our App Mobile NFT</h1>
                    <button className="section6-container-block1__btn"><img src={Download} alt='download'/> Download Now</button>
                </div>
                <div className="section6-container-block2">
                    <img className="section6-container-block2__img" src={Phone} alt='phone'/>
                </div>
            </div>
        </section>
    )
}

export default Section6
