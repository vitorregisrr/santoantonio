import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';
import {animateScroll} from 'react-scroll'
import {Link} from 'react-router-dom'

import PhotoPreview from '../../../components/UI/PhotoPreview'
import VideoGallery from '../../../components/UI/VideoGallery'
import GenealogiaTable from '../../../components/UI/GenealogiaTable'

import './styles.scss';

const Cavalo = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);

    useEffect(() => {
        animateScroll.scrollToTop({duration: 200});

        if (getStorage('hipismo-data')) {
            setIsFetching(false);
            console.log(JSON.parse(getStorage('hipismo-data')))
            setData(JSON.parse(getStorage('hipismo-data')));
        } else {
            axios
                .get('/pages/hipismo')
                .then(response => {
                    setData(response.data);
                    setStorage('hipismo-data', JSON.stringify(response.data));
                })
                .catch(err => console.log(err))
                . finally(() => {
                    setIsFetching(false);
                })
        }
    }, []);

    return (
        <section className="Cavalo page-interna mb-2 mb-lg-5">
            <div className="container">
                <div className="Cavalo__header">
                    <Link to="cavalos" className="Cavalo__header-back">
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
                        <img src={require('../../../assets/images/thumbs/cavalo-1.png')}/>
                    </div>
                    <div className="col-lg-6">
                        <ul className="Cavalo__about">
                            <li className="nome">
                                Amor do Santo Antônio
                            </li>

                            <li className="pais">
                                Limbo x Richebourg
                            </li>

                            <li className="subitem">
                                Data de nascimento:
                                <span>04/03/2009</span>
                            </li>

                            <li className="subitem">
                                Gênero:
                                <span>Masculino</span>
                            </li>

                            <li className="subitem">
                                Pelagem:
                                <span>Pampa</span>
                            </li>

                            <li className="subitem">
                                Raça:
                                <span>Sela Francês</span>
                            </li>

                            <li className="subitem">
                                Altura:
                                <span>1,67m</span>
                            </li>
                            <li className="subitem">
                                Status:
                                <span>Castrado</span>
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
                            <p>
                                Amor é um Sela Francês criação do Haras de La Roque. Foi comprado, na Bélgica na
                                Ecurie Mathy, de propriedade de François e Claudia Mathy. Ele é filho do
                                holandês Limbo com uma égua sela francesa filha de Richebourg. Seu pai, Limbo, é
                                um filho de Concorde muito conhecido por sua coloração pampa e por possuir
                                diversos filhos desta mesma pelagem saltando provas forte, como Catapulte
                                (Michel Robert) e Nepos (John Whitaker).
                            </p>

                            <p>
                                Antes de vir para o Brasil, Amor obteve diversas classificações em concursos
                                internacionais de cavalos novos. No Brasil, se consolidou como um cavalo muito
                                competitivo tendo sempre bons resultados nos concursos que participa.
                            </p>
                        </div>
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
                            <GenealogiaTable />
                        </div>

                        <div className="mt-5 mb-5">
                            <GenealogiaTable />
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-6 mb-5">
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
                            <div className="item">
                                <span class="cavaleiro">
                                    Thiago Mattos
                                </span>
                                <span class="cavalo">
                                    Amor do Santo Antônio
                                </span>
                                <div className="resultado">
                                    2º lugar PlayOff XTC, CSN Top Riders, SHP SP
                                </div>
                            </div>
                            <div className="item">
                                <span class="cavaleiro">
                                    Thiago Mattos
                                </span>
                                <span class="cavalo">
                                    Amor do Santo Antônio
                                </span>
                                <div className="resultado">
                                    2º lugar PlayOff XTC, CSN Top Riders, SHP SP
                                </div>
                            </div>
                            <div className="item">
                                <span class="cavaleiro">
                                    Thiago Mattos
                                </span>
                                <span class="cavalo">
                                    Amor do Santo Antônio
                                </span>
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
                    <div className="col-lg-6">
                        <VideoGallery videos={[]}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cavalo;