import React from 'react'
import {Link} from 'react-router-dom'

import './styles.scss'

const IntegranteLink = ({id, img, nome, ocupacao}) => {
    return(
        <Link className="IntegranteLink" to={`/hipica/integrante?id=${id}`}>
            <div className="IntegranteLink__img">
                <img src={img} alt={`Retrato do integrante ${nome}`}/>
            </div>
            <div className="IntegranteLink__caption">
                <div className="nome">
                    {nome}
                </div>

                {ocupacao && 
                    <>
                      <div className="ocupacao">
                          {ocupacao}
                      </div>
                    </>
                }

            </div>
        </Link>
    )
}

export default IntegranteLink