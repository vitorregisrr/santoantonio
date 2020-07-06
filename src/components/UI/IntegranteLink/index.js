import React from 'react'
import {Link} from 'react-router-dom'

import './styles.scss'

const IntegranteLink = ({id, img, nome, ocupacao}) => {
    return(
        <div className="IntegranteLink" to={`/hipica/integrante/${id}`}>
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
        </div>
    )
}

export default IntegranteLink