import React, {useState, useEffect} from 'react'
import {scroller as scroll, Element} from 'react-scroll'

import GalleryModal from './GalleryModal'

import './styles.scss'

const GallerySlider = (props) => {
    const [currIndex,
        setCurrIndex] = useState(0);
    const [sliderData,
        setSliderData] = useState([]);
    const [showGaleriaModal,
        setShowGaleriaModal] = useState(false);

    useEffect(() => {
        // let newData = [
        //     {
        //         imagem: require('../../../assets/images/thumbs/s-historia-3.png'),
        //         legenda: 'aaaa'
        //     }, {
        //         imagem: require('../../../assets/images/thumbs/s-historia-2.png'),
        //         legenda: 'aaaa'
        //     }
        // ];

        // [1,2,3,4,5,6,7,8,9,10].map( i => {     if(props.data[`slider_foto${i}`]){
        // newData.push({             imagem: props.data[`slider_foto${i}`], legenda:
        // props.data[`slider_legenda_foto${i}`]         })     } })

        setSliderData(props.items)
    }, [props.items]);

    const activeGaleria = () => {
        setShowGaleriaModal(true);
    }

    const movePrev = () => {
        setCurrIndex(old => old >= 1
            ? old - 1
            : sliderData.length - 1);
        scroll.scrollTo('gallery-img', {offset: -150});
    }

    const moveNext = () => {
        scroll.scrollTo('gallery-img', {offset: -150});
        setCurrIndex(old => old < sliderData.length - 1
            ? old + 1
            : 0)
    }

    return (
        <React.Fragment>
            {sliderData[currIndex]
                ? <> <section className="GallerySlider" data-brush={props.brush}>
                    <Element name="gallery-img">
                        <div className="GallerySlider__img">
                            <img
                                src={sliderData[currIndex].imagem}
                                alt={sliderData[currIndex].legenda}
                                className="GallerySlider__img"/>
                        </div>
                    </Element>
                    <footer className="GallerySlider__footer">
                        <button
                            className="GallerySlider__expand"
                            onClick={() => activeGaleria(currIndex)}></button>
                        <div className="GallerySlider__navs">
                            <button class="GallerySlider__arrow left" onClick={movePrev}></button>
                            <div className="GallerySlider__position">
                                <span className="current">{currIndex + 1}</span>
                                /
                                <span className="total">{sliderData.length}</span>
                            </div>
                            <button class="GallerySlider__arrow right" onClick={moveNext}></button>
                        </div>
                    </footer>
                </section> 
                
                <GalleryModal
                    currentItem = {
                        currIndex
                    }
                    closeModal = {
                        () => setShowGaleriaModal(false)
                    }
                    visible = {
                        showGaleriaModal
                    }
                    items = {
                        sliderData
                    } /> </> : null
                }
        </React.Fragment>
    )
}

export default GallerySlider