import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';

import GallerySlider from '../../../components/Sections/GallerySlider/'

const Tour = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({
        page: {
            dados: false
        }
    });

    useEffect(() => {
        const dataName = 'sitio-flora-data';
        if (getStorage(dataName)) {
            setIsFetching(false);
            setData(JSON.parse(getStorage(dataName)));

        } else {
            axios
                .get('/sitio/flora')
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
        <section className="Flora page-interna mb-2 mb-lg-5">
            {data.page.dados ? <> <div className="container sm">
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

                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_superior
                    }}></div>

                    <div className="position-relative px-lg-5 mt-5 pt-lg-3 pb-lg-5">
                        <img src={data.page.dados.imagem_secundaria} alt=""/>
                    </div>

                    <div dangerouslySetInnerHTML={{__html: data.page.dados.texto_continuacao}}></div>

                    <div className="position-relative px-lg-5 mt-5 pt-lg-4 pb-lg-5">
                        <img src={data.page.dados.imagem_terciaria} alt=""/>
                    </div>

                    <div dangerouslySetInnerHTML={{__html: data.page.dados.texto_continuacao_2}}></div>

                </div>
            </div>

            <div className="container">
                <div className="galeria py-4 py-lg-5 my-lg-4">
                    <div className="row">
                        <div className="row">
                            <div className="col-lg-4 pr-lg-0 pl-lg-5">
                                <div className="row pl-lg-4">
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-10 mb-lg-3">
                                        <img src={data.page.dados.imagem_central_1} alt=""/>
                                    </div>
                                    <div className="col-lg-12">
                                        <img src={data.page.dados.imagem_central_2} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <img
                                    src={data.page.dados.imagem_central_3}
                                    className="mb-lg-3"
                                    alt=""/>
                                <img src={data.page.dados.imagem_central_4} alt=""/>
                            </div>
                            <div className="col-lg-4 pl-lg-0 pt-lg-5">
                                <div className="row pt-lg-5 mt-lg-5">
                                    <div className="col-lg-7 pt-lg-5 mt-lg-5">
                                        <img
                                            src={data.page.dados.imagem_central_5}
                                            className="pt-lg-5 mt-lg-5"
                                            alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-4 pt-lg-5">
                <img
                    src={require('../../../assets/images/ico/camera.png')}
                    class="ico-camera"
                    alt="Ícone camera"/>
            </div>

            <div className="container pt-5">
                <GallerySlider
                    items={data.fotos || []}/>
            </div>
            {/* <VideoPlayer /> */}
            </> : null}
        </section>
    )
}

export default Tour;