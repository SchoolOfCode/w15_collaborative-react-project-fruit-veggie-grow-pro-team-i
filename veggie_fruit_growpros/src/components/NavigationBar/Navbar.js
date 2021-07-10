import { MenuItems } from "./MenuItems"
import './Navbar.css'
import Logo from "../images/nav-logo.png"


const Navbar = ({changePageFunction}) => {
    return (
        <>
        <header className="Nav-Container">
        <nav className="NavbarItems">
            <img className="nav-logo" src={Logo} alt="Growpro logo"></img>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <h5 onClick={() => {changePageFunction(item.function)}} className={item.className}>
                            {item.title}
                            </h5>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </header>
        </>
    );
   }

export default Navbar;