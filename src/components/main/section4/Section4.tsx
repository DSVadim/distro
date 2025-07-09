import './section4.scss'
import Avatar1 from '../../../assets/Layout/svg/avatar1.svg';
import Avatar2 from '../../../assets/Layout/svg/avatar2.svg';
import Avatar3 from '../../../assets/Layout/svg/avatar3.svg';
import Avatar4 from '../../../assets/Layout/svg/avatar4.svg';
import Avatar5 from '../../../assets/Layout/svg/avatar5.svg';
import Ethereum from "../../../assets/Layout/svg/ethereumwhite.svg";

function Section4() {
    return (
        <section className="section4">
            <h1 className='section4__title'>Leaderboard of the Week</h1>
            <div className='section4-container'>
                <div className='section4-container-card'>
                    <img src={Avatar1} alt='avatar'/>
                    <p className="section4-container-card__name">Perperzon</p>
                    <label className='section4-container-card-price'>
                        <img src={Ethereum} alt='ethereum'/>
                        <p className='section4-container-card-price__text'>9.421</p>
                    </label>
                </div>
                <div className='section4-container-card'>
                    <img src={Avatar2} alt='avatar'/>
                    <p className="section4-container-card__name">Richard </p>
                    <label className='section4-container-card-price'>
                        <img src={Ethereum} alt='ethereum'/>
                        <p className='section4-container-card-price__text'>8.421 </p>
                    </label>
                </div>
                <div className='section4-container-card'>
                    <img src={Avatar3} alt='avatar'/>
                    <p className="section4-container-card__name">Anderson</p>
                    <label className='section4-container-card-price'>
                        <img src={Ethereum} alt='ethereum'/>
                        <p className='section4-container-card-price__text'>7.421</p>
                    </label>
                </div>
                <div className='section4-container-card'>
                    <img src={Avatar4} alt='avatar'/>
                    <p className="section4-container-card__name">Michael</p>
                    <label className='section4-container-card-price'>
                        <img src={Ethereum} alt='ethereum'/>
                        <p className='section4-container-card-price__text'>5.421</p>
                    </label>
                </div>
                <div className='section4-container-card'>
                    <img src={Avatar5} alt='avatar'/>
                    <p className="section4-container-card__name">Antonson</p>
                    <label className='section4-container-card-price'>
                        <img src={Ethereum} alt='ethereum'/>
                        <p className='section4-container-card-price__text'>3.421</p>
                    </label>
                </div>
            </div>
        </section>
    )
}

export default Section4
