import { Link } from 'react-router-dom'
import './Error.css'
function Error(){
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Pagina não encontrada</h2>
            <Link to="/"> Confira todos os filmes </Link>
        </div>
    )
}

export default Error;