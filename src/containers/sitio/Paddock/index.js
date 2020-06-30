import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';
import {Link} from 'react-router-dom';

import GallerySlider from '../../../components/Sections/GallerySlider/'
import VideoPlayer from '../../../components/Sections/VideoPlayer/'

import './styles.scss';

const Paddock = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({
        page: {
            dados: false
        }
    });

    useEffect(() => {
        const dataName = 'sitio-paddock-data';
        if (getStorage(dataName)) {
            setIsFetching(false);
            setData(JSON.parse(getStorage(dataName)));

        } else {
            axios
                .get('/sitio/paddock')
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
        <section className="Paddock page-interna mb-2 mb-lg-5">
            {data.page.dados ? <>
            
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
                <div className="markup wow">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_superior
                    }}></div>
                    <div className="position-relative px-lg-4 mt-5 pt-lg-3 pb-lg-3">
                        <div className="img-legenda legenda-1">
                            {data.page.dados.texto_quadro_verde}
                        </div>
                        <img src={data.page.dados.imagem_secundaria} alt=""/>
                    </div>

                </div>
            </div>

            <div className="bg-bege">
                <div className="container sm markup">
                    <blockquote
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_fundo_bege
                    }}></blockquote>
                    <sm className="author">
                        {data.page.dados.autor_texto_fundo_bege}
                    </sm>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_final
                    }}></div>
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

            <div className="container mt-3 mt-lg-5 pt-lg-2">
                <VideoPlayer
                    url={data.page.dados.embed_youtube}
                    image={require('../../../assets/images/backgrounds/home-hipica.png')}/>
            </div>

            <div className="container">
                <div className="d-flex justify-content-center mt-5 pt-lg-3">
                    <Link to="/hipica" className="Paddock__btn">
                        Conheça a equipe hípica
                    </Link>
                </div>
            </div> </> : null}
            
        </section>
    )
}

export default Paddock;