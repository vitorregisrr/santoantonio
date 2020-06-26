import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';

const Historia = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({
        page: {
            dados: false
        }
    });

    useEffect(() => {
        const dataName = 'hipica-historia-data';
        if (getStorage(dataName)) {
            setIsFetching(false);
            setData(JSON.parse(getStorage(dataName)));

        } else {
            axios
                .get('/equipe/historia')
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
        <section className="Historia-h page-interna mb-2 mb-lg-5">
            {data.page.dados ? 
            <>
            <div className="container sm pt-lg-3">
                <div className="markup mb-3">
                    <h2 class="mb-0">
                        {data.page.title}
                    </h2>
                </div>
            </div>
            <div className="container pb-4 pb-lg-5 px-lg-5">
                <div className="markup px-lg-5">
                    <img src={data.page.dados.imagem_superior} alt=""/>
                </div>
            </div>
            <div className="container sm pt-lg-5">
                <div className="markup wow">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_superior
                    }}></div>
                </div>
            </div>
            <div className="bg-bege">
                <div className="container sm">
                    <div className="markup">
                        <h4 class="mb-4 mt-0">{data.page.dados.titulo_objetivo}</h4>
                        <blockquote
                            dangerouslySetInnerHTML={{
                            __html: data.page.dados.texto_objetivo
                        }}></blockquote>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup pt-lg-1">
                    <h4>{data.page.dados.titulo_historia_hipismo}</h4>
                    <div className="pb-4 pb-lg-5">
                        <img src={data.page.dados.imagem_historia_hipismo} alt=""/>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_hipismo
                    }}></div>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container sm markup">
                    <blockquote
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_citacao_bege
                    }}></blockquote>
                    <sm className="author">
                        {data.page.dados.titulo_citacao_bege}
                    </sm>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_continuacao
                    }}></div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup pt-3 pt-lg-4">
                    <h4>{data.page.dados.titulo_texto_tropa}</h4>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_tropa
                    }}></div>
                </div>
            </div>

            <div className="container">
                <div className="row pt-3 pt-lg-5 mt-lg-3">
                    <div className="col-lg-6">
                        <img
                            height="400"
                            style={{
                            objectFit: 'cover'
                        }}
                            src={data.page.dados['img-hipismo-2']}
                            alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <img
                            height="400"
                            style={{
                            objectFit: 'cover'
                        }}
                            src={data.page.dados['img-hipismo-3']}
                            alt=""/>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup pt-4 pt-lg-5">
                    <h4>{data.page.dados.titulo_texto_cavaleiro_novo}</h4>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_cavaleiro_novo
                    }}></div>
                </div>
            </div>

            <div className="container">
                <div className="row pt-3 pt-lg-5 mt-lg-3">
                    <div className="col-lg-7 px-lg-0">
                        <img
                            height="700"
                            style={{
                            objectFit: 'cover'
                        }}
                            src={data.page.dados['img-hipismo-4']}
                            alt=""/>
                    </div>
                    <div className="col-lg-5 px-lg-0">
                        <img
                            height="700"
                            style={{
                            objectFit: 'cover'
                        }}
                            src={data.page.dados['img-hipismo-5']}
                            alt=""/>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup pt-4 pt-lg-5">
                    <h4>{data.page.dados.titulo_texto_acidentes}</h4>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_acidentes
                    }}></div>
                </div>
            </div>

            <div className="bg-bege overlay-1">
                <div className="container sm">
                    <div className="markup">
                        <h4 className="mt-0">{data.page.dados.titulo_texto_acidentes}</h4>
                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.page.dados.texto_a_equipe
                        }}></div>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="galeria-1">
                    <div className="row">
                        <div className="col-lg-6 pr-lg-0">
                            <img
                                className="mb-0"
                                height="350"
                                style={{
                                objectFit: 'cover'
                            }}
                                src={data.page.dados['img-hipismo-6']}
                                alt=""/>
                            <img
                                height="350"
                                style={{
                                objectFit: 'cover'
                            }}
                                src={data.page.dados['img-hipismo-7']}
                                alt=""/>
                        </div>
                        <div className="col-lg-6 pl-lg-0">
                            <img
                                height="700"
                                style={{
                                objectFit: 'cover'
                            }}
                                src={data.page.dados['img-hipismo-8']}
                                alt=""/>
                        </div>
                    </div>
                </div>

                <div className="markup pt-4 pt-lg-5 pb-lg-1">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_a_equipe_continuacao
                    }}></div>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container sm markup">
                    <blockquote
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_fundo_bege2
                    }}></blockquote>
                    <sm className="author">
                        {data.page.dados.titulo_citacao_bege2}
                    </sm>
                </div>
            </div>

            <div className="container sm py-lg-3">
                <div className="markup">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_continuacao_2
                    }}></div>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container sm markup">
                <blockquote
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_fundo_bege3
                    }}></blockquote>
                    <sm className="author">
                       {data.page.dados.titulo_citacao_bege3}
                    </sm>
                </div>
            </div>

            <div className="container pt-lg-4">
                <div className="row pt-3 pt-lg-5 mt-lg-3">
                    <div className="col-lg-6 pr-lg-0">
                        <img
                            height="300"
                            style={{
                            objectFit: 'cover'
                        }}
                        src={data.page.dados['img-hipismo-9']}
                            alt=""/>
                        <img
                            height="400"
                            style={{
                            objectFit: 'cover'
                        }}
                        src={data.page.dados['img-hipismo-10']}
                            alt=""/>
                    </div>
                    <div className="col-lg-6 pl-lg-0">
                        <img
                            height="300"
                            style={{
                            objectFit: 'cover'
                        }}
                        src={data.page.dados['img-hipismo-11']}
                            alt=""/>
                        <img
                            height="400"
                            style={{
                            objectFit: 'cover'
                        }}
                        src={data.page.dados['img-hipismo-12']}
                            alt=""/>
                    </div>
                </div>

            </div>

            <div className="container sm pt-4 pt-lg-5">
                <div className="markup">
                    <h4>
                        {data.page.dados.titulo_texto_nova_empreitada}
                    </h4>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_nova_empreitada
                    }}></div>
                    <div className="pt-4 pt-lg-5 mt-lg-3">
                        <img src={data.page.dados['img-hipismo-13']}alt=""/>
                    </div>
                </div>
            </div>
            </>
            : null}
        </section>
    )
}

export default Historia;