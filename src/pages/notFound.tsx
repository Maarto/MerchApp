import '../styles/notFound.css'
import { MdReportGmailerrorred } from 'react-icons/md'


function PageNotFound() {
    return (
        <div className='container'>
            <MdReportGmailerrorred className='icon' />
            <h1 className='ErrorCode'>ERROR 404</h1>
            <p className='DescError'>La página a la que intentas ingresar no existe o ha sido eliminada</p>
        </div>
    )
}

export default PageNotFound;