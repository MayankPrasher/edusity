import React, { useRef } from 'react'
import './Videoplayer.css'

const Videoplayer = ({playState , setPlayState}) => {
    const player = useRef(null);
    const closePlayer = (e)=>{
        if(e.target=== player.current){
            setPlayState(false);
        }
    }
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
     <video src="" autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer