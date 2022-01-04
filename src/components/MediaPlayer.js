import React, { useState, useRef } from 'react'

const MediaPlayer = () => {

    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? videoRef.current.pause() : videoRef.current.play();       
    }


    return (
        <div>
            <div>
                <h1>Media Player</h1>
                <video width="400"  ref={videoRef} controls>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"></source>                    
                    Your browser does not support HTML5 video.
                </video>



            </div>
            <div>
                <button onClick={handlePlay}>{!isPlaying? "Play" : "Pause"}</button>
                
                <button onClick={() => videoRef.current.currentTime = 0}>Reset</button>
            </div>
        </div>


    )
}

export default MediaPlayer
