import './header.scss'
import Logo1 from './../../assets/Layout/logo1.svg'
import Logo2 from './../../assets/Layout/logo2.svg'
import Logo3 from './../../assets/Layout/logo3.svg'
import Search from './../../assets/Layout/search.svg'
import Nav from './nav/Nav.tsx'
function Header() {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="logo">
                    <img  src={Logo1} alt="logo" />
                    <img  src={Logo2} alt="logo" />
                    <img  src={Logo3} alt="logo" />
                </div>
                <label className='header-search' htmlFor="search">
                    <img src={Search} alt="search"/>
                    <input className='header-search__input' type="text" id="search" placeholder="Search"/>
                </label>
            </div>
            <Nav/>
        </header>
    )
}

export default Header
