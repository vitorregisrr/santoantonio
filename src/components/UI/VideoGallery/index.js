import React, {useState, useEffect} from 'react'
import {scroller as scroll, Element} from 'react-scroll'

import VideoPlayer from '../../Sections/VideoPlayer'

import './styles.scss'

const PhotoPreview = (props) => {
    const [currIndex,
        setCurrIndex] = useState(0);
    const [sliderData,
        setSliderData] = useState([]);
    const [showModal,
        setShowModal] = useState(false);

    useEffect(() => {
        if (props.items) {
            setSliderData(props.items)
        }
    }, [props.items]);

    const activeGaleria = () => {
        setShowModal(true);
    }

    const movePrev = () => {
        if (currIndex != 0) {
            setCurrIndex(old => old > 1
                ? old - 1
                : sliderData.length - 1);
        }
    }

    const moveNext = () => {
        setCurrIndex(old => old < sliderData.length - 1
            ? old + 1
            : 0)
    }

    return (
        <React.Fragment>
            <header className="interna-subheader">
                <div className="caption">
                    <img
                        src={require('../../../assets/images/ico/play.png')}
                        alt=""
                        className="ico"/>
                    <h4 className="title">Video</h4>
                </div>
                <div className="PhotoPreview__navs">
                    <button class="PhotoPreview__arrow left" onClick={movePrev}></button>
                    <div className="PhotoPreview__position">
                        <span className="current">{currIndex + 1}</span>
                        /
                        <span className="total">{sliderData.length > 0
                                ? Math.ceil(sliderData.length / 4)
                                : 1}</span>
                    </div>
                    <button class="PhotoPreview__arrow right" onClick={moveNext}></button>
                </div>
            </header>

            <section className="PhotoPreview">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <VideoPlayer
                            size="sm"
                            image={require('../../../assets/images/thumbs/h-h-3.png')}
                            url="https://www.youtube.com/watch?v=7Lm2skxgM6E"
                            cap1="18 outubroo de 2019"
                            cap2="Texto video loren ipsum dolor loren ipsum dolor ipsum dolor"/>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <VideoPlayer
                            size="sm"
                            image={require('../../../assets/images/thumbs/h-h-3.png')}
                            url="https://www.youtube.com/watch?v=7Lm2skxgM6E"
                            cap1="18 outubroo de 2019"
                            cap2="Texto video loren ipsum dolor loren ipsum dolor ipsum dolor"/>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <VideoPlayer
                            size="sm"
                            image={require('../../../assets/images/thumbs/h-h-3.png')}
                            url="https://www.youtube.com/watch?v=7Lm2skxgM6E"
                            cap1="18 outubroo de 2019"
                            cap2="Texto video loren ipsum dolor loren ipsum dolor ipsum dolor"/>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <VideoPlayer
                            size="sm"
                            image={require('../../../assets/images/thumbs/h-h-3.png')}
                            url="https://www.youtube.com/watch?v=7Lm2skxgM6E"
                            cap1="18 outubroo de 2019"
                            cap2="Texto video loren ipsum dolor loren ipsum dolor ipsum dolor"/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default PhotoPreview