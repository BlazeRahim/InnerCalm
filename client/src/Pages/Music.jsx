import { useState, useRef } from "react";
import { faPlay, faPause, faStepBackward, faStepForward, faVolumeMute, faVolumeUp, faExpand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from '../components/Nav_music'
import pic1 from '../components/Image-1.jpg'
import pic2 from '../components/Image-2.jpg'
import pic3 from '../components/Image-3.jpg'
import pic4 from '../components/Image-4.jpg'
import './Music.css'


//MUSIC

import music1 from "../components/music/music1.mp3";
import music2 from "../components/music/music2.mp3";
import music3 from "../components/music/music3.mp3";
import music4 from "../components/music/music4.mp3";
import music5 from "../components/music/music5.mp3";

const musicList = [music1, music2, music3, music4, music5];





/////////////////
const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "0px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    filter: " drop-shadow(#000 1px 1px 3px)"
};

const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    filter: " drop-shadow(#000 1px 1px 10px)"
};

const sliderStyles = {
    height: "100%",
};

const ImageSlider = ({ slides }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
    const audioRef = useRef(null);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);


    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const msGoToNext = async () => {

        let audio = audioRef.current;
        audio.pause();
        setIsPlaying(false)

        if (currentMusicIndex === musicList.length - 1)
            setCurrentMusicIndex(0)
        else
            setCurrentMusicIndex(currentMusicIndex + 1)


        audio = audioRef.current;
        audio.play();



    };
    const msGoToPrevious = () => {
        if (currentMusicIndex === 0)
            setCurrentMusicIndex(musicList.length - 1)
        else
            setCurrentMusicIndex(currentMusicIndex - 1)

    };

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const handleFullScreenClick = () => {
        const elem = document.documentElement;
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            elem.requestFullscreen();
        }
    };

    return (
        <div style={slideStylesWidthBackground} >
            <div>
                <audio ref={audioRef} src={musicList[currentMusicIndex]}></audio>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>

                <div className="allbuttons">
                    <button
                        className="next_prev"
                        onClick={msGoToPrevious}
                        style={{
                            cursor: 'pointer',
                            display: 'inline-block',
                            fontSize: '25px',
                            border: "none",
                            backgroundColor: "#00000000",
                            color: "#fff",
                            textShadow: "#000 2px 2px 20px"
                        }}
                    >
                        <FontAwesomeIcon icon={faStepBackward} />
                    </button>
                    <button
                        onClick={() => {
                            setIsPlaying(!isPlaying);
                            const audio = audioRef.current;
                            if (audio.paused) {
                                audio.play();
                            } else {
                                audio.pause();
                            }
                        }}
                        className="play-button" style={{ cursor: "pointer", fontSize: "30px", border: "none", backgroundColor: "#00000000", color: "#fff", textShadow: "#000 2px 2px 20px" }} >
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                    </button>
                    <button
                        className="next_prev"
                        onClick={msGoToNext}
                        style={{
                            cursor: 'pointer',
                            border: "none",
                            display: 'inline-block',
                            fontSize: '25px',
                            backgroundColor: "#00000000", color: "#fff", textShadow: "#000 2px 2px 20px"
                        }}
                    >
                        <FontAwesomeIcon icon={faStepForward} />

                    </button>


                    <button className="fullscreen-button" onClick={handleFullScreenClick} style={{ marginRight: "-10px", color: "white", cursor: "pointer", fontSize: '25px', backgroundColor: "#00000000", border: "none" }}>
                        <FontAwesomeIcon icon={faExpand} />
                    </button>
                </div>

            </div>
            <div></div>
        </div >
    );
};

const Music = () => {
    const slides = [
        { url: pic1, title: "1" },
        { url: pic2, title: "2" },
        { url: pic3, title: "3" },
        { url: pic4, title: "4" },
    ];
    const containerStyles = {
        width: "100%",
        height: "calc(100vh - 0px)",
        margin: "0",
    };
    return (
        <>
            <Nav />
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </>
    );
}

export default Music;
