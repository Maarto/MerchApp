import '../styles/login.css'
import { MdPassword } from 'react-icons/md'
import { BiUserCircle } from 'react-icons/bi'
import { BsShop } from 'react-icons/bs'
import {useNavigate} from 'react-router'

function LoginPage() {

    let navigate = useNavigate()

    function Navigation(rout:string) {
        return navigate(rout)
    }

    return (
        
        <div className='generalContain'>
            <form className='loginForm'>
                <BsShop className='LogoIcon' onClick={() => Navigation('/')}/>
                <h1 className='titleInfo'>¡Ingresa a tu cuenta de tienda online!</h1>
                <p className='textInfo'>¿No tienes cuenta? <a href="/auth/register">Registrate aquí</a></p>

                <div className="Inputs">
                    <BiUserCircle className='Icons' />
                    <input type="text" name='username' placeholder='Usuario / Email' required/>
                    <MdPassword className='Icons' />
                    <input type="password" name='password' placeholder='Password' required/>
                    <button className='LoginButton' type='submit'>Login</button>
                </div>


            </form>

        </div>
    )
}

export default LoginPage;