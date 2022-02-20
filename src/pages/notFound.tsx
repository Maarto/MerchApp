import '../styles/notFound.css'
import { MdReportGmailerrorred } from 'react-icons/md'


export const PageNotFound = () => {
    return (
        <div className='container'>
            <div className='child'>
                <MdReportGmailerrorred className='icon'/>
                <h1>ERROR 404</h1>
                <p>La página a la que intentas ingresar no existe o ha sido eliminada</p>
            </div>
        </div>
    )
}