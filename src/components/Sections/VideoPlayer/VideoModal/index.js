import React from 'react'
import {Portal} from 'react-portal';

import './styles.scss'

const GaleriaModal = ({closeModal, visible, url}) => {

    return (
        <Portal>
            <aside className="VideoModal" data-visible={visible}>
                <div className="container position-relative">
                    <header className="VideoModal__header">
                        <div className="left">
                            <img
                                class="icon"
                                src={require('../../../../assets/images/ico/camera2.png')}
                                alt="Camera"/>
                            <h3 class="title">Vídeo</h3>
                        </div>
                        <button onClick={closeModal} className="VideoModal__close" title="Fechar modal"></button>
                    </header>
                    <div className="VideoModal__content">

                        <iframe
                            src={url}
                            className="video-iframe"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                    </div>
                </div>
            </aside>
        </Portal>
    )
}

export default GaleriaModal