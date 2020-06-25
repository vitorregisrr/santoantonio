import React, {useEffect, useState} from 'react'

import './styles.scss'
import brandGIF from '../../../assets/images/brands/capa.svg';

const Preloader = ({show, loadProgress}) => {
    const [visible, setVisible] = useState(show);
    
    return (
        <aside className="Preloader" data-show={visible}>
            <div className="Preloader__content">
                <div className="Preloader__brand">
                    <img src={brandGIF} alt="Logo animado" width={200}/>
                </div>

                <div className="Preloader__bar">
                    <div className="number" style={{width: `${loadProgress === 1 ? 3 : loadProgress}%`}}> {loadProgress}%</div>
                    
                    <div className="Preloader__bar-percentage" style={{width: loadProgress+'%'}}></div>
                  
                </div>
            </div>
        </aside>
    )
}

export default Preloader;