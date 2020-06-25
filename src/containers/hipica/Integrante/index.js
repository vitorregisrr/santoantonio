import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';
import {animateScroll} from 'react-scroll'
import {Link} from 'react-router-dom'

import PhotoPreview from '../../../components/UI/PhotoPreview'
import VideoGallery from '../../../components/UI/VideoGallery'
import GenealogiaTable from '../../../components/UI/GenealogiaTable'

import './styles.scss';

const Integrante = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);

        useEffect(() => {
            animateScroll.scrollToTop({duration: 200});
            // const slug = match.params.id;
    
            const slug = 1
            axios
                .get(`/cavalos/${slug}`)
                .then(response => {
                    setData(response.data);
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setIsFetching(false);
                })
        }, []);
    

    return (
        <section className="Integrante page-interna mb-2 mb-lg-5">
            <div className="container">
                <div className="Integrante__header">
                    <Link to="equipe" className="Integrante__header-back">
                        Voltar
                    </Link>

                    <div className="markup">
                        <h2>Integrantes</h2>
                    </div>
                </div>
            </div>

            <div className="container pt-5 mt-lg-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={require('../../../assets/images/thumbs/integrante-1.png')}/>
                    </div>
                    <div className="col-lg-6">
                        <div className="Integrante__about">
                            <div className="nome">
                                Thiago Mattos

                                <div class="d-flex align-items-center">
                                    <span>33 anos | Brasil</span>
                                    <img
                                        src={require('../../../assets/images/ico/bandeira.png')}
                                        alt="Bandeira de nacionalidade"
                                        className="ico"/>
                                </div>
                            </div>

                            <div className="about">
                                <p>
                                    Amor é um Sela Francês criação do Haras de La Roque. Foi comprado, na Bélgica na
                                    Ecurie Mathy, de propriedade de François e Claudia Mathy. Ele é filho do
                                    holandês Limbo com uma égua sela francesa filha de Richebourg. Seu pai, Limbo, é
                                    um filho de Concorde muito conhecido por sua coloração pampa e por possuir
                                    diversos filhos desta mesma pelagem saltando provas forte, como Catapulte
                                    (Michel Robert) e Nepos (John Whitaker).
                                </p>

                                <p>
                                    <b>
                                        “Antes de vir para o Brasil, Amor obteve diversas classificações em concursos
                                        internacionais de cavalos novos. No Brasil, se consolidou como um cavalo muito
                                        competitivo tendo sempre bons resultados nos concursos que participa. “
                                    </b>
                                </p>
                            </div>

                            <div className="social"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5 mt-lg-3 mb-5">
                <div className="row mb-5">
                    <div className="col-lg-6">
                        <VideoGallery videos={[]}/>
                    </div>
                    <div className="col-lg-6">
                        <PhotoPreview
                            items={[{
                                imagem: require('../../../assets/images/thumbs/h-h-3.png'),
                                legenda: "Legenda foto Lorem Ipsum Dolor"
                            }
                        ]}/>
                    </div>
                </div>
            </div>

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
                            <div className="item">
                                <div>
                                    <span class="cavaleiro">
                                        Thiago Mattos
                                    </span>
                                    <span class="cavalo">
                                        Amor do Santo Antônio
                                    </span>
                                </div>
                                <div className="resultado">
                                    2º lugar PlayOff XTC, CSN Top Riders, SHP SP
                                </div>
                            </div>
                            <div className="item">
                                <div>
                                    <span class="cavaleiro">
                                        Thiago Mattos
                                    </span>
                                    <span class="cavalo">
                                        Amor do Santo Antônio
                                    </span>
                                </div>
                                <div className="resultado">
                                    2º lugar PlayOff XTC, CSN Top Riders, SHP SP
                                </div>
                            </div>
                            <div className="item">
                                <div>
                                    <span class="cavaleiro">
                                        Thiago Mattos
                                    </span>
                                    <span class="cavalo">
                                        Amor do Santo Antônio
                                    </span>
                                </div>
                                <div className="resultado">
                                    2º lugar PlayOff XTC, CSN Top Riders, SHP SP
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Link to="/hipica/resultados" className="more">
                                    Ver todos os resultados
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Integrante;