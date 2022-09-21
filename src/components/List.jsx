import Listitems from "./Listitems"
import './List.css'
import { useEffect, useState } from 'react';
import axios from '../constance/Axios'
import { imageUrl } from "../constance/constant";
import Trailer from './Trailer'
function List(props){
     // let imageUrl = "https://image.tmdb.org/t/p/original"
     const [movies, setMovies] = useState()
     useEffect(() => {
         axios.get(props.genreUrl)
             .then((response) => {
                 // console.log(response.data.results);
                 setMovies(response.data.results)
             })
     }, [])
     
    return(
        <>
<div className="list-group">
    <h1 className="listtitle">{props.listTitle}</h1>
<div className="list-wrapper">
    {
    movies && movies.map((movie)=>{
        return <Listitems title={movie.title || movie.name} url={imageUrl+movie.backdrop_path}movieId={movie.id}/>
})
}
</div>
</div>
        </>
    )
}
export default List