import React, {useState, useEffect} from 'react'
import {scroller as scroll, Element} from 'react-scroll'

import PhotoModal from './PhotoModal'

import './styles.scss'

const PhotoPreview = (props) => {
    const [currIndex,
        setCurrIndex] = useState(0);
    const [sliderData,
        setSliderData] = useState([]);
    const [showModal,
        setShowModal] = useState(false);

    useEffect(() => {
        if(props.items){
            setSliderData(props.items);
        }
    }, [props.items]);

    const activeGaleria = () => {
        setShowModal(true);
    }

    const movePrev = () => {
        setCurrIndex(old => old >= 1
            ? old - 1
            : sliderData.length - 1);
        scroll.scrollTo('gallery-img', {offset: -140});
    }

    const moveNext = () => {
        scroll.scrollTo('gallery-img', {offset: -140, smooth: true});
        setCurrIndex(old => old < sliderData.length - 1
            ? old + 1
            : 0)
    }

    return (
        <React.Fragment>
            { sliderData[currIndex] ? <> 
            
            <header className="interna-subheader">
                <div className="caption">
                    <img
                        src={require('../../../assets/images/ico/fotos.png')}
                        alt=""
                        className="ico"/>
                    <h4 className="title">Fotos</h4>
                </div>
                <div className="PhotoPreview__navs">
                    <button class="PhotoPreview__arrow left" onClick={movePrev}></button>
                    <div className="PhotoPreview__position">
                        <span className="current">{currIndex + 1}</span>
                        /
                        <span className="total">{sliderData.length > 0 ? Math.ceil(sliderData.length / 4): 1}</span>
                    </div>
                    <button class="PhotoPreview__arrow right" onClick={moveNext}></button>
                </div>
            </header>

            <section className="PhotoPreview" data-brush={props.brush}>
                <div className="PhotoPreview__img">
                    <img
                        src={sliderData[currIndex].imagem}
                        alt={sliderData[currIndex].legenda}
                        className="PhotoPreview__img"/>
                </div>
                <footer className="PhotoPreview__footer">
                    <span className="PhotoPreview__caption">
                        {sliderData[currIndex].legenda}
                    </span>
                    <button
                        className="PhotoPreview__expand"
                        onClick={() => activeGaleria(currIndex)}></button>
                </footer>
            </section>

            <PhotoModal
                currentItem={currIndex}
                closeModal=
                { () => setShowModal(false) }
                visible={showModal}
                items={sliderData}/>
        </> : ''}
        </React.Fragment>
    )
}

export default PhotoPreview