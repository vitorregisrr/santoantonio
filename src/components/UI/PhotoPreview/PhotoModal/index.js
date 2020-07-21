import React, {useRef, useEffect, useState} from 'react'
import $ from 'jquery'
import Slick from 'react-slick'
import {Portal} from 'react-portal';

import './styles.scss'

const PhotoModal = ({currentItem, items, closeModal, visible, descricao}) => {
    const [current,
        setCurrent] = useState(currentItem)
    const slickSettings = {
        dots: false,
        nav: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1400,
        centerPadding: 0,
        centerMode: true
    }
    const slickRef = useRef(false);

    useEffect(() => {
        if (currentItem && items) {
            slickRef
            .current
            .slickGoTo(currentItem);
        }
    }, [currentItem])

    return (
        <Portal>
            <aside className="PhotoModal" data-visible={visible}>
                <div className="container position-relative">
                    <header className="PhotoModal__header">
                        <div className="left">
                            <img
                                class="icon"
                                src={require('../../../../assets/images/ico/camera2.png')}
                                alt="Camera"/>
                            <h3 class="title">Fotos</h3>
                        </div>
                        <button onClick={closeModal} className="PhotoModal__close" title="Fechar modal"></button>
                    </header>
                    <div className="PhotoModal__content">
                        {items
                            ? <Slick ref={slickRef} afterChange={i => setCurrent(i)} {...slickSettings}>
                                    {items.map(i => (
                                        <article className="PhotoModal__item">
                                            <img className="PhotoModal__item-img" src={i.image}/>
                                            <h4 className="PhotoModal__item-nome">{i.file_descricao}</h4>
                                            <h5 className="PhotoModal__item-autor">{i.file_artista}</h5>
                                        </article>
                                    ))}
                                </Slick>
                            : null}

                    </div>
                </div>

                <div className="container">
                    <div className="PhotoModal__position">
                       {items ?  <div className="legenda">
                        {items[current].descricao}
                        </div> : null}
                        <div>
                            <div className="PhotoModal__position">
                                <span className="current">{current + 1}</span>
                                /
                                <span className="total">{items.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </Portal>
    )
}

export default PhotoModal