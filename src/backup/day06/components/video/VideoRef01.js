import React,{useState, useRef} from 'react'
import medias from '../../medias/vinyl.mp4'

const VideoRef = () => {
    const videoRef = useRef();
    console.log(videoRef); // {current : video}

    const playHandle = ()=>{
        const video = videoRef.current
        video.play();
    }
    const stopHandle = ()=>{
        const video = videoRef.current
        video.pause();
    }
  return (
    <div className='video-container'>
        <video width={'400px'} ref={videoRef}>
            <source src={medias}/>
            {/* <source src='./medias/vinyl.mp4'/> */}
        </video>
        <div className='ctrl_btn'>
            <button onClick={playHandle}>재생</button>
            <button onClick={stopHandle}>멈춤</button>
        </div>
    </div>
  )
}

export default VideoRef