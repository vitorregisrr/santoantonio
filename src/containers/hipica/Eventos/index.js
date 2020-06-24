import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';

const Eventos = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({
        page: {
            dados: false
        }
    });

    useEffect(() => {
        const dataName = 'hipica-eventos-data';
        if (getStorage(dataName)) {
            setIsFetching(false);
            setData(JSON.parse(getStorage(dataName)));

        } else {
            axios
                .get('/equipe/eventos')
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

    return (
        <section className="Eventos page-interna mb-2 mb-lg-5">
            {data.page.dados ?
            <>
            <div className="container pt-lg-3 pb-lg-1">
                <div className="markup pb-lg-4">
                    <h2 class="mb-lg-4">Eventos</h2>
                    <p>
                        Programação de concursos da Equipe Santo Antônio
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="d-flex justify-content-center pb-4 pb-lg-5 mb-lg-5">
                    <div className="Eventos__ano">
                        2020
                    </div>
                </div>

                <div className="Eventos__table">
                    <div className="Eventos__table-header">
                        <div>
                            Mês
                        </div>
                        <div>
                            Evento
                        </div>
                        <div>
                            Local
                        </div>
                    </div>

                    <div className="Eventos__item">
                        <div className="Eventos__item-mes">
                            <span>Março</span>
                        </div>

                        <div className="Eventos__table-header mobile">
                            <div>
                                Dias
                            </div>
                            <div>
                                Evento
                            </div>
                            <div>
                                Local
                            </div>
                        </div>

                        <div className="Eventos__table-datas">
                            <div className="Eventos__table-item">
                                <span className="data">
                                    07 a 08
                                </span>
                                <span className="evento">Paddock</span>
                                <div className="local">
                                    <span>Paddock</span>
                                    <span>RJ</span>
                                </div>
                            </div>

                            <div className="Eventos__table-item">
                                <span className="data">
                                    14 a 15
                                </span>
                                <span className="evento">I Ranking SHB</span>
                                <div className="local">
                                    <span>SHB</span>
                                    <span>RJ</span>
                                </div>
                            </div>

                            <div className="Eventos__table-item">
                                <span className="data">
                                    20 a 22
                                </span>
                                <span className="evento">CSIe RJ</span>
                                <div className="local">
                                    <span>SHB</span>
                                    <span>RJ</span>
                                </div>
                            </div>

                            <div className="Eventos__table-item">
                                <span className="data">
                                    27 a 29
                                </span>
                                <span className="evento">XTC CSN 71º Aniversário SHC</span>
                                <div className="local">
                                    <span>Hípica de Campinas</span>
                                    <span>SP</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Eventos__item">
                        <div className="Eventos__item-mes">
                            <span>Abril</span>
                        </div>

                        <div className="Eventos__table-header mobile">
                            <div>
                                Dias
                            </div>
                            <div>
                                Evento
                            </div>
                            <div>
                                Local
                            </div>
                        </div>

                        <div className="Eventos__table-datas">
                            <div className="Eventos__table-item">
                                <span className="data">
                                    01 a 05
                                </span>
                                <span className="evento">CSN** Open</span>
                                <div className="local">
                                    <span>Hipica Paulista</span>
                                    <span>SP</span>
                                </div>
                            </div>

                            <div className="Eventos__table-item">
                                <span className="data">
                                    11 a 12
                                </span>
                                <span className="evento">II Ranking SHB</span>
                                <div className="local">
                                    <span>SHB</span>
                                    <span>RJ</span>
                                </div>
                            </div>

                            <div className="Eventos__table-item">
                                <span className="data">
                                    23 a 26
                                </span>
                                <span className="evento">XTC CSN/CSI-W CSN Cidade de Curitiba</span>
                                <div className="local">
                                    <span>Hipica de Curitiba</span>
                                    <span>PR</span>
                                </div>
                            </div>

                            <div className="Eventos__table-item">
                                <span className="data">
                                    27 a 29
                                </span>
                                <span className="evento">XTC CSN 71º Aniversário SHC</span>
                                <div className="local">
                                    <span>Hípica de Campinas</span>
                                    <span>SP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
            : null}
        </section>
    )
}

export default Eventos;