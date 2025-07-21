import Search from "../../../assets/Layout/svg/search.svg";
import './section1.scss'
function Section1() {
    return (
        <section className='section1-discover'>
            <h1 className='section1-discover__title'>Discover Amazing NFT’s</h1>
            <label className='header-search' htmlFor="search">
                <img src={Search} alt="search"/>
                <input className='header-search__input' type="text" id="search" placeholder="Search"/>
            </label>
        </section>
    )
}

export default Section1
