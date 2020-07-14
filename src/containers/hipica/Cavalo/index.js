import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {animateScroll} from 'react-scroll'
import {Link, withRouter} from 'react-router-dom'

import PhotoPreview from '../../../components/UI/PhotoPreview'
import VideoGallery from '../../../components/UI/VideoGallery'
import GenealogiaTable from '../../../components/UI/GenealogiaTable'

import './styles.scss';
import Spinner from 'components/UI/Spinner/Spinner';

const Cavalo = ({match}) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);

    useEffect(() => {
        animateScroll.scrollToTop({duration: 200});
        const slug = match.params.id;

        axios
            .get(`equipe/cavalos/${slug}`)
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
        <section className="Cavalo page-interna mb-2 mb-lg-5 position-relative">
            {data ? 
            <>
            <div className="container">
                <div className="Cavalo__header">
                    <Link to="/hipica/cavalos" className="Cavalo__header-back">
                        Voltar
                    </Link>

                    <div className="markup">
                        <h2>Cavalos</h2>
                    </div>
                </div>
            </div>

            <div className="container pt-5 mt-lg-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={data.cavalo.image}/>
                    </div>
                    <div className="col-lg-6">
                        <ul className="Cavalo__about">
                            <li className="nome">
                               {data.cavalo.name}
                            </li>

                            <li className="pais">
                                {data.cavalo.bio}
                            </li>

                            <li className="subitem">
                                Data de nascimento:
                                <span>  {data.cavalo.date_nasc}</span>
                            </li>

                            <li className="subitem">
                                Gênero:
                                <span>{data.cavalo.genero}</span>
                            </li>

                            <li className="subitem">
                                Pelagem:
                                <span>{data.cavalo.pelagem}</span>
                            </li>

                            <li className="subitem">
                                Raça:
                                <span>{data.cavalo.raça}</span>
                            </li>

                            <li className="subitem">
                                Altura:
                                <span>{data.cavalo.altura}</span>
                            </li>
                            <li className="subitem">
                                Status:
                                <span>{data.cavalo.status}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container pt-5 mt-lg-3 mb-5">
                <div className="row mb-5">
                    <div className="col-lg-6 mb-5">
                        <header className="interna-subheader">
                            <div className="caption">
                                <img
                                    src={require('../../../assets/images/ico/info.png')}
                                    alt=""
                                    className="ico"/>
                                <h4 className="title">Informações</h4>
                            </div>
                        </header>

                        <div className="Cavalo__informacoes">
                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.cavalo.informacoes
                        }}></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <PhotoPreview
                            items={data.cavalo.fotos ? data.cavalo.fotos : []}/>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-12">
                        <header className="interna-subheader">
                            <div className="caption">
                                <img
                                    src={require('../../../assets/images/ico/genealogia.png')}
                                    alt=""
                                    className="ico"/>
                                <h4 className="title">Genealogia</h4>
                            </div>
                        </header>

                        <div>
                            <GenealogiaTable tipo="pai" data={{
                                pai: data.cavalo.pai,
                                avo1: data.cavalo.avo1,
                                avo2: data.cavalo.avo2,
                                bisavo1: data.cavalo.bis1,
                                bisavo2: data.cavalo.bis2,
                                bisavo3: data.cavalo.bis3,
                                bisavo4: data.cavalo.bis4,
                                trisavo1: data.cavalo.tris1,
                                trisavo2: data.cavalo.tris2,
                                trisavo3: data.cavalo.tris3,
                                trisavo4: data.cavalo.tris4,
                                trisavo5: data.cavalo.tris5,
                                trisavo6: data.cavalo.tris6,
                                trisavo7: data.cavalo.tris7,
                                trisavo8: data.cavalo.tris8,
                            }}/>
                        </div>

                        <div className="mt-5 mb-5">
                            <GenealogiaTable tipo="mae" data={{
                                mae: data.cavalo.mae,
                                avo1: data.cavalo.avo3,
                                avo2: data.cavalo.avo4,
                                bisavo1: data.cavalo.bis5,
                                bisavo2: data.cavalo.bis6,
                                bisavo3: data.cavalo.bis7,
                                bisavo4: data.cavalo.bis8,
                                trisavo1: data.cavalo.tris9,
                                trisavo2: data.cavalo.tris10,
                                trisavo3: data.cavalo.tris11,
                                trisavo4: data.cavalo.tris12,
                                trisavo5: data.cavalo.tris13,
                                trisavo6: data.cavalo.tris14,
                                trisavo7: data.cavalo.tris15,
                                trisavo8: data.cavalo.tris16,
                            }}/>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    {data.cavalo.resultadosFinal && <div className="col-lg-6 mb-5">
                        <header className="interna-subheader">
                            <div className="caption">
                                <img
                                    src={require('../../../assets/images/ico/resultados.png')}
                                    alt=""
                                    className="ico"/>
                                <h4 className="title">Principais Resultados</h4>
                            </div>
                        </header>

                        <div className="Cavalo_resultados">
                            <div className="ano">
                                2019
                            </div>
                            {data.cavalo.resultadosFinal.map( (resul, i) => {
                                if(i < 3){
                                    return(
                                        <div className="item" key={i}>
                                            <span class="cavaleiro">
                                                {resul.integrante_name}
                                            </span>
                                            <span class="cavalo">
                                            {resul.cavalo_name}
                                            </span>
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
                    </div>}
                    {data.cavalo.videos && 
                    <div className="col-lg-6">
                        <VideoGallery videos={data.cavalo.videos}/>
                    </div>}
                </div>
            </div>
            </>
            : (
                
                <Spinner fullscreen/>
            
            )}
        </section>
    )
}

export default withRouter(Cavalo);