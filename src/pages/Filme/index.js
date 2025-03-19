import { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import api from '../../services/api'
import './filme.css'
//URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=ab61e7791bbd8406f46ebfb4f9cbed8f&language=pt-BR


function Filme(){
const { id } = useParams();
const navigate = useNavigate()
const [filme, setFilme] = useState({});
const [loading, setLoading] = useState(true);

useEffect(()=>{
    async function loadFilme(){
    await api.get(`/movie/${id}`, {
        params:{
        api_key: 'ab61e7791bbd8406f46ebfb4f9cbed8f',
        language: "pt-BR",
        }
    })
    .then((response)=>{
        setFilme(response.data);
        
        setLoading(false);
})
    .catch(()=>{
        console.log("FILME NAO ENCONTRADO");
        navigate("/", {replace: true });
        return;
    })
    }

    loadFilme();


    return () => {
    console.log("COMPONENTE FOI DESMONTADO")
    }
}, [navigate, id])

function salvarFilme(){
    const minhaLista = localStorage.getItem("@primeflix")
    let filmesSalvos = JSON.parse(minhaLista) || [];
    const existeFilme = filmesSalvos.some((filmesSalvos)=>filmesSalvos.id === filme.id)

    if(existeFilme){
        alert("Este filme ja esta na lista");
        return;
    }
    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix",JSON.stringify(filmesSalvos));
    alert("Filme salvo com sucesso!")
}
if(loading){
    return(
    <div className="filme-info">
        <h1>Carregando detalhes...</h1>
    </div>
    )
}

//https://api.themoviedb.org/3/movie/{movie_id}/recommendations
return(
    <div className="filme-info">
    <h1>{filme.title}</h1>
    <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

    <h3>Sinopse</h3>
    <span>{filme.overview}</span>
    <span>Popularidade: {filme.popularity}</span>
    <span>Quantidade de votos: {filme.vote_count}</span>
    <strong>Avalição: {filme.vote_average} / 10</strong>

    <div className="area-button">
        <button onClick={salvarFilme} >Salvar</button>
        <button  ><a target="blank" rell="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a></button>
    </div>

    </div>
)

}

export default Filme;