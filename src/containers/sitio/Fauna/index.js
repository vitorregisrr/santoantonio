import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';

import GallerySlider from '../../../components/Sections/GallerySlider/'

const Fauna = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);

    useEffect(() => {
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
        <section className="Fauna page-interna mb-2 mb-lg-5">
            <div className="container sm">
                <div className="markup mb-4 mb-lg-5">
                    <h2>
                        Fauna
                    </h2>
                </div>
            </div>
            <div className="container pb-4 pb-lg-5">
                <div className="markup">
                    <img src={require('../../../assets/images/thumbs/s-f-1.png')} alt=""/>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">

                    <h3>Um santuário para os animais</h3>

                    <p>
                        O amor, o cuidado e o respeito pelos animais sempre foram algumas das principais
                        características do Sítio Santo Antônio. A começar pelos cavalos, cuja criação se
                        estende para muito além dos concursos da equipe de hipismo. Quando ficam mais
                        velhos, depois de aposentados das competições, todos os cavalos são levados para
                        os piquetes do sítio e continuam a receber até o fim da vida o mesmo tratamento
                        de quando saltavam, desde os cuidados veterinários até uma alimentação
                        equilibrada.
                    </p>

                    <p>
                        As outras criações de animais têm o mesmo tipo de atenção, com a supervisão e o
                        acompanhamento diário dos tratadores. A criação de gado jersey garante a
                        produção de queijos do sítio, e a fauna doméstica em cativeiro também inclui
                        carneiros, cabritos, galinhas, coelhos, porcos-do-mato, veados, algumas antas e
                        até mesmo alguns animais exóticos.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="galeria py-4 py-lg-5 my-lg-4">
                    <div className="row">
                        <div className="col-lg-6 pr-lg-0">
                            <div className="row">
                                <div className="col-lg-12 mb-lg-3">
                                    <img src={require('../../../assets/images/thumbs/s-f-2.png')} alt=""/>
                                </div>
                                <div className="col lg-2"></div>
                                <div className="col-lg-10">
                                    <img src={require('../../../assets/images/thumbs/s-f-5.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-4">
                            <div className="row">
                                <div className="col-lg-10 mb-lg-3 mt-lg-5 pt-lg-5 position-relative">
                                    <img src={require('../../../assets/images/thumbs/s-f-3.png')} alt=""/>
                                    <div className="img-legenda legenda-1">
                                        O Sítio Santo Antônio abriga diversas criações de aves e animais
                                    </div>
                                </div>
                                <div className="d-none d-lg-block col-lg-2"></div>
                                <div className="col-lg-7 mb-lg-3">
                                    <img src={require('../../../assets/images/thumbs/s-f-4.png')} alt=""/>
                                </div>
                                <div className="d-none d-lg-block col-lg-3"></div>
                                <div className="col-lg-10">
                                    <img src={require('../../../assets/images/thumbs/s-f-6.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <p>
                        As aves são um capítulo à parte. Um dos tios de Chiquinho, Moacyr de Carvalho
                        Dias – o tio Xixo – estabeleceu em Poços de Caldas um criadouro de animais
                        silvestres que incluía mais de 4.000 aves de cerca de trezentas espécies. Com a
                        ajuda do tio Xixo, Chiquinho construiu no sítio um aviário que abriga centenas
                        de espécies diferentes de aves, incluindo pavões, faisões, mutuns de vários
                        tipos, marrecos, gansos, emas e emus.
                    </p>
                </div>

                <div className="position-relative px-lg-5 mt-5 pt-lg-3 pb-lg-3">
                    <img src={require('../../../assets/images/thumbs/s-f-8.png')} alt=""/>
                </div>

                <div className="markup">
                    <p>
                        Mas o empresário gosta mesmo é de bicho solto. Mais do que as criações em
                        cativeiro, todo o ecossistema do sítio e o projeto ambiental de recuperação da
                        natureza visam criar um habitat para a fauna silvestre. Com o tempo, à medida
                        que as árvores vão crescendo e dando frutos, é cada vez maior a presença de aves
                        e animais que vêm se alimentar no terreno do sítio e acabam ficando. São
                        pássaros de todo tipo, incluindo joões-de-barro – um casal deles fez um ninho na
                        chaminé da casa principal, e desde então a lareira nunca mais foi usada, para
                        não espantá-los – e bandos de jacus que vivem no meio da mata. Coelhos
                        silvestres, sapos e rãs, tatus, pacas, e até mesmo tamanduás já foram observado
                        na propriedade.
                    </p>
                </div>

                <div className="position-relative px-lg-5 mt-5 pt-lg-3 pb-lg-3">
                    <img src={require('../../../assets/images/thumbs/s-f-9.png')} alt=""/>
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
                    items={[{
                        imagem: require('../../../assets/images/thumbs/s-f-10.png')
                    }
                ]}/>
            </div>
            {/* <VideoPlayer /> */}
        </section>
    )
}

export default Fauna;