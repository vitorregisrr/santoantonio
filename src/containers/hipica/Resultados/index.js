import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import Select from 'react-select'

import './styles.scss';

const Resultados = (props) => {
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

    return (
        <section className="Resultados page-interna mb-2 mb-lg-5">
            <div className="container pt-lg-3 pb-lg-3">
                <div className="markup pb-lg-4">
                    <h2 class="mb-4">Resultados</h2>
                </div>
            </div>

            <div className="container justify-content-center pb-3 pb-lg-5">
                <div className="row px-lg-0">
                    <div className="col-lg-5 px-lg-4 d-flex">
                        <div className="filter-group">
                            <label htmlFor="">Cavaleiro</label>
                            <Select
                                className="custom-select"
                                placeholder={'Todos'}
                                options={[{
                                    label: 'Todos',
                                    value: ''
                                }
                            ]}/>
                        </div>
                    </div>
                    <div className="col-lg-4 px-lg-4 d-flex pr-lg-0">
                        <div className="filter-group">
                            <label htmlFor="">Cavalos</label>
                            <Select
                                className="custom-select"
                                placeholder={'Todos'}
                                options={[
                                {
                                    label: 'Todos',
                                    value: ''
                                }, {
                                    label: 'AAA',
                                    value: 'a'
                                }
                            ]}/>
                        </div>
                    </div>
                    <div className="col-lg-3 px-lg-4 d-flex pl-lg-0">
                        <div className="filter-group">
                            <label htmlFor="">Anos</label>
                            <Select
                                className="custom-select"
                                placeholder={'Todos'}
                                options={[{
                                    label: 'Todos',
                                    value: ''
                                }
                            ]}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="Resultados__list">
                    <article className="Resultados__item">
                        <div className="Resultados__item-nomes">
                            <span class="cavaleiro">
                                Thiago Mattos
                            </span>
                            <span class="cavalo">
                                Amor do Santo Antônio
                            </span>
                        </div>
                        <div className="Resultados__item-resultado">
                            2º lugar PlayOff XTC, CSN Top Riders, SHP SP
                        </div>
                    </article>
                    <article className="Resultados__item">
                        <div className="Resultados__item-nomes">
                            <span class="cavaleiro">
                                Thiago Mattos
                            </span>
                            <span class="cavalo">
                                Amor do Santo Antônio
                            </span>
                        </div>
                        <div className="Resultados__item-resultado">
                            2º lugar PlayOff XTC, CSN Top Riders, SHP SP
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Resultados;