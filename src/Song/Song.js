import React, { Component, useState, useRef, useEffect, usePrevious } from 'react';
import { isCompositeComponent } from 'react-dom/cjs/react-dom-test-utils.production.min';
import './Song.css'
import pologenie from '../assets/pologenie.mp3'
import golaya from '../assets/golaya.mp3'
import just from '../assets/just.mp3'
import quest from '../assets/quest.mp3'

const Song = () => {
    let [i, setI] = useState(0);
    const musicRef = useRef();
    const [play, setPlay] = useState(false);
    const [save, setSave] = useState([])

    // componentDidMount() {
    //     this.setState({
    //         play: JSON.parse(localStorage.getItem('key')) || []
    //     })
    // }



    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevState.state !== this.setPlay) {
    //         localStorage.setItem('key', JSON.stringify(this.setPlay))
    //     }
    // }\

    // const prevPlay = usePrevious(play);
    // useEffect(() => {
    //     if (prevPlay.length !== play.length) {
    //         localStorage.setItem('play', JSON.stringify(play));
    //     }
    // }, [play]);

    // useEffect((_, prevPlay) => {
    //     if (prevPlay.play !== play) {
    //         localStorage.setItem('play', JSON.stringify(play));
    //     }
    // });

    const list = [
        {
            path: pologenie,
            title: 'Cкриптонит-положение',
            img: 'https://images.genius.com/ad00fb85928e48698fb5acefc8c970ac.1000x1000x1.jpg'

        },
        {
            path: golaya,
            title: 'Градусы — Голая',
            img: 'http://rultrastar.com/image/cache/data/2000/Gradusy%20-%20Golaya-500x500.jpg'
        },
        {
            path: just,
            title: 'Bill Withers - Just The Two Of Us',
            img: 'https://i1.sndcdn.com/artworks-000166184877-ij3zyc-t500x500.jpg'
        },
        {
            path: quest,
            title: 'Quest Pistols Show - Ты Так Красива',
            img: 'https://c-cl.cdn.smule.com/rs-s78/arr/14/57/3cc8ac17-cd41-4f74-9683-9963aec7a8d3_1024.jpg'
        },
    ]


    const onPlayer = () => {
        setPlay(!play)
        play ? onPause() : onPlay()
    }

    const onPlay = () => {
        musicRef.current.play()
    }
    const onPause = () => {
        musicRef.current.pause()
    }

    const prevSong = () => {
        setPlay(!play)
        play ? onPause() : onPlay()
        if (i === 0) {
            i = list.length
        } else {
            setI(i - 1)
        }
    }
    const nextSong = () => {
        setPlay(play)
        play ? musicRef.current.pause() : musicRef.current.play()
        if (i === list.length - 1) {
        } else {
            setI(i + 1)
        }
    }
    return (
        <div className="container">
            <div className="img">
                <img src={list[i].img} width='380' height='380' alt="" />
            </div>
            <div className="name">
                <h1>{list[i].title}</h1>
            </div>
            <div class="frame">
                <audio src={list[i].path} ref={musicRef}></audio>
                <span onClick={prevSong} class="btn">
                    <i class="fas fa-backward"></i>
                </span>
                <span onClick={onPlayer} class="btn">
                    <i class={play ? 'fas fa-pause' : 'fas fa-play'}></i>
                </span>
                <a href="#" onClick={nextSong} class="btn">
                    <i class="fas fa-forward"></i>
                </a>

            </div>
        </div>
    );
}

export default Song;