import './section4.scss'
import Partner1 from "../../../assets/About/svg/partner1.svg"
import Partner2 from "../../../assets/About/svg/partner2.svg"
import Partner3 from "../../../assets/About/svg/partner3.svg"
import Partner4 from "../../../assets/About/svg/partner4.svg"
import Partner5 from "../../../assets/About/svg/partner5.svg"
import Partner6 from "../../../assets/About/svg/partner6.svg"
import Partner7 from "../../../assets/About/svg/partner7.svg"
import Partner8 from "../../../assets/About/svg/partner8.svg"
import Partner9 from "../../../assets/About/svg/partner9.svg"
import Partner10 from "../../../assets/About/svg/partner10.svg"

function Section4() {
    return (
        <section className='section4-about'>
            <h1 className='section4-about__title'>Our Partners</h1>
            <div className='section4-about-container'>
                <img src={Partner1} alt='partner'/>
                <img src={Partner2} alt='partner'/>
                <img src={Partner3} alt='partner'/>
                <img src={Partner4} alt='partner'/>
                <img src={Partner5} alt='partner'/>
                <img src={Partner6} alt='partner'/>
                <img src={Partner7} alt='partner'/>
                <img src={Partner8} alt='partner'/>
                <img src={Partner9} alt='partner'/>
                <img src={Partner10} alt='partner'/>
            </div>
        </section>
    )
}

export default Section4
