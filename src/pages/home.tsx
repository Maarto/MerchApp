import '../styles/homePage.css'
import { BsShop } from 'react-icons/bs'
import {useNavigate } from 'react-router';

// Navigate Function //


function HomePage() {
    
    let navigate = useNavigate()

    function Navigation(rout:string) {
        return navigate(rout)
    }

    return (
        <div className="general-cont">

            <BsShop className='ShopIcon' />
            <h1 className='titleText'>Tienda Online</h1>

            <div className="Buttons">

                <button className='buttonHome' onClick={() => Navigation('/test')}>INICIO</button>
                <button className='buttonHome' onClick={() => Navigation('/test')}>CONTACTO</button>
                <button className='buttonHome' onClick={() => Navigation('/test')}>CATALOGO</button>
                <button className='buttonHome' onClick={() => Navigation('/test')}>LOGIN</button>
            </div>
        </div>
    )

}

export default HomePage;