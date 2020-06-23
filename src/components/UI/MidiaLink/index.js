import React from 'react'
import {Link} from 'react-router-dom'

import './styles.scss'

const MidiaLink = ({id, img, title, categoria, data, link}) => {
    return(
        <a className="MidiaLink" href={`${link}`} target="_blank" style={{backgroundImage: `url(${img})`}}>
            <div className="MidiaLink__caption">
                <div className="data">
                    {data} | {categoria}
                </div>
                <div className="title">
                    {title}
                </div>
                <button className="more">
                    Leia mais
                </button>
            </div>
        </a>
    )
}

export default MidiaLink