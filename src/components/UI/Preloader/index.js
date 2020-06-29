import React, {useEffect, useState} from 'react'

import './styles.scss'
import brandGIF from '../../../assets/images/brands/capa.svg';

const Preloader = ({show, loadProgress}) => {
    return (
        <aside className="Preloader" data-show={show}>
            <div className="Preloader__content">
                <div className="Preloader__brand">
                    <img src={brandGIF} alt="Logo animado" width={200}/>
                </div>
                <div className="Preloader__bar">
                    <img src={require('../../../assets/images/ico/loader.gif')} alt=""/>
                </div>
            </div>
        </aside>
    )
}

export default Preloader;