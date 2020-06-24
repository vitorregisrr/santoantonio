import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';

const QuemSomos = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({
        page: {
            dados: false
        }
    });

    useEffect(() => {
        const dataName = 'sitio-quemsomos-data';
        if (getStorage(dataName)) {
            setIsFetching(false);
            setData(JSON.parse(getStorage(dataName)));

        } else {
            axios
                .get('/sitio/quemsomos')
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
        <section className="Quemsomos page-interna mb-2 mb-lg-5">
            <div className="container sm">
                <div className="markup mb-4 mb-lg-5">
                    <h2>
                        {data.page.title}
                    </h2>
                </div>
            </div>
            <div className="container pb-4 pb-lg-5">
                <div className="markup">
                    <img src={data.page.dados.imagem_superior} alt=""/>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <h3>{data.page.dados.titulo_superior}</h3>

                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_superior
                    }}></div>
                </div>
            </div>

            <div className="bg-bege overlay-1">
                <div className="container">
                    <div className="galeria-1 galeria">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-2 d-none d-lg-block"></div>
                            <div className="col-12 col-sm-6 col-lg-6 d-flex align-items-center">
                                <img src={data.page.dados.imagem_bloco_1} alt=""/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 pr-lg-0">
                                <img className="img-2" src={data.page.dados.imagem_bloco_2} alt=""/>
                            </div>
                        </div>
                        <div className="row mt-lg-3">
                            <div className="col-12 col-sm-6 col-lg-3 pr-lg-0">
                                <img src={data.page.dados.imagem_bloco_4} alt=""/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-5">
                                <img src={data.page.dados.imagem_bloco_3} alt=""/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-1 d-none d-lg-block"></div>
                        </div>
                    </div>
                </div>

                <div className="container sm  overlay-2">
                    <div className="markup">
                        <h4>{data.page.dados.titulo_continuacao}</h4>

                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.page.dados.texto_continuacao
                        }}></div>

                        <blockquote
                            dangerouslySetInnerHTML={{
                            __html: data.page.dados.texto_continuacao_2_destaque
                        }}></blockquote>

                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.page.dados.texto_continuacao_2
                        }}></div>
                    </div>
                </div>
            </div>
            <div className="container sm">
                <div className="markup">
                    <h4 class="mb-0">{data.page.dados.titulo_continuacao_2_destaque}</h4>
                    <h5 class="mb-4">{data.page.dados.titulo_continuacao_2}</h5>

                    <div
                        class="mb-5 pb-lg-3"
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_continuacao_2
                    }}></div>

                    <div className="position-relative px-lg-2">
                        <div className="img-legenda legenda-1">
                            {data.page.dados.texto_continuacao_2_bloco_verde}
                        </div>
                        <img src={data.page.dados.imagem_bloco_5} alt=""/>
                    </div>
                </div>
            </div>
            <div className="bg-bege p-sm">
                <div className="container sm">
                    <div className="markup">
                        <h4 class="mb-0 mt-0">{data.page.dados.titulo_continuacao_3_destaque}</h4>
                        <h5 class="mb-4">{data.page.dados.titulo_continuacao_3}</h5>

                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.page.dados.texto_continuacao_3
                        }}></div>

                        <div className="position-relative px-lg-2 mt-5 pt-lg-4 pb-5 pb-lg-0">
                            <div className="img-legenda legenda-2">
                                {data.page.dados.texto_continuacao_3_bloco_verde}
                            </div>
                            <img src={data.page.dados.imagem_bloco_6} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <h4 class="mb-0">{data.page.dados.titulo_continuacao_4_destaque}</h4>
                    <h5 class="mb-4">{data.page.dados.titulo_continuacao_4}</h5>

                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_continuacao_4
                    }}></div>

                    <div className="position-relative px-lg-2 mt-4 mt-lg-5 pt-lg-3">
                    <div className="img-legenda legenda-1">
                                {data.page.dados.texto_continuacao_4_bloco_verde}
                            </div>
                            <img src={data.page.dados.imagem_bloco_7} alt=""/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default QuemSomos;