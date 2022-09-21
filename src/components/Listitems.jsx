import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add';
import axios from '../constance/Axios'
import { useState } from 'react';
import Trailer from './Trailer';
import YouTube from 'react-youtube';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import './Listitems.css'
function Listitems(props){
    const [key,setKey]=useState("")
    const[visible,setVisible]=useState(false)
        const fetchTrailer=async()=>{
        let response = await axios.get(`/movie/${props.movieId}/videos?api_key=b999d9fa858536ad35453910cf2ad2e3&language=en-US`)
        console.log(response.data.results[0].key);
        setKey(response.data.results[0].key)
        // window.location.href = `https://www.youtube.com/watch?v=${key}`
        setVisible(true)
        setOpen(true)
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const[open,setOpen]=useState(false)
      function handleClose(){
        setOpen(false)
      }
    return(
        <>
 <div className="image-one" style={{backgroundImage:`url(${props.url})`}}>
        <div className="list-item-group">

        <p className='title'>{props.title}</p>
            <div className="list-icon" onClick={fetchTrailer}>
        <PlayArrowIcon/>
        <AddIcon/>
        </div>
        </div>
        </div>
        <div className="youtub-wrapper">
        <Dialog onClose={handleClose} open={open}>
        <DialogTitle>trailer</DialogTitle>
        {key &&  <YouTube videoId={key} opts={opts}  />}
        </Dialog>
        </div>
        </>
    )
}
export default Listitems;