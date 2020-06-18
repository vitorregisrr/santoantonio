import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import CavaloLink from '../../../components/UI/CavaloLink/'

import './styles.scss';

const Cavalos = (props) => {
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
        <section className="Cavalos page-interna mb-2 mb-lg-5">
            <div className="container pt-lg-3 pb-lg-3">
                <div className="markup pb-lg-4">
                    <h2 class="mb-lg-4">Cavalos</h2>
                    <p>
                        Conheça os cavalos da Equipe Santo Antônio
                    </p>
                </div>
            </div>

            <div className="container justify-content-center pb-5">
                <div className="row px-lg-0">
                    <div className="col-lg-3 px-lg-4 d-flex">
                        <button onClick={() => changeFilter('')} className="btn-default w-80 mx-lg-0 mb-3 mb-lg-4">
                            No Brasil
                        </button>
                    </div>
                    <div className="col-lg-3 px-lg-4 d-flex">
                        <button onClick={() => changeFilter('')} className="btn-default w-80 mb-3 mb-lg-4 ml-lg-2">
                            Na Europa
                        </button>
                    </div>
                    <div className="col-lg-3 px-lg-4 d-flex">
                        <button onClick={() => changeFilter('')} className="btn-default w-80 mb-3 mb-lg-4">
                            Potros
                        </button>
                    </div>
                    <div className="col-lg-3 px-lg-4 d-flex">
                        <button onClick={() => changeFilter('')} className="btn-default w-80 mb-3 mb-lg-4 mr-lg-0">
                            Marcaram a história
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <CavaloLink
                            id="1"
                            nome="Amor do Santo Antônio"
                            pais="Limbo x Richebourg"
                            nascimento="04/03/2009"
                            detalhes="Castrado – Pampa – Sela Francês | altura: 1,67m"
                            img={require('../../../assets/images/thumbs/cavalo-1.png')}
                        />
                    </div>
                    <div className="col-lg-4">
                        <CavaloLink
                            id="1"
                            nome="Amor do Santo Antônio"
                            pais="Limbo x Richebourg"
                            nascimento="04/03/2009"
                            detalhes="Castrado – Pampa – Sela Francês | altura: 1,67m"
                            img={require('../../../assets/images/thumbs/cavalo-1.png')}
                        />
                    </div>
                    <div className="col-lg-4">
                        <CavaloLink
                            id="1"
                            nome="Amor do Santo Antônio"
                            pais="Limbo x Richebourg"
                            nascimento="04/03/2009"
                            detalhes="Castrado – Pampa – Sela Francês | altura: 1,67m"
                            img={require('../../../assets/images/thumbs/cavalo-1.png')}
                        />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row pt-lg-5">
                    <div className="d-flex w-100 justify-content-center">
                        <button className="btn-sm">Mostrar mais</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cavalos;