import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from "react-router";
import logoriver from "../../assets/logoriver.png";

export default function NavBar(){
    return(
            <nav className='nav-menu'>
                <span className='nav-left'>
                    <Link to="/">
                    <img className="logo" src={logoriver} alt="River e-Shop" />
                    </Link>
                </span>
                <nav className='nav-center'>
                <ul>
                    <li><Link to="/category/Remeras">Remeras</Link></li>
                    <li><Link to="/category/Shorts">Shorts</Link></li>
                    <li><Link to="/category/Pantalones">Pantalones</Link></li>
                    <li><Link to="/category/Buzos">Buzos</Link></li>
                    <li><Link to="/category/Accesorios">Accesorios</Link></li>
                </ul>
                </nav>
                <span className='nav-right'>
                    <CartWidget/>
                </span>
            </nav>
        
    )
}