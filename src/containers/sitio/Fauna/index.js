import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';

import GallerySlider from '../../../components/Sections/GallerySlider/'

const Fauna = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({page: {dados: false}});

    useEffect(() => {
        const dataName = 'sitio-fauna-data';
        if (getStorage(dataName)) {
            setIsFetching(false);
            setData(JSON.parse(getStorage(dataName)));

        } else {
            axios
                .get('/sitio/fauna')
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
        <section className="Fauna page-interna mb-2 mb-lg-5">
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

                    <h3>{data.page.dados.titulo_texto_superior}</h3>

                    <div dangerouslySetInnerHTML={{__html: data.page.dados.texto_superior}}></div>
                </div>
            </div>

            <div className="container">
                <div className="galeria py-4 py-lg-5 my-lg-4">
                    <div className="row">
                        <div className="col-lg-6 pr-lg-0">
                            <div className="row">
                                <div className="col-lg-12 mb-lg-3">
                                    <img src={data.page.dados.imagem_central_1} alt=""/>
                                </div>
                                <div className="col lg-2"></div>
                                <div className="col-lg-10">
                                    <img src={data.page.dados.imagem_central_4} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-4">
                            <div className="row">
                                <div className="col-lg-10 mb-lg-3 mt-lg-5 pt-lg-5 position-relative">
                                    <img src={data.page.dados.imagem_central_2} alt=""/>
                                    <div className="img-legenda legenda-1">
                                        {data.page.dados.descricao_fotos}
                                    </div>
                                </div>
                                <div className="d-none d-lg-block col-lg-2"></div>
                                <div className="col-lg-7 mb-lg-3">
                                    <img src={data.page.dados.imagem_central_3} alt=""/>
                                </div>
                                <div className="d-none d-lg-block col-lg-3"></div>
                                <div className="col-lg-10">
                                    <img src={data.page.dados.imagem_central_5} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <div dangerouslySetInnerHTML={{__html: data.page.dados.texto_continuacao}}></div>
                </div>

                <div className="position-relative px-lg-5 mt-5 pt-lg-3 pb-lg-3">
                    <img src={data.page.dados.imagem_central_6} alt=""/>
                </div>

                <div className="markup">
                    <div dangerouslySetInnerHTML={{__html: data.page.dados.texto_continuacao_2}}></div>
                </div>

                <div className="position-relative px-lg-5 mt-5 pt-lg-3 pb-lg-3">
                    <img src={data.page.dados.imagem_central_7} alt=""/>
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
        </section>
    )
}

export default Fauna;