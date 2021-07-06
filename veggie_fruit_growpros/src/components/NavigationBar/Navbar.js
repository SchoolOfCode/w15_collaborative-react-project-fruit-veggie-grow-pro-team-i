import { MenuItems } from "./MenuItems"
import './Navbar.css'


const Navbar = ({changePageFunction}) => {
    return (
        <>
        <div className="color-border"></div> 
        <nav className="NavbarItems">
        <div className="NavbarSpacer"></div>
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
        </>
    );
   }

export default Navbar;