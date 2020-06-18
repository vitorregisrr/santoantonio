import React from 'react'
import {Link} from 'react-router-dom'

import './styles.scss'

const CavaloLink = ({
    id,
    img,
    nome,
    pais,
    nascimento,
    detalhes
}) => {
    return (
        <Link className="CavaloLink" to={`/hipica/integrante?id=${id}`}>
            <div className="CavaloLink__img">
                <img src={img} alt={`Retrato do integrante ${nome}`}/>
            </div>
            <div className="CavaloLink__caption">
                <div className="nome">
                    {nome}
                </div>

                <div className="pais">
                    {pais}
                </div>

                <div className="nascimento">
                    {nascimento}
                </div>

                <div className="detalhes">
                    {detalhes}
                </div>

            </div>
        </Link>
    )
}

export default CavaloLink