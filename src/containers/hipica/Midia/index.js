import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import MidiaLink from '../../../components/UI/MidiaLink/'
import Select from 'react-select';

import './styles.scss';

const Midia = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({page: {dados: false}});

    useEffect(() => {
        const dataName = 'hipica-midia-data';
        if (getStorage(dataName)) {
            setIsFetching(false);
            setData(JSON.parse(getStorage(dataName)));

        } else {
            axios
                .get('/equipe/midia')
                .then(response => {
                    console.log(response)
                    setData(response.data);
                    setStorage(dataName, JSON.stringify(response.data));
                })
                .catch(err => console.log(err))
                . finally(() => {
                    setIsFetching(false);
                })
        }
    }, []);
    
    const changeFilter = () => {}

    return (
        <section className="Midia page-interna pb-5 mb-2 mb-lg-5">
            {data.page.dados ?
            <>
            <div className="pt-lg-3 pb-lg-1">
                <div className="markup pb-lg-4">
                    <h2 class="mb-lg-4">Mídia</h2>
                    <p>
                        Principais destaques da Equipe Santo Antônio na mídia
                    </p>
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

            <div className="container ">
                <div className="row">
                    <div className="col-lg-4">
                        <MidiaLink
                            img={require('../../../assets/images/thumbs/noticia-1.png')}
                            link="http://www.google.com.br"
                            data="16.12.2019"
                            categoria="Por fora das pistas"
                            title="Rodrigo Lima vence o Raking da SHB 2019"/>
                    </div>
                </div>
            </div>
            </> : null}

        </section>
    )
}

export default Midia;