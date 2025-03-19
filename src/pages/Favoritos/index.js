import { useEffect, useState} from 'react'
import './favoritos.css'

function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista)|| [])
    }, [])

    return(
        <div>
            <h1>TELA FAVORITOS</h1>

            <ul>
                {filmes.map((filme)=>{
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos