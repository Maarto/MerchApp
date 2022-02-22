import '../styles/register.css'
import {MdOutlineEmail, MdPassword} from 'react-icons/md'
import {BiUserCircle} from 'react-icons/bi'


function RegisterPage() {

    return (

        <div className="generalContain">
            <form className="registerForm">
                <h1 className="registerText">Registra tu cuenta.</h1>
                <p className="InfoText">¿Ya tienes cuenta en la tienda? <a href="/auth/login">Inicia sesión</a></p>

                <div className="Inputs">
                    <BiUserCircle className='Icons'/>
                    <input type="text" name="userName" placeholder='Usuario' required/>
                    <MdPassword className='Icons'/>
                    <input type="password" name="password" placeholder='Contraseña' required/>
                    <MdPassword className='Icons'/>
                    <input type="password" name="repassword"placeholder='Repite contraseña' required/>
                    <MdOutlineEmail className='Icons'/>
                    <input type="email" name="email" placeholder='Email' required/>
                    <button type='submit'>Registrarme</button>
                    <p className='InfoText'>¿Quieres volver al inicio? <a href="/">Click Aquí</a></p>
                </div>
            </form>
        </div>
    )

}

export default RegisterPage;