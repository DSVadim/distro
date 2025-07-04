import './nav.scss'
import {NavLink} from "react-router-dom";
function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav__active-link' : 'nav__link')}>
                        Explore
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav__active-link' : 'nav__link')}>
                        Trending🔥
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav__active-link' : 'nav__link')}>
                        FAQ
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
