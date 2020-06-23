import React, {useState} from 'react'
import $ from 'jquery';

import VideoModal from './VideoModal'

import './styles.scss'

const GallerySlider = ({image, url, size, cap1, cap2}) => {
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
            <article className="VideoPlayer" data-size={size} onClick={activeModal}>
                <div className="position-relative">
                    <div className="VideoPlayer__img">
                        <div className="overlay"></div>
                        <img src={image} alt="Foto de background do video"/>
                    </div>
                    <button
                        className="VideoPlayer__play"
                        title="Abrir modal do video"
                        onClick={activeModal}></button>
                </div>

                {cap1 ? <div className="VideoPlayer__caption">
                    <div className="cap1">
                        {cap1}
                    </div>
                    <div className="cap2">
                        {cap2}
                    </div>
                </div> : null}
            </article>

            <VideoModal closeModal={closeModal} visible={showGaleriaModal} url={url}/>
        </React.Fragment>
    )
}

export default GallerySlider