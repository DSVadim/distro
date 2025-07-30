import './section1.scss'
import Back1 from "../../../assets/About/png/back.png"
import Paint from "../../../assets/About/svg/paint.svg"
import Music from "../../../assets/About/svg/music.svg"
import Play from "../../../assets/About/svg/play.svg"
function Section1() {
    return (
        <section className='section1-about'>
            <div className='section1-about-container'>
                <div className='section1-about-container-texts'>
                    <h1 className='section1-about-container-texts__title'>NFT MARKETPLACE</h1>
                    <p className='section1-about-container-texts__subtitle'>About our Company NFT Distro</p>
                    <p className='section1-about-container-texts__description'>We are a cutting-edge company focused on the creation, promotion, and sale of non-fungible tokens (NFTs). Our marketplace offers a wide range of NFTs, from digital art and collectibles to gaming items and virtual real estate.</p>
                </div>
                <div className='section1-about-container-imgs'>
                    <img className='section1-about-container-imgs__back1' src={Back1} alt='back1'/>
                    <img className='section1-about-container-imgs__paint' src={Paint} alt='paint'/>
                    <img className='section1-about-container-imgs__music' src={Music} alt='music'/>
                    <img className='section1-about-container-imgs__play' src={Play} alt='play'/>
                </div>
            </div>
        </section>
    )
}

export default Section1
