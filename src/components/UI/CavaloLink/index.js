import React from 'react'
import {Link} from 'react-router-dom'

import './styles.scss'
import Cavalo from 'containers/hipica/Cavalo'

const CavaloLink = ({
    id,
    img,
    nome,
    pais,
    has_interna,
    nascimento,
    detalhes
}) => {
    return (
        <Link className="CavaloLink" to={`/hipica/cavalo/${id}`} disabled-link={`${!has_interna}`}>
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

               {detalhes ?  <div className="detalhes">
                    {detalhes}
                </div> : null}

            </div>
        </Link>
    )
}

export default CavaloLink