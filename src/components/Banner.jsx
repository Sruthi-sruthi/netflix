import './Banner.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add';
// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import axios from '../constance/Axios'
import { imageUrl ,trendingMovies} from '../constance/constant';
function Banner(){
    const [banerMovie, setbanerMovie] = useState()
    useEffect(() => {
        axios.get(trendingMovies)
            .then((response) => {
                console.log(response.data.results[0]);
                setbanerMovie(response.data.results[0])
            })
    }, [])
    return(
        <>
<div className="main" style={banerMovie && {background:`url(${imageUrl}${banerMovie.backdrop_path})`,backgroundSize:"cover"}}>
<div className="banner-image" >
    <div className="about">
         <h1 className='heading'>{banerMovie && banerMovie.title}</h1>
         <p className='description'>
            {banerMovie && banerMovie.overview}
            </p>
            <div className="btn-group">
                <button className='play-btn'><PlayArrowIcon/>play</button>
                <button className='mylist-btn'><AddIcon/>mylist</button>
                 </div>
                 </div>
                 </div>
                 </div>
        </>
    )
}
export default Banner