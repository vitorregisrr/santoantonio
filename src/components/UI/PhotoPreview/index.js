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
        if (currIndex != 0) {
            setCurrIndex(old => old > 0
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
                        src={require('../../../assets/images/ico/fotos.png')}
                        alt=""
                        className="ico"/>
                    <h4 className="title">Fotos</h4>
                </div>
                <div className="PhotoPreview__navs">
                    <button class="PhotoPreview__arrow left" onClick={movePrev}></button>
                    <div className="PhotoPreview__position">
                    {sliderData.length !== 0 ? 
                    <span className="current">{currIndex === 0 ? 1 : currIndex + 1}</span>
                    : <span className="current">0</span>}
                        /
                    {sliderData.length !== 0 ?
                    <span className="total">{sliderData.length !== 0
                        ? Math.ceil(sliderData.length)
                        : 1}</span>
                    : <span className="total">0</span>}
                    </div>
                    <button class="PhotoPreview__arrow right" onClick={moveNext}></button>
                </div>
            </header>

            <section className="PhotoPreview" data-brush={props.brush}>
            { sliderData[currIndex] ? <> 
                <div className="PhotoPreview__img">
                    <img
                        src={sliderData[currIndex].image}
                        alt={sliderData[currIndex].descricao}
                        className="PhotoPreview__img"/>
                </div>
                <footer className="PhotoPreview__footer">
                    <span className="PhotoPreview__caption">
                        {sliderData[currIndex].descricao}
                    </span>
                    <button
                        className="PhotoPreview__expand"
                        onClick={() => activeGaleria(currIndex)}></button>
                </footer>
                </> : ''}
            </section>

            <PhotoModal
                currentItem={currIndex}
                closeModal=
                { () => setShowModal(false) }
                visible={showModal}
                items={sliderData}/>
        </React.Fragment>
    )
}

export default PhotoPreview