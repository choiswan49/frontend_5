import React,{useState, useRef} from 'react'
import medias from '../../medias/vinyl.mp4'
import './videoRef.css'

const VideoRef = () => {
    
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef();

    // const playHandle = ()=>{
    //     setIsPlaying(true);
    //     const video = videoRef.current
    //     video.play();
    // }
    // const stopHandle = ()=>{
    //     setIsPlaying(false);
    //     const video = videoRef.current
    //     video.pause();
    // }
    const videoHandel = ()=>{
        const video = videoRef.current
        setIsPlaying(!isPlaying)
        !isPlaying ? video.pause() : video.play()
    }
  return (
    <div className='video-container'>
        <video ref={videoRef}>
            <source src={medias}/>
        </video>
        <div className='ctrl_btn'>
            <button onClick={videoHandel}>
                {isPlaying ? "Stop" : "Play"}
            </button>
        </div>
    </div>
  )
}

export default VideoRef