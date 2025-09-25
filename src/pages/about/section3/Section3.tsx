import './section3.scss'
import Nft from '../../../assets/About/png/NFT.png'
function Section3() {
    return (
        <section className='section3-about'>
            <h1 className='section3-about__title'>NFT Distro</h1>
            <img className='section3-about__img' src={Nft} alt='about'/>
        </section>
    )
}

export default Section3
