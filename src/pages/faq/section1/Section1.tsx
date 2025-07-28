import './section1.scss'
import Search from "../../../assets/Layout/svg/search.svg";
function Section1() {
    return (
        <section className="section1-faq">
            <h1 className="section1-faq__title">FAQ</h1>
            <p className="section1-faq__subtitle">Frequently Asked Questions</p>
            <p className="section1-faq__description">Here, you'll find answers to the most commonly asked questions about our products, services, and policies.</p>
            <label className='section1-faq-search' htmlFor="search">
                <img src={Search} alt="search"/>
                <input className='section1-faq-search__input' type="text" id="search" placeholder="Search your ask"/>
            </label>
        </section>
    )
}

export default Section1
