import { MenuItems } from "./MenuItems"
import './Navbar.css'


const Navbar = ({changePageFunction}) => {
    return (
        <>
        <header className="Nav-Conatainer">
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Logo</h1>
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