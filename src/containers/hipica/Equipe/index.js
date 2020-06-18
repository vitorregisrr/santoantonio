import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import IntegranteLink from '../../../components/UI/IntegranteLink/'

import './styles.scss';

const Equipe = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);

    useEffect(() => {
        if (getStorage('hipismo-data')) {
            setIsFetching(false);
            console.log(JSON.parse(getStorage('hipismo-data')))
            setData(JSON.parse(getStorage('hipismo-data')));
        } else {
            axios
                .get('/pages/hipismo')
                .then(response => {
                    setData(response.data);
                    setStorage('hipismo-data', JSON.stringify(response.data));
                })
                .catch(err => console.log(err))
                . finally(() => {
                    setIsFetching(false);
                })
        }
    }, []);

    const changeFilter = () => {
        
    }

    return (
        <section className="Equipe page-interna mb-2 mb-lg-5">
            <div className="container pt-lg-3">
                <div className="markup pb-lg-4">
                    <h2 class="mb-lg-4">Equipe</h2>
                    <p>
                        Conheça os integrantes da equipe Santo Antônio
                    </p>
                </div>
            </div>

            <div className="container justify-content-center md pb-5">
                <div className="row">
                    <div className="col-lg-4 px-lg-4 d-flex">
                        <button onClick={() => changeFilter('')} className="btn btn-default w-m mb-3 mb-lg-4">
                            Cavaleiros
                        </button>
                    </div>
                    <div className="col-lg-4 px-lg-4 d-flex">
                        <button onClick={() => changeFilter('')} className="btn btn-default w-m mb-3 mb-lg-4">
                            Veterinários
                        </button>
                    </div>
                    <div className="col-lg-4 px-lg-4 d-flex">
                        <button onClick={() => changeFilter('')} className="btn btn-default w-m mb-3 mb-lg-4">
                            Tratadores Hípica
                        </button>
                    </div>
                    <div className="col-lg-4 px-lg-4 d-flex">
                        <button onClick={() => changeFilter('')} className="btn btn-default w-m mb-3 mb-lg-4">
                            Tratadores Paddock
                        </button>
                    </div>
                    <div className="col-lg-4 px-lg-4 d-flex">
                        <button onClick={() => changeFilter('')} className="btn btn-default w-m mb-3 mb-lg-4">
                            Motorista caminhão
                        </button>
                    </div>
                    <div className="col-lg-4 px-lg-4 d-flex">
                        <button onClick={() => changeFilter('')} className="btn btn-default w-m mb-3 mb-lg-4">
                            Ferradores
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <IntegranteLink
                            id="1"
                            nome="Júlio Mattos"
                            ocupacao="Coordenador técnico"
                            img={require('../../../assets/images/thumbs/integrante-3.png')}
                        />
                    </div>
                    <div className="col-lg-4">
                        <IntegranteLink
                            id="1"
                            nome="Rodrigo Lima"
                            img={require('../../../assets/images/thumbs/integrante-2.png')}
                        />
                    </div>
                    <div className="col-lg-4">
                        <IntegranteLink
                            id="1"
                            nome="Thiago Mattos"
                            img={require('../../../assets/images/thumbs/integrante-1.png')}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Equipe;