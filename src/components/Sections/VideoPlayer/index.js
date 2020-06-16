import React, {useState} from 'react'
import $ from 'jquery';

import VideoModal from './VideoModal'

import './styles.scss'

const GallerySlider = ({image, url}) => {
    const [showGaleriaModal,
        setShowGaleriaModal] = useState(false);

    const activeModal = () => {
        setShowGaleriaModal(true);
    }

    const closeModal = () => {
        $("iframe")
            .each(function () {
                var src = $(this).attr('src');
                $(this).attr('src', src);
            });
        setShowGaleriaModal(false);
    }

    return (
        <React.Fragment>
            <section className="VideoPlayer">
                <div className="VideoPlayer__img">
                    <div className="overlay"></div>
                    <img src={image} alt="Foto de background do video"/>
                </div>
                <button
                    className="VideoPlayer__play"
                    title="Abrir modal do video"
                    onClick={activeModal}></button>
            </section>

            <VideoModal closeModal={closeModal} visible={showGaleriaModal} url={url}/>
        </React.Fragment>
    )
}

export default GallerySlider