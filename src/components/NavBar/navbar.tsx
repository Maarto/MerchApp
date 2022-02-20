import '../../styles/navBar.css'
import { BsShop } from 'react-icons/bs'


function NavBar() {

    return (

        <header className='navContainer'>



            <a href="/" className='LogoClass'>
                <BsShop className='navLogo' />
            </a>
            <nav className='navButtons'>
                <ul className='Nav__links'>
                    <li className='navList'><a href="/shop/services" className='navALinks'>SERVICES</a></li>
                    <li className='navList'><a href="/shop" className='navALinks'>SHOP</a></li>
                    <li className='navList'><a href="/info/about-us" className='navALinks'>ABOUT US</a></li>
                    <li className='navList'>
                        <a className='cta' href="/auth/login">
                            LOGIN
                        </a>
                    </li>

                </ul>
            </nav>

        </header>
    )

}

export default NavBar;