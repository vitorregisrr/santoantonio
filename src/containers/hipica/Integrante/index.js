import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {animateScroll} from 'react-scroll'
import {Link, withRouter} from 'react-router-dom'

import PhotoPreview from '../../../components/UI/PhotoPreview'
import VideoGallery from '../../../components/UI/VideoGallery'
import GenealogiaTable from '../../../components/UI/GenealogiaTable'

import './styles.scss';
import Spinner from 'components/UI/Spinner/Spinner';

const Integrante = ({match}) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);

        useEffect(() => {
            animateScroll.scrollToTop({duration: 200});
            const slug = match.params.id;

            axios
                .get(`/equipe/equipe/${slug}`)
                .then(response => {
                    console.log(response)
                    setData(response.data);
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setIsFetching(false);
                })
        }, []);
    

    return (
        <section className="Integrante page-interna mb-2 mb-lg-5">
            {data.integrante ? <>
                <div className="container">
                <div className="Integrante__header">
                    <Link to="/hipica/equipe" className="Integrante__header-back">
                        Voltar
                    </Link>

                    <div className="markup">
                        <h2>Integrantes</h2>
                    </div>
                </div>
            </div>

            <div className="container pt-5 mt-lg-5">
                <div className="row position-relative">
                    <div className="col-lg-6">
                        <img src={data.integrante.image}/>
                    </div>
                    <div className="col-lg-6 h-100">
                        <div className="Integrante__about h-100">
                            <div>
                                <div className="nome">
                                    {data.integrante.name}

                                    <div class="d-flex align-items-center">
                                        <span>{data.integrante.age ? `${data.country.age} anos |` : null} {data.integrante.country}</span>
                                        {data.integrante.country_image ? <img
                                            src={data.integrante.country_image}
                                            alt="Bandeira de nacionalidade"
                                            className="ico"/> : null}
                                    </div>
                                </div>
                                <div className="about">
                                    <div
                                        dangerouslySetInnerHTML={{
                                        __html: data.integrante.description
                                    }}></div>
                                </div>
                            </div>
                            <div className="social">
                                {data.integrante.facebook ? <a href={data.integrante.facebook} className="facebook" target="_blank"></a> : ''}
                                {data.integrante.instagram ? <a href={data.integrante.instagram} className="instagram" target="_blank"></a> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5 mt-lg-3 mb-5">
                <div className="row mb-5">
                    <div className="col-lg-6 mb-5">
                        <VideoGallery videos={data.integrante.videos}/>
                    </div>
                    <div className="col-lg-6">
                        <PhotoPreview
                            items={data.integrante.fotos}/>
                    </div>
                </div>
            </div>

            {data.integrante.resultadosFinal.length > 0 ? 
                (
                <>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12">
                        <header className="interna-subheader">
                            <div className="caption">
                                <img
                                    src={require('../../../assets/images/ico/resultados.png')}
                                    alt=""
                                    className="ico"/>
                                <h4 className="title">Principais Resultados</h4>
                            </div>
                        </header>

                            <div className="Integrante_resultados">
                                    <div className="ano">
                                        2019
                                    </div>
                                    {data.integrante.resultadosFinal.map( (resul, i) => {
                                        if(i < 3){
                                        return(
                                            <div className="item" key={i}>
                                                <div>
                                                    <span class="cavaleiro">
                                                        {resul.integrante_name}
                                                    </span>
                                                    <span class="cavalo">
                                                    {resul.cavalo_name}
                                                    </span>
                                                </div>
                                                <div className="resultado">
                                                    {resul.descricao}
                                                </div>
                                            </div>
                                        )
                                        }
                                    })}
                                    <div className="d-flex justify-content-end">
                                        <Link to="/hipica/resultados" className="more">
                                            Ver todos os resultados
                                        </Link>
                                    </div>
                                </div>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                        : null}
            </> : <Spinner fullscreen />}
        </section>
    )
}

export default withRouter(Integrante);