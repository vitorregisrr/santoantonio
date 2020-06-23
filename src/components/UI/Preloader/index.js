import React, {useEffect, useState} from 'react'
import {LoadBar} from 'react-loadbar'

import './styles.scss'
import brandGIF from '../../../assets/images/brands/capa.svg';

const Preloader = ({show, loadProgress}) => {
    const [currName,
        setCurrName] = useState(0);
    const [visible,
            setvisible] = useState(true);
    const [tempvisible,
            settempvisible] = useState(true);
    const [customProg,
        setcustomProg] = useState(0);

    useEffect(() => {
        settempvisible(show);
        setTimeout( () => setcustomProg(30), 300);
        setTimeout( () => {
            setcustomProg(99);
            settempvisible(false);
        }, 1900);
    }, []);

    useEffect( () => {
        if(!tempvisible){
            setTimeout( () => {
                setvisible(false)
            },300)
        }
    }, [tempvisible])

    const nextName = () => {
        setCurrName(prevState => prevState === 2
            ? 0
            : prevState + 1);
    }

    return (
        <aside className="Preloader" data-show={visible}>
            <div className="Preloader__content">
                <div className="Preloader__brand">
                    <img src={brandGIF} alt="Logo animado" width={200}/>
                </div>

                <div className="Preloader__bar">
                    <div className="number" style={{width: `${customProg - 1}%`}}> {customProg}%</div>
                    <LoadBar percent={customProg}/>
                </div>
            </div>
        </aside>
    )
}

export default Preloader;